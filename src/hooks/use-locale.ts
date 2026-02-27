"use client";

import { useContext } from "react";
import { LocaleContext } from "@/context/locale-context";

export function useLocale() {
  return useContext(LocaleContext);
}
