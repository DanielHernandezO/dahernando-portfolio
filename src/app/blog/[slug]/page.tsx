import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Prose } from "@/components/ui/prose";
import { MdxContent } from "@/components/mdx/mdx-content";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { TableOfContents } from "@/components/blog/toc";
import { getPostBySlug, getPublishedPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { blogPostJsonLd } from "@/lib/structured-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd(post)),
        }}
      />

      <article className="py-20">
        <Container>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <header className="mb-12">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="accent">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.metadata.readingTime} min read
              </span>
            </div>
          </header>

          <div className="grid gap-12 xl:grid-cols-[1fr_200px]">
            <Prose>
              <MdxContent code={post.body} />
            </Prose>
            <TableOfContents />
          </div>
        </Container>
      </article>
    </>
  );
}
