export default function BrokenHeartIcon({ size = 40, className = '' }) {
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
      <path d="M24 41c-6-4.4-16-12.2-16-21A9 9 0 0 1 24 12a9 9 0 0 1 16 8c0 8.8-10 16.6-16 21Z" />
      <path d="M26 15l-4 8 4 4-3 6" />
    </svg>
  );
}
