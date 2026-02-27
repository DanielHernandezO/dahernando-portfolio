"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { getFeaturedProjects } from "@/lib/content";
import { useLocale } from "@/hooks/use-locale";

export function FeaturedProjects() {
  const projects = getFeaturedProjects().slice(0, 3);
  const { t } = useLocale();

  if (projects.length === 0) return null;

  return (
    <section className="border-t border-bg-tertiary/50 py-20">
      <Container>
        <FadeIn>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-2 text-sm font-medium tracking-wider text-accent-primary">
                {t("projects.label")}
              </h2>
              <p className="text-2xl font-bold sm:text-3xl">
                {t("projects.title")}
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-accent-primary hover:underline sm:flex"
            >
              {t("projects.viewAll")} <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <Link href={`/projects/${project.slug}`}>
                <Card className="flex h-full flex-col">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3 border-t border-bg-tertiary pt-4">
                    {project.repository && (
                      <span className="flex items-center gap-1 text-xs text-text-secondary">
                        <Github size={14} /> {t("projects.code")}
                      </span>
                    )}
                    {project.url && (
                      <span className="flex items-center gap-1 text-xs text-text-secondary">
                        <ExternalLink size={14} /> {t("projects.live")}
                      </span>
                    )}
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
