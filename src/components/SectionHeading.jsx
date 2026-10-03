const COLORS = {
  white: 'text-white',
  bordo: 'text-bordo',
  forest: 'text-forest',
};

/**
 * Título de seção padrão do site: texto em caixa alta na fonte condensada,
 * com uma linha fina dourada de ponta a ponta embaixo (classe .linha-titulo).
 */
export default function SectionHeading({
  title,
  subtitle,
  color = 'forest',
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className={`font-display uppercase text-3xl md:text-4xl tracking-wide ${COLORS[color]}`}>
        {title}
      </h2>
      <div className="linha-titulo" />
      {subtitle && (
        <p className="text-ocre mt-3 text-base md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
