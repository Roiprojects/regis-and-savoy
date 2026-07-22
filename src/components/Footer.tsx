"use client";

import Link from "@/components/AppLink";
import { brand, nav, services, contact } from "@/lib/content";
import { Crest, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-night text-paper">
      {/* Big quote band */}
      <div className="border-b border-white/10 px-[var(--spacing-gutter)] py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="max-w-4xl font-[var(--font-display)] text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.15] text-paper">
              &ldquo;Stewardship extends beyond personal wealth to the businesses
              that create it&mdash;<span className="italic text-gold-soft">built on
              pure trust, delivered as pure advice.</span>&rdquo;
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-white/45">
              {brand.legalName}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-[1400px] gap-12 px-[var(--spacing-gutter)] py-20 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Crest variant="cream" size={54} />
            <div>
              <p className="font-[var(--font-display)] text-xl leading-none">
                Regis <span className="text-crimson-bright">&amp;</span> Savoy
              </p>
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/45">
                Corporate Services LLP
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
            Specialised corporate advisory, independently provided and affiliated
            with {brand.parent}.
          </p>
          <p className="mt-6 font-[var(--font-display)] text-lg italic text-gold-soft">
            {brand.tagline}
          </p>
        </div>

        <nav>
          <p className="eyebrow mb-6 text-white/40">Explore</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold-soft"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <p className="eyebrow mb-6 text-white/40">Services</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="text-sm text-white/70 transition-colors hover:text-gold-soft"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-6 text-white/40">Stay in the loop</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="group flex items-center gap-3 border-b border-white/25 pb-3 transition-colors focus-within:border-gold-soft"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full bg-transparent text-sm text-paper placeholder:text-white/35 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="text-gold-soft transition-transform duration-500 group-hover:translate-x-1"
            >
              <ArrowIcon />
            </button>
          </form>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 block text-sm text-white/70 transition-colors hover:text-gold-soft"
          >
            {contact.email}
          </a>
          <div className="mt-6 flex gap-4 text-xs uppercase tracking-[0.18em] text-white/45">
            <a href="#" className="hover:text-gold-soft">LinkedIn</a>
            <a href="#" className="hover:text-gold-soft">RSS</a>
            <a href="#" className="hover:text-gold-soft">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-[var(--spacing-gutter)] py-7">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 text-xs text-white/45 md:flex-row md:items-center">
          <p className="max-w-2xl leading-relaxed">
            This website is for informational purposes only. Nothing herein
            constitutes solicitation, advertisement or legal advice, and no
            lawyer&ndash;client or advisory relationship is created by its use.
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gold-soft">Contact</Link>
            <a href="#" className="hover:text-gold-soft">Privacy</a>
            <button
              onClick={scrollTop}
              className="flex items-center gap-2 uppercase tracking-[0.18em] hover:text-gold-soft"
            >
              Top
              <ArrowIcon className="-rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
