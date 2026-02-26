export const siteConfig = {
  name: "Daniel Hernandez",
  title: "Daniel Hernandez - Software Engineer",
  description:
    "Software Engineer specializing in distributed systems, payments infrastructure, and scalable backend architecture. Currently at YUNO.",
  url: "https://dahernando.dev",
  ogImage: "/images/og-default.png",
  links: {
    github: "https://github.com/DanielHernandezO",
    linkedin: "https://linkedin.com/in/dahernando",
    email: "mailto:danielhernandezosorio@gmail.com",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
] as const;
