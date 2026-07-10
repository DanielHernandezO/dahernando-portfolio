import type { Metadata } from "next";
import { inter, jetbrainsMono, spaceGrotesk } from "@/lib/fonts";
import { siteConfig } from "@/lib/constants";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LocaleProvider } from "@/context/locale-context";
import { websiteJsonLd } from "@/lib/structured-data";
import "@/styles/globals.css";
import "@/styles/prose.css";

export const metadata: Metadata = {
  verification: {
    google: "uHrJqhu_ocagAJAe616bAJYYG6_w0ykyr1BEUYsKacw",
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Daniel Hernandez",
    "Daniel Andres Hernandez Oyola",
    "Daniel Hernandez Oyola",
    "Hernandez Oyola",
    "Daniel Hernandez Software Engineer",
    "Daniel Hernandez Colombia",
    "Software Engineer Colombia",
    "Backend Engineer",
    "Go Developer",
    "Java Developer",
    "Distributed Systems",
    "Mercado Libre Engineer",
    "Yuno Engineer",
    "EAFIT",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-bg-primary font-sans text-text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LocaleProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
