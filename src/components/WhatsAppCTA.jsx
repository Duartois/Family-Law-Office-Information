import { motion } from 'framer-motion';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { buildWhatsAppLink } from '../config/site';

const VARIANTS = {
  solid: 'bg-gold hover:bg-gold-dark text-white shadow-lg hover:shadow-gold/30',
  outline: 'border border-gold hover:bg-gold/10 text-gold bg-transparent',
  whatsapp: 'bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg hover:shadow-[#25D366]/30',
};

const SIZES = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-base',
};

/**
 * CTA único para todo o site: sempre abre uma conversa de WhatsApp já
 * preenchida. Centralizar aqui evita duplicar o link/telefone em cada seção.
 */
export default function WhatsAppCTA({
  message,
  variant = 'solid',
  size = 'md',
  icon = true,
  className = '',
  children,
}) {
  return (
    <motion.a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 uppercase tracking-wider font-medium transition-colors duration-300 cursor-pointer ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {icon && <WhatsAppIcon size={size === 'lg' ? 22 : 18} />}
      {children}
    </motion.a>
  );
}
