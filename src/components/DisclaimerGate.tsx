"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "@/lib/content";
import { Crest } from "@/components/ui";

const KEY = "rs-disclaimer-ack";
const EASE = [0.16, 1, 0.3, 1] as const;

// AZB-style informational disclaimer splash (Bar Council-style acknowledgement),
// shown once per browser.
export default function DisclaimerGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 px-6 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full max-w-xl rounded-sm border border-white/12 bg-night-2 p-10 text-paper"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex justify-center">
              <Crest variant="cream" size={68} />
            </div>
            <p className="mt-6 text-center font-[var(--font-display)] text-2xl">
              {brand.legalName}
            </p>
            <p className="mt-1 text-center text-[0.65rem] uppercase tracking-[0.28em] text-gold-soft">
              {brand.tagline}
            </p>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/60">
              <p>
                The information provided on this website is intended solely for
                general informational purposes. By proceeding, you acknowledge
                that there has been no advertisement, solicitation or inducement
                of any kind.
              </p>
              <p>
                Nothing on this website constitutes legal or professional advice,
                and no lawyer&ndash;client or advisory relationship is created by
                accessing or using it.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={accept}
                className="rounded-sm bg-crimson px-8 py-3 text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:bg-crimson-bright"
              >
                I Agree
              </button>
              <a
                href="https://www.google.com"
                className="rounded-sm border border-white/20 px-8 py-3 text-center text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:border-white/40"
              >
                I Disagree
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
