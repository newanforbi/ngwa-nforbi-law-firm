import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { lorem, people } from "@/lib/site";

export const metadata: Metadata = { title: "Our People" };

export default function PeoplePage() {
  return (
    <>
      <PageHero
        kicker="Our People"
        title="The chamber"
        image="/images/bafut-palace-courtyard.webp"
        alt="Gathering in front of a Bafut chieftaincy palace"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="max-w-2xl text-base leading-8 text-ink/80">{lorem.medium}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {people.map((person) => (
            <article key={person.name} className="border border-forest/10 bg-white/70 p-6">
              <div className="mb-5 h-40 bg-mist" aria-hidden />
              <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">{person.role}</p>
              <h2 className="mt-2 font-serif text-2xl text-forest">{person.name}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/75">{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
