export default function ElderlyCoupleIcon({ size = 40, className = '' }) {
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
      <circle cx="15" cy="9" r="4" />
      <path d="M8 30v-5a7 7 0 0 1 14 0v5" />
      <circle cx="35" cy="9" r="4" />
      <path d="M28 30v-5a7 7 0 0 1 14 0v5" />
      {/* bengala */}
      <path d="M40 18v16" />
      <path d="M40 18a3 3 0 0 1 3-3" />
      <path d="M2 40h44" />
    </svg>
  );
}
