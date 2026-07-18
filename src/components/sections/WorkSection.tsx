"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    slug: "amaze-festival",
    category: "Festival · Eventmarknadsföring · Sociala medier",
    title: "Amaze Festival",
    description:
      "Sedan 2024 ansvarar jag för marknadsföring, sociala medier och kommunikation före, under och efter evenemanget. Arbetet omfattar innehållsstrategi, kampanjer, grafiskt material och operativ projektledning.",
    tags: ["Social Media", "Event Marketing", "Content Creation", "Artist Hospitality"],
    image: "/images/work-amaze.jpg",
    bg: "bg-stone-800",
  },
  {
    slug: "ocean-concert",
    category: "Konsert · Kommunikation · Projektledning",
    title: "Ocean Concert",
    description:
      "Marknadsföring och kommunikation för Ocean Concert med fokus på innehåll, kampanjer och koordinering bakom kulisserna för att skapa en professionell upplevelse.",
    tags: ["Campaigns", "Content", "Event Coordination", "Artist Liaison"],
    image: "/images/work-ocean.jpg",
    bg: "bg-neutral-700",
  },
  {
    slug: "social-media",
    category: "Content · Strategi · Kanaler",
    title: "Social Media & Content",
    description:
      "Skapande av innehåll för Instagram, Facebook, TikTok och LinkedIn – från idé och strategi till färdigt, engagerande material.",
    tags: ["Instagram", "TikTok", "Meta", "LinkedIn"],
    image: "/images/work-social.jpeg",
    bg: "bg-zinc-800",
  },
  {
    slug: "kampanjer",
    category: "Design · Kampanjer · Varumärke",
    title: "Kampanjer & Grafisk Design",
    description:
      "Produktion av affischer, flyers, grafiskt material och kampanjer för att skapa en tydlig och sammanhängande varumärkesupplevelse.",
    tags: ["Canva", "Branding", "Print", "Campaigns"],
    image: "/images/work-kampanjer.jpg",
    bg: "bg-slate-800",
  },
];

/* ─────────────────────────── Desktop card ─────────────────────────────── */

function DesktopCard({
  project,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
}: {
  project: (typeof PROJECTS)[number];
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      animate={{
        flex: isHovered ? 2.5 : isAnyHovered ? 0.65 : 1,
      }}
      transition={{ duration: 0.65, ease }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl cursor-pointer",
        project.bg
      )}
    >
      {/* Image */}
      <motion.div
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.75, ease }}
        className="absolute inset-0"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Hover overlay */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/15"
      />

      {/* Arrow — top right */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 8,
          y: isHovered ? 0 : -8,
        }}
        transition={{ duration: 0.35, ease }}
        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"
      >
        <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={1.8} />
      </motion.div>

      {/* Default: title only, truly centered */}
      <motion.div
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 flex items-center px-7"
      >
        <h3 className={cn("font-inter font-medium leading-tight text-white", "text-[clamp(1.3rem,2vw,2rem)]")}>
          {project.title}
        </h3>
      </motion.div>

      {/* Hover: title centered, description + tags at bottom */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.4, delay: 0.05, ease }}
        className="absolute inset-0 flex flex-col px-7"
      >
        {/* Title — vertically centered */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          <p className="font-cinzel text-[10px] uppercase tracking-[0.22em] text-white/55">
            {project.category}
          </p>
          <h3 className={cn("font-inter font-medium leading-tight text-white", "text-[clamp(1.3rem,2vw,2rem)]")}>
            {project.title}
          </h3>
        </div>

        {/* Description + tags — pinned to bottom */}
        <div className="flex flex-col gap-3 pb-7">
          <p className="font-inter text-[13px] leading-[1.7] text-white/75">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-public-sans text-[11px] font-medium text-white/80 border border-white/25 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────── Mobile card ──────────────────────────────── */

function MobileCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: (typeof PROJECTS)[number];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl", project.bg)}>
      {/* Image area — always visible */}
      <div className="relative h-60 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
          <h3 className="font-inter font-medium italic text-[1.7rem] leading-tight text-white">
            {project.title}
          </h3>
          <motion.button
            onClick={onToggle}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.35, ease }}
            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0"
            aria-label={isExpanded ? "Stäng" : "Öppna"}
          >
            <ChevronDown className="w-4 h-4 text-white" strokeWidth={1.8} />
          </motion.button>
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-4">
              <p className="font-cinzel text-[10px] uppercase tracking-[0.22em] text-white/45">
                {project.category}
              </p>
              <p className="font-inter text-[14px] leading-[1.75] text-white/75">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pb-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-public-sans text-[11px] font-medium text-white/80 border border-white/25 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────── Section ──────────────────────────────────── */

export function WorkSection() {
  const [hoveredDesktop, setHoveredDesktop] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  return (
    <section
      id="arbeten"
      aria-labelledby="work-heading"
      className="relative w-full bg-brand-linen"
    >
      <div className="layout-container section-padding">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="mb-14 flex flex-col gap-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="font-inter text-[14px] font-normal text-brand-espresso/50 tracking-wide"
          >
            Några projekt jag fått vara en del av
          </motion.span>

          <motion.h2
            id="work-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="font-inter font-medium text-[clamp(2.2rem,4vw,4rem)] leading-[1.1] text-brand-espresso"
          >
            Arbeten &amp; samarbeten
          </motion.h2>
        </div>

        {/* ── Desktop accordion ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="hidden lg:flex h-[620px] gap-3"
        >
          {PROJECTS.map((project, i) => (
            <DesktopCard
              key={project.slug}
              project={project}
              isHovered={hoveredDesktop === i}
              isAnyHovered={hoveredDesktop !== null}
              onHover={() => setHoveredDesktop(i)}
              onLeave={() => setHoveredDesktop(null)}
            />
          ))}
        </motion.div>

        {/* ── Mobile stack ────────────────────────────────────── */}
        <div className="flex flex-col gap-4 lg:hidden">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <MobileCard
                project={project}
                isExpanded={expandedMobile === i}
                onToggle={() =>
                  setExpandedMobile(expandedMobile === i ? null : i)
                }
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
