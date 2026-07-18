"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease },
});

const PACKAGES = [
  {
    number: "01",
    name: "Content",
    tagline: "För företag som behöver hjälp med att hålla sina kanaler aktiva.",
    included: [
      "Innehållsproduktion",
      "Grafiskt material",
      "Bildtexter & copy",
      "Publicering enligt överenskommen plan",
      "Grundläggande innehållsplanering",
    ],
    fits: "Mindre företag som vill ha kontinuerlig närvaro i sociala medier men saknar tid att skapa innehållet själva.",
    deliveryLabel: "Leverans",
    deliveryText: "Exempelvis 4–8 inlägg per månad plus stories enligt överenskommelse.",
    price: "4 000–8 000 kr/mån",
    featured: false,
  },
  {
    number: "02",
    name: "Strategi & Varumärke",
    tagline: "För företag som vill bygga en tydlig och professionell närvaro.",
    included: [
      "Allt i Content-paketet",
      "Innehållsstrategi",
      "Innehållskalender",
      "Varumärkesanpassning",
      "Visuell konsekvens",
      "Målgruppskommunikation",
      "Löpande analys och optimering",
      "Månadsvis uppföljning",
    ],
    fits: "Företag som vill skapa en starkare identitet och arbeta mer strategiskt med sociala medier.",
    deliveryLabel: "Fokus",
    deliveryText: "Synlighet, igenkänning och långsiktigt varumärkesbyggande.",
    price: "8 000–15 000 kr/mån",
    featured: true,
  },
  {
    number: "03",
    name: "Full Service Marketing",
    tagline: "För företag som vill ha en extern marknadsavdelning.",
    included: [
      "Allt i Strategi & Varumärke",
      "Meta-annonsering",
      "Kampanjplanering",
      "Hantering av annonsbudget",
      "Resultatrapportering",
      "Kreativ konceptutveckling",
      "Partnerkoordinering",
      "Löpande rådgivning",
    ],
    fits: "Företag som vill växa, generera fler leads, sälja mer eller stärka sitt varumärke.",
    deliveryLabel: "Fokus",
    deliveryText: "Tillväxt, räckvidd och mätbara resultat.",
    price: "15 000–30 000+ kr/mån",
    featured: false,
  },
];

const ADDONS = [
  "Foto på plats",
  "Videoproduktion / Reels",
  "Eventmarknadsföring",
  "Grafisk design",
  "Affischer och trycksaker",
  "Nyhetsbrev",
  "LinkedIn-marknadsföring",
  "Eventkoordinering",
];

export function PricingSection() {
  return (
    <section id="priser" aria-labelledby="pricing-heading" className="w-full bg-brand-linen">
      <div className="layout-container section-padding">

        <div className="mb-14">
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
            <motion.div
              className="h-px bg-brand-espresso/30"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            />
            <span className="font-cinzel text-[11px] uppercase tracking-[0.26em] text-brand-espresso/50">
              Tjänster &amp; Paket
            </span>
          </motion.div>
          <motion.h2
            id="pricing-heading"
            {...fadeUp(0.06)}
            className="font-inter font-semibold text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-brand-espresso"
          >
            Välj ditt paket
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="font-inter text-[15px] text-brand-espresso/60 mt-3 max-w-[52ch]"
          >
            Alla paket anpassas efter dina behov och mål. Kontakta mig så hittar vi rätt upplägg tillsammans.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.number}
              {...fadeUp(0.1 + i * 0.08)}
              className={cn(
                "relative flex flex-col rounded-2xl p-8 gap-6",
                pkg.featured
                  ? "bg-brand-espresso text-white"
                  : "bg-white text-brand-espresso border border-brand-espresso/8"
              )}
            >

              <div className="flex flex-col gap-2">
                <span className={cn("font-inter text-[11px] font-medium", pkg.featured ? "text-white/40" : "text-brand-espresso/35")}>
                  Paket {pkg.number}
                </span>
                <h3 className={cn("font-inter font-bold text-[1.25rem] leading-tight", pkg.featured ? "text-white" : "text-brand-espresso")}>
                  {pkg.name}
                </h3>
                <p className={cn("font-inter text-[13px] leading-relaxed", pkg.featured ? "text-white/65" : "text-brand-espresso/55")}>
                  {pkg.tagline}
                </p>
              </div>

              <div className={cn("h-px", pkg.featured ? "bg-white/12" : "bg-brand-espresso/10")} />

              <div className="flex flex-col gap-2">
                <p className={cn("font-cinzel text-[10px] font-semibold uppercase tracking-[0.22em] mb-1", pkg.featured ? "text-white/60" : "text-brand-espresso/55")}>
                  Ingår
                </p>
                <motion.div
                  className="flex flex-col gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                >
                  {pkg.included.map((item) => (
                    <motion.div
                      key={item}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
                      }}
                      className="flex items-start gap-3"
                    >
                      <Check className={cn("w-4 h-4 shrink-0 mt-0.5", pkg.featured ? "text-white/70" : "text-brand-espresso/50")} strokeWidth={2.5} />
                      <span className={cn("font-inter text-[13px] leading-snug", pkg.featured ? "text-white/80" : "text-brand-espresso/75")}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className={cn("h-px", pkg.featured ? "bg-white/12" : "bg-brand-espresso/10")} />

              <div className="flex flex-col gap-2">
                <p className={cn("font-cinzel text-[10px] font-semibold uppercase tracking-[0.22em]", pkg.featured ? "text-white/60" : "text-brand-espresso/55")}>
                  Passar
                </p>
                <p className={cn("font-inter text-[13px] leading-relaxed", pkg.featured ? "text-white/70" : "text-brand-espresso/60")}>
                  {pkg.fits}
                </p>
              </div>

              <div className={cn("rounded-xl p-4 mt-auto", pkg.featured ? "bg-white/10" : "bg-brand-espresso/5")}>
                <p className={cn("font-cinzel text-[10px] font-semibold uppercase tracking-[0.22em] mb-1", pkg.featured ? "text-white/60" : "text-brand-espresso/55")}>
                  {pkg.deliveryLabel}
                </p>
                <p className={cn("font-inter text-[13px] leading-relaxed", pkg.featured ? "text-white/75" : "text-brand-espresso/65")}>
                  {pkg.deliveryText}
                </p>
              </div>

              <p className={cn("font-inter text-[1.2rem] font-bold text-center", pkg.featured ? "text-white" : "text-brand-espresso")}>
                {pkg.price}
              </p>

              <a
                href="#kontakt"
                className={cn(
                  "inline-flex items-center justify-center rounded-full py-3 px-6",
                  "font-public-sans text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                  pkg.featured ? "bg-brand-sky text-brand-espresso hover:bg-brand-sky/90" : "bg-brand-sky text-brand-espresso hover:bg-brand-sky/80"
                )}
              >
                Kom igång
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.3)} className="mt-14 rounded-2xl bg-brand-sky p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:gap-16 gap-6">
            <div className="shrink-0">
              <p className="font-cinzel text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-espresso/55 mb-2">Lägg till</p>
              <h3 className="font-inter font-bold text-[1.1rem] text-brand-espresso">Tilläggstjänster</h3>
              <p className="font-inter text-[13px] text-brand-espresso/55 mt-2 max-w-[28ch]">Kombinera med valfritt paket efter behov.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3 flex-1">
              {ADDONS.map((addon) => (
                <div key={addon} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-espresso/25 shrink-0" />
                  <span className="font-inter text-[13px] text-brand-espresso/70">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}