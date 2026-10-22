// Gera dist/sitemap.xml e dist/robots.txt a partir de SITE.siteUrl e da lista de
// caminhos (src/config/paths.js), para o domínio ficar em um único lugar.
import { mkdir, writeFile } from 'node:fs/promises';
import { SITE } from '../src/config/site.js';
import { ROUTE_PATHS } from '../src/config/paths.js';

const dist = new URL('../dist/', import.meta.url);

const urls = ROUTE_PATHS.map((path) => `${SITE.siteUrl}${path}`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url>\n    <loc>${loc}</loc>\n  </url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.siteUrl}/sitemap.xml
`;

await mkdir(dist, { recursive: true });
await writeFile(new URL('sitemap.xml', dist), sitemap);
await writeFile(new URL('robots.txt', dist), robots);
console.log(`sitemap.xml (${urls.length} URLs) e robots.txt gerados para ${SITE.siteUrl}`);
