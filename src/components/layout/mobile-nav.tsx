"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/ui/brand-mark";
import { LanguageToggle } from "./language-toggle";
import { useLocale } from "@/hooks/use-locale";

function MobileNavOverlay({
  onClose,
  pathname,
  t,
}: {
  onClose: () => void;
  pathname: string;
  t: (key: string) => string;
}) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0F0D18",
      }}
    >
      <div className="flex h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2.5 text-lg font-bold text-text-primary">
            <BrandMark size={24} />
            DAHO<span className="text-accent-primary">.</span>
          </span>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:text-text-primary"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        <nav className="mt-12 flex flex-1 flex-col gap-2">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#") && pathname === "/") {
                    e.preventDefault();
                    const id = item.href.slice(2);
                    onClose();
                    setTimeout(
                      () =>
                        document
                          .getElementById(id)
                          ?.scrollIntoView({ behavior: "smooth" }),
                      80,
                    );
                  } else {
                    onClose();
                  }
                }}
                className={cn(
                  "block rounded-lg px-4 py-3 text-xl font-medium transition-colors",
                  pathname === item.href
                    ? "text-accent-primary"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {t(item.labelKey)}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </div>,
    document.body,
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLocale();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:text-text-primary"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {open && (
        <MobileNavOverlay
          onClose={() => setOpen(false)}
          pathname={pathname}
          t={t}
        />
      )}
    </div>
  );
}
