import { useEffect } from 'react';

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
  return () => el?.remove();
}

/**
 * Componente sem visual: ajusta title/description/OG/canonical da página
 * atual e injeta dados estruturados (schema.org) opcionais. Necessário
 * porque o site é uma SPA sem servidor de metadados por rota.
 */
export default function Seo({ title, description, path, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    if (path) {
      const url = `https://www.coppieduarte.com.br${path}`;
      setMeta('property', 'og:url', url);
      setLink('canonical', url);
    }

    const cleanups = [];
    if (jsonLd) {
      const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      entries.forEach((data, idx) => {
        cleanups.push(setJsonLd(`ld-json-${idx}`, data));
      });
    }
    return () => cleanups.forEach((fn) => fn());
  }, [title, description, path, jsonLd]);

  return null;
}
