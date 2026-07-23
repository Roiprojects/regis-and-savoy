import { brand } from "@/lib/content";

// Text logo. Both lines share the SAME font family and font size — only the
// colour differs by line for a subtle hierarchy. No graphic logo / crest.
export default function Wordmark({
  tone = "dark",
  size = "md",
}: {
  tone?: "dark" | "light";
  size?: "sm" | "md";
}) {
  const line1 = tone === "light" ? "text-ivory-2" : "text-inkg";
  const line2 = "text-antique";
  const fontSize = size === "sm" ? "text-[0.82rem]" : "text-[0.95rem]";

  return (
    <span className="block leading-[1.15]">
      <span
        className={`block font-sans font-medium uppercase tracking-[0.22em] ${fontSize} ${line1}`}
      >
        {brand.nameLine1}
      </span>
      <span
        className={`block font-sans font-medium uppercase tracking-[0.22em] ${fontSize} ${line2}`}
      >
        {brand.nameLine2}
      </span>
    </span>
  );
}
