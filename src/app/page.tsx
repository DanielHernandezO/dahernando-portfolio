import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { FeaturedPosts } from "@/components/sections/featured-posts";
import { ContactCTA } from "@/components/sections/contact-cta";
import { personJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <Hero />
      <TechStack />
      <ExperiencePreview />
      <FeaturedProjects />
      <FeaturedPosts />
      <ContactCTA />
    </>
  );
}
