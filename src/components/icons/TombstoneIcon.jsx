export default function TombstoneIcon({ size = 40, className = '' }) {
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
      {/* balão de pensamento */}
      <path d="M6 10h30a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H24l-7 6v-6h-6a5 5 0 0 1-5-5v-8a5 5 0 0 1 5-5Z" />
      <circle cx="38" cy="36" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="42" cy="40" r="1" fill="currentColor" stroke="none" />
      {/* lápide dentro do balão */}
      <path d="M17 24v-4a4 4 0 0 1 8 0v4" />
      <path d="M15 24h12" />
      <path d="M21 16v2" />
    </svg>
  );
}
