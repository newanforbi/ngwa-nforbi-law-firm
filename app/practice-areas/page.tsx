import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PracticeTabs } from "@/components/PracticeTabs";
import { lorem } from "@/lib/site";

export const metadata: Metadata = { title: "Practice Areas" };

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        kicker="Practice Areas"
        title="Placeholder matters"
        image="/images/bafut-achum-hut.webp"
        alt="Bafut-style chieftaincy hut with carved pillars"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="max-w-2xl text-base leading-8 text-ink/80">{lorem.medium}</p>
        <div className="mt-12">
          <PracticeTabs />
        </div>
      </section>
    </>
  );
}
