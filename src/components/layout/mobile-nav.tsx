"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg-primary backdrop-blur-md"
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-text-primary">
                  DH<span className="text-accent-primary">.</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:text-text-primary"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
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
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-xl font-medium transition-colors",
                        pathname === item.href
                          ? "text-accent-primary"
                          : "text-text-secondary hover:text-text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
