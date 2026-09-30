import { FileText, Stethoscope, Home as HomeIcon, ClipboardCheck } from 'lucide-react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import WhatsAppCTA from '../components/WhatsAppCTA';
import SectionHeading from '../components/SectionHeading';
import FaqAccordion from '../components/FaqAccordion';
import Contact from '../components/Contact';
import { SITE, WHATSAPP_MESSAGES } from '../config/site';
import sociasImg from '../assets/socias.webp';

const DOCUMENTS = [
  { Icon: FileText, label: 'Documento de identidade e CPF' },
  { Icon: Stethoscope, label: 'Laudos e relatórios médicos detalhados sobre a doença' },
  { Icon: HomeIcon, label: 'Comprovante de residência atualizado' },
  { Icon: ClipboardCheck, label: 'Extrato do FGTS (disponível no aplicativo ou nas agências da Caixa)' },
];

const FAQ_ITEMS = [
  {
    question: 'Quem tem doença de Crohn pode sacar o FGTS?',
    answer:
      'Depende do estágio da doença e das limitações que ela causa no dia a dia. A doença de Crohn pode ser considerada grave em quadros mais avançados, com necessidade de laudos médicos detalhados que demonstrem a gravidade do caso para avaliar a possibilidade de saque.',
  },
  {
    question: 'Quem tem artrite reumatoide pode sacar o FGTS?',
    answer:
      'A artrite reumatoide pode, em fases avançadas e incapacitantes, ser enquadrada como doença grave. É necessário reunir relatórios médicos que comprovem o grau de comprometimento para verificar se o caso se enquadra nas hipóteses legais.',
  },
  {
    question: 'Pai ou mãe de filho com autismo (TEA) pode sacar o FGTS?',
    answer:
      'O saque por dependente costuma exigir que a condição se enquadre como doença grave nos termos da lei, conforme a jurisprudência aplicável ao caso concreto. Cada situação precisa ser analisada individualmente, considerando os laudos médicos e o grau de comprometimento.',
  },
  {
    question: 'Quem tem Burnout pode sacar o FGTS?',
    answer:
      'O Burnout é reconhecido como um fenômeno ocupacional, mas nem sempre se enquadra nas hipóteses de doença grave previstas para o saque do FGTS. A análise depende do quadro clínico completo, de eventuais comorbidades e da documentação médica apresentada.',
  },
  {
    question: 'Quem tem fibrose cística pode sacar o FGTS?',
    answer:
      'A fibrose cística é uma doença crônica que, dependendo da gravidade e das limitações impostas ao paciente, pode ser considerada nas hipóteses de saque. A avaliação leva em conta os relatórios médicos e a evolução do quadro.',
  },
  {
    question: 'Doenças raras dão direito ao saque do FGTS?',
    answer:
      'Algumas doenças raras podem se enquadrar como doença grave, especialmente quando causam incapacidade significativa ou colocam a vida do paciente em risco. Cada caso precisa ser examinado com base na documentação médica disponível.',
  },
];

