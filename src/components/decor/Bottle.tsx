type BottleProps = {
  className?: string;
};

export function Bottle({ className }: BottleProps) {
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <rect x="30" y="0" width="40" height="15" rx="5" fill="currentColor" />
      <rect x="34" y="11" width="32" height="6" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="8" y="18" width="84" height="120" rx="22" fill="currentColor" />
      <rect x="20" y="74" width="60" height="32" rx="8" fill="#fbf6ef" opacity="0.96" />
      <circle cx="50" cy="90" r="6" fill="currentColor" opacity="0.45" />
    </svg>
  );
}
