"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Re-mounts on every route change → gives us an enter animation per page,
// and lets us reset the Lenis scroll position to the top on navigation.
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Only hard-reset scroll when navigating to a page without a hash target.
    if (typeof window !== "undefined" && !window.location.hash) {
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
