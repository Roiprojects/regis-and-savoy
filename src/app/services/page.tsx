import type { Metadata } from "next";
import Link from "@/components/AppLink";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon, Figure } from "@/components/ui";
import ServicesShowcase from "@/components/ServicesShowcase";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Legal advisory, business structuring, governance & compliance, and risk & strategic advisory from Regis and Savoy Corporate Services LLP.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive Corporate Advisory Services"
        intro="Whether you are establishing a new business, expanding operations, attracting investment, or strengthening governance, our services are designed to support your business at every stage."
        accent="teal.png"
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
        <ServicesShowcase />
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm bg-night p-12 text-paper md:flex-row md:items-center md:p-16">
              <h2 className="display-md max-w-[16ch]">{contact.title}</h2>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-3 rounded-sm bg-crimson px-8 py-4 text-sm uppercase tracking-[0.16em] text-paper transition-colors hover:bg-crimson-bright"
              >
                {contact.cta}
                <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
