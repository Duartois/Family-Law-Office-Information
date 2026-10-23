import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { HeadContext } from './seo/HeadContext';

// Usado só no build (scripts/prerender.mjs): devolve o HTML da rota e o SEO da página.
export function render(url) {
  let seo = null;
  const html = renderToString(
    <HeadContext.Provider value={(data) => { seo = data; }}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadContext.Provider>,
  );
  return { html, seo };
}
