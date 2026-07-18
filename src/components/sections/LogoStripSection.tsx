"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const PARTNER_LOGOS = [
  { name: "Instagram", src: "/images/logos/instagram.svg" },
  { name: "TikTok",    src: "/images/logos/tiktok.svg"    },
  { name: "LinkedIn",  src: "/images/logos/linkedin.svg"  },
  { name: "Canva",     src: "/images/logos/canva.svg"     },
  { name: "Meta",      src: "/images/logos/meta.svg"      },
  { name: "Wix",       src: "/images/logos/wix.svg"       },
  { name: "Tickster",  src: "/images/logos/tickster.svg"  },
  { name: "Nortic",    src: "/images/logos/nortic.svg"    },
];

// Duplicate for seamless loop
const LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export function LogoStripSection() {
  return (
    <section aria-label="Verktyg och plattformar" className="w-full bg-brand-cream overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="py-10"
      >
        <p className="font-public-sans text-[11px] font-medium uppercase tracking-[0.26em] text-brand-espresso/55 mb-8 text-center">
          Verktyg &amp; plattformar jag arbetar med
        </p>

        {/* Marquee track */}
        <div className="relative flex">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 22,
              ease: "linear",
            }}
          >
            {LOGOS.map(({ name, src }, i) => (
              <div
                key={`${name}-${i}`}
                className="shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-90 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={name}
                  width={120}
                  height={30}
                  className="h-7 w-auto lg:h-8"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
