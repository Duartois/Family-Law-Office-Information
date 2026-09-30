import WhatsAppCTA from './WhatsAppCTA';
import { SITE, WHATSAPP_MESSAGES } from '../config/site';

export default function LawyersBar() {
  return (
    <section className="bg-forest text-white py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between text-center md:text-left">
        <div>
          <p className="text-xl md:text-2xl font-semibold">Especialista em direito de família</p>
          <p className="text-ocre text-base md:text-lg mt-1">Agende sua consulta</p>
        </div>

        <p className="font-display uppercase text-4xl md:text-5xl tracking-wide">
          {SITE.yearsOfExperience} anos de experiência
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-8 flex justify-center md:justify-start">
        <WhatsAppCTA message={WHATSAPP_MESSAGES.geral} size="lg">
          Fale conosco agora
        </WhatsAppCTA>
      </div>
    </section>
  );
}
