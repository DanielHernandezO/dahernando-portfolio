import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
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
      <Services />
      <Work />
      <ExperiencePreview />
      <Skills />
      <Education />
      <ContactCTA />
    </>
  );
}
