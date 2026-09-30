export default function CalendarCheckIcon({ size = 36, className = '' }) {
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
      <rect x="6" y="9" width="36" height="32" rx="3" />
      <path d="M6 18h36" />
      <path d="M14 4v8" />
      <path d="M34 4v8" />
      <path d="M16 28l5 5 11-11" />
    </svg>
  );
}
