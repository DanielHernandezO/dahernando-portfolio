import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-bg-tertiary bg-bg-secondary p-6 transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/5",
        className
      )}
    >
      {children}
    </div>
  );
}
