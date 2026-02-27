"use client";

import { BookOpen, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { useLocale } from "@/hooks/use-locale";

const certifications = [
  {
    course: "Data Science (Basic Level)",
    provider: "Universidad EAFIT",
    url: "https://www.credly.com/org/universidad-eafit-educacion-permanente/badge/programa-cientifico-de-datos-nivel-basico",
  },
  {
    course: "Data Structures and Algorithms",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-8f220811-1043-4135-92b0-0694ce33a2f7/",
  },
  {
    course: "Technical Support Fundamentals",
    provider: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/XPPUHXP8KMYL",
  },
];

export function Certifications() {
  const { t } = useLocale();

  return (
    <section className="border-t border-bg-tertiary/50 py-20">
      <Container>
        <FadeIn>
          <h2 className="mb-2 text-center text-sm font-medium tracking-wider text-accent-primary">
            {t("certifications.label")}
          </h2>
          <p className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            {t("certifications.title")}
          </p>
        </FadeIn>

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                <BookOpen size={20} />
              </div>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.course} hover={false}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{cert.course}</h3>
                      <p className="text-sm text-text-secondary">
                        {cert.provider}
                      </p>
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent-primary hover:underline"
                    >
                      {t("certifications.viewCertificate")}{" "}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
