"use client";

import { Award, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { useLocale } from "@/hooks/use-locale";

const education = [
  {
    degree: "Software Development Specialization",
    institution: "Universidad EAFIT",
    period: "Jul 2025 — Dec 2025",
  },
  {
    degree: "Bachelor's degree, Computer Science",
    institution: "Universidad EAFIT",
    period: "Jan 2020 — Dec 2024",
  },
  {
    degree: "Associate's degree, Computer Science",
    institution: "Politécnico Colombiano 'Jaime Isaza Cadavid'",
    period: "2018 — 2019",
  },
];

const achievements = [
  {
    title: "Honorable Mention — South America North Finals",
    description: "ICPC (International Collegiate Programming Contest)",
  },
  {
    title: "14th place out of 41 — South America North Finals",
    description: "ICPC (International Collegiate Programming Contest)",
  },
];

export function Education() {
  const { t } = useLocale();

  return (
    <section className="border-t border-bg-tertiary/50 py-20">
      <Container>
        <FadeIn>
          <h2 className="mb-2 text-center text-sm font-medium tracking-wider text-accent-primary">
            {t("education.label")}
          </h2>
          <p className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            {t("education.title")}
          </p>
        </FadeIn>

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                  <GraduationCap size={20} />
                </div>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.degree} hover={false}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-text-secondary">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm text-accent-primary">
                        {edu.period}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-bold">
                  {t("education.achievementsTitle")}
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {achievements.map((item) => (
                  <Card key={item.title} hover={false}>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
