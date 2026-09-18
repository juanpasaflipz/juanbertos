"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";

export function Hero() {
  const t = useTranslations("hero");
  const menu = useTranslations("menuPage");

  return (
    <section className="relative overflow-hidden">
      {/* Big tangerine wash with paper texture */}
      <div className="absolute inset-0 -z-10 bg-paper-100" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-ink-900) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ rotate: -2, scale: 0.92, opacity: 0 }}
              animate={{ rotate: -3, scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="stamp text-xs sm:text-sm mb-6"
            >
              {t("stamp")}
            </motion.div>

            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="headline-display text-5xl sm:text-6xl lg:text-7xl text-ink-900"
            >
              {t("headline")}
            </motion.h1>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg sm:text-xl text-ink-700 leading-relaxed"
            >
              {t("sub")}
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/order"
                className="inline-flex items-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-7 py-4 text-base font-semibold shadow-[0_6px_0_-2px_rgba(26,26,26,0.4)] hover:translate-y-0.5 hover:shadow-[0_4px_0_-2px_rgba(26,26,26,0.4)] transition-all"
              >
                {t("cta_primary")}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 text-ink-900 px-7 py-4 text-base font-semibold hover:bg-ink-900 hover:text-paper-100 transition-colors"
              >
                {t("cta_secondary")}
              </Link>
            </motion.div>

            <Link href="/menu#rollbertos" className="inline-block mt-6 text-sm underline underline-offset-4 hover:text-tangerine-600">
              {menu("specials.label")} →
            </Link>

            <span className="hand-note absolute -bottom-6 left-2 hidden lg:block text-2xl text-ink-700 -rotate-6 select-none">
              ↑ con papas adentro
            </span>
          </div>

          {/* Right: giant logo as the visual hero */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ rotate: -8, scale: 0.85, opacity: 0 }}
              animate={{ rotate: -4, scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-ink-900/10 blur-2xl translate-y-6" aria-hidden />
              <Logo size={420} priority className="relative drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
