type FlowerProps = {
  className?: string;
  petals?: number;
};

export function Flower({ className, petals = 5 }: FlowerProps) {
  const angleStep = 360 / petals;

  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      {Array.from({ length: petals }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="27"
          rx="15.5"
          ry="23"
          transform={`rotate(${i * angleStep} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="9" opacity="0.9" />
    </svg>
  );
}
