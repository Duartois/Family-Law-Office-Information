import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../config/site';

export default function WhatsAppFloatingButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] flex items-center"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block mr-3 bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
          >
            Fale com uma advogada agora
          </motion.span>
        )}
      </AnimatePresence>

      <a
        href={buildWhatsAppLink(WHATSAPP_MESSAGES.geral)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <WhatsAppIcon size={30} className="relative z-10" />
      </a>
    </motion.div>
  );
}
