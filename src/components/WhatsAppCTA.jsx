import WhatsAppIcon from './icons/WhatsAppIcon';
import { buildWhatsAppLink } from '../config/site';

const SIZES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * CTA único para todo o site: sempre abre uma conversa de WhatsApp já
 * preenchida. Botão simples, bem arredondado, sem sombra/efeito de destaque.
 */
export default function WhatsAppCTA({
  message,
  size = 'md',
  icon = true,
  className = '',
  children,
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wide bg-whatsapp hover:bg-whatsapp-dark text-white transition-colors duration-200 ${SIZES[size]} ${className}`}
    >
      {icon && <WhatsAppIcon size={size === 'lg' ? 24 : 20} />}
      {children}
    </a>
  );
}
