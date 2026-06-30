"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";

type DimensionItem = {
  label: string;
  burritoTitle: string;
  burritoBody: string;
  burgerTitle: string;
  burgerBody: string;
};

type DeepDiveRow = { metric: string; burrito: string; burger: string };

type FaqItem = { q: string; a: string };

export function BurritoVsBurgerContent() {
  const t = useTranslations("burritoVsBurger");
  const dimensions = t.raw("dimensions.items") as DimensionItem[];
  const rows = t.raw("deepDive.rows") as DeepDiveRow[];
  const verdictPoints = t.raw("verdict.points") as string[];
  const faqItems = t.raw("faq.items") as FaqItem[];

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* === Thinking illustration (visual hook right after hero) === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-10 sm:pt-12 pb-4">
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] bg-paper-100 overflow-hidden"
          >
            <div className="relative aspect-[3/2] bg-paper-100">
              <Image
                src="/content/burrito-or-burger-thinking.png"
                alt={t("thinking.alt")}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-center text-sm text-ink-500 px-6 py-4 border-t-2 border-ink-900/10">
              {t("thinking.caption")}
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* === Intro + verdict callout === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
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

      {/* === Infographic === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] bg-paper-100 overflow-hidden"
          >
            <div className="relative aspect-[3/2] bg-paper-100">
              <Image
                src="/content/burrito-vs-burger.png"
                alt={t("infographic.alt")}
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="text-center text-sm text-ink-500 px-6 py-4 border-t-2 border-ink-900/10">
              {t("infographic.caption")}
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* === Five dimensions, side-by-side === */}
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
              {t("dimensions.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl lg:text-6xl mt-3">
              {t("dimensions.title")}
            </h2>
          </div>

          <ol className="space-y-8">
            {dimensions.map((d, i) => (
              <motion.li
                key={d.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative border-2 border-paper-100/15 bg-ink-900/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 px-6 pt-5">
                  <span
                    className="headline-display text-tangerine-500 text-4xl shrink-0"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="headline-display text-3xl sm:text-4xl">{d.label}</h3>
                </div>
                <div className="grid md:grid-cols-2 divide-paper-100/10 md:divide-x">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs uppercase tracking-[0.2em] text-tangerine-500 font-semibold">
                      Burrito
                    </p>
                    <h4 className="mt-2 text-xl font-semibold text-paper-100">
                      {d.burritoTitle}
                    </h4>
                    <p className="mt-3 text-paper-100/75 leading-relaxed">
                      {d.burritoBody}
                    </p>
                  </div>
                  <div className="p-6 sm:p-7 border-t-2 md:border-t-0 border-paper-100/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-paper-100/40 font-semibold">
                      Burger
                    </p>
                    <h4 className="mt-2 text-xl font-semibold text-paper-100/80">
                      {d.burgerTitle}
                    </h4>
                    <p className="mt-3 text-paper-100/60 leading-relaxed">
                      {d.burgerBody}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* === Deep dive: nutritional table === */}
      <section className="bg-paper-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-10">
            <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2">
              {t("deepDive.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("deepDive.title")}
            </h2>
            <p className="mt-4 text-lg text-ink-700 max-w-2xl mx-auto">
              {t("deepDive.lede")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-paper-100 border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] overflow-hidden"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="bg-ink-900 text-paper-100">
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold"
                  >
                    {t("deepDive.kicker")}
                  </th>
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-tangerine-500"
                  >
                    Burrito
                  </th>
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-paper-100/70"
                  >
                    Burger
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/10">
                {rows.map((row) => (
                  <tr key={row.metric}>
                    <th
                      scope="row"
                      className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-ink-900"
                    >
                      {row.metric}
                    </th>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-ink-900">
                      {row.burrito}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-ink-700">
                      {row.burger}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="mt-6 text-sm text-ink-500 text-center max-w-2xl mx-auto">
            {t("deepDive.footnote")}
          </p>
        </div>
      </section>

      {/* === Verdict === */}
      <section className="bg-tangerine-500 text-ink-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center">
            <p className="hand-note text-ink-900 text-3xl sm:text-4xl -rotate-2">
              {t("verdict.kicker")}
            </p>
            <h2 className="headline-display text-5xl sm:text-6xl lg:text-7xl text-ink-900 mt-3">
              {t("verdict.title")}
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-ink-900/80 max-w-2xl mx-auto">
              {t("verdict.lede")}
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {verdictPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-paper-50 border-2 border-ink-900 p-5 shadow-[6px_6px_0_0_var(--color-ink-900)] flex gap-3"
              >
                <span className="headline-display text-tangerine-600 text-2xl shrink-0" aria-hidden>
                  ✓
                </span>
                <span className="text-ink-900 leading-relaxed">{point}</span>
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
