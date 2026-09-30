export default function AdoptionIcon({ size = 40, className = '' }) {
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
      {/* adulto */}
      <circle cx="20" cy="9" r="5" />
      <path d="M9 34v-6a11 11 0 0 1 22 0v6" />
      {/* criança protegida, mais à frente e menor */}
      <circle cx="35" cy="22" r="3.6" />
      <path d="M29 38v-4.5a6 6 0 0 1 12 0V38" />
      {/* braço do adulto envolvendo a criança */}
      <path d="M26 20c4-2 7-1 9 1" />
      <path d="M2 40h44" />
    </svg>
  );
}
