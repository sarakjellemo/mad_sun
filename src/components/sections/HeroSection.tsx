"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay, ease },
});

const wordContainer = {
  animate: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
};

const wordItem = {
  initial: { opacity: 0, y: 28, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease } },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "8%"]
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Introduktion"
      className="bg-brand-linen pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 px-6 sm:px-12 lg:px-24"
    >
      <div className="layout-container">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8">

          {/* ── LEFT ─────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-2 pt-6 lg:pt-0">

            {/* H1 — word-by-word reveal */}
            <motion.h1
              variants={wordContainer}
              initial="initial"
              animate="animate"
              className={cn(
                "font-open-sauce font-medium",
                "text-[clamp(2rem,4.5vw,4.8rem)]",
                "text-brand-espresso flex flex-wrap gap-x-[0.25em]",
              )}
              style={{ lineHeight: 1.05 }}
            >
              {"Jag tar hand om er närvaro i sociala medier".split(" ").map((word, i) => (
                <motion.span key={i} variants={wordItem} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              {...fadeUp(0.2)}
              className="font-public-sans text-[25px] font-semibold leading-snug text-brand-espresso"
            >
              Så att ni kan fokusera på det ni gör bäst.
            </motion.p>

            {/* Body — Public Sans italic */}
            <motion.p
              {...fadeUp(0.3)}
              className="font-public-sans text-[15px] italic leading-relaxed text-brand-espresso/70 max-w-[44ch]"
            >
              Att driva och utveckla er verksamhet, det är ert fokus.
              Sociala medier, content och digital närvaro tar jag hand om.
            </motion.p>

            {/* CTA — rounded pill, sky blue */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#priser"
                className={cn(
                  "inline-flex items-center justify-center",
                  "font-public-sans text-[11px] font-medium uppercase tracking-[0.15em]",
                  "bg-brand-sky text-brand-espresso",
                  "rounded-full px-8 py-3.5 min-h-[48px]",
                  "transition-colors duration-300 hover:bg-brand-sky/70",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-espresso"
                )}
              >
                Tjänster
              </a>

              <a
                href="#kontakt"
                className={cn(
                  "inline-flex items-center justify-center",
                  "font-public-sans text-[11px] font-medium uppercase tracking-[0.15em]",
                  "border border-brand-espresso/40 text-brand-espresso",
                  "rounded-full px-8 py-3.5 min-h-[48px]",
                  "transition-colors duration-300 hover:border-brand-espresso hover:bg-brand-espresso/5",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-espresso"
                )}
              >
                Boka ett möte
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT — Portrait ──────────────────────────────────────── */}
          <motion.div
            {...fadeIn(0.25)}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              style={{ y: imageY }}
              className={cn(
                "relative",
                "w-full max-w-[420px]",
                "aspect-[4/5]",
                "overflow-hidden rounded-2xl",
                "shadow-[0_20px_60px_-10px_rgba(67,48,46,0.15)]"
              )}
            >
              <Image
                src="/images/hero-portrait.png"
                alt="Mad Sun Marketing — kreativ kommunikation och varumärkesstrategi i sociala medier"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 420px"
                className="object-cover object-top"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
