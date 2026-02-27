"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { useLocale } from "@/hooks/use-locale";

const experiences = [
  {
    company: "YUNO",
    roles: [{ title: "Backend Engineer", period: "Nov 2025 — Present" }],
    bullets: [
      "Led development of the Smart Routing module, enabling dynamic transaction routing to optimize approval rates and reduce processing costs across multiple payment providers",
      "Built a real-time event processing pipeline using Kafka and Go, handling high-throughput transaction events with sub-second latency",
      "Designed and implemented RESTful and gRPC APIs for merchant onboarding and configuration management",
      "Improved system reliability by implementing circuit breakers, retry policies, and distributed tracing across microservices",
      "Collaborated with product and commercial teams to translate business requirements into scalable backend solutions",
    ],
    tags: [
      "Go",
      "Gin",
      "Java",
      "Spring Boot",
      "Redis",
      "gRPC",
      "Docker",
      "Kubernetes",
    ],
    highlight: true,
    icon: "briefcase" as const,
  },
  {
    company: "Mercado Libre",
    roles: [
      { title: "Software Engineer", period: "Jan 2023 — Nov 2025" },
      { title: "Software Developer", period: "Jan 2022 — Jan 2023" },
    ],
    bullets: [
      "Reduced operational costs by millions through automation and optimization of backend services in Go and Java",
      "Enhanced observability by 75% by implementing comprehensive monitoring dashboards and alerting with Datadog",
      "Secured data for 23K+ users by designing and implementing data protection mechanisms across services",
      "Built event-driven microservices processing millions of daily transactions using Kafka and PostgreSQL",
      "Contributed to a platform serving 200M+ users across Latin America, focusing on performance and reliability",
    ],
    tags: ["Go", "Java", "Kafka", "PostgreSQL", "Datadog", "Docker", "AWS"],
    highlight: false,
    icon: "briefcase" as const,
  },
  {
    company: "Universidad EAFIT",
    roles: [{ title: "Teacher Assistant", period: "Jun 2021 — Dec 2021" }],
    bullets: [
      "Supported courses in data structures and algorithms, guiding students through complex problem-solving exercises",
      "Evaluated assignments and provided mentorship to undergraduate students",
    ],
    tags: [],
    highlight: false,
    icon: "graduation" as const,
  },
];

export function ExperiencePreview() {
  const { t } = useLocale();

  return (
    <section className="py-20">
      <Container>
        <FadeIn>
          <h2 className="mb-2 text-center text-sm font-medium tracking-wider text-accent-primary">
            {t("experience.label")}
          </h2>
          <p className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            {t("experience.title")}
          </p>
        </FadeIn>

        <div className="mx-auto max-w-3xl">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.15}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                      exp.highlight
                        ? "border-accent-primary bg-accent-primary/10 text-accent-primary"
                        : "border-bg-tertiary bg-bg-secondary text-text-secondary"
                    }`}
                  >
                    {exp.icon === "graduation" ? (
                      <GraduationCap size={18} />
                    ) : (
                      <Briefcase size={18} />
                    )}
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="mt-2 h-full w-px bg-bg-tertiary" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  {exp.roles.map((role) => (
                    <div
                      key={role.title}
                      className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
                    >
                      <span className="text-sm font-medium text-text-primary">
                        {role.title}
                      </span>
                      <span className="text-sm text-accent-primary">
                        {role.period}
                      </span>
                    </div>
                  ))}
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-text-secondary"
                      >
                        <span className="mr-2 text-accent-primary">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {exp.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </Container>
    </section>
  );
}
