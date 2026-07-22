import type { Metadata } from "next";
import Link from "@/components/AppLink";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon, Figure } from "@/components/ui";
import { services, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Legal advisory, business structuring, governance & compliance, and risk & strategic advisory from Regis and Savoy Corporate Services LLP.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Advisory Services"
        title="Specialised support at every stage"
        intro="Four connected practices spanning the full corporate lifecycle — from incorporation and governance to compliance, restructuring and risk."
      />

      <section className="pb-4 pt-2">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <Figure
              src="/images/workspace.jpg"
              alt="Corporate advisory workspace with glass-walled meeting rooms"
              ratio="21 / 9"
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="scroll-mt-28 grid gap-10 border-t border-line py-16 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <Reveal>
                <div className="flex items-start gap-5">
                  <span className="font-[var(--font-display)] text-2xl text-crimson">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="display-md text-ink">{s.title}</h2>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                      {s.summary}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Stagger className="grid gap-px self-start overflow-hidden border border-line bg-line sm:grid-cols-2">
                {s.items.map((it) => (
                  <StaggerItem key={it}>
                    <div className="group h-full bg-paper-2 p-7 transition-colors duration-500 hover:bg-night">
                      <span className="mb-4 block h-1.5 w-1.5 rounded-full bg-gold transition-colors group-hover:bg-gold-soft" />
                      <p className="font-[var(--font-display)] text-xl leading-snug text-ink transition-colors duration-500 group-hover:text-paper">
                        {it}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm bg-night p-12 text-paper md:flex-row md:items-center md:p-16">
              <h2 className="display-md max-w-[16ch]">
                Not sure where to begin? We&apos;ll help you map it.
              </h2>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-3 rounded-sm bg-crimson px-8 py-4 text-sm uppercase tracking-[0.16em] text-paper transition-colors hover:bg-crimson-bright"
              >
                {contact.email ? "Contact the team" : "Contact"}
                <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
