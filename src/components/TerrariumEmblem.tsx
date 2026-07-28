"use client";

import { motion } from "framer-motion";
import Link from "@/components/AppLink";
import { heroAnnotations } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

// Vertical placement of the annotation labels on each side.
const LEFT_POS = ["15%", "45%", "75%"];
const RIGHT_POS = ["22%", "52%", "82%"];

const container = {
  rest: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};
const fromLeft = {
  rest: { opacity: 0, x: 18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};
const fromRight = {
  rest: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

// Readable pill so the label stays legible over the busy terrarium interior.
const chip =
  "whitespace-nowrap rounded-full bg-ivory-2/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-inkg shadow-[0_6px_18px_rgba(34,52,40,0.22)] ring-1 ring-copper/30 backdrop-blur-sm";

export default function TerrariumEmblem({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="Why Regis and Savoy — the Terrarium Framework"
      className="group relative mx-auto flex h-[500px] w-[min(94vw,500px)] cursor-pointer flex-col items-center"
    >
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="show"
        variants={container}
        className="relative w-full flex-1"
      >
        {/* Terrarium element, composed over the matching scene backdrop */}
        <img
          src="/images/terrarium-element.png"
          alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
          className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_26px_44px_rgba(80,60,30,0.26)] transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* slow light reflection sweeping across the glass */}
        <span className="glass-sheen" />

        {/* Left-side annotations */}
        {heroAnnotations.left.map((w, i) => (
          <motion.span
            key={w}
            variants={fromLeft}
            style={{ top: LEFT_POS[i] }}
            className="pointer-events-none absolute left-0 flex -translate-x-2 -translate-y-1/2 items-center gap-2"
          >
            <span className={chip}>{w}</span>
            <span className="h-px w-6 bg-copper" />
          </motion.span>
        ))}

        {/* Right-side annotations */}
        {heroAnnotations.right.map((w, i) => (
          <motion.span
            key={w}
            variants={fromRight}
            style={{ top: RIGHT_POS[i] }}
            className="pointer-events-none absolute right-0 flex translate-x-2 -translate-y-1/2 items-center gap-2"
          >
            <span className="h-px w-6 bg-copper" />
            <span className={chip}>{w}</span>
          </motion.span>
        ))}
      </motion.div>
    </Link>
  );
}
