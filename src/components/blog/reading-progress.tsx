"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full">
      <div
        className="h-full bg-accent-primary transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
