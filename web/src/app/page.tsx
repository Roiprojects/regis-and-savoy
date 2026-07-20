import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Lifecycle from "@/components/sections/Lifecycle";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Marquee from "@/components/motion/Marquee";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Crest, ArrowIcon } from "@/components/ui";
import { stewardship, specialisms, brand, contact } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stewardship intro */}
      <section className="relative py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-6 text-crimson">The Firm</p>
            <div className="flex items-center gap-4">
              <Crest variant="red" size={64} />
              <p className="font-[var(--font-display)] text-2xl italic text-crimson-deep">
                {brand.tagline}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-md text-ink">
              Specialised corporate advisory that complements a wealth
              management heritage.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {stewardship}
            </p>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:text-crimson"
            >
              About the firm
              <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Marquee band */}
      <section className="relative border-y border-night-3 bg-night py-7 text-paper">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-night to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-night to-transparent" />
        <Marquee speed={46}>
          {specialisms.map((s) => (
            <span key={s} className="flex items-center">
              <span className="px-9 font-[var(--font-display)] text-2xl italic text-paper/85">
                {s}
              </span>
              <span className="text-gold-gradient text-lg">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* Services */}
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <p className="eyebrow mb-6 text-crimson">Expertise</p>
              <h2 className="display-lg text-ink">
                Deep advisory expertise across your business lifecycle
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-lg leading-relaxed text-ink-soft lg:pb-3">
                Four connected practices — from formation and governance to
                restructuring, compliance and risk — delivered with the
                discretion of a private office.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <ServicesAccordion linkItems />
          </div>
        </div>
      </section>

      <Lifecycle />

      {/* Insights teaser */}
      <section id="insights" className="scroll-mt-24 py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-6 text-crimson">Insights</p>
            <h2 className="display-lg max-w-[16ch] text-ink">
              Knowledge shared with clarity and candour
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {[
              {
                tag: "Governance",
                title: "Building board frameworks that endure regulatory change",
              },
              {
                tag: "Structuring",
                title: "Foreign investment routes: choosing the right entry",
              },
              {
                tag: "Risk",
                title: "When diligence uncovers more than the deal",
              },
            ].map((post) => (
              <StaggerItem key={post.title}>
                <article className="group relative flex h-full flex-col justify-between bg-paper-2 p-9 transition-colors duration-500 hover:bg-paper-3">
                  <span className="absolute left-0 top-0 h-0 w-[3px] bg-crimson transition-all duration-500 group-hover:h-full" />
                  <span className="eyebrow text-crimson">{post.tag}</span>
                  <h3 className="mt-10 font-[var(--font-display)] text-2xl leading-snug text-ink transition-colors duration-500 group-hover:text-crimson-deep">
                    {post.title}
                  </h3>
                  <span className="mt-8 flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-crimson">
                    Read note
                    <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                  </span>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Tagline / crest panel */}
      <section className="relative overflow-hidden bg-night py-36 text-paper">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
          <Crest variant="cream" size={620} />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-[var(--spacing-gutter)] text-center">
          <Reveal>
            <p className="font-[var(--font-display)] text-[clamp(3rem,9vw,8rem)] leading-none">
              {brand.taglineLine1}
            </p>
            <p className="text-gold-gradient font-[var(--font-display)] text-[clamp(3rem,9vw,8rem)] italic leading-none">
              {brand.taglineLine2}
            </p>
            <p className="mx-auto mt-10 max-w-md text-sm uppercase tracking-[0.24em] text-white/45">
              An affiliate of {brand.parent}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 border-t border-line pt-16 md:flex-row md:items-end">
              <h2 className="display-lg max-w-[14ch] text-ink">
                Speak with our advisory team
              </h2>
              <div className="max-w-sm">
                <p className="text-lg leading-relaxed text-ink-soft">
                  {contact.intro}
                </p>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-crimson px-8 py-4 text-sm uppercase tracking-[0.16em] text-paper transition-colors hover:bg-crimson-bright"
                >
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
