export default function SplitHouseIcon({ size = 40, className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* metade esquerda */}
      <path d="M6 22 21 9v25H6z" />
      <path d="M11 34v-8h5v8" />
      {/* metade direita, afastada para indicar a partilha */}
      <path d="M27 22 42 9v25H27z" />
      <path d="M32 34v-8h5v8" />
      <path d="M2 40h44" />
    </svg>
  );
}
