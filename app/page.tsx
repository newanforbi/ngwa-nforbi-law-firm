import Image from "next/image";
import Link from "next/link";
import { ChevronRule } from "@/components/ChevronRule";
import { firm, lorem, practiceAreas } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-forest-deep">
        <Image
          src="/images/grassfields-hero.webp"
          alt="Rolling highland grass fields of Northwest Cameroon at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest-deep/55 to-forest/25" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="text-xs tracking-[0.38em] text-gold-soft uppercase">
            {firm.location}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] text-cream md:text-7xl">
            {firm.legalName}
          </h1>
          <p className="mt-5 max-w-xl font-serif text-2xl text-gold-soft md:text-3xl">
            {firm.tagline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-cream/80">{lorem.medium}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/practice-areas"
              className="bg-gold px-6 py-3 text-xs tracking-[0.2em] text-forest-deep uppercase"
            >
              Practice Areas
            </Link>
            <Link
              href="/contact"
              className="border border-cream/50 px-6 py-3 text-xs tracking-[0.2em] text-cream uppercase hover:border-gold hover:text-gold"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <ChevronRule />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs tracking-[0.28em] text-gold-deep uppercase">The compound</p>
          <h2 className="mt-3 font-serif text-4xl text-forest">
            Counsel gathered on the highland green
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/80">{lorem.long}</p>
          <Link
            href="/about"
            className="mt-8 inline-block text-xs tracking-[0.2em] text-forest uppercase underline decoration-gold underline-offset-8"
          >
            About the firm
          </Link>
        </div>
        <figure className="overflow-hidden border border-gold/25 shadow-[0_20px_50px_rgba(16,38,26,0.12)]">
          <Image
            src="/images/bafut-palace-courtyard.webp"
            alt="People seated in front of a Bafut-style chieftaincy palace with a tall thatched roof"
            width={1536}
            height={1024}
            className="h-auto w-full object-cover"
          />
          <figcaption className="bg-forest px-4 py-3 text-[11px] tracking-[0.16em] text-gold-soft uppercase">
            Bafut chieftaincy courtyard · placeholder scene
          </figcaption>
        </figure>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="text-xs tracking-[0.28em] text-gold uppercase">Placeholder tabs</p>
          <h2 className="mt-3 font-serif text-4xl">Practice at a glance</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href="/practice-areas"
                className="border border-gold/25 bg-forest-mid/40 p-6 transition hover:border-gold hover:bg-forest-mid"
              >
                <h3 className="font-serif text-2xl text-gold-soft">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/75">{area.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[48vh] overflow-hidden">
        <Image
          src="/images/grassfields-valley.webp"
          alt="Misty Grassfields valley with a cluster of traditional thatched palace roofs"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-deep/45" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
          <p className="font-serif text-3xl text-cream md:text-4xl">{lorem.short}</p>
          <Link
            href="/contact"
            className="mt-8 bg-cream px-6 py-3 text-xs tracking-[0.2em] text-forest uppercase"
          >
            Begin a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
