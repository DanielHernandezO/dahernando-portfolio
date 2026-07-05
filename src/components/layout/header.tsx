"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/brand-mark";
import { LanguageToggle } from "./language-toggle";
import { MobileNav } from "./mobile-nav";
import { useLocale } from "@/hooks/use-locale";

export function Header() {
  const pathname = usePathname();
  const { t } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-bg-tertiary/50 bg-bg-primary/80 backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-text-primary"
            aria-label="Ir al inicio"
          >
            <BrandMark size={26} className="transition-transform duration-300 group-hover:rotate-[120deg]" />
            <span className="transition-colors group-hover:text-accent-primary">
              DAHO<span className="text-accent-primary">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#") && pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById(item.href.slice(2))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-accent-primary"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <LanguageToggle />
            <Link
              href="/#contact"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="ml-2 rounded-lg bg-accent-primary px-4 py-2 text-sm font-semibold text-bg-primary shadow-lg shadow-accent-primary/20 transition-all hover:brightness-110"
            >
              {t("nav.cta")}
            </Link>
          </nav>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
