/**
 * Item usado nas grades "Ações em que Atuamos" e "Atuamos Também Em".
 * O ícone cresce por breakpoint e cada item ganha um cartão próprio para
 * que o peso visual continue equilibrado tanto no celular quanto em telas
 * largas (onde o grid sozinho deixaria o ícone pequeno e perdido no vazio).
 */
export default function ServiceItem({ title, Icon }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-lg p-5 md:p-6 shadow-sm">
      <Icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-black flex-shrink-0" />
      <div>
        <p className="text-bordo font-display uppercase tracking-wide text-lg md:text-xl leading-snug">
          {title}
        </p>
        <span className="block mt-1 text-xl md:text-2xl" aria-hidden="true">✅</span>
      </div>
    </div>
  );
}
