"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { trackConversion, type ConversionType } from "@/lib/analytics";
import { referencedWhatsAppUrl } from "@/lib/recovery-attribution";
import { useRecoveryReference } from "@/components/useRecoveryReference";
import {
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  ReviewStars,
  type Review,
} from "@/components/ReviewStars";

type Layer = { label: string; body: string; slug?: string };
type MenuItem = { name: string; desc: string; price: string; badge: string };
type HourRow = { days: string; time: string };
type Channel = { title: string; body: string; cta: string; href: string };
type FaqItem = { q: string; a: string };

// Channels appear in this order in the translations: walk-in, WhatsApp, Rappi, Didi Food, Uber Eats.
const CHANNEL_META: Array<{ conversion?: ConversionType; comingSoon?: boolean }> = [
  { conversion: "directions" },
  { conversion: "order_whatsapp" },
  { conversion: "order_rappi" },
  { conversion: "order_didi" },
  { conversion: "order_ubereats" },
];

const MENU_IMAGES: Record<string, string> = {
  California: "/menu/california-burrito.jpg",
  Porkbelly: "/menu/porkbelly.jpg",
  Ensenada: "/menu/ensenada.jpg",
  "Pollos Hermanos": "/menu/pollo-loco.jpg",
  Breakfast: "/menu/breakfast.jpg",
  Portobello: "/menu/portobello.jpg",
};

