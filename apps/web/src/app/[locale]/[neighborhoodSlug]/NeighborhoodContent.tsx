"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { trackConversion } from "@/lib/analytics";
import { referencedWhatsAppUrl } from "@/lib/recovery-attribution";
import { useRecoveryReference } from "@/components/useRecoveryReference";
import {
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  ReviewStars,
  type Review,
} from "@/components/ReviewStars";

type Stat = { label: string; value: string };
type ProofItem = { label: string; body: string };
type OrderedItem = { name: string; desc: string; reason: string };
type FaqItem = { q: string; a: string };

const HERO_IMAGE = "/menu/california-burrito.jpg";

const RAPPI_URL =
  "https://www.rappi.com.mx/restaurantes/delivery/687998-juanberto-s?utm_source=app&utm_medium=deeplink&utm_campaign=share";
const WHATSAPP_URL =
  "https://wa.me/525613096835?text=Hola%20Juanberto%27s%2C%20quiero%20un%20California%20burrito";
const DIRECTIONS_URL =
  "https://maps.google.com/?q=Coahuila+192+Roma+Sur+CDMX";

export function NeighborhoodContent({
  slug,
  mapQuery,
}: {
  slug: string;
  mapQuery: string;
}) {
  const t = useTranslations(`neighborhoods.${slug}`);
  const reference = useRecoveryReference();
  const tCornerstone = useTranslations("cornerstone.social");
  const stats = t.raw("delivery.stats") as Stat[];
  const proofItems = t.raw("proof.items") as ProofItem[];
  const orderedItems = t.raw("ordered.items") as OrderedItem[];
  const faqItems = t.raw("faq.items") as FaqItem[];
  const quotes = tCornerstone.raw("quotes") as Review[];

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
              src={HERO_IMAGE}
              alt={t("title")}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* === Intro === */}
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

      {/* === Delivery panel === */}
      <section className="bg-paper-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="hand-note text-tangerine-600 text-3xl -rotate-2">
                {t("delivery.kicker")}
              </p>
              <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
                {t("delivery.title")}
              </h2>
              <p className="mt-5 text-lg text-ink-700 leading-relaxed">
                {t("delivery.body")}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-paper-100 border-2 border-ink-900 p-4"
                  >
                    <dt className="text-xs uppercase tracking-[0.18em] text-ink-500 font-semibold">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 headline-display text-2xl sm:text-3xl text-ink-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={RAPPI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion("order_rappi")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-6 py-3 text-base font-semibold hover:translate-y-0.5 transition-transform"
                >
                  {t("delivery.ctaRappi")}
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={referencedWhatsAppUrl(WHATSAPP_URL, reference?.reference)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion("order_whatsapp")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-900 text-ink-900 px-6 py-3 text-base font-semibold hover:bg-ink-900 hover:text-paper-100 transition-colors"
                >
                  {t("delivery.ctaWhatsapp")}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative aspect-[4/3] border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] overflow-hidden bg-paper-100"
            >
              <iframe
                title={t("delivery.mapTitle")}
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* === Proof / Why us === */}
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
              {t("proof.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl lg:text-6xl mt-3">
              {t("proof.title")}
            </h2>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proofItems.map((item, i) => (
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
                <p className="mt-2 text-paper-100/75 leading-relaxed">{item.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* === Most ordered === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-1">
              {t("ordered.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("ordered.title")}
            </h2>
            <p className="mt-4 text-lg text-ink-700 max-w-2xl mx-auto">
              {t("ordered.subtitle")}
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orderedItems.map((item, i) => (
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
                <p className="mt-3 text-sm text-ink-500 italic">
                  {item.reason}
                </p>
              </motion.li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <LocaleLink
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 text-ink-900 px-7 py-3 text-base font-semibold hover:bg-ink-900 hover:text-paper-100 transition-colors"
            >
              {t("ordered.cta")}
              <span aria-hidden>→</span>
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* === Reviews === */}
      <section className="bg-tangerine-500 text-ink-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="hand-note text-ink-900 text-3xl sm:text-4xl -rotate-2">
              {t("reviews.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("reviews.title")}
            </h2>
            <p className="mt-3 text-ink-900/80">{t("reviews.subtitle")}</p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {quotes.map((q, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
                className="bg-paper-50 border-2 border-ink-900 p-6 shadow-[6px_6px_0_0_var(--color-ink-900)]"
              >
                <ReviewStars rating={q.rating} />
                <p className="mt-3 text-lg text-ink-900 leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm text-ink-700">
                  <span className="font-semibold text-ink-900">{q.name}</span>
                  <span className="text-ink-500"> · {q.source}</span>
                </p>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 text-ink-900 px-7 py-3 text-base font-semibold hover:bg-ink-900 hover:text-paper-100 transition-colors"
            >
              {tCornerstone("cta")}
              <span aria-hidden>→</span>
            </a>
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hand-note text-2xl text-ink-900 underline decoration-2 underline-offset-4 hover:text-paper-100 transition-colors"
            >
              {tCornerstone("ctaWrite")}
            </a>
          </div>
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
              <a
                href={RAPPI_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("order_rappi")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-8 py-4 text-base font-semibold hover:translate-y-0.5 transition-transform"
              >
                {t("cta.primary")}
                <span aria-hidden>→</span>
              </a>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("directions")}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-paper-100/40 text-paper-100 px-8 py-4 text-base font-semibold hover:border-paper-100 transition-colors"
              >
                {t("cta.secondary")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
