// Google Analytics 4, preparado mas DESLIGADO por padrão: só carrega se o ID de medição
// estiver configurado no build (variável VITE_GA_MEASUREMENT_ID; veja .env.example).
//
// LGPD: o Consent Mode começa NEGADO (analytics_storage, ad_storage, ad_user_data,
// ad_personalization = denied), então o GA4 não grava cookies nem identificadores.
// Quando existir um aviso/banner de consentimento, chame grantAnalyticsConsent() ao aceitar.
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const analyticsEnabled = Boolean(MEASUREMENT_ID);

let initialized = false;

function gtag() {
  window.dataLayer.push(arguments); // gtag.js exige o objeto `arguments`, não um array
}

export function initAnalytics() {
  if (!analyticsEnabled || initialized || typeof window === 'undefined') return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  gtag('js', new Date());
  // O page_view é enviado a cada troca de página (trackPageView), não automaticamente.
  gtag('config', MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);
}

export function trackPageView(path) {
  if (!analyticsEnabled || !initialized) return;
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(name, params = {}) {
  if (!analyticsEnabled || !initialized) return;
  gtag('event', name, { transport_type: 'beacon', ...params });
}

export function grantAnalyticsConsent() {
  if (!analyticsEnabled || !initialized) return;
  gtag('consent', 'update', { analytics_storage: 'granted' });
}
