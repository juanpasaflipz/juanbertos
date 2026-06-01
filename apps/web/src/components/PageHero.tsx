"use client";

import { motion } from "framer-motion";

export function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-paper-100 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-ink-900) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-12 sm:pt-28 sm:pb-16 text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="headline-display text-5xl sm:text-6xl lg:text-7xl text-ink-900 mt-3"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-ink-700 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
