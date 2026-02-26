import type { Metadata } from "next";
import { siteConfig } from "./constants";

interface PageMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export function createMetadata({
  title,
  description,
  image,
  path = "",
}: PageMetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const pageImage = image ?? siteConfig.ogImage;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: pageImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
