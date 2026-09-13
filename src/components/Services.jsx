import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Scale, Heart, Baby, FileText, Briefcase } from 'lucide-react';
import Reveal from './Reveal';
import WhatsAppCTA from './WhatsAppCTA';
import { WHATSAPP_MESSAGES } from '../config/site';

const AREAS = [
  {
    title: 'Divórcio',
    icon: Heart,
    info: 'Tratamos de divórcios consensuais e litigiosos, buscando sempre a melhor solução para a reorganização da estrutura familiar. Nosso foco é a resolução de conflitos com empatia, garantindo a partilha de bens justa e o cumprimento dos direitos de ambas as partes.',
  },
  {
    title: 'Guarda de Menores',
    icon: Baby,
    info: 'Atuação focada no melhor interesse da criança ou adolescente. Atuamos na definição de guarda unilateral, compartilhada ou alternada, bem como na regulamentação de visitas, sempre priorizando a estabilidade emocional e o bem-estar dos menores.',
  },
  {
    title: 'Pensões Alimentícias',
    icon: Scale,
    info: 'Acompanhamos todo o processo de fixação, revisão (para aumento ou diminuição) e execução de pensões alimentícias. Nosso objetivo é assegurar o sustento necessário com base na real capacidade financeira do alimentante e nas reais necessidades do alimentado.',
  },
  {
    title: 'Tutela e Curatela',
    icon: FileText,
    info: 'Assessoria jurídica na nomeação e destituição de tutores (para menores) e curadores (para adultos com incapacidade civil). Guiamos a família em todo o processo legal exigido pelo Estatuto da Pessoa com Deficiência e pelo Código Civil.',
  },
  {
    title: 'Inventários e Partilhas',
    icon: Briefcase,
    info: 'Realizamos inventários judiciais e extrajudiciais (em cartório), focando na agilidade e segurança jurídica da transferência de patrimônio. Minimizamos conflitos entre herdeiros e estruturamos a partilha de forma eficiente.',
  },
  {
    title: 'Planejamento Sucessório',
    icon: FileText,
    info: 'Elaboração de testamentos, doações e estruturação de Holdings Patrimoniais. Essa prática antecipada evita litígios futuros, otimiza a tributação e garante que o seu patrimônio seja transmitido exatamente da forma que você deseja.',
  },
  {
    title: 'Liberação de FGTS (Doença)',
    icon: Scale,
    info: 'Ações judiciais para a liberação imediata do saldo de FGTS em casos de doenças graves ou terminais, garantindo que o cliente tenha acesso rápido aos recursos necessários para o custeio de tratamentos médicos.',
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="areas" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-10 md:mb-16">
          <span className="text-gold text-sm uppercase tracking-widest font-semibold">Especialidades</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2 mb-4">Áreas de Atuação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Clique em cada tema abaixo para saber como podemos proteger sua família e seu patrimônio.</p>
        </Reveal>

        <div className="space-y-4">
          {AREAS.map((area, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal
                key={area.title}
                delay={index * 0.08}
                duration={0.4}
                className="bg-white border-l-4 border-gold shadow-sm rounded-r-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-gold">
                      <area.icon size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-serif text-gray-800 font-medium">
                      {area.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 flex-shrink-0"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-8 md:pb-8 border-t border-gray-100 bg-gray-50/50">
                        <p className="text-gray-600 leading-relaxed py-4 md:py-6 max-w-3xl">
                          {area.info}
                        </p>
                        <WhatsAppCTA message={WHATSAPP_MESSAGES.area(area.title)} variant="outline" size="sm">
                          Falar sobre {area.title.toLowerCase()}
                        </WhatsAppCTA>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>

        <p className="text-center text-gray-500 mt-10 md:mt-16 text-sm italic">
          Consulte-nos sobre outros assuntos não destacados.
        </p>
      </div>
    </section>
  );
}
