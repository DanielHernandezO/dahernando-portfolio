"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/prose";
import { MdxContent } from "@/components/mdx/mdx-content";
import { useLocale } from "@/hooks/use-locale";
import { getProjectContentEs } from "@/lib/project-content-es";
import { formatDate } from "@/lib/utils";

interface ProjectDetailProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  repository?: string;
  url?: string;
  body: string;
}

export function ProjectDetail({
  title,
  description,
  slug,
  date,
  tags,
  repository,
  url,
  body,
}: ProjectDetailProps) {
  const { t, locale } = useLocale();

  const translatedDescription =
    t(`projects.descriptions.${slug}`) !== `projects.descriptions.${slug}`
      ? t(`projects.descriptions.${slug}`)
      : description;

  const esContent = locale === "es" ? getProjectContentEs(slug) : null;

  return (
    <article className="py-20">
      <Container>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"
        >
          <ArrowLeft size={14} /> {t("projects.backToProjects")}
        </Link>

        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="accent">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mb-6 text-lg text-text-secondary">
            {translatedDescription}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-text-secondary">
              {formatDate(date)}
            </span>
            {repository && (
              <Button href={repository} variant="outline" size="sm" external>
                <Github size={16} /> {t("projects.sourceCode")}
              </Button>
            )}
            {url && (
              <Button href={url} variant="primary" size="sm" external>
                <ExternalLink size={16} /> {t("projects.liveDemo")}
              </Button>
            )}
          </div>
        </header>

        <Prose>
          {esContent ? esContent : <MdxContent code={body} />}
        </Prose>
      </Container>
    </article>
  );
}
