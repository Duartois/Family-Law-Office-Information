import { motion } from 'framer-motion';
import { EASE, fadeUp } from '../utils/motion';

/**
 * Wrapper de animação de entrada usado em todas as seções para garantir
 * o mesmo timing/easing em todo o site (evita blocos de motion duplicados).
 */
export default function Reveal({
  children,
  as = 'div',
  variants = fadeUp,
  delay = 0,
  duration = 0.6,
  once = true,
  className = '',
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
