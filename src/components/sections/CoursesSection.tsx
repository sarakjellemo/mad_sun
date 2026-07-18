"use client";

import { motion } from "framer-motion";
import { TrendingUp, Share2, PenLine, CalendarDays } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const COURSES = [
  { label: "IHM Digital Marketing Strategist", Icon: TrendingUp },
  { label: "IHM Social Media Manager",         Icon: Share2 },
  { label: "IHM Content Creator",              Icon: PenLine },
  { label: "IHM Event Manager",                Icon: CalendarDays },
];

export function CoursesSection() {
  return (
    <section aria-label="Certificates & Courses" className="w-full bg-brand-espresso">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="layout-container py-10"
      >
        <p className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-white/40 mb-8 text-center">
          Certificates &amp; Courses
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {COURSES.map(({ label, Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="flex items-center gap-3 bg-white/[0.06] rounded-xl px-5 py-3"
            >
              <Icon className="w-4 h-4 text-brand-cream shrink-0" strokeWidth={1.8} />
              <span className="font-public-sans text-[14px] font-medium text-white/85">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
