export const siteConfig = {
  name: "Daniel Hernandez",
  title: "Daniel Hernández · Backend & Payments Engineer",
  description:
    "Backend software engineer specialized in distributed systems and payments. I build products, architecture, and custom software companies rely on. Yuno · ex-Mercado Libre.",
  url: "https://danielhernandezo.com",
  ogImage: "/images/og-default.png",
  links: {
    github: "https://github.com/DanielHernandezO",
    linkedin: "https://www.linkedin.com/in/danielhernandezoyola",
    email: "mailto:dahernandoy@gmail.com",
  },
} as const;

export const navItems = [
  { labelKey: "nav.services", href: "/#services" },
  { labelKey: "nav.work", href: "/#work" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.blog", href: "/blog" },
] as const;
