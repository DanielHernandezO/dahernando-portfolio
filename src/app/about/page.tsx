"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { useLocale } from "@/hooks/use-locale";

const photos = [
  {
    src: "/images/about/traveling.jpg",
    alt: "Traveling",
    caption: "Exploring new places",
  },
  {
    src: "/images/about/family.jpg",
    alt: "Family",
    caption: "Family time",
  },
  {
    src: "/images/about/friends-1.jpg",
    alt: "Friends",
    caption: null,
  },
  {
    src: "/images/about/meli-team-1.jpg",
    alt: "Mercado Libre team",
    caption: "Team at Mercado Libre",
  },
  {
    src: "/images/about/meli-team-2.jpg",
    alt: "Mercado Libre team",
    caption: "Work team",
  },
  {
    src: "/images/about/friends-2.jpg",
    alt: "Friends",
    caption: "Good times",
  },
  {
    src: "/images/about/friends-3.jpg",
    alt: "Friends",
    caption: "Adventures",
  },
  {
    src: "/images/about/friends-4.jpg",
    alt: "Friends",
    caption: "Memories",
  },
];

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <section className="py-20">
      <Container>
        {/* Personal Introduction */}
        <FadeIn>
          <div className="mb-16 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border-2 border-accent-primary/20">
              <Image
                src="/images/about/me.jpg"
                alt="Daniel Hernandez"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold">{t("about.title")}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
                {t("about.introText")}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Life Beyond Code */}
        <FadeIn>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                <Heart size={20} />
              </div>
              <h2 className="text-2xl font-bold">{t("about.beyondCode")}</h2>
            </div>
            <p className="mb-8 max-w-2xl text-text-secondary">
              {t("about.beyondCodeText")}
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((photo) => (
                <div
                  key={photo.src}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  {photo.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
