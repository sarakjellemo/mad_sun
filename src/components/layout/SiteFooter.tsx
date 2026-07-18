import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const FOOTER_NAV = [
  {
    heading: "Navigation",
    links: [
      { label: "Om mig", href: "#om-mig" },
      { label: "Arbeten", href: "#arbeten" },
      { label: "Referens", href: "#referens" },
      { label: "Priser", href: "#priser" },
    ],
  },
  {
    heading: "Tjänster",
    links: [
      { label: "Content", href: "#priser" },
      { label: "Strategi & Varumärke", href: "#priser" },
      { label: "Full Service Marketing", href: "#priser" },
    ],
  },
  {
    heading: "Kontakt",
    links: [
      { label: "Skicka ett meddelande", href: "#kontakt" },
      { label: "annamatilda.amandusson@gmail.com", href: "mailto:annamatilda.amandusson@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/anna-amandusson-0ab32a14a/", external: true },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-brand-espresso text-brand-linen"
    >
      {/* Top grid */}
      <div className="layout-container section-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="[color-scheme:dark] invert brightness-0 saturate-0">
              <Logo />
            </div>
            <p className="font-inter text-sm leading-relaxed text-brand-linen/60 max-w-[24ch]">
              Skandinavisk klarhet.<br />Global ambition.
            </p>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-4">
              <p className="font-cinzel text-[10px] uppercase tracking-[0.22em] text-brand-linen/40">
                {heading}
              </p>
              <ul role="list" className="flex flex-col gap-2.5">
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={cn(
                        "font-inter text-sm text-brand-linen/70",
                        "transition-colors duration-200 hover:text-brand-linen"
                      )}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-linen/10">
        <div className="layout-container flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center">
          <p className="font-inter text-xs text-brand-linen/40">
            &copy; {year} Mad Sun Marketing. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
