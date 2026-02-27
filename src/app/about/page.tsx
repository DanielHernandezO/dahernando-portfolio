import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Heart,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Engineer combining deep technical expertise with a strong business mindset. Building scalable distributed systems.",
};

const education = [
  {
    degree: "Software Development Specialization",
    institution: "Universidad EAFIT",
    period: "Jul 2025 — Dec 2025",
  },
  {
    degree: "Bachelor's degree, Computer Science",
    institution: "Universidad EAFIT",
    period: "Jan 2020 — Dec 2024",
  },
  {
    degree: "Associate's degree, Computer Science",
    institution: "Politécnico Colombiano 'Jaime Isaza Cadavid'",
    period: "2018 — 2019",
  },
];

const achievements = [
  {
    title: "Honorable Mention — South America North Finals",
    description: "ICPC (International Collegiate Programming Contest)",
  },
  {
    title: "14th place out of 41 — South America North Finals",
    description: "ICPC (International Collegiate Programming Contest)",
  },
];

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

const skills = {
  Languages: ["Go", "Java", "TypeScript", "Python", "C++"],
  Backend: ["gRPC", "REST", "Kafka", "Redis", "PostgreSQL", "MySQL", "Spring Boot", "Gin"],
  Infrastructure: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Linux", "Terraform"],
  Practices: [
    "Distributed Systems",
    "Microservices",
    "Event-Driven Architecture",
    "CI/CD",
    "Observability",
    "System Design",
  ],
};

const photos = [
  { src: "/images/about/traveling.jpg", alt: "Traveling", caption: "Exploring new places" },
  { src: "/images/about/meli-team-1.jpg", alt: "Mercado Libre team", caption: "Team at Mercado Libre" },
  { src: "/images/about/friends-1.jpg", alt: "Friends", caption: "With friends" },
  { src: "/images/about/family.jpg", alt: "Family", caption: "Family time" },
  { src: "/images/about/meli-team-2.jpg", alt: "Mercado Libre team", caption: "Work team" },
  { src: "/images/about/friends-2.jpg", alt: "Friends", caption: "Good times" },
  { src: "/images/about/friends-3.jpg", alt: "Friends", caption: "Adventures" },
  { src: "/images/about/friends-4.jpg", alt: "Friends", caption: "Memories" },
];

export default function AboutPage() {
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
              <h1 className="mb-4 text-4xl font-bold">About Me</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
                I&apos;m Daniel, a Software Engineer based in Colombia,
                combining deep technical expertise with a strong business
                mindset. I thrive in cross-functional teams where clear
                communication and collaboration drive results. Whether
                it&apos;s leading technical initiatives, mentoring teammates,
                or translating complex requirements into scalable solutions — I
                believe the best software is built by people who understand
                both the technology and the problem it solves.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn>
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.degree} hover={false}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-text-secondary">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm text-accent-primary">
                      {edu.period}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Achievements */}
        <FadeIn>
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                <Award size={20} />
              </div>
              <h2 className="text-2xl font-bold">Achievements</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((item) => (
                <Card key={item.title} hover={false}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Certifications & Courses */}
        <FadeIn>
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                <BookOpen size={20} />
              </div>
              <h2 className="text-2xl font-bold">Certifications & Courses</h2>
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
                      View Certificate <ExternalLink size={14} />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Skills & Technologies */}
        <FadeIn>
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">Skills & Technologies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="mb-3 text-sm font-medium tracking-wider text-accent-primary">
                    {category.toUpperCase()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Hobbies & Life */}
        <FadeIn>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                <Heart size={20} />
              </div>
              <h2 className="text-2xl font-bold">Life Beyond Code</h2>
            </div>
            <p className="mb-8 max-w-2xl text-text-secondary">
              When I&apos;m not writing code, you&apos;ll find me traveling and
              exploring new places, spending time with my team, friends, and
              family. I believe the best ideas come from diverse experiences
              and genuine connections.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((photo) => (
                <div key={photo.src} className="group relative overflow-hidden rounded-xl">
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
