"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { Logo } from "@/components/Logo";

type Tier1Item = { name: string; desc: string };
type SignatureItem = { name: string; desc: string; price: string; badge?: string };
type FriesItem = { name: string; desc: string; price: string };

// Photo paths are keyed by burrito name; image filenames don't translate.
const SIGNATURE_IMAGES: Record<string, string> = {
  California: "/menu/california-burrito.jpg",
  Portobello: "/menu/portobello.jpg",
  "Pollo Loco": "/menu/pollo-loco.jpg",
  Breakfast: "/menu/breakfast.jpg",
  Porkbelly: "/menu/porkbelly.jpg",
  Ensenada: "/menu/ensenada.jpg",
};

const TIER1_IMAGES: Record<string, string> = {
  "El Tijuana": "/menu/el-tijuana.jpg",
  "Bean & Cheese": "/menu/black-bean-cheese.png",
  Cochinita: "/menu/cochinita.jpg",
};

const MASTERPIECE_IMAGE = "/menu/chimichanga.jpg";

const FRIES_IMAGES: Record<string, string> = {
  "Carne Asada Fries": "/menu/carne-asada-fries.png",
  "Chorizo Fries": "/menu/chorizo-fries.png",
  "Porkbelly Fries": "/menu/pork-belly-fries.png",
};

export function MenuContent() {
  const t = useTranslations("menuPage");
  const tier1 = t.raw("tier1.items") as Tier1Item[];
  const signature = t.raw("signature.items") as SignatureItem[];
  const fries = t.raw("fries.items") as FriesItem[];

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
            {tier1.map((item, i) => {
              const img = TIER1_IMAGES[item.name];
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden rounded-md bg-ink-700">
                    {img ? (
                      <Image
                        src={img}
                        alt={`${item.name} — ${item.desc}`}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="opacity-90" style={{ transform: "rotate(-4deg)" }}>
                          <Logo size={120} />
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="headline-display text-2xl sm:text-3xl mt-4">{item.name}</h3>
                  <p className="text-sm text-paper-100/70 mt-1">{item.desc}</p>
                </motion.li>
              );
            })}
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

          <ul className="grid gap-8 sm:gap-10 sm:grid-cols-2">
            {signature.map((item, i) => {
              const img = SIGNATURE_IMAGES[item.name];
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-paper-50 border-2 border-ink-900 shadow-[6px_6px_0_0_var(--color-ink-900)] hover:shadow-[10px_10px_0_0_var(--color-ink-900)] hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
                >
                  {img && (
                    <div className="relative aspect-[3/2] overflow-hidden bg-ink-100">
                      <Image
                        src={img}
                        alt={`${item.name} — ${item.desc}`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.badge && (
                        <span className="absolute top-3 left-3 hand-note text-paper-50 bg-tangerine-500 text-base px-3 py-1 -rotate-2 shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="headline-display text-3xl sm:text-4xl text-ink-900">
                        {item.name}
                      </h3>
                      <span className="headline-display text-3xl text-ink-900 shrink-0">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-3 text-base sm:text-lg text-ink-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ rotate: -3, scale: 0.94, opacity: 0 }}
              whileInView={{ rotate: -2, scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative aspect-[4/3] overflow-hidden border-4 border-ink-900 shadow-[14px_14px_0_0_var(--color-ink-900)]"
              style={{ filter: "drop-shadow(0 18px 32px rgba(26,26,26,0.18))" }}
            >
              <Image
                src={MASTERPIECE_IMAGE}
                alt={t("masterpiece.name")}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </motion.div>
            <div>
              <p className="hand-note text-ink-900 text-3xl sm:text-4xl -rotate-2">
                {t("masterpiece.label")}
              </p>
              <h2 className="headline-display text-5xl sm:text-6xl lg:text-7xl mt-2 leading-[0.95]">
                {t("masterpiece.name")}
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-ink-900/85 leading-relaxed max-w-2xl">
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

      {/* === Loaded Fries === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden sm:block h-px w-12 bg-ink-900/30" aria-hidden />
              <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-1">
                ★ {t("fries.label")} ★
              </p>
              <span className="hidden sm:block h-px w-12 bg-ink-900/30" aria-hidden />
            </div>
          </div>

          <ul className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {fries.map((item, i) => {
              const img = FRIES_IMAGES[item.name];
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-paper-50 border-2 border-ink-900 shadow-[6px_6px_0_0_var(--color-ink-900)] hover:shadow-[10px_10px_0_0_var(--color-ink-900)] hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
                >
                  {img && (
                    <div className="relative aspect-[3/2] overflow-hidden bg-ink-100">
                      <Image
                        src={img}
                        alt={`${item.name} — ${item.desc}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="headline-display text-2xl sm:text-3xl text-ink-900">
                        {item.name}
                      </h3>
                      <span className="headline-display text-3xl text-ink-900 shrink-0">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-3 text-base text-ink-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>

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
