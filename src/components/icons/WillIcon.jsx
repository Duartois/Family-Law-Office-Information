export default function WillIcon({ size = 40, className = '' }) {
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
      {/* documento */}
      <path d="M8 4h18l8 8v32H8Z" />
      <path d="M26 4v8h8" />
      {/* casinha desenhada no documento */}
      <path d="M13 26l5-4 5 4" />
      <path d="M14.5 24.5V31h7v-6.5" />
      {/* caneta atravessando */}
      <path d="M30 22 19 33l-2 5 5-2 11-11Z" />
    </svg>
  );
}
