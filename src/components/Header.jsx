import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollTo';
import WhatsAppCTA from './WhatsAppCTA';
import { WHATSAPP_MESSAGES } from '../config/site';

const NAV_LINKS = [
  { id: 'sobre', label: 'O Escritório' },
  { id: 'como-funciona', label: 'Como Funciona' },
  { id: 'areas', label: 'Áreas de Atuação' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm text-white py-4 sticky top-0 z-50 shadow-lg border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-4">

        <button
          type="button"
          className="flex flex-col text-left cursor-pointer bg-transparent border-none"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-gold text-xl md:text-2xl font-serif tracking-wider leading-none">COPPI & DUARTE</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-1">Advogadas Associadas</span>
        </button>

        <nav className="hidden md:flex items-center space-x-6 text-sm uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-gold transition-colors duration-300 cursor-pointer bg-transparent border-none text-white"
            >
              {link.label}
            </button>
          ))}
          <WhatsAppCTA message={WHATSAPP_MESSAGES.geral} variant="whatsapp" size="sm">
            WhatsApp
          </WhatsAppCTA>
        </nav>

        <button
          className="md:hidden text-gold bg-transparent border-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-4 text-sm uppercase tracking-wide">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="hover:text-gold bg-transparent border-none text-white cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <WhatsAppCTA message={WHATSAPP_MESSAGES.geral} variant="whatsapp" size="sm">
                Falar no WhatsApp
              </WhatsAppCTA>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
