"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { getPublishedProjects, getProjectTags } from "@/lib/content";
import { useLocale } from "@/hooks/use-locale";

export default function ProjectsPage() {
  const projects = getPublishedProjects();
  const tags = getProjectTags();
  const { t } = useLocale();

  return (
    <section className="py-20">
      <Container>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">
            {t("projects.pageTitle")}
          </h1>
          <p className="text-lg text-text-secondary">
            {t("projects.pageDescription")}
          </p>
        </div>

        {tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <Link href={`/projects/${project.slug}`}>
                <Card className="flex h-full flex-col">
                  {project.featured && (
                    <Badge variant="accent" className="mb-3 self-start">
                      {t("projects.featured")}
                    </Badge>
                  )}
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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

        {projects.length === 0 && (
          <p className="text-center text-text-secondary">
            {t("projects.empty")}
          </p>
        )}
      </Container>
    </section>
  );
}
