import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";
import { webPageSchema } from "@/lib/schema";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStripSection } from "@/components/sections/LogoStripSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Anna Amandusson — Social Media Manager & Marknadsföring | Mad Sun Marketing",
  description:
    "Frilans social media manager och marknadsföringsstrateg. Hjälper företag med content, strategi, varumärkesbyggande och eventmarknadsföring. Baserad i Sverige.",
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  const schema = webPageSchema({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HeroSection />
      <LogoStripSection />
      <AboutSection />
      <CoursesSection />
      <WorkSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />

    </>
  );
}
