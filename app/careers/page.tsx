import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { lorem, openings } from "@/lib/site";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Join the compound"
        image="/images/bafut-palace-courtyard.webp"
        alt="People seated in front of a Bafut-style chieftaincy palace"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="max-w-2xl text-base leading-8 text-ink/80">{lorem.medium}</p>
        <div className="mt-12 divide-y divide-forest/10 border-y border-forest/10">
          {openings.map((role) => (
            <article key={role.slug} className="grid gap-3 py-8 md:grid-cols-[1fr_220px]">
              <div>
                <h2 className="font-serif text-2xl text-forest">{role.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/75">{role.summary}</p>
              </div>
              <div className="md:text-right">
                <p className="text-xs tracking-[0.16em] text-gold-deep uppercase">{role.type}</p>
                <p className="mt-2 text-sm text-forest-mid">{role.location}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block text-xs tracking-[0.18em] text-forest uppercase underline decoration-gold underline-offset-8"
                >
                  Express interest
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-7 text-ink/70">{lorem.short}</p>
      </section>
    </>
  );
}
