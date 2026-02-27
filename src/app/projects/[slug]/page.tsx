import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getPublishedProjects } from "@/lib/content";
import { ProjectDetail } from "@/components/sections/project-detail";

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
    <ProjectDetail
      title={project.title}
      description={project.description}
      slug={project.slug}
      date={project.date}
      tags={project.tags}
      repository={project.repository}
      url={project.url}
      body={project.body}
    />
  );
}
