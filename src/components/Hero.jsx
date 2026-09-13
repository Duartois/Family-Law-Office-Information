import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollTo';
import { EASE } from '../utils/motion';
import { WHATSAPP_MESSAGES } from '../config/site';
import WhatsAppCTA from './WhatsAppCTA';
import heroImg from '../assets/ensaioduartecoppi.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gray-900 text-white min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-10 sm:py-16 flex flex-col-reverse lg:flex-row items-center w-full gap-6 lg:gap-0">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-2 block">
            Excelência Jurídica
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            Especialistas em <span className="text-gold">Direito de Família</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Resolvemos conflitos familiares com discrição, empatia e máxima segurança jurídica. Um olhar humano para momentos delicados.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              onClick={() => scrollToSection('areas')}
              className="bg-gold hover:bg-gold-dark text-white px-8 py-3 uppercase text-sm tracking-wider transition-all duration-300 shadow-lg hover:shadow-gold/30 cursor-pointer border-none"
            >
              Nossas Soluções
            </button>

            <WhatsAppCTA message={WHATSAPP_MESSAGES.consulta} variant="outline">
              Agendar Consulta
            </WhatsAppCTA>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-md mx-auto">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/50 z-0 hidden md:block" />
            <img
              src={heroImg}
              alt="Advogadas Coppí & Duarte"
              className="w-full aspect-[3/4] object-cover object-top shadow-2xl relative z-10 border border-gold"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
