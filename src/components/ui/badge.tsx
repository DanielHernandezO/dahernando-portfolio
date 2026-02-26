import { cn } from "@/lib/utils";

interface BadgeProps {
  children: string;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

const variants = {
  default: "bg-bg-tertiary text-text-secondary",
  accent: "bg-accent-primary/10 text-accent-primary",
  outline: "border border-bg-tertiary text-text-secondary",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
