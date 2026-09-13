import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import { EASE } from '../utils/motion';

export default function LawyersBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
      className="bg-taupe py-8 border-b border-gold/30"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        <div className="flex-1">
          <h2 className="text-gold text-xl md:text-2xl font-serif tracking-wide mb-1">
            Sócias Fundadoras
          </h2>
          <div className="flex items-center justify-center md:justify-start text-gray-300 text-sm">
            <Scale size={16} className="mr-2 text-gold" />
            <span className="uppercase tracking-wider">27 Anos de Experiência</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
          <div className="flex flex-col items-center md:items-end">
            <span className="text-white text-lg md:text-xl font-serif">Adv. Paula Coppi</span>
          </div>

          <div className="hidden md:block w-px h-10 bg-gold/50" />

          <div className="flex flex-col items-center md:items-start">
            <span className="text-white text-lg md:text-xl font-serif">Adv. Viviane Duarte</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
