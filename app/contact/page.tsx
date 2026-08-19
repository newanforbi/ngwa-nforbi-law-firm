import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { lorem } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Sit with us"
        image="/images/bafut-palace-courtyard.webp"
        alt="Courtyard gathering in front of a Bafut chieftaincy hut"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-base leading-8 text-ink/80">{lorem.medium}</p>
          <address className="mt-8 not-italic text-sm leading-7 text-forest">
            Ngwa Nforbi Law Firm
            <br />
            Lorem ipsum dolor sit amet
            <br />
            Northwest Region, Cameroon
            <br />
            +237 000 000 000
            <br />
            hello@ngwanforbi.placeholder
          </address>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
