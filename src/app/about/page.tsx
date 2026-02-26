import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, Briefcase, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Engineer passionate about distributed systems, payments infrastructure, and building scalable backend services.",
};

const highlights = [
  {
    icon: Briefcase,
    title: "Currently",
    description:
      "Software Engineer at YUNO, building payment orchestration infrastructure serving merchants across Latin America.",
  },
  {
    icon: BookOpen,
    title: "Previously",
    description:
      "Software Engineer at Mercado Libre, working on large-scale marketplace systems handling millions of daily transactions.",
  },
  {
    icon: Award,
    title: "ICPC Finalist",
    description:
      "Latin American ICPC Regional Finalist. Competitive programming sharpened my problem-solving and algorithmic thinking.",
  },
  {
    icon: MapPin,
    title: "Education",
    description:
      "Systems Engineering at EAFIT University, Medellín, Colombia.",
  },
];

const skills = {
  Languages: ["Go", "Java", "TypeScript", "Python"],
  Backend: ["gRPC", "REST", "Kafka", "Redis", "PostgreSQL"],
  Infrastructure: ["Docker", "Kubernetes", "AWS", "Terraform", "Linux"],
  Practices: [
    "Distributed Systems",
    "Microservices",
    "Event-Driven Architecture",
    "CI/CD",
  ],
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container>
        <FadeIn>
          <div className="mb-16 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border-2 border-accent-primary/20">
              <Image
                src="/images/profile.jpg"
                alt="Daniel Hernandez"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold">About Me</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
                I&apos;m Daniel, a Software Engineer based in Colombia. I
                specialize in building scalable distributed systems and payment
                infrastructure. I care deeply about writing clean, reliable code
                that handles real-world complexity — especially when money is
                involved.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <Card hover={false} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h2 className="mb-8 text-2xl font-bold">Skills & Technologies</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-medium tracking-wider text-accent-primary">
                  {category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
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
