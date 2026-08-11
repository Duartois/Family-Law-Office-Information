import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    { icon: <Award size={32} />, title: "27 Anos", desc: "De tradição jurídica" },
    { icon: <Users size={32} />, title: "Atendimento", desc: "Presencial e Online" },
    { icon: <ShieldCheck size={32} />, title: "Segurança", desc: "Estratégia e sigilo" }
  ];

  return (
    <section id="sobre" className="bg-[#fffff] text-black relative flex items-center py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative items-center px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Nossa Trajetória
          </h2>
          <div className="w-24 h-1 bg-[#b89b5d] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
            Com quase três décadas de atuação, a Coppí & Duarte consolidou-se pela busca incansável por soluções jurídicas personalizadas. Entendemos que o Direito de Família exige um olhar humano e altamente estratégico para proteger os interesses de nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 border-t-2 border-[#b89b5d] text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-[#b89b5d] flex justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-serif mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}