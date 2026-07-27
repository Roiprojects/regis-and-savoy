import Link from "@/components/AppLink";
import Hero from "@/components/sections/Hero";
import Lifecycle from "@/components/sections/Lifecycle";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Marquee from "@/components/motion/Marquee";
import ScrollBg from "@/components/ScrollBg";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import { stewardship, specialisms, brand, contact } from "@/lib/content";

// scroll-flip background stops
const LINEN = "#e3d3bf";
const HONEY = "#e8d8c4";
const EXPERTISE_GREEN = "#1e3326";
const SAGE = "#c5d4c2";
const FOREST = "#223428";

export default function Home() {
  return (
    <>
      <ScrollBg />
      <Hero />

      {/* Stewardship intro */}
      <section
        data-bg={HONEY}
        className="relative overflow-hidden py-32"
      >
        {/* succulent accent */}
        <img
          src="/images/succulents/green.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[6vw] top-16 w-24 opacity-90 drop-shadow-[0_16px_24px_rgba(34,52,40,0.25)] md:w-32"
        />
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-6 text-copper font-medium">The Firm</p>
            <p className="font-[var(--font-display)] text-2xl italic text-copper">
              {brand.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-md text-inkg">
              Specialised corporate advisory that complements a wealth
              management heritage.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-inkg-soft">
              {stewardship}
            </p>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.16em] text-inkg transition-colors duration-500 hover:text-copper"
            >
              About the firm
              <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Marquee band */}
      <section
        data-bg={FOREST}
        className="relative border-y border-forest-soft bg-forest py-7 text-ivory-2"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-forest to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-forest to-transparent" />
        <Marquee speed={46}>
          {specialisms.map((s) => (
            <span key={s} className="flex items-center">
              <span className="px-9 font-[var(--font-display)] text-2xl italic text-ivory-2/85">
                {s}
              </span>
              <span className="text-copper-soft">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* Services / Expertise — rich deep green background */}
      <section data-bg={EXPERTISE_GREEN} className="py-32 text-ivory-2">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <p className="eyebrow mb-6 text-copper-soft">Expertise</p>
              <h2 className="display-lg text-ivory-2">
                Deep advisory expertise across your business lifecycle
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-lg leading-relaxed text-ivory-2/70 lg:pb-3">
                Comprehensive corporate advisory practice — spanning business formation, corporate governance, contract management, regulatory compliance, risk, and private equity advisory.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <ServicesAccordion linkItems theme="dark" />
          </div>
        </div>
      </section>

      <Lifecycle />

      {/* Insights teaser — sudden colour-snap cards */}
      <section
        id="insights"
        data-bg={SAGE}
        className="relative scroll-mt-24 overflow-hidden py-32"
      >
        <img
          src="/images/succulents/lilac.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[5vw] top-24 w-20 opacity-90 drop-shadow-[0_16px_24px_rgba(34,52,40,0.22)] md:w-28"
        />
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-6 text-bronze">Insights</p>
            <h2 className="display-lg max-w-[16ch] text-inkg">
              Knowledge shared with clarity and candour
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-3">
            {[
              {
                tag: "Governance",
                title: "Building board frameworks that endure regulatory change",
              },
              {
                tag: "Structuring",
                title: "Foreign investment routes: choosing the right entry",
              },
              { tag: "Risk", title: "When diligence uncovers more than the deal" },
            ].map((post) => (
              <StaggerItem key={post.title}>
                {/* transition-colors duration-500 => colour flips instantly on hover */}
                <article className="group flex h-full flex-col justify-between bg-ivory-2 p-9 transition-colors duration-500 hover:bg-forest">
                  <span className="eyebrow text-bronze transition-colors duration-500 group-hover:text-antique-soft">
                    {post.tag}
                  </span>
                  <h3 className="mt-10 font-[var(--font-display)] text-2xl leading-snug text-inkg transition-colors duration-500 group-hover:text-ivory-2">
                    {post.title}
                  </h3>
                  <span className="mt-8 flex items-center gap-2 text-sm text-sage transition-colors duration-500 group-hover:text-antique-soft">
                    Read note
                    <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                  </span>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Tagline / placeholder panel */}
      <section
        data-bg={FOREST}
        className="relative overflow-hidden bg-forest py-36 text-ivory-2"
      >
        <img
          src="/images/succulents/teal.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-8 left-[6vw] w-24 opacity-95 drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)] md:w-28"
        />
        <div className="relative mx-auto max-w-[1400px] px-[var(--spacing-gutter)] text-center">
          <Reveal>
            <p className="text-antique-gradient font-[var(--font-display)] text-[clamp(2.4rem,7vw,6rem)] italic leading-[1.05]">
              {brand.tagline}
            </p>
            <p className="mx-auto mt-8 max-w-md text-sm uppercase tracking-[0.24em] text-ivory-2/45">
              Sample text — final tagline to follow · An affiliate of {brand.parent}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section data-bg={LINEN} className="py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 border-t border-stone pt-16 md:flex-row md:items-end">
              <h2 className="display-lg max-w-[14ch] text-inkg">
                Speak with our advisory team
              </h2>
              <div className="max-w-sm">
                <p className="text-lg leading-relaxed text-inkg-soft">
                  {contact.intro}
                </p>
                <Link href="/contact" className="btn btn-terra group mt-8">
                  Start a conversation
                  <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
