import { Award, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { fadeLeft, fadeRight } from '../utils/motion';
import equipeImg from '../assets/equipe.jpg';

const HIGHLIGHTS = [
  { title: '27 Anos de Tradição', desc: 'Excelência e solidez na advocacia especializada.' },
  { title: 'Atendimento Humanizado', desc: 'Escuta atenta e estratégias sob medida para cada família.' },
  { title: 'Sigilo Absoluto', desc: 'Discrição e segurança jurídica em todas as etapas.' },
];

const STATS = [
  { icon: Award, title: 'Tradição', desc: 'Quase 3 décadas de excelência jurídica comprovada.' },
  { icon: Users, title: 'Atendimento Global', desc: 'Suporte presencial e online para clientes em todo o Brasil e exterior.' },
  { icon: ShieldCheck, title: 'Estratégia & Sigilo', desc: 'Soluções discretas, seguras e focadas em resultados eficientes.' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white text-gray-900 py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">

        <Reveal className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.25em] font-semibold mb-3 block">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4 tracking-wide text-gray-900">
            Nossa Trajetória e Compromisso
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg font-light">
            Unimos experiência profunda no Direito de Família e Sucessões a uma visão moderna e estratégica, prestando um suporte jurídico de alto padrão.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          <Reveal variants={fadeLeft} duration={0.8} className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/60 z-0 hidden md:block" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gold/10 z-0 hidden md:block" />
              <img
                src={equipeImg}
                alt="Equipe Coppí & Duarte Advogados"
                className="w-full h-auto object-cover shadow-2xl relative z-10 border border-gold/40 rounded-sm"
              />
            </div>
          </Reveal>

          <Reveal variants={fadeRight} duration={0.8} className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900">
              Uma advocácia voltada para a proteção e o bem-estar familiar
            </h3>

            <p className="text-gray-600 leading-relaxed text-base font-light">
              Fundada sob pilares de ética inegociável, competência técnica e sensibilidade humana, a <strong className="text-gold font-normal">Coppí & Duarte</strong> atua na condução de litígios complexos e planejamentos sucessórios preventivos. Entendemos que cada caso familiar carrega histórias únicas que merecem proteção rigorosa e acolhimento.
            </p>

            <div className="space-y-4 pt-2">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex items-start space-x-3 bg-gray-50 p-4 border-l-2 border-gold shadow-sm">
                  <CheckCircle2 className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-900 font-serif text-lg">{item.title}</h4>
                    <p className="text-gray-600 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          {STATS.map((stat, idx) => (
            <Reveal
              key={stat.title}
              delay={idx * 0.15}
              className="bg-gray-50 p-8 text-center hover:bg-gray-100 transition-colors duration-300 border border-gray-200 shadow-sm"
            >
              <div className="text-gold flex justify-center mb-4">
                <stat.icon size={36} />
              </div>
              <h4 className="text-2xl font-serif mb-2 text-gray-900">{stat.title}</h4>
              <p className="text-gray-600 text-sm tracking-wide">{stat.desc}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
