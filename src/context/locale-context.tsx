"use client";

import {
  createContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  translations,
  type Locale,
  type TranslationKeys,
} from "@/lib/translations";

type TranslationValue = string | Record<string, unknown>;

function getNestedValue(obj: TranslationValue, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined) return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : path;
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("locale");
  if (stored === "en" || stored === "es") return stored;
  return "en";
}

export interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  translations: TranslationKeys;
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
  translations: translations.en,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(
        translations[locale] as unknown as TranslationValue,
        key,
      );
    },
    [locale],
  );

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t, translations: translations[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
