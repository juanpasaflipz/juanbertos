"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Logo } from "@/components/Logo";

type HourRow = { days: string; time: string };

export function LocationsContent() {
  const t = useTranslations("locationsPage");
  const hours = t.raw("shop.hours") as HourRow[];

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Location card */}
      <section className="bg-paper-100 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-paper-50 border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] p-8 sm:p-12"
          >
            <div className="grid md:grid-cols-[auto_1fr] gap-8 sm:gap-12 items-start">
              {/* Sticker */}
              <motion.div
                initial={{ rotate: -6, scale: 0.9 }}
                whileInView={{ rotate: -4, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                className="shrink-0 justify-self-center md:justify-self-start"
                style={{ filter: "drop-shadow(0 8px 18px rgba(26,26,26,0.25))" }}
              >
                <Logo size={180} />
              </motion.div>

              {/* Details */}
              <div>
                <p className="hand-note text-tangerine-600 text-2xl -rotate-1">
                  Juanberto&rsquo;s
                </p>
                <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-1">
                  {t("shop.name")}
                </h2>

                <p className="mt-5 text-lg text-ink-700 leading-relaxed">
                  {t("shop.address")}
                </p>

                <a
                  href={`tel:${t("shop.phoneTel")}`}
                  className="mt-3 inline-block text-lg text-ink-900 hover:text-tangerine-600 transition-colors underline-offset-4 hover:underline"
                >
                  {t("shop.phone")}
                </a>

                {/* Hours */}
                <div className="mt-8">
                  <h3 className="text-xs uppercase tracking-[0.18em] text-ink-500 font-semibold">
                    {t("shop.hoursTitle")}
                  </h3>
                  <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-8 gap-y-1.5 max-w-md">
                    {hours.map((row, i) => (
                      <div key={i} className="contents">
                        <dt className="text-ink-700">{row.days}</dt>
                        <dd className="text-ink-900 font-medium">{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* CTA */}
                <a
                  href={t("shop.directionsUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-7 py-4 text-base font-semibold shadow-[0_6px_0_-2px_rgba(26,26,26,0.4)] hover:translate-y-0.5 hover:shadow-[0_4px_0_-2px_rgba(26,26,26,0.4)] transition-all"
                >
                  {t("shop.cta")}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Embedded map */}
            <div className="mt-10 rounded-md overflow-hidden border border-ink-900/15">
              <iframe
                title="Juanberto's Roma Sur"
                src="https://www.google.com/maps?q=Coahuila+192+Roma+Sur+CDMX&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </motion.article>

          {/* "More coming soon" pillar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16 text-center"
          >
            <p className="hand-note text-tangerine-600 text-3xl -rotate-2">
              {t("moreSoon.kicker")}
            </p>
            <h3 className="headline-display text-3xl sm:text-4xl text-ink-900 mt-2">
              {t("moreSoon.title")}
            </h3>
            <p className="mt-4 text-lg text-ink-700 max-w-2xl mx-auto">
              {t("moreSoon.body")}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
