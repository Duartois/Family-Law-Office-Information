import { MapPin, Clock } from 'lucide-react';
import Reveal from './Reveal';
import WhatsAppCTA from './WhatsAppCTA';
import { fadeLeft, fadeRight } from '../utils/motion';
import { SITE, WHATSAPP_MESSAGES } from '../config/site';

export default function Contact() {
  return (
    <section id="contato" className="bg-gray-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <Reveal variants={fadeLeft}>
          <span className="text-gold text-sm uppercase tracking-[0.25em] font-semibold mb-3 block">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
            Converse agora com uma advogada
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Atendimento imediato e sigiloso pelo WhatsApp, online (por vídeo conferência) ou presencial em nosso escritório na Av. Paulista. O acompanhamento do seu caso é feito mensalmente com total comodidade e discrição.
          </p>

          <WhatsAppCTA message={WHATSAPP_MESSAGES.encerramento} size="lg">
            Iniciar Atendimento
          </WhatsAppCTA>
        </Reveal>

        <Reveal variants={fadeRight} className="bg-gray-800/50 backdrop-blur p-8 md:p-10 border border-gray-700 space-y-6">
          <div className="flex items-start group">
            <MapPin className="text-gold mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-1">Endereço</h4>
              <p className="text-gray-300">
                {SITE.address.street}<br />
                {SITE.address.district}
              </p>
            </div>
          </div>

          <div className="flex items-start group">
            <Clock className="text-gold mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-1">Atendimento</h4>
              <p className="text-gray-300">Segunda a sexta, das 9h às 18h — respostas via WhatsApp em horário comercial.</p>
            </div>
          </div>
        </Reveal>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 tracking-wide">
        <p>&copy; {new Date().getFullYear()} {SITE.fullName.toUpperCase()}. Todos os direitos reservados.</p>
      </div>
    </section>
  );
}
