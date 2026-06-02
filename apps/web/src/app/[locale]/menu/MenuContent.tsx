"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { Logo } from "@/components/Logo";

type Tier1Item = { name: string; desc: string };
type SignatureItem = { name: string; desc: string; price: string; badge?: string };

export function MenuContent() {
  const t = useTranslations("menuPage");
  const tier1 = t.raw("tier1.items") as Tier1Item[];
  const signature = t.raw("signature.items") as SignatureItem[];

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* === Tier 1 — "DESDE $99" dark band === */}
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16 relative">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="hand-note text-tangerine-500 text-4xl sm:text-5xl -rotate-2">
              {t("tier1.label")}
            </span>
          </div>
          <ul className="grid gap-6 sm:gap-8 sm:grid-cols-3">
            {tier1.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-t border-paper-100/15 pt-5"
              >
                <h3 className="headline-display text-2xl sm:text-3xl">{item.name}</h3>
                <p className="text-sm text-paper-100/70 mt-1">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* === Signature California Burritos === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden sm:block h-px w-12 bg-ink-900/30" aria-hidden />
              <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-1">
                ★ {t("signature.label")} ★
              </p>
              <span className="hidden sm:block h-px w-12 bg-ink-900/30" aria-hidden />
            </div>
          </div>

          <ul className="divide-y-2 divide-ink-900/15">
            {signature.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="py-6 sm:py-7 grid grid-cols-[1fr_auto] gap-4 sm:gap-8 items-baseline"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="headline-display text-2xl sm:text-3xl text-ink-900">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="hand-note text-tangerine-600 text-xl -rotate-2">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-base sm:text-lg text-ink-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-baseline gap-1 text-ink-900">
                  <span className="headline-display text-3xl sm:text-4xl">${item.price}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* === Masterpiece — La Gran Chimichanga === */}
      <section className="relative bg-tangerine-500 text-ink-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-ink-900) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28 relative">
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ rotate: -8, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: -5, scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              className="justify-self-center lg:justify-self-start shrink-0"
              style={{ filter: "drop-shadow(0 14px 28px rgba(26,26,26,0.28))" }}
            >
              <Logo size={220} />
            </motion.div>
            <div>
              <p className="hand-note text-ink-900 text-3xl sm:text-4xl -rotate-2">
                {t("masterpiece.label")}
              </p>
              <h2 className="headline-display text-5xl sm:text-6xl lg:text-7xl mt-2">
                {t("masterpiece.name")}
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-ink-900/80 leading-relaxed max-w-2xl">
                {t("masterpiece.desc")}
              </p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="headline-display text-5xl">${t("masterpiece.price")}</span>
                <span className="text-sm uppercase tracking-[0.18em] text-ink-900/70 font-semibold">
                  {t("currency")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Special — Carne Asada Fries === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="border-2 border-ink-900 bg-paper-50 p-8 sm:p-10 shadow-[10px_10px_0_0_var(--color-ink-900)] grid sm:grid-cols-[1fr_auto] gap-6 items-baseline"
          >
            <div>
              <p className="hand-note text-tangerine-600 text-2xl sm:text-3xl -rotate-2">
                ★ {t("special.label")} ★
              </p>
              <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-2">
                {t("special.name")}
              </h2>
              <p className="mt-3 text-lg text-ink-700 leading-relaxed max-w-md">
                {t("special.desc")}
              </p>
            </div>
            <div className="text-right">
              <span className="headline-display text-5xl sm:text-6xl text-ink-900">
                ${t("special.price")}
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
            <LocaleLink
              href="/order"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-paper-100 px-8 py-4 text-base font-semibold hover:bg-tangerine-500 hover:text-ink-900 transition-colors"
            >
              {t("cta")}
              <span aria-hidden>→</span>
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
