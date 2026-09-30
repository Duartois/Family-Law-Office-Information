export default function PaternityIcon({ size = 40, className = '' }) {
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
      {/* homem */}
      <circle cx="14" cy="9" r="4" />
      <path d="M7 27v-4a7 7 0 0 1 14 0v4" />
      {/* carrinho de bebê */}
      <path d="M22 30h4l3-10h6l-3 10" />
      <circle cx="26" cy="35" r="2.6" />
      <circle cx="35" cy="35" r="2.6" />
      <path d="M35 20v-3" />
      {/* interrogação */}
      <path d="M41 10a3 3 0 1 1 3.4 3c-1.2.3-1.9 1-1.9 2.4" />
      <circle cx="42.5" cy="19" r="0.6" fill="currentColor" stroke="none" />
      <path d="M2 40h44" />
    </svg>
  );
}
