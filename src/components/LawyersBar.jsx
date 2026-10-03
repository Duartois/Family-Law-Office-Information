import WhatsAppCTA from './WhatsAppCTA';
import { SITE, WHATSAPP_MESSAGES } from '../config/site';

export default function LawyersBar() {
  return (
    <section className="bloco-destaque bg-navy text-white px-4 pt-4 pb-12 md:pb-4 flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-5 items-stretch w-full max-w-md md:max-w-xl mx-auto">
        <div className="flex flex-col justify-between text-right">
          <p className="font-semibold leading-snug text-[clamp(0.85rem,4.1vw,1.05rem)] md:text-lg">
            Especialista
            <br />
            em direito
            <br />
            de família
          </p>
          <p className="text-ocre mt-2 text-[clamp(0.7rem,3.2vw,0.85rem)] md:text-base">
            Agende sua consulta
          </p>
        </div>

        <p className="font-display uppercase leading-[1.05] text-[clamp(1.9rem,9vw,2.6rem)] md:text-[clamp(2.6rem,7.5vh,3.6rem)]">
          <span className="block">{SITE.yearsOfExperience} anos</span>
          <span className="block">de</span>
          <span className="block">experiência</span>
        </p>
      </div>

      <div className="mt-5 flex justify-center">
        <WhatsAppCTA message={WHATSAPP_MESSAGES.geral} size="sm">
          Fale conosco agora
        </WhatsAppCTA>
      </div>
    </section>
  );
}