export function CornerstoneContent() {
  const reference = useRecoveryReference();
  const t = useTranslations("cornerstone");
  const layers = t.raw("anatomy.layers") as Layer[];
  const originParagraphs = t.raw("origin.paragraphs") as string[];
  const menuItems = t.raw("menu.items") as MenuItem[];
  const hours = t.raw("where.hours") as HourRow[];
  const channels = t.raw("delivery.channels") as Channel[];
  const quotes = t.raw("social.quotes") as Review[];
  const faqItems = t.raw("faq.items") as FaqItem[];

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

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

      {/* === Anatomy (6 layers) === */}
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
              {t("anatomy.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl lg:text-6xl mt-3">
              {t("anatomy.title")}
            </h2>
            <p className="mt-4 text-lg text-paper-100/70 max-w-2xl mx-auto">
              {t("anatomy.subtitle")}
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 counter-reset-layers">
            {layers.map((layer, i) => {
              const inner = (
                <>
                  <span
                    className="headline-display text-tangerine-500 text-5xl absolute -top-4 left-4 bg-ink-900 px-2"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="headline-display text-2xl mt-4">
                    {layer.label}
                    {layer.slug && (
                      <span
                        aria-hidden
                        className="ml-2 text-tangerine-500 transition-transform inline-block group-hover:translate-x-1"
                      >
                        →
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-paper-100/75 leading-relaxed">{layer.body}</p>
                </>
              );
              return (
                <motion.li
                  key={layer.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group relative border-2 border-paper-100/15 bg-ink-900/30 p-6 backdrop-blur-sm transition-colors ${
                    layer.slug ? "hover:border-tangerine-500/60" : ""
                  }`}
                >
                  {layer.slug ? (
                    <LocaleLink
                      href={`/ingredients/${layer.slug}`}
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine-500"
                    >
                      {inner}
                    </LocaleLink>
                  ) : (
                    inner
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* === Origin story === */}
      <section className="bg-paper-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="hand-note text-tangerine-600 text-3xl -rotate-1">
              {t("origin.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("origin.title")}
            </h2>
            <div className="mt-8 space-y-5">
              {originParagraphs.map((para, i) => (
                <p key={i} className="text-lg text-ink-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <LocaleLink
                href="/story"
                className="text-ink-900 underline decoration-tangerine-500 decoration-2 underline-offset-4 hover:text-tangerine-600 transition-colors font-semibold"
              >
                {t("origin.kicker")} →
              </LocaleLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Menu === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2">
              {t("menu.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl lg:text-6xl text-ink-900 mt-3">
              {t("menu.title")}
            </h2>
            <p className="mt-4 text-lg text-ink-700 max-w-2xl mx-auto">
              {t("menu.subtitle")}
            </p>
          </div>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, i) => {
              const img = MENU_IMAGES[item.name];
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                  className="group bg-paper-50 border-2 border-ink-900 shadow-[6px_6px_0_0_var(--color-ink-900)] hover:shadow-[10px_10px_0_0_var(--color-ink-900)] hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
                >
                  {img && (
                    <div className="relative aspect-[3/2] overflow-hidden bg-ink-100">
                      <Image
                        src={img}
                        alt={`${item.name} burrito — ${item.desc}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.badge && (
                        <span className="absolute top-3 left-3 hand-note text-paper-50 bg-tangerine-500 text-base px-3 py-1 -rotate-2 shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="headline-display text-2xl sm:text-3xl text-ink-900">
                        {item.name}
                      </h3>
                      <span className="headline-display text-2xl text-ink-900 shrink-0">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-base text-ink-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          <div className="text-center mt-12">
            <LocaleLink
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 text-ink-900 px-7 py-3 text-base font-semibold hover:bg-ink-900 hover:text-paper-100 transition-colors"
            >
              {t("menu.cta")}
              <span aria-hidden>→</span>
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* === Where to find it (address + map) === */}
      <section className="bg-paper-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-10">
            <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2">
              {t("where.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("where.title")}
            </h2>
            <p className="mt-4 text-lg text-ink-700">{t("where.subtitle")}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-paper-100 border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-10">
                <p className="text-lg text-ink-700 leading-relaxed">
                  {t("where.address")}
                </p>
                <div className="mt-6">
                  <h3 className="text-xs uppercase tracking-[0.18em] text-ink-500 font-semibold">
                    {t("where.hoursTitle")}
                  </h3>
                  <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5">
                    {hours.map((row, i) => (
                      <div key={i} className="contents">
                        <dt className="text-ink-700">{row.days}</dt>
                        <dd className="text-ink-900 font-medium">{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <a
                  href={t("where.directionsUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion("directions")}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-tangerine-500 text-ink-900 px-6 py-3 text-base font-semibold hover:translate-y-0.5 transition-transform"
                >
                  {t("where.directionsCta")}
                  <span aria-hidden>→</span>
                </a>
              </div>
              <div className="relative min-h-[280px] md:min-h-0">
                <iframe
                  title="Juanberto's Coahuila 192, Roma Sur, CDMX"
                  src="https://www.google.com/maps?q=Coahuila+192+Roma+Sur+CDMX&output=embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Delivery channels === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-1">
              {t("delivery.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3 max-w-3xl mx-auto leading-[1.05]">
              {t("delivery.title")}
            </h2>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {channels.map((ch, i) => {
              const meta = CHANNEL_META[i] ?? {};
              const isSoon = !!meta.comingSoon;
              return (
                <motion.li
                  key={ch.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`relative bg-paper-50 border-2 border-ink-900 p-6 flex flex-col ${
                    isSoon ? "opacity-70" : ""
                  }`}
                >
                  {isSoon && (
                    <span className="absolute -top-3 right-4 hand-note text-paper-50 bg-tangerine-500 text-base px-3 py-1 -rotate-2 shadow-sm">
                      {t("delivery.comingSoon")}
                    </span>
                  )}
                  <h3 className="headline-display text-2xl text-ink-900">
                    {ch.title}
                  </h3>
                  <p className="mt-2 text-ink-700 leading-relaxed flex-1">
                    {ch.body}
                  </p>
                  {isSoon ? (
                    <span
                      aria-disabled
                      className="mt-5 inline-flex items-center gap-2 text-ink-500 font-semibold select-none"
                    >
                      {t("delivery.comingSoon")}
                    </span>
                  ) : (
                    <a
                      href={meta.conversion === 'order_whatsapp' ? referencedWhatsAppUrl(ch.href, reference?.reference) : ch.href}
                      target={ch.href.startsWith("http") ? "_blank" : undefined}
                      rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={meta.conversion ? () => trackConversion(meta.conversion!) : undefined}
                      className="mt-5 inline-flex items-center gap-2 text-ink-900 font-semibold hover:text-tangerine-600 transition-colors"
                    >
                      {ch.cta}
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* === Social proof === */}
      <section className="bg-tangerine-500 text-ink-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <p className="hand-note text-ink-900 text-3xl sm:text-4xl -rotate-2">
              {t("social.kicker")}
            </p>
            <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-3">
              {t("social.title")}
            </h2>
            <p className="mt-3 text-ink-900/80">{t("social.subtitle")}</p>
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
              {t("social.cta")}
              <span aria-hidden>→</span>
            </a>
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hand-note text-2xl text-ink-900 underline decoration-2 underline-offset-4 hover:text-paper-100 transition-colors"
            >
              {t("social.ctaWrite")}
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
