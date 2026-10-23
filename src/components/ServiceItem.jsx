import { Link } from 'react-router-dom';

/**
 * Item usado nas grades "Ações em que Atuamos" e "Atuamos Também Em".
 * O ícone cresce por breakpoint e cada item ganha um cartão próprio para
 * que o peso visual continue equilibrado tanto no celular quanto em telas
 * largas. Quando `to` é informado, o cartão inteiro leva à página da área.
 */
export default function ServiceItem({ title, Icon, to }) {
  const content = (
    <>
      <Icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-black flex-shrink-0" />
      <div className="flex-1">
        <p className="text-bordo font-display uppercase tracking-wide text-lg md:text-xl leading-snug">
          {title}
        </p>
        <span className="block mt-1 text-xl md:text-2xl" aria-hidden="true">✅</span>
      </div>
      {to && (
        <span className="text-bordo text-2xl flex-shrink-0 self-center" aria-hidden="true">→</span>
      )}
    </>
  );

  const base = 'flex items-start gap-4 bg-white rounded-lg p-5 md:p-6 shadow-sm';

  return to ? (
    <Link to={to} className={`${base} hover:shadow-md transition-shadow`}>
      {content}
    </Link>
  ) : (
    <div className={base}>{content}</div>
  );
}
