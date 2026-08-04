import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollTo'; // 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); 
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm text-white py-4 sticky top-0 z-50 shadow-lg border-b border-[#b89b5d]/20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="flex flex-col cursor-pointer" 
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-[#b89b5d] text-2xl font-serif tracking-wider leading-none">COPPI & DUARTE</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-1">Advogadas Associadas</span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <button onClick={() => handleNavClick('sobre')} className="hover:text-[#b89b5d] transition-colors duration-300 cursor-pointer bg-transparent border-none text-white">O Escritório</button>
          <button onClick={() => handleNavClick('areas')} className="hover:text-[#b89b5d] transition-colors duration-300 cursor-pointer bg-transparent border-none text-white">Áreas de Atuação</button>
          <button onClick={() => handleNavClick('contato')} className="hover:text-[#b89b5d] transition-colors duration-300 cursor-pointer bg-transparent border-none text-white">Contato</button>
        </nav>

        {/* Botão Menu Mobile */}
        <button className="md:hidden text-[#b89b5d]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Expandido */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-4 text-sm uppercase tracking-wide">
              <button onClick={() => handleNavClick('sobre')} className="hover:text-[#b89b5d] bg-transparent border-none text-white cursor-pointer">O Escritório</button>
              <button onClick={() => handleNavClick('areas')} className="hover:text-[#b89b5d] bg-transparent border-none text-white cursor-pointer">Áreas de Atuação</button>
              <button onClick={() => handleNavClick('contato')} className="hover:text-[#b89b5d] bg-transparent border-none text-white cursor-pointer">Contato</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}