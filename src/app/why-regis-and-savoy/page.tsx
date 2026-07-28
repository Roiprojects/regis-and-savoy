import type { Metadata } from "next";
import Link from "@/components/AppLink";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import Botanical from "@/components/Botanical";
import { whyTerrarium, brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Regis and Savoy — The Terrarium Framework",
  description:
    "The Terrarium Framework: an integrated approach to corporate advisory, balancing governance, legal, compliance, risk and strategy.",
};

export default function WhyPage() {
  return (
    <main className="bg-ivory text-inkg">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#bcac93] pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_78%_35%,rgba(247,241,230,0.6),transparent_62%)]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-[var(--spacing-gutter)] lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-3 text-copper-dark">
                <span className="h-px w-10 bg-copper" />
                {whyTerrarium.eyebrow}
              </p>
              <h1 className="display-xl max-w-[18ch] font-serif text-inkg">
                {whyTerrarium.title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-inkg-soft">
                {whyTerrarium.intro}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img
              src="/images/terrarium-element.png"
              alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
              className="mx-auto w-[min(78vw,400px)] drop-shadow-[0_30px_50px_rgba(80,60,30,0.28)]"
            />
          </Reveal>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="relative overflow-hidden py-28">
        <Botanical src="lilac.png" className="right-[4vw] top-12 hidden w-16 sm:block md:w-24" />
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-6 text-copper">The Ecosystem</p>
            <h2 className="display-lg max-w-[20ch] text-inkg">
              {whyTerrarium.setsApartTitle}
            </h2>
          </Reveal>

          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-sm border border-stone bg-stone md:grid-cols-2 lg:grid-cols-3">
            {whyTerrarium.setsApart.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="group h-full bg-ivory-2 p-9 transition-colors duration-500 hover:bg-forest">
                  <span className="font-[var(--font-display)] text-3xl text-copper transition-colors duration-500 group-hover:text-copper-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-[var(--font-display)] text-xl leading-snug text-inkg transition-colors duration-500 group-hover:text-ivory-2">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-inkg-soft transition-colors duration-500 group-hover:text-ivory-2/70">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-28 text-ivory-2">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <h2 className="display-lg max-w-[16ch] text-ivory-2">
                Build a resilient, compliant, investment-ready business.
              </h2>
              <div className="max-w-sm">
                <p className="text-lg leading-relaxed text-ivory-2/70">
                  Explore the integrated advisory services that bring the
                  Terrarium Framework to life for {brand.legalName}.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="btn btn-terra group bg-copper hover:bg-copper-dark"
                  >
                    Explore Our Services
                    <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-ivory-2 transition-colors hover:text-copper-soft"
                  >
                    Contact Our Experts
                    <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
