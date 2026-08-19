"use client";

import { useState } from "react";
import { lorem, practiceAreas } from "@/lib/site";

export function PracticeTabs() {
  const [active, setActive] = useState(practiceAreas[0].slug);
  const current = practiceAreas.find((item) => item.slug === active) ?? practiceAreas[0];

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 border-b border-forest/15 pb-3"
        role="tablist"
        aria-label="Practice areas"
      >
        {practiceAreas.map((item) => {
          const selected = item.slug === active;
          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`rounded-full px-4 py-2 text-xs tracking-[0.14em] uppercase transition ${
                selected
                  ? "bg-forest text-cream"
                  : "bg-white/70 text-forest hover:bg-mist"
              }`}
              onClick={() => setActive(item.slug)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="mt-8 max-w-3xl" role="tabpanel">
        <h2 className="font-serif text-3xl text-forest">{current.title}</h2>
        <p className="mt-4 text-base leading-8 text-ink/80">{lorem.long}</p>
        <p className="mt-4 text-base leading-8 text-ink/80">{lorem.medium}</p>
      </div>
    </div>
  );
}
