// Pré-renderização: gera um HTML estático para cada página do site (com title, description,
// canonical, Open Graph e JSON-LD no próprio HTML), mais 404.html, sitemap.xml e robots.txt.
//
// Roda depois de `vite build` (cliente) e `vite build --ssr` (src/entry-server.jsx):
//   dist/index.html   = molde gerado pelo build do cliente (já aponta para os JS/CSS)
//   dist-ssr/         = bundle de servidor com render(url) -> { html, seo }
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { SITE } from '../src/config/site.js';
import { ROUTE_PATHS } from '../src/config/paths.js';

const dist = new URL('../dist/', import.meta.url);
const ssrDir = new URL('../dist-ssr/', import.meta.url);

const template = await readFile(new URL('index.html', dist), 'utf8');
const { render } = await import(new URL('entry-server.js', ssrDir));

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;');
// "<" vira < para o JSON-LD nunca conseguir fechar a tag <script>.
const escapeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`Molde index.html sem ${label}; ajuste scripts/prerender.mjs`);
  return html.replace(pattern, () => replacement);
}

function buildPage(rendered, label) {
  const { html, seo } = rendered;
  if (!seo?.title || !seo?.description) throw new Error(`${label}: página sem title/description (falta <Seo />)`);
  if (!/<h1[\s>]/.test(html)) throw new Error(`${label}: página sem <h1>`);

  let page = replaceOnce(template, /<div id="root"><\/div>/, `<div id="root">${html}</div>`, '#root vazio');
  page = replaceOnce(page, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(seo.title)}</title>`, '<title>');
  page = replaceOnce(
    page,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
    'meta description',
  );
  page = replaceOnce(
    page,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`,
    'og:title',
  );
  page = replaceOnce(
    page,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`,
    'og:description',
  );
  page = replaceOnce(
    page,
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${seo.noindex ? 'noindex, nofollow' : 'index, follow'}" />`,
    'meta robots',
  );

  const extraHead = [];
  if (seo.path) {
    const url = `${SITE.siteUrl}${seo.path}`;
    extraHead.push(`<link rel="canonical" href="${escapeAttr(url)}" />`);
    extraHead.push(`<meta property="og:url" content="${escapeAttr(url)}" />`);
  }
  const entries = seo.jsonLd ? (Array.isArray(seo.jsonLd) ? seo.jsonLd : [seo.jsonLd]) : [];
  entries.forEach((data, idx) => {
    extraHead.push(`<script type="application/ld+json" id="ld-json-${idx}">${escapeJson(data)}</script>`);
  });
  return replaceOnce(page, /<\/head>/, `    ${extraHead.join('\n    ')}\n  </head>`, '</head>');
}

async function writePage(fileName, content) {
  await writeFile(new URL(fileName, dist), content);
}

const written = [];

for (const path of ROUTE_PATHS) {
  const page = buildPage(render(path), path);
  // "/" -> index.html; "/slug" -> slug.html (o Cloudflare serve slug.html em /slug, sem barra final).
  const fileName = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
  await writePage(fileName, page);
  written.push(fileName);
}

// Endereço que não existe: o Cloudflare devolve este arquivo com status 404 (not_found_handling = "404-page").
await writePage('404.html', buildPage(render('/__pagina-inexistente__'), '404'));
written.push('404.html');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTE_PATHS.map((path) => `  <url>\n    <loc>${SITE.siteUrl}${path}</loc>\n  </url>`).join('\n')}
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.siteUrl}/sitemap.xml
`;
await mkdir(dist, { recursive: true });
await writePage('sitemap.xml', sitemap);
await writePage('robots.txt', robots);

await rm(ssrDir, { recursive: true, force: true });

console.log(`Pré-renderizado: ${written.join(', ')}`);
console.log(`sitemap.xml (${ROUTE_PATHS.length} URLs) e robots.txt gerados para ${SITE.siteUrl}`);
