import Link from "next/link";
import { firm, nav } from "@/lib/site";
import { ChevronRule } from "./ChevronRule";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <ChevronRule />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-2xl tracking-[0.12em] uppercase">{firm.name}</p>
          <p className="mt-1 text-xs tracking-[0.28em] text-gold uppercase">Law Firm</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder copy for the
            official site of {firm.legalName}.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.22em] text-gold uppercase">Tabs</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.22em] text-gold uppercase">Visit</p>
          <p className="mt-4 text-sm leading-relaxed text-cream/80">
            {firm.location}
            <br />
            Lorem ipsum dolor sit amet
            <br />
            Bamenda · Bafut · Grassfields
          </p>
          <p className="mt-4 text-sm text-cream/70">
            hello@ngwanforbi.placeholder
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-[11px] tracking-[0.16em] text-cream/50 uppercase md:px-8">
        © {new Date().getFullYear()} {firm.legalName}. All rights reserved. Placeholder site.
      </div>
    </footer>
  );
}
