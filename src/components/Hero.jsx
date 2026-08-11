import React from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollTo'; // Importa a função
import heroImg from '../assets/ensaioduartecoppi.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gray-900 text-white min-h-[100vh] flex items-center overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center w-full">
        
        {/* Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left"
        >
          <span className="text-[#b89b5d] text-sm uppercase tracking-[0.2em] font-semibold mb-2 block">Excelência Jurídica</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            Especialistas em   

            <span className="text-[#b89b5d] ml-[10px]">Direito de Família</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Resolvemos conflitos familiares com discrição, empatia e máxima segurança jurídica. Um olhar humano para momentos delicados.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            {/* Botão Áreas de Atuação */}
            <button 
              onClick={() => scrollToSection('areas')} 
              className="bg-[#b89b5d] hover:bg-[#9c8348] text-white px-8 py-3 uppercase text-sm tracking-wider transition-all duration-300 shadow-lg hover:shadow-[#b89b5d]/30 cursor-pointer border-none"
            >
              Nossas Soluções
            </button>
            
            {/* Botão Agendar Consulta */}
            <button 
              onClick={() => scrollToSection('contato')} 
              className="border border-[#b89b5d] hover:bg-[#b89b5d]/10 text-[#b89b5d] px-8 py-3 uppercase text-sm tracking-wider transition-all duration-300 cursor-pointer bg-transparent"
            >
              Agendar Consulta
            </button>
          </div>
        </motion.div>
        
        {/* Imagem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#b89b5d]/50 z-0 hidden md:block"></div>
            <img 
              src={heroImg} 
              alt="Advogadas Coppí & Duarte" 
              className="w-full max-w-[400px] md:max-w-md object-cover shadow-2xl relative z-10 border border-[#b89b5d]"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
   );
}
