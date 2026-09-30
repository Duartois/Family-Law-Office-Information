export default function CustodyIcon({ size = 40, className = '' }) {
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
      {/* pai */}
      <circle cx="9" cy="12" r="4" />
      <path d="M2 30v-3a7 7 0 0 1 14 0v3" />
      {/* mãe */}
      <circle cx="39" cy="12" r="4" />
      <path d="M32 30v-3a7 7 0 0 1 14 0v3" />
      {/* criança no meio */}
      <circle cx="24" cy="20" r="3.4" />
      <path d="M18.5 34v-2.4a5.5 5.5 0 0 1 11 0V34" />
      <path d="M0 40h48" />
    </svg>
  );
}
