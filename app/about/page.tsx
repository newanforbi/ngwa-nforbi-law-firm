import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { lorem } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Rooted in the Grassfields"
        image="/images/grassfields-valley.webp"
        alt="Misty highland grasslands of Northwest Cameroon"
      />
      <article className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div className="space-y-5 text-base leading-8 text-ink/80">
          <p>{lorem.long}</p>
          <p>{lorem.medium}</p>
          <p>{lorem.long}</p>
        </div>
        <figure>
          <Image
            src="/images/bafut-achum-hut.webp"
            alt="Traditional Bafut palace hut with a steep conical thatched roof and carved wooden posts"
            width={1536}
            height={1024}
            className="h-auto w-full border border-gold/25 object-cover"
          />
          <figcaption className="mt-3 text-xs tracking-[0.16em] text-forest-mid uppercase">
            Achum-inspired palace architecture · placeholder
          </figcaption>
        </figure>
      </article>
    </>
  );
}
