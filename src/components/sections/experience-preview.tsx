import { Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

const experiences = [
  {
    company: "YUNO",
    role: "Software Engineer",
    period: "2023 — Present",
    description:
      "Building payment orchestration infrastructure serving merchants across Latin America. Designing and implementing high-throughput transaction processing systems in Go.",
    highlight: true,
  },
  {
    company: "Mercado Libre",
    role: "Software Engineer",
    period: "2022 — 2023",
    description:
      "Worked on large-scale marketplace systems handling millions of daily transactions. Contributed to backend services in Java and Go.",
  },
];

export function ExperiencePreview() {
  return (
    <section className="py-20">
      <Container>
        <FadeIn>
          <h2 className="mb-2 text-center text-sm font-medium tracking-wider text-accent-primary">
            EXPERIENCE
          </h2>
          <p className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            Where I&apos;ve Worked
          </p>
        </FadeIn>

        <div className="mx-auto max-w-2xl">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.15}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                      exp.highlight
                        ? "border-accent-primary bg-accent-primary/10 text-accent-primary"
                        : "border-bg-tertiary bg-bg-secondary text-text-secondary"
                    }`}
                  >
                    <Briefcase size={18} />
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="mt-2 h-full w-px bg-bg-tertiary" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <span className="text-sm text-text-secondary">
                      {exp.role}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent-primary">
                    {exp.period}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {exp.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 text-center">
            <a
              href="/about"
              className="text-sm font-medium text-accent-primary hover:underline"
            >
              View full background →
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
