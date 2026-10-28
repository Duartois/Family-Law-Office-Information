import { SITE, absoluteUrl } from '../config/site';

/** Dados estruturados LegalService do escritório, com a URL da página atual. */
export function buildLegalService(path = '/') {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: SITE.fullName,
    telephone: `+${SITE.whatsappNumber}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    areaServed: 'BR',
    url: absoluteUrl(path),
    founder: SITE.lawyers.map((lawyer) => ({
      '@type': 'Person',
      name: lawyer.fullName,
      jobTitle: 'Advogada',
    })),
  };
  if (SITE.email) data.email = SITE.email;
  return data;
}

/** Dados estruturados FAQPage a partir de [{ question, answer }]. */
export function buildFaqPage(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
