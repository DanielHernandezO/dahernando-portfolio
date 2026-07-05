"use client";

import {
  createContext,
  useCallback,
  useSyncExternalStore,
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

/* ---- localStorage-backed locale store ----
   Read through useSyncExternalStore so the server snapshot ("en") and the
   first client render match (no hydration mismatch), while the client adopts
   the stored preference right after hydration. */
const STORAGE_KEY = "locale";
const listeners = new Set<() => void>();

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : "en";
}

function getServerSnapshot(): Locale {
  return "en";
}

function persistLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);
  listeners.forEach((l) => l());
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
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setLocale = useCallback((newLocale: Locale) => {
    persistLocale(newLocale);
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
