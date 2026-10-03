import { Mail, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { SITE, buildWhatsAppLink, WHATSAPP_MESSAGES } from '../config/site';

export default function Contact() {
  return (
    <section id="contato" className="bg-navy py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionHeading title="Informações de Contato" color="white" />

        <div className="mt-10 space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-ocre flex-shrink-0 w-6 h-6 md:w-7 md:h-7" />
            <div>
              <h4 className="text-xs uppercase tracking-wide text-white/60 mb-1">E-mail</h4>
              <a href={`mailto:${SITE.email}`} className="text-white font-medium break-all">
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <WhatsAppIcon className="text-ocre flex-shrink-0 w-6 h-6 md:w-7 md:h-7" />
            <div>
              <h4 className="text-xs uppercase tracking-wide text-white/60 mb-1">WhatsApp</h4>
              <a href={buildWhatsAppLink(WHATSAPP_MESSAGES.geral)} target="_blank" rel="noopener noreferrer" className="text-white font-medium">
                {SITE.whatsappDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-ocre flex-shrink-0 w-6 h-6 md:w-7 md:h-7" />
            <div>
              <h4 className="text-xs uppercase tracking-wide text-white/60 mb-1">Endereço</h4>
              <p className="text-white font-medium">
                {SITE.address.street}
                <br />
                {SITE.address.district}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-14 pt-8 pb-16 md:pb-0 border-t border-white/15 text-center text-xs text-white/60 space-y-1">
        <p>{SITE.fullName}</p>
        <p>
          {SITE.lawyers.map((l) => `${l.name} — ${l.oab}`).join(' · ')}
        </p>
        <p>&copy; {new Date().getFullYear()} {SITE.fullName}. Todos os direitos reservados.</p>
      </div>
    </section>
  );
}
