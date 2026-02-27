"use client";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { useLocale } from "@/hooks/use-locale";

const skills: Record<string, { labelKey: string; items: string[] }> = {
  languages: {
    labelKey: "skills.languages",
    items: ["Go", "Java", "TypeScript", "Python", "C++"],
  },
  backend: {
    labelKey: "skills.backend",
    items: [
      "gRPC",
      "REST",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "MySQL",
      "Spring Boot",
      "Gin",
    ],
  },
  infrastructure: {
    labelKey: "skills.infrastructure",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Linux",
      "Terraform",
    ],
  },
  practices: {
    labelKey: "skills.practices",
    items: [
      "Distributed Systems",
      "Microservices",
      "Event-Driven Architecture",
      "CI/CD",
      "Observability",
      "System Design",
    ],
  },
};

export function Skills() {
  const { t } = useLocale();

  return (
    <section className="border-t border-bg-tertiary/50 py-20">
      <Container>
        <FadeIn>
          <p className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            {t("skills.title")}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(skills).map((category) => (
              <div key={category.labelKey}>
                <h3 className="mb-3 text-sm font-medium tracking-wider text-accent-primary">
                  {t(category.labelKey)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
