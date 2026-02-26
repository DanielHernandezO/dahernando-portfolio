import { cn } from "@/lib/utils";
import { AlertCircle, Info, Lightbulb, AlertTriangle } from "lucide-react";
import { type ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  type?: "info" | "warning" | "tip" | "danger";
}

const styles = {
  info: {
    container: "border-blue-500/30 bg-blue-500/5",
    icon: Info,
    iconColor: "text-blue-400",
  },
  warning: {
    container: "border-yellow-500/30 bg-yellow-500/5",
    icon: AlertTriangle,
    iconColor: "text-yellow-400",
  },
  tip: {
    container: "border-accent-primary/30 bg-accent-primary/5",
    icon: Lightbulb,
    iconColor: "text-accent-primary",
  },
  danger: {
    container: "border-red-500/30 bg-red-500/5",
    icon: AlertCircle,
    iconColor: "text-red-400",
  },
};

export function Callout({ children, type = "info" }: CalloutProps) {
  const { container, icon: Icon, iconColor } = styles[type];

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        container
      )}
    >
      <Icon size={20} className={cn("mt-0.5 shrink-0", iconColor)} />
      <div className="text-sm [&>p]:m-0">{children}</div>
    </div>
  );
}
