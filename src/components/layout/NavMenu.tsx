"use client";

import { cn } from "@/lib/utils";
import type { NavLink } from "./SiteHeader";

interface NavMenuProps {
  links: readonly NavLink[];
}

export function NavMenu({ links }: NavMenuProps) {
  return (
    <nav aria-label="Huvudnavigation" className="hidden md:block">
      <ul role="list" className="flex items-center gap-8">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={cn(
                "font-public-sans text-[11px] uppercase tracking-[0.18em]",
                "relative py-1 transition-colors duration-200",
                "after:absolute after:inset-x-0 after:bottom-0 after:h-px",
                "after:bg-brand-espresso after:scale-x-0 after:origin-left",
                "after:transition-transform after:duration-300",
                "hover:after:scale-x-100",
                "text-brand-espresso/70 hover:text-brand-espresso"
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
