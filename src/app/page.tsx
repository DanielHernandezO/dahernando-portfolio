import { Hero } from "@/components/sections/hero";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
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
      <ExperiencePreview />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
}
