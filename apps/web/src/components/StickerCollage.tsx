"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Logo } from "./Logo";

const ROTATIONS = [-4, 3, -2, 5];

const PILLAR_KEYS = ["papas", "asada", "manos", "sandiego"] as const;

export function StickerCollage() {
  const t = useTranslations("pillars");

  return (
    <section className="relative bg-paper-100 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-ink-900) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 relative">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="hand-note text-tangerine-500 text-3xl sm:text-4xl -rotate-2"
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
        </div>

        {/* 2x2 grid of stamped pillars */}
        <div className="grid gap-12 sm:gap-16 sm:grid-cols-2">
          {PILLAR_KEYS.map((key, i) => (
            <Pillar
              key={key}
              note={t(`items.${key}.note`)}
              title={t(`items.${key}.title`)}
              body={t(`items.${key}.body`)}
              rotation={ROTATIONS[i]!}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillar({
  note,
  title,
  body,
  rotation,
  delay,
}: {
  note: string;
  title: string;
  body: string;
  rotation: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-5 sm:gap-7 items-start"
    >
      {/* Sticker */}
      <motion.div
        initial={{ rotate: rotation, scale: 0.9 }}
        whileInView={{ rotate: rotation, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: delay + 0.1, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="shrink-0"
        style={{ filter: "drop-shadow(0 6px 12px rgba(26, 26, 26, 0.18))" }}
      >
        <Logo size={130} className="sm:w-[150px] sm:h-[150px]" />
      </motion.div>

      {/* Copy */}
      <div className="pt-2 min-w-0">
        <span
          className="hand-note text-tangerine-600 text-2xl sm:text-3xl inline-block -rotate-3"
          aria-hidden
        >
          {note}
        </span>
        <h3 className="headline-display text-2xl sm:text-3xl text-ink-900 mt-1">
          {title}
        </h3>
        <p className="mt-3 text-base sm:text-lg text-ink-700 leading-relaxed">
          {body}
        </p>
      </div>
    </motion.div>
  );
}
