"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavMenu } from "@/components/layout/NavMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/layout/Logo";

const NAV_LINKS = [
  { label: "Om mig", href: "#om-mig" },
  { label: "Arbeten", href: "#arbeten" },
  { label: "Referens", href: "#referens" },
  { label: "Priser", href: "#priser" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        ref={headerRef}
        role="banner"
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white shadow-sm border-b border-brand-espresso/8"
            : "bg-white"
        )}
      >
        <div className="layout-container flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <NavMenu links={NAV_LINKS} />

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#kontakt"
              className={cn(
                "hidden md:inline-flex items-center gap-2",
                "font-public-sans text-xs uppercase tracking-[0.18em]",
                "border border-brand-espresso rounded-full px-5 py-2.5",
                "transition-colors duration-300",
                "hover:bg-brand-espresso hover:text-brand-linen",
                "focus-visible:bg-brand-espresso focus-visible:text-brand-linen"
              )}
            >
              Kontakt
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <span
                className={cn(
                  "block h-px w-6 bg-brand-espresso transition-transform duration-300",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-6 bg-brand-espresso transition-opacity duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-6 bg-brand-espresso transition-transform duration-300",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Skip-to-content link */}
      <a
        href="#main-content"
        className={cn(
          "sr-only focus:not-sr-only",
          "fixed left-4 top-4 z-[100]",
          "bg-brand-espresso text-brand-linen px-4 py-2 text-sm font-inter"
        )}
      >
        Hoppa till innehåll
      </a>

      {/* Mobile menu overlay */}
      <MobileMenu
        id="mobile-menu"
        links={NAV_LINKS}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
