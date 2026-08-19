import Image from "next/image";

type PageHeroProps = {
  title: string;
  kicker?: string;
  image: string;
  alt: string;
};

export function PageHero({ title, kicker, image, alt }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[42vh] overflow-hidden bg-forest-deep">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest/20" />
      <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-24 md:px-8">
        {kicker ? (
          <p className="text-xs tracking-[0.32em] text-gold-soft uppercase">{kicker}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-cream md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
