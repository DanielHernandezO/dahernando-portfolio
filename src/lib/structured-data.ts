import { siteConfig } from "./constants";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "YUNO",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };
}

export function blogPostJsonLd(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };
}
