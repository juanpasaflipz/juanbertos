"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";

type SourcingItem = { label: string; body: string };
type UsedInItem = { name: string; desc: string; href: string; cta: string };
type FaqItem = { q: string; a: string };

export function IngredientContent({
  slug,
  image,
}: {
  slug: string;
  image: string;
}) {
  const t = useTranslations(`ingredients.${slug}`);
  const sourcingItems = t.raw("sourcing.items") as SourcingItem[];
  const techniqueParagraphs = t.raw("technique.paragraphs") as string[];
  const usedInItems = t.raw("usedIn.items") as UsedInItem[];
  const faqItems = t.raw("faq.items") as FaqItem[];

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* === Hero photo === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 -mt-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/2] sm:aspect-[16/9] border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] overflow-hidden"
          >
            <Image
              src={image}
              alt={t("title")}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* === Intro / What is it === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900">
              {t("intro.title")}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-ink-700 leading-relaxed">
              {t("intro.lede")}
            </p>
            <p className="mt-5 text-lg text-ink-700 leading-relaxed">
              {t("intro.body")}
            </p>
            <div className="mt-10 border-l-4 border-tangerine-500 pl-5 py-2">
              <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-1">
                {t("intro.callout")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Sourcing === */}
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 relative">
          <div className="text-center mb-12">
            <p className="hand-note text-tangerine-500 text-3xl sm:text-4xl -rotate-2">
              {t("sourcing.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl lg:text-6xl mt-3">
              {t("sourcing.title")}
            </h2>
            <p className="mt-4 text-lg text-paper-100/70 max-w-2xl mx-auto">
              {t("sourcing.subtitle")}
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sourcingItems.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative border-2 border-paper-100/15 bg-ink-900/30 p-6 backdrop-blur-sm"
              >
                <span
                  className="headline-display text-tangerine-500 text-5xl absolute -top-4 left-4 bg-ink-900 px-2"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="headline-display text-2xl mt-4">{item.label}</h3>
                <p className="mt-2 text-paper-100/75 leading-relaxed">
                  {item.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* === Technique === */}
      <section className="bg-paper-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="hand-note text-tangerine-600 text-3xl -rotate-1">
              {t("technique.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("technique.title")}
            </h2>
            <div className="mt-8 space-y-5">
              {techniqueParagraphs.map((para, i) => (
                <p key={i} className="text-lg text-ink-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Used In === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2">
              {t("usedIn.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl lg:text-6xl text-ink-900 mt-3">
              {t("usedIn.title")}
            </h2>
            <p className="mt-4 text-lg text-ink-700 max-w-2xl mx-auto">
              {t("usedIn.subtitle")}
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {usedInItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="bg-paper-50 border-2 border-ink-900 shadow-[6px_6px_0_0_var(--color-ink-900)] hover:shadow-[10px_10px_0_0_var(--color-ink-900)] hover:-translate-y-1 transition-all p-6 flex flex-col"
              >
                <h3 className="headline-display text-2xl sm:text-3xl text-ink-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-base text-ink-700 leading-relaxed flex-1">
                  {item.desc}
                </p>
                <LocaleLink
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-ink-900 font-semibold hover:text-tangerine-600 transition-colors"
                >
                  {item.cta}
                  <span aria-hidden>→</span>
                </LocaleLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="mb-10">
            <p className="hand-note text-tangerine-600 text-3xl -rotate-1">
              {t("faq.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("faq.title")}
            </h2>
          </div>

          <div className="divide-y-2 divide-ink-900/10 border-y-2 border-ink-900/10">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-lg sm:text-xl font-semibold text-ink-900 leading-snug">
                    {item.q}
                  </h3>
                  <span
                    className="shrink-0 mt-1 text-tangerine-600 text-2xl transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-base sm:text-lg text-ink-700 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* === Closing CTA === */}
      <section className="relative bg-ink-900 text-paper-100 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-paper-100) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-28 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline-display text-5xl sm:text-6xl lg:text-7xl">
              {t("cta.title")}
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-paper-100/80 max-w-xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <LocaleLink
                href="/order"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-8 py-4 text-base font-semibold hover:translate-y-0.5 transition-transform"
              >
                {t("cta.primary")}
                <span aria-hidden>→</span>
              </LocaleLink>
              <LocaleLink
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-paper-100/40 text-paper-100 px-8 py-4 text-base font-semibold hover:border-paper-100 transition-colors"
              >
                {t("cta.secondary")}
              </LocaleLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
