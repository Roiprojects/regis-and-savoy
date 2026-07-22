import type { AnchorHTMLAttributes, ReactNode } from "react";

// Plain hard-navigation link (classic MPA behaviour).
//
// For a fully static export hosted on shared/Apache/Nginx hosting, we avoid
// next/link's client-side RSC navigation + prefetching, which requests
// per-segment payload files that a static host doesn't serve (→ 404s in the
// console). A normal <a> loads the pre-rendered .html for each route, so
// every page works identically on any static host and on Vercel — no errors.
export default function Link({
  href,
  children,
  ...rest
}: { href: string; children?: ReactNode } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
>) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
