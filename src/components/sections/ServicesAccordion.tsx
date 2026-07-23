"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "@/components/AppLink";
import { services } from "@/lib/content";
import { ArrowIcon } from "@/components/ui";
import { iconByService } from "@/components/TerraIcons";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ServicesAccordion({
  linkItems = false,
}: {
  linkItems?: boolean;
}) {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  return (
    <div className="border-t border-stone">
      {services.map((s, i) => {
        const open = openId === s.id;
        const Icon = iconByService[s.id];
        return (
          <div key={s.id} id={s.id} className="scroll-mt-28 border-b border-stone">
            <button
              onClick={() => setOpenId(open ? null : s.id)}
              className="group flex w-full items-center gap-6 py-8 text-left"
              aria-expanded={open}
            >
              <span
                className={`h-8 w-8 shrink-0 transition-colors duration-300 ${
                  open ? "text-antique" : "text-sage group-hover:text-antique"
                }`}
              >
                {Icon ? <Icon /> : null}
              </span>
              <span className="flex-1">
                <span
                  className={`block font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.6rem)] leading-tight transition-colors duration-300 ${
                    open ? "text-bronze" : "text-inkg group-hover:text-bronze"
                  }`}
                >
                  {s.title}
                </span>
              </span>
              <span
                className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  open ? "border-antique bg-antique text-ivory-2" : "border-stone text-inkg"
                }`}
              >
                <span className="absolute h-[1.5px] w-3.5 bg-current" />
                <span
                  className={`absolute h-3.5 w-[1.5px] bg-current transition-transform duration-500 ${
                    open ? "rotate-90 scale-0" : ""
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-10 pl-14 md:grid-cols-[1fr_1.2fr]">
                    <p className="max-w-md text-base leading-relaxed text-inkg-soft">
                      {s.summary}
                    </p>
                    <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-center gap-3 border-b border-stone/60 py-3 text-[0.95rem] text-inkg"
                        >
                          <span className="h-1 w-1 rounded-full bg-antique" />
                          {linkItems ? (
                            <Link
                              href={`/services#${s.id}`}
                              className="transition-colors hover:text-bronze"
                            >
                              {it}
                            </Link>
                          ) : (
                            it
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <div className="pt-10">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.16em] text-inkg transition-colors hover:text-bronze"
        >
          Explore all services
          <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </div>
  );
}
