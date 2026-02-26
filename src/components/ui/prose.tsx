import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={cn("prose max-w-none", className)}>
      {children}
    </div>
  );
}
