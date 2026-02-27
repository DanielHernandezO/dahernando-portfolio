"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { getPublishedPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { useLocale } from "@/hooks/use-locale";

export function FeaturedPosts() {
  const posts = getPublishedPosts().slice(0, 3);
  const { t } = useLocale();

  if (posts.length === 0) return null;

  return (
    <section className="py-20">
      <Container>
        <FadeIn>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-2 text-sm font-medium tracking-wider text-accent-primary">
                {t("blogHome.label")}
              </h2>
              <p className="text-2xl font-bold sm:text-3xl">
                {t("blogHome.title")}
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-1 text-sm font-medium text-accent-primary hover:underline sm:flex"
            >
              {t("blogHome.viewAll")} <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full">
                  <time className="text-xs text-text-secondary">
                    {formatDate(post.date)}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                    {post.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent-primary hover:underline"
          >
            {t("blogHome.viewAllMobile")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
