import WhatsAppIcon from './icons/WhatsAppIcon';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../config/site';

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_MESSAGES.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-md hover:bg-whatsapp-dark transition-colors duration-200"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
