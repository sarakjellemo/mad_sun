"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavLink } from "./SiteHeader";


interface MobileMenuProps {
  id: string;
  links: readonly NavLink[];
  open: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

export function MobileMenu({ id, links, open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-brand-espresso/20 backdrop-blur-sm md:hidden"
          />

          {/* Drawer panel */}
          <motion.div
            id={id}
            role="dialog"
            aria-modal="true"
            aria-label="Mobilmeny"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm",
              "bg-brand-linen flex flex-col pt-20 pb-10 px-8",
              "md:hidden"
            )}
          >
            <nav aria-label="Mobilnavigation">
              <ul role="list" className="flex flex-col gap-1">
                {links.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={href}
                      onClick={onClose}
                      className={cn(
                        "block font-inter font-semibold text-[1.25rem] leading-tight py-2.5",
                        "transition-colors duration-200",
                        "text-brand-espresso/40 hover:text-brand-espresso"
                      )}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-8 border-t border-brand-espresso/10">
              <a
                href="#kontakt"
                onClick={onClose}
                className={cn(
                  "w-full inline-flex items-center justify-center rounded-full",
                  "font-public-sans text-xs uppercase tracking-[0.18em]",
                  "bg-brand-sky text-brand-espresso px-5 py-3.5",
                  "transition-colors duration-300 hover:bg-brand-sky/80"
                )}
              >
                Kontakt
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
