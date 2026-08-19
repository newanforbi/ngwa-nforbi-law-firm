"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { firm, nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5 md:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/crest.webp"
            alt=""
            width={105}
            height={82}
            className="h-10 w-auto md:h-11"
            priority
          />
          <span className="leading-tight">
            <span className="block font-serif text-lg tracking-[0.18em] text-forest uppercase md:text-xl">
              {firm.name}
            </span>
            <span className="mt-0.5 block text-[10px] tracking-[0.38em] text-gold-deep uppercase md:text-[11px]">
              Law Firm
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[13px] tracking-[0.14em] uppercase transition ${
                  active
                    ? "text-forest border-b-2 border-gold"
                    : "text-forest-mid/80 hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="lg:hidden rounded border border-forest/20 px-3 py-2 text-xs tracking-[0.16em] uppercase text-forest"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-gold/20 bg-cream px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 text-sm tracking-[0.12em] uppercase ${
                    isActive(pathname, item.href)
                      ? "text-gold-deep"
                      : "text-forest"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
