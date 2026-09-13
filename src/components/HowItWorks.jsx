import { Video, FileUp, MessageCircle, Shield, Monitor, Users } from 'lucide-react';
import Reveal from './Reveal';
import WhatsAppCTA from './WhatsAppCTA';
import { WHATSAPP_MESSAGES } from '../config/site';

const FEATURES = [
  {
    icon: Monitor,
    title: 'Contrate sem sair de casa',
    description: 'Advocacia on-line, mais dinâmica, moderna e acessível. Atualmente, todo o procedimento judicial está digital, inclusive as audiências. Nosso escritório aderiu a essa prática e oferece a possibilidade de consultas e reuniões por videoconferência — agendamos uma data e um horário e você será atendido sem ter que se deslocar.',
  },
  {
    icon: FileUp,
    title: 'Envio de documentos online',
    description: 'O envio de documentos também pode ser feito de forma digital, de maneira segura e prática. Todo o fluxo é conduzido por vias eletrônicas, preservando o sigilo das suas informações.',
  },
  {
    icon: Shield,
    title: 'Tudo prático, rápido e sigiloso',
    description: 'Seja em demanda extrajudicial ou judicial, o acompanhamento do seu caso é feito com discrição e agilidade. Protegemos seus dados e sua privacidade em cada etapa do processo.',
  },
  {
    icon: MessageCircle,
    title: 'Acompanhamento via WhatsApp',
    description: 'Para maior comodidade, mensalmente você recebe no seu WhatsApp informações atualizadas sobre o andamento do seu caso. Acompanhe cada etapa sem burocracia.',
  },
  {
    icon: Users,
    title: 'Atendimentos presenciais',
    description: 'Possuímos convênio com vários coworkings espalhados pelo Brasil, de forma que, caso prefira que o atendimento seja no formato tradicional, iremos até você. Mas, se preferir vir ao nosso encontro, nosso escritório base fica na cidade de São Paulo/SP — teremos grande prazer em lhe receber.',
  },
  {
    icon: Video,
    title: 'Atendimento remoto',
    description: 'Todo o processo pode ser conduzido à distância, desde a primeira consulta até o acompanhamento processual. Ideal para quem valoriza praticidade e tempo.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-taupe py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        <Reveal className="text-center mb-10 md:mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-2 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Contrate sem sair de casa
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed">
            Advocacia on-line, mais dinâmica, moderna e acessível. Atualmente todo o procedimento judicial está digital, até mesmo as audiências. Nosso escritório aderiu a essa prática para oferecer um atendimento mais prático, rápido e sigiloso.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {FEATURES.map((feat, index) => (
            <Reveal
              key={feat.title}
              delay={index * 0.1}
              className="bg-white/5 backdrop-blur-sm p-6 md:p-8 border-t-2 border-gold text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-gold flex justify-center mb-5">
                <feat.icon size={36} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{feat.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feat.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="text-center mt-10 md:mt-16">
          <p className="text-gray-200 mb-6 text-lg">
            Entre em contato agora e converse com uma advogada.
          </p>
          <WhatsAppCTA message={WHATSAPP_MESSAGES.comoFunciona} size="lg">
            Fale Conosco
          </WhatsAppCTA>
        </Reveal>

      </div>
    </section>
  );
}
