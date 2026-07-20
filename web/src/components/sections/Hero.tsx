"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { RevealWords } from "@/components/motion/Reveal";
import { Crest, ArrowIcon } from "@/components/ui";
import { heroLead, brand } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const crestY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const crestOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pb-10 pt-28"
    >
      {/* Crest medallion (static) */}
      <motion.div
        style={{ y: crestY, opacity: crestOpacity }}
        className="pointer-events-none absolute -right-[16vw] top-1/2 hidden -translate-y-1/2 md:block"
      >
        <Crest variant="red" size={760} priority className="opacity-[0.09]" />
      </motion.div>

      {/* Warm vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_18%_8%,rgba(255,255,255,0.45),transparent_58%)]" />

      <motion.div
        style={{ y: textY }}
        className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-[var(--spacing-gutter)]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="mb-9 flex items-center gap-4"
        >
          <span className="h-px w-14 bg-gradient-to-r from-crimson to-transparent" />
          <span className="eyebrow text-crimson">{brand.tagline}</span>
        </motion.div>

        <h1
          className="display-xl max-w-[16ch] text-ink"
          style={{ fontSize: "clamp(2.5rem, 5.8vw, 5.4rem)" }}
        >
          <RevealWords text="Driven by stewardship," delay={0.15} />
          <span className="block italic text-crimson">
            <RevealWords text="focused on trust for the longer term" delay={0.4} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.95 }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          {heroLead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.1 }}
          className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3"
        >
          <Link href="/services" className="btn btn-primary group">
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
              className="group flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:text-crimson"
            >
              {l.label}
              <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom meta strip (in normal flow — never overlaps the CTA) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative mx-auto mt-12 flex w-full max-w-[1400px] items-end justify-between px-[var(--spacing-gutter)]"
      >
        <p className="max-w-[26ch] text-xs uppercase leading-relaxed tracking-[0.2em] text-muted">
          An affiliate of <span className="text-crimson">{brand.parent}</span>
        </p>
        <span className="hidden flex-col items-center gap-2 text-[0.62rem] uppercase tracking-[0.3em] text-muted sm:flex">
          Scroll
          <motion.span
            animate={{ scaleY: [0.3, 1, 0.3], transformOrigin: "top" }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-crimson to-transparent"
          />
        </span>
      </motion.div>
    </section>
  );
}
