"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";

const technologies = [
  { name: "Go", color: "#00ADD8" },
  { name: "Java", color: "#ED8B00" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Redis", color: "#DC382D" },
  { name: "Kafka", color: "#231F20" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "AWS", color: "#FF9900" },
  { name: "gRPC", color: "#244C5A" },
  { name: "Git", color: "#F05032" },
  { name: "Linux", color: "#FCC624" },
  { name: "Terraform", color: "#7B42BC" },
];

export function TechStack() {
  return (
    <section className="border-y border-bg-tertiary/50 py-20">
      <Container>
        <FadeIn>
          <h2 className="mb-2 text-center text-sm font-medium tracking-wider text-accent-primary">
            TECH STACK
          </h2>
          <p className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            Technologies I Work With
          </p>
        </FadeIn>
      </Container>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-bg-primary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-bg-primary to-transparent" />

        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1200] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
          }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group flex shrink-0 items-center gap-3 rounded-xl border border-bg-tertiary bg-bg-secondary px-6 py-4 transition-all hover:border-accent-primary/30"
            >
              <div
                className="h-3 w-3 rounded-full opacity-50 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: tech.color }}
              />
              <span className="text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
