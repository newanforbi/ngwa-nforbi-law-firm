import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { insights, lorem } from "@/lib/site";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Notes from the highlands"
        image="/images/grassfields-hero.webp"
        alt="Grassfields of Northwest Cameroon"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="max-w-2xl text-base leading-8 text-ink/80">{lorem.medium}</p>
        <div className="mt-12 divide-y divide-forest/10 border-y border-forest/10">
          {insights.map((post) => (
            <article key={post.slug} className="grid gap-3 py-8 md:grid-cols-[140px_1fr]">
              <p className="text-xs tracking-[0.16em] text-gold-deep uppercase">{post.date}</p>
              <div>
                <h2 className="font-serif text-2xl text-forest">
                  <Link href="/insights" className="hover:text-gold-deep">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/75">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
