import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter, Cinzel, DM_Sans, Public_Sans, Caveat } from "next/font/google";
import { defaultMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/app/globals.css";

/* ── Fonts ─────────────────────────────────────────────────────────────── */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
  preload: false,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-open-sauce",
  display: "swap",
  preload: true,
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-public-sans",
  display: "swap",
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});

/* ── Metadata ───────────────────────────────────────────────────────────── */

export const metadata = defaultMetadata;

/* ── Layout ─────────────────────────────────────────────────────────────── */

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = [organizationSchema(), websiteSchema()];

  return (
    <html
      lang="sv"
      className={`${cormorant.variable} ${inter.variable} ${cinzel.variable} ${dmSans.variable} ${publicSans.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
