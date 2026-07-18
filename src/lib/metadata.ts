import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.madsun.se";

export const siteConfig = {
  name: "Mad Sun Marketing",
  tagline: "Sociala medier & digital marknadsföring",
  description:
    "Anna Amandusson hjälper företag att växa på sociala medier. Frilansar inom content creation, strategi, varumärkesbyggande och eventmarknadsföring i Sverige.",
  url: BASE_URL,
  locale: "sv_SE",
  ogImage: `${BASE_URL}/images/og-default.jpg`,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "sociala medier",
    "content creation",
    "marknadsföring",
    "digital marknadsföring",
    "varumärkesstrategi",
    "eventmarknadsföring",
    "Instagram marknadsföring",
    "frilansare marknadsföring",
    "social media manager Sverige",
    "content strateg",
    "Anna Amandusson",
    "Mad Sun Marketing",
  ],
  authors: [{ name: "Anna Amandusson", url: BASE_URL }],
  creator: "Anna Amandusson",
  publisher: "Mad Sun Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: BASE_URL,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Anna Amandusson — Mad Sun Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: BASE_URL,
    languages: { "sv-SE": BASE_URL },
  },
};
