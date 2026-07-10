/**
 * DAHO. — «System mark» (isotipo).
 * Un nodo central de vino conectado a tres nodos: el punto donde el dinero
 * y los sistemas se conectan. Monocromo, sin degradados. Escala de favicon a hero.
 */
export function BrandMark({
  size = 26,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="DAHO"
      fill="none"
    >
      <g
        stroke="var(--color-text-tertiary)"
        strokeWidth="4"
        strokeLinecap="round"
      >
        <line x1="60" y1="60" x2="28" y2="30" />
        <line x1="60" y1="60" x2="95" y2="46" />
        <line x1="60" y1="60" x2="49" y2="97" />
      </g>
      <circle cx="28" cy="30" r="8.5" fill="var(--color-text-primary)" />
      <circle cx="95" cy="46" r="8.5" fill="var(--color-text-primary)" />
      <circle cx="49" cy="97" r="8.5" fill="var(--color-text-primary)" />
      <circle cx="60" cy="60" r="15" fill="var(--color-accent-secondary)" />
    </svg>
  );
}
