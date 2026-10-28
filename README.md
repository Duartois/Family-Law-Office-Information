# Coppí & Duarte Advogadas Associadas — site

Site institucional do escritório (Direito de Família e Sucessões, São Paulo/SP). Todo o contato é feito por WhatsApp.

React 19 + Vite + Tailwind CSS v4 + React Router. Cada página é pré-renderizada em HTML estático no build e publicada como Worker com assets estáticos na Cloudflare.

## Comandos

```bash
npm install
npm run dev      # desenvolvimento (sem pré-renderização)
npm run lint     # ESLint
npm run build    # build + pré-renderização das páginas, 404.html, sitemap.xml e robots.txt
npm run preview  # servir o build local
```

Para testar como na produção (rotas, 404 e `_headers`): `npx wrangler dev` (roda o build antes).

## Onde mudar cada coisa

| O quê | Onde |
| --- | --- |
| Nome, WhatsApp, e-mail, endereço, advogadas e OAB, domínio | `src/config/site.js` (`SITE`) |
| Mensagens padrão do WhatsApp | `src/config/site.js` (`WHATSAPP_MESSAGES`) |
| Páginas de área de atuação e FAQ comum | `src/content/areas.js` |
| Página do saque do FGTS por doença grave | `src/pages/FgtsDoencaGrave.jsx` |
| Cores e fontes | `src/index.css` |
| Cabeçalhos de segurança (CSP) | `public/_headers` |
| Ícones e imagem de compartilhamento | `public/` (`favicon.*`, `apple-touch-icon.png`, `og-image.jpg`) |

O domínio (`SITE.siteUrl`) alimenta canonical, Open Graph, dados estruturados, `sitemap.xml` e `robots.txt`. Para uma página nova, crie a rota em `src/routes.jsx` e acrescente o caminho em `src/config/paths.js`.

## Publicação (Cloudflare)

- `wrangler.jsonc` define o Worker `family-law-office-information` e roda `npm run build` antes do deploy; o painel da Cloudflare só executa `npx wrangler deploy`.
- Caminho inexistente devolve `404.html` com status 404.
- **Não** crie `public/_redirects` com `/* /index.html 200`: a Cloudflare recusa o deploy (erro 100324).

## Regras de conteúdo

O texto segue o Provimento 205/2021 da OAB: sem promessa de resultado, sem preço, desconto ou gratuidade, sem casos ou decisões concretas. Se `[PREENCHER ...]` ou `[REVISAR ...]` chegar ao HTML, o build falha de propósito (`scripts/prerender.mjs`). Dado que ainda não existe deve ficar vazio e fora da tela.

## Google Analytics 4 (opcional)

Desligado por padrão. Para ligar, defina `VITE_GA_MEASUREMENT_ID` (formato `G-XXXXXXXXXX`) nas variáveis de build da Cloudflare; veja `.env.example`. O consentimento nasce negado (LGPD); falta um banner de consentimento para liberar a coleta completa (`grantAnalyticsConsent()` em `src/analytics.js`).
