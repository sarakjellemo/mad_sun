import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="layout-container section-padding flex min-h-[60vh] flex-col items-center justify-center text-center gap-6">
      <p className="font-cinzel text-[10px] uppercase tracking-[0.28em] text-brand-espresso/40">
        404
      </p>
      <h1 className="font-cormorant text-display-xl italic text-brand-espresso text-balance">
        Sidan kunde inte hittas
      </h1>
      <p className="font-inter text-base text-brand-espresso/60 max-w-prose-xl">
        Sidan du söker finns inte eller har flyttats. Gå tillbaka till startsidan.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Till startsidan</Link>
      </Button>
    </section>
  );
}
