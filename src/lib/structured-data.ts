import { siteConfig } from "./constants";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Andres Hernandez Oyola",
    alternateName: ["Daniel Hernandez", "Daniel Hernandez Oyola"],
    url: siteConfig.url,
    jobTitle: "Software Engineer",
    description:
      "Software Engineer focused on building scalable backend systems. Experience at Mercado Libre and Yuno designing high-performance payment and commerce solutions.",
    image: `${siteConfig.url}/images/profile.jpg`,
    worksFor: {
      "@type": "Organization",
      name: "YUNO",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Universidad EAFIT",
      },
    ],
    knowsAbout: [
      "Go",
      "Java",
      "TypeScript",
      "Distributed Systems",
      "Microservices",
      "Backend Engineering",
      "gRPC",
      "Kafka",
      "Kubernetes",
      "Docker",
      "AWS",
      "Google Cloud",
      "PostgreSQL",
      "Redis",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
      addressRegion: "Colombia",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
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
