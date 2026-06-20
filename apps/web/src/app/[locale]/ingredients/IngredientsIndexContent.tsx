"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { INGREDIENT_SLUGS, INGREDIENTS, type IngredientSlug } from "@/lib/ingredients";

type Card = { label: string; tagline: string };

export function IngredientsIndexContent() {
  const t = useTranslations("ingredientsIndex");
  const locale = useLocale() as "es" | "en";

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* === Intro === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg sm:text-xl text-ink-700 leading-relaxed">
              {t("intro.lede")}
            </p>
            <p className="mt-5 text-lg text-ink-700 leading-relaxed">
              {t("intro.body")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* === Grid === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-24">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INGREDIENT_SLUGS.map((slug, i) => {
              const card = t.raw(`items.${slug}`) as Card;
              const ing = INGREDIENTS[slug as IngredientSlug];
              return (
                <motion.li
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                >
                  <LocaleLink
                    href={`/ingredients/${slug}`}
                    className="group block bg-paper-50 border-2 border-ink-900 shadow-[6px_6px_0_0_var(--color-ink-900)] hover:shadow-[10px_10px_0_0_var(--color-ink-900)] hover:-translate-y-1 transition-all overflow-hidden h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine-500"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-ink-100">
                      <Image
                        src={ing.image}
                        alt={ing.imageAlt[locale]}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="headline-display text-2xl sm:text-3xl text-ink-900">
                        {card.label}
                      </h2>
                      <p className="mt-2 text-base text-ink-700 leading-relaxed flex-1">
                        {card.tagline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-ink-900 font-semibold group-hover:text-tangerine-600 transition-colors">
                        {t("readMore")}
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </LocaleLink>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* === Back to cornerstone === */}
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="hand-note text-tangerine-500 text-3xl sm:text-4xl -rotate-2">
              {t("hub.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl mt-3">
              {t("hub.title")}
            </h2>
            <p className="mt-5 text-lg text-paper-100/80 max-w-xl mx-auto">
              {t("hub.body")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <LocaleLink
                href="/burrito-california-cdmx"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-7 py-3 text-base font-semibold hover:translate-y-0.5 transition-transform"
              >
                {t("hub.cta")}
                <span aria-hidden>→</span>
              </LocaleLink>
              <LocaleLink
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-paper-100/40 text-paper-100 px-7 py-3 text-base font-semibold hover:border-paper-100 transition-colors"
              >
                {t("hub.secondary")}
              </LocaleLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
