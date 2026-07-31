"use client";

import { motion } from "framer-motion";
import Link from "@/components/AppLink";
import { heroAnnotations } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

// All keywords listed beside the image (never over it).
const KEYWORDS = [...heroAnnotations.left, ...heroAnnotations.right];

const container = {
  rest: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};
const item = {
  rest: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function TerrariumEmblem({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="Why Regis and Savoy — the Terrarium Framework"
      className="group block cursor-pointer"
    >
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="show"
        className="mx-auto flex w-full max-w-[600px] items-center gap-5 sm:gap-8"
      >
        {/* Terrarium image */}
        <div className="relative min-w-0 max-w-[420px] flex-1">
          <img
            src="/images/terrarium-element.png"
            alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
            className="block w-full object-contain drop-shadow-[0_26px_44px_rgba(80,60,30,0.26)] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* slow light reflection sweeping across the glass */}
          <span className="glass-sheen" />
        </div>

        {/* Keyword rail — sits entirely outside the image, revealed on hover */}
        <motion.ul variants={container} className="flex shrink-0 flex-col gap-3.5">
          {KEYWORDS.map((w) => (
            <motion.li
              key={w}
              variants={item}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="h-px w-5 bg-copper" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-inkg">
                {w}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Link>
  );
}
