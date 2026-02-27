export const siteConfig = {
  name: "Daniel Hernandez",
  title: "Daniel Hernandez - Software Engineer",
  description:
    "Software Engineer combining deep technical expertise with a strong business mindset. I translate complex requirements into scalable solutions that drive performance and profitability.",
  url: "https://dahernando.dev",
  ogImage: "/images/og-default.png",
  links: {
    github: "https://github.com/DanielHernandezO",
    linkedin: "https://linkedin.com/in/dahernando",
    email: "mailto:dahernandoy@gmail.com",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
] as const;
