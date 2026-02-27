"use client";

import { PenLine } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PostCard } from "@/components/blog/post-card";
import { Badge } from "@/components/ui/badge";
import { getPublishedPosts, getAllTags } from "@/lib/content";
import { useLocale } from "@/hooks/use-locale";

export default function BlogPage() {
  const posts = getPublishedPosts();
  const tags = getAllTags();
  const { t } = useLocale();

  return (
    <section className="py-20">
      <Container>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">{t("blog.title")}</h1>
          <p className="text-lg text-text-secondary">
            {t("blog.description")}
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

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                description={post.description}
                slug={post.slug}
                date={post.date}
                tags={post.tags}
                metadata={post.metadata}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-md py-20 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-bg-secondary text-text-secondary">
              <PenLine size={28} />
            </div>
            <h2 className="mb-3 text-xl font-semibold">
              {t("blog.emptyTitle")}
            </h2>
            <p className="text-text-secondary">{t("blog.emptyDescription")}</p>
          </div>
        )}
      </Container>
    </section>
  );
}
