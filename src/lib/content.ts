import { posts, projects } from "#site/content";

export function getPublishedPosts() {
  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug && post.published);
}

export function getAllTags(): string[] {
  const tags = posts.filter((p) => p.published).flatMap((post) => post.tags);
  return [...new Set(tags)].sort();
}

export function getPostsByTag(tag: string) {
  return getPublishedPosts().filter((post) => post.tags.includes(tag));
}

export function getPublishedProjects() {
  return projects
    .filter((project) => project.published)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getFeaturedProjects() {
  return getPublishedProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug === slug && project.published
  );
}

export function getProjectTags(): string[] {
  const tags = projects
    .filter((p) => p.published)
    .flatMap((project) => project.tags);
  return [...new Set(tags)].sort();
}
