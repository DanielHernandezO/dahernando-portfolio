"use client";

import { useId } from "react";

/**
 * DAHO. — «Apertura» isotype.
 * Abstract 3-blade aperture (no letterforms). Iris → Coral gradient.
 */
export function BrandMark({
  size = 26,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const gradId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="DAHO"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7B6CF6" />
          <stop offset="0.5" stopColor="#C56BF5" />
          <stop offset="1" stopColor="#FF8A6B" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradId})`}>
        <path d="M60,60 C58,35 71,19 93,19 C83,40 79,46 60,60 Z" />
        <path
          d="M60,60 C58,35 71,19 93,19 C83,40 79,46 60,60 Z"
          transform="rotate(120 60 60)"
          opacity="0.82"
        />
        <path
          d="M60,60 C58,35 71,19 93,19 C83,40 79,46 60,60 Z"
          transform="rotate(240 60 60)"
          opacity="0.66"
        />
      </g>
    </svg>
  );
}
