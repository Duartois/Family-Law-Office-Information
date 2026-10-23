import WhatsAppCTA from './WhatsAppCTA';
import { SITE, sociasPhotoAlt } from '../config/site';
import sociasImg from '../assets/socias.webp';

/** Bloco final das páginas internas: chamada, foto das sócias, botão de WhatsApp e OAB. */
export default function LawyersCallout({ message, text, ctaLabel = 'Fale conosco pelo WhatsApp' }) {
  const names = SITE.lawyers.map((l) => l.name).join(' e ');

  return (
    <section className="bg-navy text-white py-14 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display uppercase text-3xl md:text-4xl tracking-wide">Fale com {names}</h2>
        <div className="linha-titulo" />
        <p className="mt-6 text-lg leading-relaxed">{text}</p>
        <div className="mt-8 flex justify-center">
          <img
            src={sociasImg}
            alt={sociasPhotoAlt()}
            className="w-full max-w-xs border-4 border-white rounded-sm object-cover"
          />
        </div>
        <div className="mt-8 flex justify-center">
          <WhatsAppCTA message={message} size="lg">
            {ctaLabel}
          </WhatsAppCTA>
        </div>
        <p className="mt-6 text-sm text-gray-300">
          {SITE.lawyers.map((l) => `${l.name} — ${l.oab}`).join(' · ')}
        </p>
      </div>
    </section>
  );
}
