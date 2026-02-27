import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open source projects and experiments in distributed systems, networking, and backend engineering.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
