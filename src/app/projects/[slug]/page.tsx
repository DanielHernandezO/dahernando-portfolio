import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/prose";
import { MdxContent } from "@/components/mdx/mdx-content";
import { getProjectBySlug, getPublishedProjects } from "@/lib/content";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="py-20">
      <Container>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="accent">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mb-6 text-lg text-text-secondary">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-text-secondary">
              {formatDate(project.date)}
            </span>
            {project.repository && (
              <Button
                href={project.repository}
                variant="outline"
                size="sm"
                external
              >
                <Github size={16} /> Source Code
              </Button>
            )}
            {project.url && (
              <Button href={project.url} variant="primary" size="sm" external>
                <ExternalLink size={16} /> Live Demo
              </Button>
            )}
          </div>
        </header>

        <Prose>
          <MdxContent code={project.body} />
        </Prose>
      </Container>
    </article>
  );
}
