import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Engineer combining deep technical expertise with a strong business mindset. Building scalable distributed systems.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
