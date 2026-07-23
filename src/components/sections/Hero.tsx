"use client";

import { motion } from "framer-motion";
import Link from "@/components/AppLink";
import { RevealWords } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import { heroLead, brand } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      data-bg="#f7f4ee"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pb-12 pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_10%,rgba(255,255,255,0.7),transparent_60%)]" />

      <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-12 px-[var(--spacing-gutter)] lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy — original content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-gradient-to-r from-antique to-transparent" />
            <span className="eyebrow text-bronze">{brand.tagline}</span>
          </motion.div>

          <h1
            className="display-xl max-w-[16ch] text-inkg"
            style={{ fontSize: "clamp(2.5rem, 5.6vw, 5.2rem)" }}
          >
            <RevealWords text="Driven by stewardship," delay={0.15} />
            <span className="block italic text-antique">
              <RevealWords text="focused on trust for the longer term" delay={0.4} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
            className="mt-9 max-w-xl text-lg leading-relaxed text-inkg-soft"
          >
            {heroLead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            <Link href="/services" className="btn btn-terra group">
              Our Services
              <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            {[
              { label: "Our Purpose", href: "/about" },
              { label: "Our Approach", href: "/#approach" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-inkg transition-colors duration-300 hover:text-antique"
              >
                {l.label}
                <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Terrarium image from the brand doc — framed glass with light reflection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.35 }}
          className="hidden lg:block"
        >
          <div className="relative mx-auto aspect-[3/4] w-[min(30vw,420px)] overflow-hidden rounded-md ring-1 ring-antique/30 shadow-[0_40px_90px_-40px_rgba(34,52,40,0.5)]">
            <img
              src="/images/hero-terrarium.jpg"
              alt="An architectural glass terrarium — a curated corporate ecosystem"
              className="h-full w-full object-cover"
            />
            {/* warm ivory/green wash to sit the photo in the palette */}
            <span
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(180deg, rgba(247,244,238,0.08) 0%, rgba(34,52,40,0.18) 100%)",
              }}
            />
            <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
            {/* slow light reflection sweeping across the glass */}
            <span className="glass-sheen" />
          </div>
        </motion.div>
      </div>

      {/* Meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="relative mx-auto mt-8 flex w-full max-w-[1400px] items-end justify-between px-[var(--spacing-gutter)]"
      >
        <p className="max-w-[26ch] text-xs uppercase leading-relaxed tracking-[0.2em] text-sage">
          An affiliate of <span className="text-bronze">{brand.parent}</span>
        </p>
        <span className="hidden flex-col items-center gap-2 text-[0.62rem] uppercase tracking-[0.3em] text-sage sm:flex">
          Scroll
          <motion.span
            animate={{ scaleY: [0.3, 1, 0.3] }}
            style={{ transformOrigin: "top" }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-antique to-transparent"
          />
        </span>
      </motion.div>
    </section>
  );
}
