import type { Metadata } from "next";
import Link from "@/components/AppLink";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import Botanical from "@/components/Botanical";
import { capital } from "@/lib/content";

export const metadata: Metadata = {
  title: "Regis and Savoy Capital",
  description:
    "Independent wealth management, private equity, family office and legacy planning — a broader advisory platform complementing Regis and Savoy Corporate Services LLP.",
};

export default function CapitalPage() {
  return (
    <>
      <PageHeader
        eyebrow={capital.eyebrow}
        title={capital.title}
        intro={capital.intro[0]}
        accent="redgreen.png"
      />

      {/* Intro continuation */}
      <section className="pb-8">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">
              {capital.intro[1]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* About + belief */}
      <section className="bg-paper-3 py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[0.9fr_1.3fr]">
          <Reveal>
            <div>
              <p className="eyebrow mb-6 text-crimson">{capital.aboutTitle}</p>
              <p className="font-[var(--font-display)] text-[clamp(1.5rem,2.6vw,2.1rem)] italic leading-snug text-crimson-deep">
                &ldquo;{capital.belief}&rdquo;
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {capital.aboutBody.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* At a glance */}
      <section className="relative overflow-hidden py-24">
        <Botanical src="teal.png" className="right-[4vw] top-10 hidden w-16 sm:block md:w-24" />
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-10 text-crimson">At a Glance</p>
          </Reveal>
          <Stagger className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {capital.glance.map((g) => (
              <StaggerItem key={g}>
                <div className="flex h-full items-center bg-paper-2 p-8 text-lg font-[var(--font-display)] leading-snug text-ink">
                  {g}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Capital services */}
      <section className="bg-paper-3 py-24">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-6 text-crimson">Capital Services</p>
            <h2 className="display-lg max-w-[18ch] text-ink">
              Preserving, growing and transitioning wealth
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {capital.services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group h-full bg-paper-2 p-9 transition-colors duration-500 hover:bg-night">
                  <span className="mb-5 block h-1.5 w-1.5 rounded-full bg-crimson transition-colors group-hover:bg-gold-soft" />
                  <h3 className="font-[var(--font-display)] text-2xl leading-snug text-ink transition-colors duration-500 group-hover:text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-white/65">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Complementary relationship */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[0.9fr_1.3fr]">
          <Reveal>
            <h2 className="display-md text-ink">{capital.complementaryTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-soft">
              {capital.complementaryBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quote / CTA */}
      <section className="pb-28">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm bg-night p-12 text-paper md:flex-row md:items-center md:p-16">
              <p className="max-w-[20ch] font-[var(--font-display)] text-[clamp(1.5rem,2.6vw,2.2rem)] italic leading-snug">
                &ldquo;{capital.quote}&rdquo;
              </p>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-3 rounded-sm bg-crimson px-8 py-4 text-sm uppercase tracking-[0.16em] text-paper transition-colors hover:bg-crimson-bright"
              >
                Connect With Our Team
                <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
