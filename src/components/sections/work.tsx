"use client";

import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/hooks/use-locale";

export function Work() {
  const { t } = useLocale();

  return (
    <section id="work" className="border-t border-bg-tertiary/50 py-24 sm:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="brand-overline mb-3">{t("work.label")}</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t("work.title")}</h2>
        </div>

        {/* Featured — Reconstructora Medellín */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-bg-tertiary bg-bg-secondary p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 brand-glow opacity-70" />
          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-wider text-accent-primary">
              {t("work.reconstructora.type")}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-text-primary sm:text-3xl">
              {t("work.reconstructora.client")}
            </h3>
            <p className="mt-4 max-w-2xl text-text-secondary">
              {t("work.reconstructora.summary")}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {(["m1label", "m2label", "m3label"] as const).map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-2 rounded-lg border border-bg-tertiary bg-bg-primary/40 px-4 py-3"
                >
                  <Check size={16} className="shrink-0 text-accent-primary" />
                  <span className="text-sm text-text-secondary">
                    {t(`work.reconstructora.${m}`)}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-medium text-accent-primary transition-opacity hover:opacity-80"
            >
              {t("work.readCase")} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Bridge to the employment track record — ML & Yuno live in Experience */}
        <p className="mt-6 text-sm text-text-tertiary">
          {t("work.backing")}{" "}
          <a
            href="#experience"
            className="font-medium text-text-secondary underline decoration-bg-tertiary underline-offset-4 transition-colors hover:text-accent-primary"
          >
            {t("work.backingLink")}
          </a>
        </p>
      </Container>
    </section>
  );
}
