"use client";

import { motion } from "motion/react";
import { Boxes, Network, Building2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/hooks/use-locale";

const pillars = [
  { key: "product", n: "01", icon: Boxes },
  { key: "consulting", n: "02", icon: Network },
  { key: "systems", n: "03", icon: Building2 },
] as const;

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="border-t border-bg-tertiary/50 py-24 sm:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="brand-overline mb-3">{t("services.label")}</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map(({ key, n, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-xl border border-bg-tertiary bg-bg-secondary p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-primary/60"
              >
                <div className="mb-6 flex items-center justify-between">
                  <Icon className="text-accent-primary" size={26} strokeWidth={1.5} />
                  <span className="font-mono text-sm text-text-tertiary">{n}</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {t(`services.${key}.name`)}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent-primary">
                  {t(`services.${key}.headline`)}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {t(`services.${key}.description`)}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-bg-tertiary pt-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
                    {t(`services.${key}.who`)}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-text-tertiary transition-colors group-hover:text-accent-primary"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
