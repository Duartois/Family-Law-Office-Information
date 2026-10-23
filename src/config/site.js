// Fonte única de verdade para os dados de contato e identidade do escritório.
// Dados que ainda faltam ficam como [PREENCHER: ...]; use isPlaceholder() para
// não tratá-los como dado real (ex.: mailto:, dados estruturados).
export const SITE = {
  name: 'Coppí & Duarte',
  fullName: 'Coppí & Duarte Advogadas Associadas',
  whatsappNumber: '5511987679957',
  whatsappDisplay: '(11) 98767-9957',
  email: '[PREENCHER: e-mail oficial do escritório]',
  yearsOfExperience: '27',
  lawyers: [
    { name: 'Paula Coppi', oab: 'OAB/SP nº 179.424' },
    { name: 'Viviane Duarte', oab: 'OAB/SP nº 201.298' },
  ],
  address: {
    street: 'Av. Paulista, nº 1.439, 1º andar, Cj. 12',
    district: 'Bela Vista - CEP 01311-200, São Paulo/SP',
  },
  // Domínio oficial, sem barra final. Usado por Seo.jsx, sitemap.xml e robots.txt.
  siteUrl: 'https://www.coppiduarteadvocacia.com.br',
  // Mostra a etiqueta [REVISAR] nos textos novos que aguardam a aprovação das advogadas.
  // Passe para false quando eles forem aprovados.
  showReviewMarkers: true,
};

export function isPlaceholder(value) {
  return /\[PREENCHER/i.test(String(value ?? ''));
}

/** Texto alternativo da foto das sócias (usado em todas as páginas que a exibem). */
export function sociasPhotoAlt() {
  const names = SITE.lawyers.map((l) => l.name).join(' e ');
  return `As advogadas ${names}, sócias do escritório, vestidas de preto, em pé ao lado de uma poltrona cinza`;
}

export function absoluteUrl(path = '/') {
  return `${SITE.siteUrl}${path}`;
}

export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Mensagem padrão única, conforme solicitado: todos os botões da home usam a
// mesma mensagem. A página do FGTS tem sua própria mensagem de contexto.
export const WHATSAPP_MESSAGES = {
  geral: 'Olá, vim pelo site e gostaria de obter atendimento',
  fgts: 'Olá! Vim pela página do FGTS por doença grave e gostaria de saber se tenho direito.',
  area: (areaName) => `Olá, vim pela página sobre ${areaName} e gostaria de obter atendimento`,
};
