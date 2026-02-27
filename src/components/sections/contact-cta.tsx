"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/lib/constants";
import { useLocale } from "@/hooks/use-locale";

export function ContactCTA() {
  const { t } = useLocale();

  return (
    <section className="border-t border-bg-tertiary/50 py-24">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-2 text-sm font-medium tracking-wider text-accent-primary">
              {t("contact.label")}
            </h2>
            <p className="mb-4 text-3xl font-bold sm:text-4xl">
              {t("contact.title")}
            </p>
            <p className="mb-8 text-text-secondary">
              {t("contact.description")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={siteConfig.links.email}
                variant="primary"
                size="lg"
                external
              >
                <Mail size={18} /> {t("contact.cta")}
              </Button>
              <Button
                href={siteConfig.links.github}
                variant="outline"
                size="md"
                external
              >
                <Github size={18} /> GitHub
              </Button>
              <Button
                href={siteConfig.links.linkedin}
                variant="outline"
                size="md"
                external
              >
                <Linkedin size={18} /> LinkedIn
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
