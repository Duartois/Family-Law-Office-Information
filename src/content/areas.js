// Conteúdo das páginas de área de atuação.
//
// Cada página descreve apenas o que o site já informa sobre o escritório; o que ainda falta
// está marcado com TODO e fica fora da tela. Não há promessa de resultado, preço, caso ou
// decisão (Provimento 205/2021 da OAB).
//
// Arquivo sem JSX para poder ser lido também pelos scripts de build.

/** Perguntas sobre o atendimento (informações que já constam em "Como funciona"). */
export const COMMON_FAQ = [
  {
    question: 'O atendimento pode ser feito on-line?',
    answer:
      'Sim. O escritório oferece consultas e reuniões por videoconferência: agendamos uma data e um horário e o atendimento é feito sem a necessidade de deslocamento.',
  },
  {
    question: 'Posso enviar documentos pela internet?',
    answer: 'Sim. O envio de documentos também pode ser feito de forma on-line.',
  },
  {
    question: 'O escritório faz atendimento presencial?',
    answer:
      'Sim, para quem preferir o formato tradicional. O escritório base fica em São Paulo/SP, e há convênio com coworkings em vários pontos do Brasil.',
  },
];

export const AREAS = [
  {
    slug: 'divorcio-e-dissolucao-de-uniao-estavel',
    cardTitle: 'Ações de divórcio ou dissolução de união estável',
    name: 'divórcio e dissolução de união estável',
    h1: 'Divórcio e dissolução de união estável',
    seoTitle: 'Divórcio e Dissolução de União Estável em São Paulo | Coppí & Duarte',
    description:
      'Atuação em ações de divórcio e de dissolução de união estável, consensuais e litigiosas, com atendimento on-line ou presencial em São Paulo. Fale pelo WhatsApp.',
    intro:
      'A Coppí & Duarte Advogadas Associadas atua em ações de divórcio e de dissolução de união estável, consensuais e litigiosas, com atendimento on-line ou presencial.',
    sections: [
      {
        heading: 'Como o escritório atua',
        paragraphs: [
          'O escritório busca a melhor solução para a reorganização da estrutura familiar, com foco na resolução de conflitos com empatia.',
          'O atendimento é conduzido com discrição e sigilo.',
        ],
      },
      {
        heading: 'Temas relacionados',
        paragraphs: [
          'O escritório também atua em ações de guarda de menores e fixação de alimentos e em partilha de bens. Cada tema tem uma página própria neste site.',
        ],
      },
    ],
    faq: [
      {
        question: 'O escritório atua em divórcios consensuais e litigiosos?',
        answer:
          'Sim. O escritório atua em divórcios consensuais e litigiosos e também em dissolução de união estável.',
      },
      {
        question: 'O escritório atua também em guarda, alimentos e partilha de bens?',
        answer:
          'Sim. Guarda de menores, fixação de alimentos e partilha de bens estão entre as ações em que o escritório atua.',
      },
    ],
  },
  {
    slug: 'guarda-de-menores-e-alimentos',
    cardTitle: 'Ações de guarda de menores e fixação de alimentos',
    name: 'guarda de menores e alimentos',
    h1: 'Guarda de menores e fixação de alimentos',
    seoTitle: 'Guarda de Menores e Alimentos em São Paulo | Coppí & Duarte',
    description:
      'Atuação em ações de guarda de menores e de fixação de alimentos, com foco no melhor interesse da criança e do adolescente. Atendimento on-line ou presencial.',
    intro:
      'A Coppí & Duarte Advogadas Associadas atua em ações de guarda de menores e de fixação de alimentos, com foco no melhor interesse da criança ou do adolescente.',
    sections: [
      {
        heading: 'Guarda de menores',
        paragraphs: [
          'O escritório atua na definição de guarda unilateral, compartilhada ou alternada e na regulamentação de visitas, priorizando a estabilidade emocional e o bem-estar dos menores.',
        ],
      },
      {
        heading: 'Alimentos',
        paragraphs: [
          'O escritório acompanha o processo de fixação, revisão (para aumento ou diminuição) e execução de pensão alimentícia.',
        ],
      },
    ],
    faq: [
      {
        question: 'Quais modalidades de guarda o escritório atende?',
        answer:
          'O escritório atua na definição de guarda unilateral, compartilhada ou alternada e na regulamentação de visitas.',
      },
      {
        question: 'O escritório atua em ações de pensão alimentícia?',
        answer:
          'Sim. O escritório acompanha a fixação, a revisão (para aumento ou diminuição) e a execução de pensão alimentícia.',
      },
    ],
  },
  {
    slug: 'partilha-de-bens',
    cardTitle: 'Partilha de bens',
    name: 'partilha de bens',
    h1: 'Partilha de bens',
    seoTitle: 'Partilha de Bens em São Paulo | Coppí & Duarte',
    description:
      'Atuação em ações de partilha de bens, com atendimento on-line ou presencial em São Paulo. Fale com o escritório pelo WhatsApp.',
    intro:
      'A Coppí & Duarte Advogadas Associadas atua em ações de partilha de bens, com atendimento on-line ou presencial.',
    // TODO: seção "Como o escritório atua" em partilha de bens, quando as advogadas enviarem o texto.
    sections: [
      {
        heading: 'Temas relacionados',
        paragraphs: [
          'O escritório também atua em ações de divórcio e de dissolução de união estável e em inventários e arrolamentos de bens.',
        ],
      },
    ],
    faq: [
      {
        question: 'O escritório atua em partilha de bens?',
        answer: 'Sim. A partilha de bens está entre as ações em que o escritório atua.',
      },
    ],
  },
  {
    slug: 'investigacao-de-paternidade',
    cardTitle: 'Investigação de paternidade',
    name: 'investigação de paternidade',
    h1: 'Investigação de paternidade',
    seoTitle: 'Investigação de Paternidade em São Paulo | Coppí & Duarte',
    description:
      'Atuação em ações de investigação de paternidade, com atendimento on-line ou presencial em São Paulo. Fale com o escritório pelo WhatsApp.',
    intro:
      'A Coppí & Duarte Advogadas Associadas atua em ações de investigação de paternidade, com atendimento on-line ou presencial.',
    // TODO: seção "Como o escritório atua" em investigação de paternidade, quando as advogadas
    // enviarem o texto.
    sections: [],
    faq: [
      {
        question: 'O escritório atua em investigação de paternidade?',
        answer: 'Sim. A investigação de paternidade está entre as ações em que o escritório atua.',
      },
    ],
  },
];
