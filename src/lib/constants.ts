export const siteConfig = {
  name: "Daniel Hernandez",
  title: "Daniel Hernandez - Software Engineer",
  description:
    "Software Engineer combining deep technical expertise with a strong business mindset. I translate complex requirements into scalable solutions that drive performance and profitability.",
  url: "https://danielhernandezo.com",
  ogImage: "/images/og-default.png",
  links: {
    github: "https://github.com/DanielHernandezO",
    linkedin: "https://www.linkedin.com/in/danielhernandezoyola",
    email: "mailto:dahernandoy@gmail.com",
  },
} as const;

export const navItems = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.projects", href: "/projects" },
] as const;
