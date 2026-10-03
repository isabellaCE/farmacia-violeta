/** Curva suave que fecha uma faixa colorida e abre a seção seguinte (cor via text-*). */
export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 ${className}`}
      fill="currentColor"
    >
      <path d="M0,44 C220,84 470,6 720,36 C970,66 1210,76 1440,18 L1440,81 L0,81 Z" />
    </svg>
  );
}
