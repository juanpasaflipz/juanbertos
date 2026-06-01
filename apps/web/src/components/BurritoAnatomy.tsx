"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BurritoCrossSection } from "./BurritoCrossSection";

type Side = "left" | "right";

const CALLOUTS: Array<{
  key: "tortilla" | "crema" | "pico" | "guacamole" | "queso" | "asada" | "papas";
  side: Side;
  topPct: number;     // vertical position of the label on desktop (0-100)
  anchor: { x: number; y: number }; // target point inside the burrito SVG (viewBox 400x400)
  rotation: number;
}> = [
  { key: "tortilla",  side: "left",  topPct: 6,  anchor: { x: 80,  y: 110 }, rotation: -3 },
  { key: "crema",     side: "right", topPct: 12, anchor: { x: 310, y: 130 }, rotation: 2 },
  { key: "pico",      side: "left",  topPct: 30, anchor: { x: 110, y: 162 }, rotation: -2 },
  { key: "guacamole", side: "right", topPct: 38, anchor: { x: 300, y: 190 }, rotation: 3 },
  { key: "queso",     side: "left",  topPct: 56, anchor: { x: 100, y: 214 }, rotation: -4 },
  { key: "asada",     side: "right", topPct: 70, anchor: { x: 305, y: 240 }, rotation: 2 },
  { key: "papas",     side: "left",  topPct: 86, anchor: { x: 120, y: 270 }, rotation: -2 },
];

export function BurritoAnatomy() {
  const t = useTranslations("anatomy");

  return (
    <section className="relative bg-ink-900 text-paper-100 overflow-hidden">
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-paper-100) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 relative">
        {/* Section header */}
        <div className="text-center mb-16">
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
            className="headline-display text-4xl sm:text-5xl lg:text-6xl mt-2"
          >
            {t("title")}
          </motion.h2>
          <p className="mt-4 text-lg text-paper-100/70">{t("subtitle")}</p>
        </div>

        {/* Diagram (desktop) */}
        <div className="relative hidden lg:block max-w-5xl mx-auto" style={{ aspectRatio: "5 / 4" }}>
          {/* Burrito centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <BurritoCrossSection className="w-[58%] h-auto" />
          </motion.div>

          {/* Arrow overlay (drawn in same coordinate space as the SVG) */}
          <svg
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden
          >
            {CALLOUTS.map((c, i) => {
              // Burrito SVG is centered, occupies ~58% width. ViewBox 400x400 maps to area roughly:
              //   x in [290, 710] (420 wide), y in [190, 610] (420 tall — adjusted for aspect)
              // We translate the SVG anchor (0-400) into overlay coords (0-1000, 0-800)
              const burritoLeft = 290;
              const burritoTop = 190;
              const burritoSize = 420;
              const tx = burritoLeft + (c.anchor.x / 400) * burritoSize;
              const ty = burritoTop + (c.anchor.y / 400) * burritoSize;

              // Label endpoint side
              const labelX = c.side === "left" ? 140 : 860;
              const labelY = 80 + (c.topPct / 100) * 640;

              // Curved hand-drawn path: from label toward anchor, with a midpoint sag
              const midX = (labelX + tx) / 2;
              const midY = (labelY + ty) / 2 + (c.side === "left" ? 12 : -12);

              return (
                <motion.path
                  key={c.key}
                  d={`M ${labelX} ${labelY} Q ${midX} ${midY}, ${tx} ${ty}`}
                  fill="none"
                  stroke="var(--color-tangerine-500)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="0 1000"
                  initial={{ strokeDasharray: "0 1000" }}
                  whileInView={{ strokeDasharray: "1000 0" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                />
              );
            })}
          </svg>

          {/* Labels (positioned in overlay coord space, converted to %) */}
          {CALLOUTS.map((c, i) => {
            const leftPct = c.side === "left" ? 0 : 64;
            const widthPct = 36;
            return (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, x: c.side === "left" ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="absolute"
                style={{
                  top: `${c.topPct}%`,
                  left: `${leftPct}%`,
                  width: `${widthPct}%`,
                  textAlign: c.side === "left" ? "right" : "left",
                  transform: `rotate(${c.rotation}deg)`,
                  transformOrigin: c.side === "left" ? "right center" : "left center",
                }}
              >
                <p className="hand-note text-tangerine-500 text-xl leading-none">
                  {t(`layers.${c.key}.note`)}
                </p>
                <h3 className="headline-display text-2xl xl:text-3xl text-paper-100 leading-tight">
                  {t(`layers.${c.key}.label`)}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: burrito + stacked ingredient list (no arrows) */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex justify-center mb-12"
          >
            <BurritoCrossSection className="w-64 sm:w-80 h-auto" />
          </motion.div>

          <ul className="space-y-5 max-w-md mx-auto">
            {CALLOUTS.map((c, i) => (
              <motion.li
                key={c.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-baseline gap-4 border-b border-paper-100/10 pb-3"
              >
                <span className="hand-note text-tangerine-500 text-2xl shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="headline-display text-xl text-paper-100">
                    {t(`layers.${c.key}.label`)}
                  </h3>
                  <p className="text-sm text-paper-100/70 mt-0.5">
                    {t(`layers.${c.key}.note`)}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
