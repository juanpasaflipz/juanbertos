"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  ReviewStars,
  type Review,
} from "@/components/ReviewStars";

// Tilt + tape-color presets per card so each polaroid feels hand-pinned.
const CARD_LOOKS = [
  { rotate: -3.2, tape: "rotate-[4deg]",  tapeColor: "bg-masa-400/85" },
  { rotate:  3.8, tape: "-rotate-[6deg]", tapeColor: "bg-tangerine-300/80" },
  { rotate: -1.5, tape: "rotate-[2deg]",  tapeColor: "bg-cilantro-400/70" },
  { rotate:  2.4, tape: "-rotate-[3deg]", tapeColor: "bg-masa-400/85" },
  { rotate: -4.0, tape: "rotate-[5deg]",  tapeColor: "bg-tangerine-300/80" },
  { rotate:  1.8, tape: "-rotate-[4deg]", tapeColor: "bg-cilantro-400/70" },
];

// Sticker-watermark accent colors per card so the quote area has a tint.
const QUOTE_TINTS = [
  "bg-paper-50",
  "bg-paper-50",
  "bg-paper-50",
  "bg-paper-50",
  "bg-paper-50",
  "bg-paper-50",
];

export function LoveWall() {
  const t = useTranslations("love");
  const quotes = t.raw("quotes") as Review[];

  return (
    <section className="relative bg-tangerine-50 overflow-hidden">
      {/* corkboard grain */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-ink-900) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 relative">
        {/* header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2"
          >
            {t("kicker")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline-display text-4xl sm:text-5xl lg:text-6xl text-ink-900 mt-2"
          >
            {t("title")}
          </motion.h2>
          <p className="mt-4 text-lg text-ink-700">{t("subtitle")}</p>
        </div>

        {/* polaroid grid */}
        <ul className="grid gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {quotes.map((q, i) => {
            const look = CARD_LOOKS[i % CARD_LOOKS.length]!;
            const tint = QUOTE_TINTS[i % QUOTE_TINTS.length]!;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24, rotate: look.rotate * 0.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: look.rotate }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
                className="relative bg-paper-50 pt-10 pb-6 px-6 shadow-[0_18px_28px_-12px_rgba(26,26,26,0.35)] cursor-default"
                style={{ willChange: "transform" }}
              >
                {/* tape strip */}
                <span
                  aria-hidden
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 ${look.tapeColor} ${look.tape} shadow-sm`}
                />

                {/* rating */}
                <ReviewStars rating={q.rating} />

                {/* quote */}
                <div className={`${tint} -mx-2 px-2 pt-3 pb-4 mb-5`}>
                  <p className="hand-note text-2xl sm:text-[1.65rem] text-ink-900 leading-snug">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                </div>

                {/* attribution */}
                <div className="flex items-baseline gap-2 text-ink-700">
                  <span className="headline-display text-base text-ink-900">— {q.name}</span>
                  <span className="text-xs uppercase tracking-wider text-ink-500">
                    {q.source}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 text-ink-900 px-7 py-3 text-base font-semibold hover:bg-ink-900 hover:text-paper-100 transition-colors"
          >
            {t("cta")}
            <span aria-hidden>→</span>
          </a>
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hand-note text-2xl text-tangerine-600 underline decoration-2 underline-offset-4 hover:text-ink-900 transition-colors"
          >
            {t("ctaWrite")}
          </a>
        </div>
      </div>
    </section>
  );
}
