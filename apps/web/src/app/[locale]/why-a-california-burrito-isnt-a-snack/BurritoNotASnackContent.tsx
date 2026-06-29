"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";

type TacoRow = { ingredient: string; amount: string };
type FaqItem = { q: string; a: string };

export function BurritoNotASnackContent() {
  const t = useTranslations("burritoNotASnack");
  const misconceptionItems = t.raw("misconception.items") as string[];
  const tacoRows = t.raw("tacoTest.rows") as TacoRow[];
  const quotes = t.raw("surprise.quotes") as string[];
  const faqItems = t.raw("faq.items") as FaqItem[];

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* === Intro + verdict === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg sm:text-xl text-ink-700 leading-relaxed">
              {t("intro.lead")}
            </p>
            <p className="mt-5 text-lg text-ink-700 leading-relaxed">
              {t("intro.body")}
            </p>
            <div className="mt-10 border-l-4 border-tangerine-500 pl-5 py-2">
              <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-1">
                {t("intro.verdict")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Misconception === */}
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24 relative">
          <p className="hand-note text-tangerine-500 text-3xl sm:text-4xl -rotate-2">
            {t("misconception.kicker")}
          </p>
          <h2 className="headline-display text-4xl sm:text-5xl lg:text-6xl mt-3">
            {t("misconception.title")}
          </h2>
          <p className="mt-6 text-lg text-paper-100/80">
            {t("misconception.lede")}
          </p>
          <ul className="mt-8 space-y-3">
            {misconceptionItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-3 text-lg text-paper-100/90"
              >
                <span
                  className="headline-display text-tangerine-500 shrink-0"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-paper-100/85 leading-relaxed border-l-4 border-tangerine-500 pl-5">
            {t("misconception.outro")}
          </p>
        </div>
      </section>

      {/* === Origin === */}
      <section className="bg-paper-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2">
                {t("origin.kicker")}
              </p>
              <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
                {t("origin.title")}
              </h2>
              <p className="mt-6 text-lg text-ink-700 leading-relaxed">
                {t("origin.body")}
              </p>
            </div>
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 order-1 lg:order-2 border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] bg-paper-100 overflow-hidden"
            >
              <div className="relative aspect-[4/5] bg-paper-100">
                <Image
                  src="/menu/california-burrito.jpg"
                  alt={t("title")}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* === Taco test === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-10">
            <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2">
              {t("tacoTest.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("tacoTest.title")}
            </h2>
            <p className="mt-4 text-lg text-ink-700 max-w-2xl mx-auto">
              {t("tacoTest.lede")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-paper-50 border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] overflow-hidden"
          >
            <table className="w-full text-left">
              <tbody className="divide-y divide-ink-900/10">
                {tacoRows.map((row) => (
                  <tr key={row.ingredient}>
                    <th
                      scope="row"
                      className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-ink-900"
                    >
                      {row.ingredient}
                    </th>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-right font-mono text-ink-900">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="mt-6 text-base sm:text-lg text-ink-700 text-center max-w-2xl mx-auto leading-relaxed">
            {t("tacoTest.footnote")}
          </p>
        </div>
      </section>

      {/* === Surprise quotes === */}
      <section className="bg-tangerine-500 text-ink-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="hand-note text-ink-900 text-3xl sm:text-4xl -rotate-2">
              {t("surprise.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl lg:text-6xl text-ink-900 mt-3">
              {t("surprise.title")}
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {quotes.map((quote, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-paper-50 border-2 border-ink-900 p-6 shadow-[6px_6px_0_0_var(--color-ink-900)]"
              >
                <p className="hand-note text-2xl sm:text-3xl text-ink-900 -rotate-1">
                  “{quote}”
                </p>
              </motion.li>
            ))}
          </ul>

          <p className="mt-10 text-lg sm:text-xl text-ink-900/85 leading-relaxed max-w-2xl mx-auto text-center">
            {t("surprise.outro")}
          </p>
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

      {/* === CTA === */}
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
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-8 py-4 text-base font-semibold hover:translate-y-0.5 transition-transform"
              >
                {t("cta.primary")}
                <span aria-hidden>→</span>
              </LocaleLink>
              <LocaleLink
                href="/order"
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
