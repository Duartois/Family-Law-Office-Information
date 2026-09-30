export default function MonitorHeadsetIcon({ size = 36, className = '' }) {
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
      <rect x="6" y="8" width="36" height="24" rx="2" />
      <path d="M18 38h12" />
      <path d="M24 32v6" />
      {/* headset por cima da tela */}
      <path d="M14 18a10 10 0 0 1 20 0" />
      <rect x="11" y="18" width="5" height="8" rx="2" />
      <rect x="32" y="18" width="5" height="8" rx="2" />
    </svg>
  );
}
