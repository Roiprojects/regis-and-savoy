"use client";

import Link from "@/components/AppLink";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, nav, services } from "@/lib/content";
import { Crest, ArrowIcon } from "@/components/ui";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <div
          className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-2xl border px-5 transition-all duration-500 sm:px-7 ${
            scrolled || open
              ? "h-[64px] border-line/70 bg-paper/80 shadow-[0_16px_40px_-24px_rgba(60,20,16,0.45)] backdrop-blur-xl"
              : "h-[70px] border-line/40 bg-paper/45 shadow-[0_10px_30px_-26px_rgba(60,20,16,0.35)] backdrop-blur-md"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Regis and Savoy home">
            <Crest variant="red" size={42} priority />
            <span className="hidden leading-none sm:block">
              <span className="block font-[var(--font-display)] text-[1.05rem] tracking-tight text-ink">
                Regis <span className="text-crimson">&amp;</span> Savoy
              </span>
              <span className="block text-[0.6rem] uppercase tracking-[0.24em] text-muted">
                Corporate Services LLP
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[0.82rem] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-crimson"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-crimson transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
            <span className="relative flex h-4 w-6 flex-col justify-between">
              <span
                className={`h-[1.5px] w-full origin-center bg-ink transition-all duration-500 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-ink transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full origin-center bg-ink transition-all duration-500 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen mega menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-night text-paper"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-[var(--spacing-gutter)] pt-24 pb-12">
              <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
                {/* Primary links */}
                <div>
                  <p className="eyebrow mb-8 text-gold-soft">Navigate</p>
                  <ul className="space-y-1">
                    {nav.map((item, i) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: EASE }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-4 py-1 font-[var(--font-display)] text-[clamp(2rem,5vw,3.6rem)] leading-tight text-paper transition-colors hover:text-crimson-bright"
                        >
                          <span className="text-[0.7rem] font-sans tracking-[0.2em] text-muted">
                            0{i + 1}
                          </span>
                          {item.label}
                          <ArrowIcon className="mt-2 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Services index */}
                <div className="border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                  <p className="eyebrow mb-8 text-gold-soft">Advisory Services</p>
                  <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                    {services.map((s, i) => (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.06, duration: 0.6, ease: EASE }}
                      >
                        <Link
                          href={`/services#${s.id}`}
                          onClick={() => setOpen(false)}
                          className="group block"
                        >
                          <span className="font-[var(--font-display)] text-xl text-paper transition-colors group-hover:text-gold-soft">
                            {s.title}
                          </span>
                          <ul className="mt-2 space-y-1 text-sm text-white/45">
                            {s.items.slice(0, 3).map((it) => (
                              <li key={it}>{it}</li>
                            ))}
                          </ul>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 flex items-center gap-4">
                    <Crest variant="cream" size={52} />
                    <div>
                      <p className="font-[var(--font-display)] text-lg italic text-gold-soft">
                        {brand.tagline}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        An affiliate of {brand.parent}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
