"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link as LocaleLink } from "@/i18n/navigation";
import { NEIGHBORHOOD_SLUGS } from "@/lib/neighborhoods";

type NeighborhoodCopy = { name: string; tagline: string };

export function NeighborhoodsGrid({
  namespace,
  background = "paper-50",
}: {
  namespace: "homeNeighborhoods" | "locationsNeighborhoods";
  background?: "paper-50" | "paper-100";
}) {
  const t = useTranslations(namespace);
  const items = t.raw("items") as Record<string, NeighborhoodCopy>;
  const bg = background === "paper-100" ? "bg-paper-100" : "bg-paper-50";

  return (
    <section className={`relative ${bg} overflow-hidden`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28 relative">
        <div className="text-center mb-12 sm:mb-14">
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
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-ink-700 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEIGHBORHOOD_SLUGS.map((slug, i) => {
            const copy = items[slug];
            if (!copy) return null;
            return (
              <motion.li
                key={slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              >
                <LocaleLink
                  href={`/${slug}`}
                  className="group block bg-paper-100 border-2 border-ink-900 shadow-[6px_6px_0_0_var(--color-ink-900)] hover:shadow-[10px_10px_0_0_var(--color-ink-900)] hover:-translate-y-1 transition-all p-6"
                >
                  <h3 className="headline-display text-2xl sm:text-3xl text-ink-900">
                    {copy.name}
                  </h3>
                  <p className="mt-2 text-base text-ink-700 leading-relaxed">
                    {copy.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-ink-900 font-semibold group-hover:text-tangerine-600 transition-colors">
                    {t("cta")}
                    <span aria-hidden>→</span>
                  </span>
                </LocaleLink>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
