"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/brand-mark";
import { useLocale } from "@/hooks/use-locale";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: siteConfig.links.email,
    icon: Mail,
  },
];

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-bg-tertiary/50 py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <BrandMark size={22} />
            <p className="text-sm text-text-secondary">
              &copy; {new Date().getFullYear()} Daniel Hernandez.{" "}
              {t("footer.rights")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-accent-primary"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
