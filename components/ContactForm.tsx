"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className="block">
        <span className="text-xs tracking-[0.18em] text-forest-mid uppercase">Name</span>
        <input
          name="name"
          className="mt-2 w-full border border-forest/15 bg-white px-4 py-3 outline-none focus:border-gold"
          placeholder="Lorem ipsum"
        />
      </label>
      <label className="block">
        <span className="text-xs tracking-[0.18em] text-forest-mid uppercase">Email</span>
        <input
          type="email"
          name="email"
          className="mt-2 w-full border border-forest/15 bg-white px-4 py-3 outline-none focus:border-gold"
          placeholder="name@example.com"
        />
      </label>
      <label className="block">
        <span className="text-xs tracking-[0.18em] text-forest-mid uppercase">Matter</span>
        <textarea
          name="message"
          rows={6}
          className="mt-2 w-full border border-forest/15 bg-white px-4 py-3 outline-none focus:border-gold"
          placeholder="Lorem ipsum dolor sit amet..."
        />
      </label>
      <button
        type="submit"
        className="bg-forest px-6 py-3 text-xs tracking-[0.2em] text-cream uppercase"
      >
        Send placeholder
      </button>
      <p className="text-xs text-forest-mid/70">
        Form is not connected. This is placeholder wiring for the Vercel deployment.
      </p>
    </form>
  );
}
