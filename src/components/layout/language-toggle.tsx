"use client";

import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-bg-tertiary text-sm font-medium">
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "px-2.5 py-1 transition-colors",
          locale === "en"
            ? "bg-accent-primary text-white"
            : "text-text-secondary hover:text-text-primary",
        )}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale("es")}
        className={cn(
          "px-2.5 py-1 transition-colors",
          locale === "es"
            ? "bg-accent-primary text-white"
            : "text-text-secondary hover:text-text-primary",
        )}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );
}
