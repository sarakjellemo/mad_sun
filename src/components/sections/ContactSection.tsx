"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease },
});

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/annamatilda.amandusson@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const labelClass = "font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-white/40";
  const inputClass =
    "w-full rounded-xl bg-white/5 border border-white/8 px-4 py-3 font-inter text-[13px] text-white/80 placeholder:text-white/25 outline-none focus:border-brand-sky/50 focus:bg-white/8 transition-all duration-200";

  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="w-full bg-brand-espresso">
      <div className="layout-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — copy */}
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
              <motion.div
                className="h-px bg-white/20"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              />
              <span className="font-cinzel text-[11px] uppercase tracking-[0.26em] text-white/40">
                Kontakt
              </span>
            </motion.div>

            <motion.h2
              id="contact-heading"
              {...fadeUp(0.06)}
              className="font-inter font-semibold text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-white mb-6"
            >
              Låt oss jobba tillsammans
            </motion.h2>

            <motion.p
              {...fadeUp(0.1)}
              className="font-inter text-[15px] leading-relaxed text-white/60 mb-10 max-w-[40ch]"
            >
              Har du ett projekt på gång eller vill veta mer om hur jag kan hjälpa dig? Hör av dig så tar vi det därifrån.
            </motion.p>

            <motion.div {...fadeUp(0.14)} className="flex flex-col gap-5">
              <div>
                <p className="font-cinzel text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35 mb-1.5">Email</p>
                <a
                  href="mailto:annamatilda.amandusson@gmail.com"
                  className="font-inter text-[14px] text-white/70 hover:text-white transition-colors duration-200"
                >
                  annamatilda.amandusson@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.form
            {...fadeUp(0.1)}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  Namn
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Anna Andersson"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="din@email.se"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>
                Företag
              </label>
              <input
                name="company"
                type="text"
                placeholder="Ditt företag (valfritt)"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>
                Meddelande
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Berätta om ditt projekt eller vad du behöver hjälp med..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "sent" ? (
              <p className="font-inter text-[14px] text-brand-sky py-3">
                Tack! Jag återkommer så snart som möjligt.
              </p>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center rounded-full py-3.5 px-8 bg-brand-sky text-brand-espresso font-public-sans text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:bg-brand-sky/85 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Skickar..." : "Skicka meddelande"}
              </button>
            )}

            {status === "error" && (
              <p className="font-inter text-[13px] text-red-400">
                Något gick fel. Maila mig direkt på annamatilda.amandusson@gmail.com
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}
