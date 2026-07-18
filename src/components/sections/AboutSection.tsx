"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease },
});

const SERVICES = [
  {
    number: "01",
    title: "Sociala medier & content",
    body: "Strategi, innehåll och kampanjer för en stark digital närvaro.",
  },
  {
    number: "02",
    title: "Event & projektledning",
    body: "Koordinering, artist hospitality och genomförande från idé till färdig upplevelse.",
  },
  {
    number: "03",
    title: "Kreativ kommunikation",
    body: "Grafisk form, kampanjmaterial och varumärkesbyggande innehåll.",
  },
];

export function AboutSection() {
  return (
    <section
      id="om-mig"
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden bg-brand-sky"
    >
      <div className="layout-container section-padding">

        {/* ── Eyebrow ───────────────────────────────────────────── */}
        <motion.div {...fadeIn(0)} className="hidden lg:flex items-center gap-4 mb-16">
          <motion.div
            className="h-px bg-brand-espresso/40"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          />
          <span className="font-cinzel text-[12px] uppercase tracking-[0.22em] text-brand-espresso/60">
            Om mig
          </span>
        </motion.div>

        {/* ── Two-column grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── LEFT — Identity & intro ──────────────────────── */}
          <div className="flex flex-col gap-8">

            <motion.span
              {...fadeIn(0.05)}
              className="font-caveat text-[clamp(2rem,3vw,2.8rem)] text-brand-espresso/70"
            >
              Hej! Jag heter Anna
            </motion.span>

            <motion.h2
              id="about-heading"
              {...fadeUp(0.1)}
              className="font-cormorant font-medium italic text-[clamp(2.2rem,3.5vw,3.4rem)] leading-[1.12] text-brand-espresso -mt-2"
            >
              Kreativ marknadsföring<br />
              med struktur bakom<br />
              kulisserna.
            </motion.h2>

            <motion.p
              {...fadeUp(0.16)}
              className="hidden lg:block font-inter text-[17px] font-normal leading-[1.8] text-brand-espresso/85 border-l-2 border-brand-espresso/25 pl-5"
            >
              Jag hjälper företag, varumärken och event att synas, engagera
              och skapa upplevelser som människor kommer ihåg.
            </motion.p>

            <motion.div
              {...fadeUp(0.22)}
              className="flex flex-col gap-4 font-inter text-[15px] leading-[1.85] text-brand-espresso/75"
            >
              <p>
                Sedan 2024 arbetar jag med Amaze Festival och Ocean Concert, där jag
                ansvarar för marknadsföring, sociala medier och kommunikation –
                före, under och efter evenemangen.
              </p>
              <p>
                Jag kombinerar kreativ kommunikation med struktur och genomförande,
                med målet att skapa innehåll och upplevelser som stärker varumärken
                och ger resultat.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.28)}>
              <a
                href="#priser"
                className={cn(
                  "group inline-flex items-center gap-3",
                  "font-public-sans text-[13px] font-semibold uppercase tracking-[0.16em]",
                  "text-brand-espresso transition-opacity duration-300 hover:opacity-60"
                )}
              >
                Läs mer om mina tjänster
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-brand-espresso/40 transition-all duration-300 group-hover:bg-brand-espresso group-hover:border-brand-espresso group-hover:text-white">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.8} />
                </span>
              </a>
            </motion.div>

          </div>

          {/* ── RIGHT — Services list ────────────────────────── */}
          <motion.div
            {...fadeIn(0.08)}
            className="flex flex-col justify-center bg-brand-espresso rounded-3xl px-8 py-10 lg:px-10 lg:py-12"
          >

            <p className="font-cinzel text-[14px] uppercase tracking-[0.22em] text-white/40 mb-6">
              Vad jag erbjuder
            </p>

            <div className="flex flex-col">
              {SERVICES.map(({ number, title, body }, i) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease }}
                  className={cn(
                    "flex gap-6 py-7",
                    "border-t border-white/10",
                    i === SERVICES.length - 1 && "border-b"
                  )}
                >
                  <span className="font-inter text-[13px] font-medium text-white/30 tabular-nums mt-0.5 shrink-0 w-6">
                    {number}
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="font-public-sans text-[15px] font-semibold text-white leading-snug">
                      {title}
                    </p>
                    <p className="font-inter text-[14px] leading-relaxed text-white/65">
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
