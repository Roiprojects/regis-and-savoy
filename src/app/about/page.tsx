import type { Metadata } from "next";
import Link from "@/components/AppLink";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Crest, ArrowIcon } from "@/components/ui";
import { brand, stewardship, heroLead } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Regis and Savoy Corporate Services LLP — specialised corporate advisory, an affiliate of Regis and Savoy Capital.",
};

const values = [
  {
    n: "01",
    title: "Stewardship",
    body: "We act as custodians of long-term value, treating each business as we would our own.",
  },
  {
    n: "02",
    title: "Independence",
    body: "Advisory services are independently provided by the LLP, free of conflict and candid by design.",
  },
  {
    n: "03",
    title: "Discretion",
    body: "The confidentiality and care of a private office, applied to corporate matters.",
  },
  {
    n: "04",
    title: "Continuity",
    body: "Support that endures across the full lifecycle — from incorporation to expansion.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Firm"
        title="A corporate advisory practice built on trust"
        intro={heroLead}
      />

      {/* Stewardship statement */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex items-center gap-4">
              <Crest variant="red" size={72} />
              <div>
                <p className="font-[var(--font-display)] text-2xl italic text-crimson-deep">
                  {brand.tagline}
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">
                  Affiliate of {brand.parent}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-md text-ink">
              Stewardship often extends beyond personal wealth to the businesses
              that create it.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              {stewardship}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper-3 py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-6 text-crimson">What Guides Us</p>
            <h2 className="display-lg max-w-[16ch] text-ink">
              Principles that shape every engagement
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.n}>
                <div className="group h-full bg-paper-2 p-8 transition-colors duration-500 hover:bg-night">
                  <span className="font-[var(--font-display)] text-4xl text-crimson transition-colors duration-500 group-hover:text-gold-soft">
                    {v.n}
                  </span>
                  <h3 className="mt-6 font-[var(--font-display)] text-2xl text-ink transition-colors duration-500 group-hover:text-paper">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-white/60">
                    {v.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Affiliation note */}
      <section className="py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="overflow-hidden rounded-sm border border-line bg-paper-2">
              <div className="grid lg:grid-cols-2">
                <div className="group relative min-h-[320px] overflow-hidden">
                  <Image
                    src="/images/architecture.jpg"
                    alt="Glass corporate headquarters rising against the sky"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover saturate-[0.92] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 mix-blend-multiply"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 18% 0%, rgba(156,26,26,0.22), transparent 55%), linear-gradient(180deg, rgba(26,21,18,0.05) 0%, rgba(20,16,16,0.42) 100%)",
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center p-12 md:p-16">
                  <Crest variant="red" size={72} />
                  <p className="mt-8 font-[var(--font-display)] text-[clamp(1.5rem,2.6vw,2.2rem)] leading-snug text-ink">
                    Corporate advisory that complements a wealth management
                    heritage — independent, discreet and enduring.
                  </p>
                  <Link
                    href="/services"
                    className="group mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:text-crimson"
                  >
                    Explore our services
                    <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