const LEGAL_SERVICE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE.fullName,
  email: SITE.email,
  telephone: `+${SITE.whatsappNumber}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  url: `${SITE.siteUrl}/saque-fgts-doenca-grave`,
};

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FgtsDoencaGrave() {
  return (
    <>
      <Seo
        title="Saque do FGTS por Doença Grave: Quem Tem Direito? | Coppí & Duarte"
        description="Entenda quem pode sacar o FGTS por doença grave, quais doenças a lei prevê, o que fazer se a Caixa negar o pedido e como funciona a ação judicial. Tire suas dúvidas pelo WhatsApp."
        path="/saque-fgts-doenca-grave"
        jsonLd={[LEGAL_SERVICE_JSON_LD, FAQ_JSON_LD]}
      />
      <Header />

      <main className="bg-white text-gray-800">
        <section className="bg-forest text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide leading-tight">
              Saque do FGTS por doença grave: quem tem direito e como pedir
            </h1>
            <div className="w-16 h-[3px] bg-ocre mx-auto mt-4" />
            <p className="mt-6 text-lg leading-relaxed">
              Receber o diagnóstico de uma doença grave já é difícil o suficiente — cuidar da
              parte burocrática não precisa ser. Se você ou um dependente enfrenta uma doença
              grave, entenda de forma simples quando a lei permite o saque do FGTS e como dar os
              próximos passos.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA message={WHATSAPP_MESSAGES.fgts} size="lg">
                Tire suas dúvidas pelo WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <SectionHeading title="Quem pode sacar" color="forest" align="left" />
              <p className="mt-4 leading-relaxed">
                O saque do FGTS por doença grave pode ser solicitado em duas situações: quando o
                próprio trabalhador titular da conta é diagnosticado com uma das doenças
                previstas em lei, ou quando um dependente — cônjuge, companheiro(a) ou filho(a) —
                está nessa condição. Em ambos os casos, é preciso reunir documentação médica que
                comprove o diagnóstico e a gravidade do quadro.
              </p>
            </div>

            <div>
              <SectionHeading title="Quais doenças dão direito" color="forest" align="left" />
              <p className="mt-4 leading-relaxed">
                A Lei 8.036/90, em seu art. 20, prevê expressamente o saque do FGTS nos casos de
                AIDS (HIV), neoplasia maligna (câncer) e estágio terminal em razão de doença
                grave, conforme regulamentação. Além dessas hipóteses, a Justiça tem reconhecido,
                em diversas situações, o direito ao saque diante de outras doenças graves, quando
                há comprovação médica robusta da gravidade e das limitações impostas ao paciente.
                Cada caso deve ser analisado individualmente, considerando os laudos e relatórios
                médicos apresentados.
              </p>
            </div>

            <div>
              <SectionHeading title="O que fazer se a Caixa negar" color="forest" align="left" />
              <p className="mt-4 leading-relaxed">
                É comum que pedidos administrativos de saque sejam negados pela Caixa Econômica
                Federal, mesmo em casos que reúnem boa documentação médica. Quando isso acontece,
                é possível buscar a via judicial para que o caso seja reavaliado, apresentando os
                laudos médicos e demais provas da gravidade da doença perante o Poder Judiciário.
              </p>
            </div>

            <div>
              <SectionHeading title="Documentos necessários" color="forest" align="left" />
              <ul className="mt-4 space-y-4">
                {DOCUMENTS.map(({ Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon className="text-ocre flex-shrink-0 w-6 h-6 md:w-7 md:h-7" />
                    <span className="leading-relaxed text-base md:text-lg">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading title="Como funciona a ação judicial" color="forest" align="left" />
              <p className="mt-4 leading-relaxed">
                Quando o pedido administrativo não é suficiente, a ação judicial busca demonstrar
                ao juiz, por meio de laudos médicos e demais provas, que a doença se enquadra nas
                hipóteses legais de saque. Em situações de urgência — por exemplo, quando o
                tratamento não pode esperar o trâmite normal do processo — é possível pedir uma
                liminar, isto é, uma decisão provisória que antecipa a análise do pedido antes do
                julgamento final do caso, a critério do juiz responsável.
              </p>
            </div>

            <div className="flex justify-center py-4">
              <WhatsAppCTA message={WHATSAPP_MESSAGES.fgts} size="lg">
                Tire suas dúvidas pelo WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        <section className="bg-section-bg py-14 px-4 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Perguntas Frequentes" color="forest" />
            <div className="mt-10">
              <FaqAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        <section className="bg-forest text-white py-14 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display uppercase text-3xl md:text-4xl tracking-wide">
              Fale com {SITE.lawyers.map((l) => l.name).join(' e ')}
            </h2>
            <div className="w-16 h-[3px] bg-ocre mx-auto mt-4" />
            <p className="mt-6 text-lg leading-relaxed">
              Tire suas dúvidas sobre o saque do FGTS por doença grave com quem entende do
              assunto. O primeiro passo é uma conversa — sem burocracia, pelo WhatsApp.
            </p>
            <div className="mt-8 flex justify-center">
              <img
                src={sociasImg}
                alt={`As advogadas ${SITE.lawyers.map((l) => l.name).join(' e ')}, sócias da ${SITE.name}`}
                className="w-full max-w-xs border-4 border-white rounded-sm object-cover"
              />
            </div>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA message={WHATSAPP_MESSAGES.fgts} size="lg">
                Tire suas dúvidas pelo WhatsApp
              </WhatsAppCTA>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              {SITE.lawyers.map((l) => `${l.name} — ${l.oab}`).join(' · ')}
            </p>
          </div>
        </section>
      </main>

      <Contact />
    </>
  );
}
