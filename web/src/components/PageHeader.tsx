import { RevealWords } from "@/components/motion/Reveal";
import { Crest } from "@/components/ui";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40">
      <div className="pointer-events-none absolute -right-24 -top-10 opacity-[0.05]">
        <Crest variant="red" size={460} />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        <p className="eyebrow mb-8 flex items-center gap-3 text-crimson">
          <span className="h-px w-10 bg-crimson" />
          {eyebrow}
        </p>
        <h1 className="display-xl max-w-[20ch] text-ink">
          <RevealWords text={title} delay={0.1} />
        </h1>
        {intro && (
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
