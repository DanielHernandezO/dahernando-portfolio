import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PostCard } from "@/components/blog/post-card";
import { Badge } from "@/components/ui/badge";
import { getPublishedPosts, getAllTags } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on distributed systems, payments, Go, and software engineering.",
};

export default function BlogPage() {
  const posts = getPublishedPosts();
  const tags = getAllTags();

  return (
    <section className="py-20">
      <Container>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Blog</h1>
          <p className="text-lg text-text-secondary">
            Thoughts on distributed systems, payments, and software engineering.
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

        {posts.length === 0 && (
          <p className="text-center text-text-secondary">
            No posts yet. Check back soon!
          </p>
        )}
      </Container>
    </section>
  );
}
