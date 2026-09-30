// Fonte única de verdade para os dados de contato e identidade do escritório.
export const SITE = {
  name: 'Coppí & Duarte',
  fullName: 'Coppí & Duarte Advogadas Associadas',
  whatsappNumber: '5511987679957',
  whatsappDisplay: '(11) 98767-9957',
  // TODO: substituir pelo e-mail oficial do escritório quando for criado.
  email: 'matheusdugoncalves@gmail.com',
  yearsOfExperience: '27',
  lawyers: [
    { name: 'Paula Coppi', oab: 'OAB/SP nº [preencher]' },
    { name: 'Viviane Duarte', oab: 'OAB/SP nº [preencher]' },
  ],
  address: {
    street: 'Av. Paulista, nº 1.439, 1º andar, Cj. 12',
    district: 'Bela Vista - CEP 01311-200, São Paulo/SP',
  },
  siteUrl: 'https://www.coppieduarte.com.br', // TODO: confirmar domínio definitivo
};

export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Mensagem padrão única, conforme solicitado: todos os botões da home usam a
// mesma mensagem. A página do FGTS tem sua própria mensagem de contexto.
export const WHATSAPP_MESSAGES = {
  geral: 'Olá! Vim pelo site e gostaria de agendar uma consulta.',
  fgts: 'Olá! Vim pela página do FGTS por doença grave e gostaria de saber se tenho direito.',
};
