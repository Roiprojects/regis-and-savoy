import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 9h11M9 4l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `arrow-link group ${className ?? ""}`;
  const inner = (
    <>
      <span className="border-b border-transparent transition-colors duration-300 group-hover:border-current">
        {children}
      </span>
      <ArrowIcon className="arrow" />
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Crest({
  variant = "red",
  size = 44,
  className,
  priority,
}: {
  variant?: "red" | "cream" | "gold" | "charcoal" | "pvtltd";
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  const map: Record<string, string> = {
    red: "/brand/crest-capital.png",
    pvtltd: "/brand/crest-pvtltd.png",
    cream: "/brand/crest-cream.png",
    gold: "/brand/crest-gold.png",
    charcoal: "/brand/crest-charcoal.png",
  };
  return (
    <Image
      src={map[variant]}
      alt="Regis and Savoy crest"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
