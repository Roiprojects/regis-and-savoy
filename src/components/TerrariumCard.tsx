"use client";

import { useState } from "react";

export default function TerrariumCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const pillars = [
    {
      icon: "🪟",
      title: "Glass Enclosure",
      desc: "Compliance & Regulatory Protection",
    },
    {
      icon: "🪨",
      title: "Stone Layers",
      desc: "Business Structuring & Foundation",
    },
    {
      icon: "🌱",
      title: "Healthy Roots",
      desc: "Corporate Governance & Board Alignment",
    },
    {
      icon: "💧",
      title: "Water Balance",
      desc: "Enterprise Risk & Resilience",
    },
    {
      icon: "🌿",
      title: "New Growth",
      desc: "Investment Readiness & Expansion",
    },
    {
      icon: "✨",
      title: "Light Entry",
      desc: "Proactive Strategic Guidance",
    },
  ];

  return (
    <div
      className="group relative mx-auto h-[480px] w-[min(90vw,380px)] cursor-pointer [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      tabIndex={0}
      role="button"
      aria-label="Interactive emblem card: hover or tap to flip and view ecosystem philosophy"
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT FACE: High Quality Terrarium Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-copper/30 bg-gradient-to-b from-white/50 via-linen/70 to-linen p-5 shadow-[0_30px_70px_-20px_rgba(192,114,74,0.4)] backdrop-blur-md [backface-visibility:hidden]">
          <div className="flex w-full items-center justify-between z-10">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] font-medium text-copper">
              The Corporate Terrarium
            </span>
            <span className="h-2 w-2 rounded-full bg-copper animate-pulse" />
          </div>

          {/* High Quality Terrarium Vessel Image */}
          <div className="relative flex h-[330px] w-full items-center justify-center overflow-hidden rounded-xl my-2 group-hover:scale-[1.03] transition-transform duration-500">
            <img
              src="/images/hero-terrarium.jpg"
              alt="Architectural Terrarium — Curated Corporate Ecosystem"
              className="h-full w-full object-cover rounded-xl shadow-inner"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
            <span className="glass-sheen" />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-copper/40 bg-linen/95 px-4 py-1.5 shadow-sm z-10">
            <span className="text-xs text-copper">✦</span>
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.18em] text-inkg font-semibold">
              Hover / tap to turn emblem
            </span>
          </div>
        </div>

        {/* BACK FACE: Ecosystem Rationale */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-copper/40 bg-forest p-6 text-ivory-2 shadow-[0_30px_70px_-25px_rgba(34,52,40,0.6)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="font-sans text-[0.68rem] uppercase tracking-[0.24em] text-copper-soft">
                Why The Terrarium?
              </span>
              <span className="font-mono text-xs text-copper-soft">01 / 06</span>
            </div>

            <h3 className="mt-3 font-[var(--font-display)] text-xl leading-tight text-ivory-2">
              A Curated Corporate Ecosystem
            </h3>
            <p className="mt-1 text-xs text-ivory-2/60">
              Every resilient business is built within a balanced structure.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2.5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-forest-2/80 p-2.5 transition-colors hover:border-copper-soft/50"
                >
                  <span className="text-base leading-none">{p.icon}</span>
                  <div>
                    <p className="font-sans text-[0.78rem] font-medium text-copper-soft leading-tight">
                      {p.title}
                    </p>
                    <p className="font-sans text-[0.68rem] text-ivory-2/75 leading-tight">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
            <span className="font-[var(--font-display)] text-xs italic text-copper-soft">
              Regis & Savoy Corporate Services
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.16em] text-ivory-2/50">
              Hover to reset
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
