"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Logo } from "@/components/Logo";
import { Link as LocaleLink } from "@/i18n/navigation";

export function StoryContent() {
  const t = useTranslations("storyPage");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Pull quote */}
      <section className="bg-paper-100 pt-4 pb-2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="hand-note text-tangerine-600 text-3xl sm:text-4xl lg:text-5xl text-center leading-tight -rotate-1"
          >
            &ldquo;{t("pullquote")}&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="space-y-7 text-lg sm:text-xl text-ink-700 leading-relaxed">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Closing — dark band with sticker accent */}
      <section className="relative bg-ink-900 text-paper-100 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-paper-100) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28 relative">
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ rotate: -8, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: -4, scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              className="justify-self-center lg:justify-self-start shrink-0"
              style={{ filter: "drop-shadow(0 14px 28px rgba(244,123,32,0.2))" }}
            >
              <Logo size={200} />
            </motion.div>

            <div>
              <p className="headline-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {t("closing")}
              </p>
              <LocaleLink
                href="/menu"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-7 py-4 text-base font-semibold shadow-[0_6px_0_-2px_rgba(0,0,0,0.4)] hover:translate-y-0.5 hover:shadow-[0_4px_0_-2px_rgba(0,0,0,0.4)] transition-all"
              >
                {t("cta")}
                <span aria-hidden>→</span>
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
