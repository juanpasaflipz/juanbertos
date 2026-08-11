"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const FLAGSHIP_IMAGE = "/menu/california-supreme.jpg";

/** Home-page announcement band for the newest flagship burrito. */
export function FlagshipBanner() {
  const t = useTranslations("homeFlagship");

  return (
    <section className="relative bg-tangerine-500 text-ink-900 overflow-hidden border-y-4 border-ink-900">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-ink-900) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/2] overflow-hidden border-4 border-ink-900 shadow-[14px_14px_0_0_var(--color-ink-900)]">
              <Image
                src={FLAGSHIP_IMAGE}
                alt={`${t("name")} — ${t("tagline")}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -top-5 -left-3 sm:-left-5 rotate-[-8deg] inline-flex items-center rounded-full bg-ink-900 text-tangerine-500 px-5 py-3 text-lg sm:text-xl font-bold uppercase tracking-[0.14em] shadow-md">
              {t("badge")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="hand-note text-ink-900 text-3xl sm:text-4xl -rotate-2">
              {t("label")}
            </p>
            <h2 className="headline-display text-5xl sm:text-6xl lg:text-7xl mt-2 leading-[0.92]">
              {t("name")}
            </h2>
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-ink-900">
              {t("tagline")}
            </p>
            <p className="mt-4 text-base sm:text-lg text-ink-900/80 leading-relaxed max-w-2xl">
              {t("desc")}
            </p>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <span className="headline-display text-5xl sm:text-6xl">${t("price")}</span>
              <span className="text-sm uppercase tracking-[0.18em] text-ink-900/70 font-semibold">
                MXN
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/order"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-paper-100 px-7 py-4 text-base font-semibold hover:bg-paper-100 hover:text-ink-900 transition-colors"
              >
                {t("ctaOrder")}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 px-7 py-4 text-base font-semibold hover:bg-ink-900 hover:text-tangerine-500 transition-colors"
              >
                {t("ctaMenu")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
