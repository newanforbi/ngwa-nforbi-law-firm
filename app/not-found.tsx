import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
      <p className="text-xs tracking-[0.28em] text-gold-deep uppercase">404</p>
      <h1 className="mt-3 font-serif text-4xl text-forest">Page not found</h1>
      <p className="mt-4 text-ink/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-xs tracking-[0.2em] text-forest uppercase underline decoration-gold underline-offset-8"
      >
        Return home
      </Link>
    </section>
  );
}
