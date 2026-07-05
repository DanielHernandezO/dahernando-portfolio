"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/ui/brand-mark";
import { useLocale } from "@/hooks/use-locale";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 brand-grid" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[620px] w-[620px] brand-glow" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="brand-overline mb-6">{t("hero.subtitle")}</p>

            <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.75rem]">
              <span className="text-text-primary">{t("hero.headlineTop")}</span>{" "}
              <span className="text-accent-primary">{t("hero.headlineBottom")}</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-text-secondary">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary" size="lg">
                {t("hero.ctaPrimary")} <ArrowRight size={18} />
              </Button>
              <Button href="#work" variant="outline" size="lg">
                {t("hero.ctaSecondary")} <ArrowDown size={18} />
              </Button>
            </div>

            <div className="mt-12 border-t border-bg-tertiary pt-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
                {t("hero.trust")}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-text-secondary">
                <span>Mercado Libre</span>
                <span className="text-bg-tertiary">/</span>
                <span>Yuno</span>
                <span className="text-bg-tertiary">/</span>
                <span>ICPC South America North Finals</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative mx-auto flex aspect-square max-w-[380px] items-center justify-center">
              <div className="pointer-events-none absolute inset-[6%] rounded-full brand-glow" />
              <div className="daho-spin">
                <BrandMark size={300} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-bg-tertiary bg-bg-secondary px-4 py-2 font-mono text-xs text-text-tertiary shadow-lg shadow-black/30">
                <span className="text-text-secondary">$ status:</span>{" "}
                <span className="text-accent-tertiary">healthy</span> · uptime
                99.98%
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
