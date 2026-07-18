"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function TestimonialSection() {
  return (
    <section id="referens" aria-label="Referens" className="w-full bg-brand-cream">
      <div className="layout-container section-padding">
        <div className="mx-auto max-w-[860px] flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-8 bg-brand-espresso/35" />
            <span className="font-cinzel text-[11px] uppercase tracking-[0.26em] text-brand-espresso/55">
              Referens
            </span>
            <div className="h-px w-8 bg-brand-espresso/35" />
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="font-inter text-[clamp(0.9rem,1.3vw,1.05rem)] font-medium italic leading-[1.5] text-brand-espresso"
          >
            <p className="mb-4">
              &ldquo;Jag hade nöjet att arbeta tillsammans med Anna under Amaze Festival,
              där jag ansvarade som Tour manager för Zara Larsson och Anna hade
              det operativa ansvaret för festivalen.
            </p>
            <p className="mb-4 text-brand-espresso/75 font-normal">
              Anna är en mycket professionell, positiv och lösningsorienterad
              kollega som alltid möter utmaningar med ett lugnt och konstruktivt
              förhållningssätt. Vårt samarbete fungerade utmärkt och jag
              uppskattar hennes engagemang, kommunikation och förmåga att skapa
              ett bra arbetsklimat.
            </p>
            <p>
              Jag arbetar gärna med Anna igen.&rdquo;
            </p>
          </motion.blockquote>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="w-10 h-[2px] bg-brand-espresso/30 my-10"
          />

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.26, ease }}
            className="flex flex-col items-center gap-1.5"
          >
            <p className="font-public-sans text-[16px] font-bold text-brand-espresso tracking-wide">
              Carl-Philip
            </p>
            <p className="font-inter text-[13px] font-medium text-brand-espresso/60 uppercase tracking-[0.14em]">
              Tourmanager för Zara Larsson
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
