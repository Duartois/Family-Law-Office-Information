import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import equipeImg from '../assets/equipe.jpg';

export default function About() {
  const highlights = [
    { title: "27 Anos de Tradição", desc: "Excelência e solidez na advocacia especializada." },
    { title: "Atendimento Humanizado", desc: "Escuta atenta e estratégias sob medida para cada família." },
    { title: "Sigilo Absoluto", desc: "Discrição e segurança jurídica em todas as etapas." }
  ];

  return (
    <section id="sobre" className="bg-[#7c7471] text-white py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#b89b5d] text-sm uppercase tracking-[0.25em] font-semibold mb-3 block">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4 tracking-wide">
            Nossa Trajetória e Compromisso
          </h2>
          <div className="w-24 h-1 bg-[#b89b5d] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed text-lg font-light">
            Unimos experiência profunda no Direito de Família e Sucessões a uma visão moderna e estratégica, prestando um suporte jurídico de alto padrão.
          </p>
        </motion.div>

        {/* Layout Principal: Imagem + Texto Informativo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Coluna da Imagem Estilizada */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Borda decorativa geométrica */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#b89b5d]/60 z-0 hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#b89b5d]/10 z-0 hidden md:block"></div>
              
              <img 
                src={equipeImg} 
                alt="Equipe Coppí & Duarte Advogados" 
                className="w-full h-auto object-cover shadow-2xl relative z-10 border border-[#b89b5d]/40 rounded-sm"
              />
            </div>
          </motion.div>

          {/* Coluna de Informações / Conteúdo */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-[#f3ebd8]">
              Uma advocácia voltada para a proteção e o bem-estar familiar
            </h3>
            
            <p className="text-gray-200 leading-relaxed text-base font-light">
              Fundada sob pilares de ética inegociável, competência técnica e sensibilidade humana, a <strong className="text-[#b89b5d] font-normal">Coppí & Duarte</strong> atua na condução de litígios complexos e planejamentos sucessórios preventivos. Entendemos que cada caso familiar carrega histórias únicas que merecem proteção rigorosa e acolhimento.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white/5 p-4 border-l-2 border-[#b89b5d] backdrop-blur-sm">
                  <CheckCircle2 className="text-[#b89b5d] w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-serif text-lg">{item.title}</h4>
                    <p className="text-gray-300 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Cards Inferiores de Destaque Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm p-8 text-center hover:bg-white/10 transition-colors duration-300 border border-white/5"
          >
            <div className="text-[#b89b5d] flex justify-center mb-4">
              <Award size={36} />
            </div>
            <h4 className="text-2xl font-serif mb-2">Tradição</h4>
            <p className="text-gray-300 text-sm tracking-wide">Quase 3 décadas de excelência jurídica comprovada.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm p-8 text-center hover:bg-white/10 transition-colors duration-300 border border-white/5"
          >
            <div className="text-[#b89b5d] flex justify-center mb-4">
              <Users size={36} />
            </div>
            <h4 className="text-2xl font-serif mb-2">Atendimento Global</h4>
            <p className="text-gray-300 text-sm tracking-wide">Suporte presencial e online para clientes em todo o Brasil e exterior.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm p-8 text-center hover:bg-white/10 transition-colors duration-300 border border-white/5"
          >
            <div className="text-[#b89b5d] flex justify-center mb-4">
              <ShieldCheck size={36} />
            </div>
            <h4 className="text-2xl font-serif mb-2">Estratégia & Sigilo</h4>
            <p className="text-gray-300 text-sm tracking-wide">Soluções discretas, seguras e focadas em resultados eficientes.</p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
