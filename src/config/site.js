// Fonte única de verdade para os dados de contato e identidade do escritório.
export const SITE = {
  name: 'Coppí & Duarte',
  fullName: 'Coppí & Duarte Advogadas Associadas',
  whatsappNumber: '5511987679957',
  whatsappDisplay: '(11) 98767-9957',
  address: {
    street: 'Av. Paulista, nº 1.439, 1º andar, Cj. 12',
    district: 'Bela Vista - CEP 01311-200, São Paulo/SP',
  },
};

export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Mensagens pré-definidas para cada CTA, mantendo contexto de onde o usuário veio.
export const WHATSAPP_MESSAGES = {
  geral: 'Olá! Encontrei o site da Coppí & Duarte e gostaria de mais informações.',
  consulta: 'Olá! Gostaria de agendar uma consulta com a Coppí & Duarte.',
  comoFunciona: 'Olá! Vim pelo site e gostaria de entender como funciona o atendimento.',
  encerramento: 'Olá! Gostaria de iniciar um atendimento com a Coppí & Duarte Advogadas.',
  area: (areaTitle) => `Olá! Vim pelo site e gostaria de falar sobre ${areaTitle} com uma advogada.`,
};
