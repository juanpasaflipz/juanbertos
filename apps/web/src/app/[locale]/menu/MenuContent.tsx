"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { Logo } from "@/components/Logo";
import type { IngredientSlug } from "@/lib/ingredients";

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
  Shrimp: "/menu/shrimp-burrito.png",
  "Surf-N-Turf": "/menu/surf-n-turf-burrito.png",
};

const TIER1_IMAGES: Record<string, string> = {
  "El Tijuana": "/menu/el-tijuana.jpg",
  "Bean & Cheese": "/menu/bean-cheese.png",
  Cochinita: "/menu/cochinita.jpg",
};

const MASTERPIECE_IMAGE = "/menu/chimichanga.jpg";
const AGUAS_IMAGE = "/menu/aguas_frescas.png";

const FRIES_IMAGES: Record<string, string> = {
  "Carne Asada Fries": "/menu/carne-asada-fries.png",
  "Chorizo Fries": "/menu/chorizo-fries.png",
  "Porkbelly Fries": "/menu/pork-belly-fries.png",
};

// Menu item name → ingredient page slugs. Order matters: most distinctive first.
// Items not listed render no chips. Names match the i18n strings in messages/{es,en}.json.
const INGREDIENT_SLUGS_BY_ITEM: Record<string, IngredientSlug[]> = {
  // Signature
  California: ["carne-asada", "queso-cheddar", "papas-a-la-francesa"],
  Porkbelly: ["queso-cheddar", "papas-a-la-francesa", "pico-de-gallo"],
  Ensenada: ["tortilla-de-harina"],
  "Pollo Loco": ["guacamole", "tortilla-de-harina"],
  Breakfast: ["queso-cheddar", "papas-a-la-francesa", "pico-de-gallo"],
  Portobello: ["queso-cheddar", "papas-a-la-francesa", "guacamole"],
  Shrimp: ["guacamole", "pico-de-gallo", "tortilla-de-harina"],
  "Surf-N-Turf": ["carne-asada", "guacamole", "tortilla-de-harina"],
  // Tier 1
  "El Tijuana": ["tortilla-de-harina"],
  "Bean & Cheese": ["queso-cheddar", "tortilla-de-harina"],
  Cochinita: ["tortilla-de-harina"],
  // Loaded Fries
  "Carne Asada Fries": ["carne-asada", "papas-a-la-francesa", "queso-cheddar", "guacamole"],
  "Chorizo Fries": ["papas-a-la-francesa", "queso-cheddar"],
  "Porkbelly Fries": ["papas-a-la-francesa", "queso-cheddar"],
};

const MASTERPIECE_SLUGS: IngredientSlug[] = ["carne-asada", "queso-cheddar", "tortilla-de-harina"];

function IngredientChips({
  slugs,
  variant,
}: {
  slugs: IngredientSlug[] | undefined;
  variant: "light" | "dark" | "warm";
}) {
  const t = useTranslations("ingredientsIndex.items");
  if (!slugs || slugs.length === 0) return null;
  const baseClass = "inline-flex items-center px-2.5 py-1 text-xs font-semibold border transition-colors";
  const variantClass =
    variant === "dark"
      ? "border-paper-100/25 text-paper-100/80 hover:border-tangerine-500 hover:text-tangerine-500"
      : variant === "warm"
        ? "border-ink-900/40 text-ink-900/80 hover:border-ink-900 hover:bg-ink-900 hover:text-tangerine-500"
        : "border-ink-900/25 text-ink-700 hover:border-tangerine-500 hover:text-tangerine-600";
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {slugs.map((slug) => (
        <li key={slug}>
          <LocaleLink href={`/ingredients/${slug}`} className={`${baseClass} ${variantClass}`}>
            {t(`${slug}.label`)}
          </LocaleLink>
        </li>
      ))}
    </ul>
  );
}

export function MenuContent() {
  const t = useTranslations("menuPage");
  const tier1 = t.raw("tier1.items") as Tier1Item[];
  const signature = t.raw("signature.items") as SignatureItem[];
  const fries = t.raw("fries.items") as FriesItem[];
  const aguasFlavors = t.raw("aguas.flavors") as string[];

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
                  <IngredientChips slugs={INGREDIENT_SLUGS_BY_ITEM[item.name]} variant="dark" />
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
                    <IngredientChips slugs={INGREDIENT_SLUGS_BY_ITEM[item.name]} variant="light" />
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
              <IngredientChips slugs={MASTERPIECE_SLUGS} variant="warm" />
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
                    <IngredientChips slugs={INGREDIENT_SLUGS_BY_ITEM[item.name]} variant="light" />
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* === Aguas Frescas === */}
      <section className="bg-paper-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="border-2 border-ink-900 bg-paper-100 shadow-[10px_10px_0_0_var(--color-ink-900)] grid md:grid-cols-2 overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] bg-paper-100">
              <Image
                src={AGUAS_IMAGE}
                alt={t("aguas.name")}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-6 sm:p-8"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <p className="hand-note text-tangerine-600 text-2xl sm:text-3xl -rotate-2">
                ★ {t("aguas.label")} ★
              </p>
              <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-2">
                {t("aguas.name")}
              </h2>
              <p className="mt-3 text-lg text-ink-700 leading-relaxed">
                {t("aguas.desc")}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {aguasFlavors.map((flavor) => (
                  <li
                    key={flavor}
                    className="inline-flex items-center px-3 py-1 text-sm font-semibold border-2 border-ink-900 bg-paper-50 text-ink-900"
                  >
                    {flavor}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="headline-display text-4xl sm:text-5xl text-ink-900">
                  ${t("aguas.price")}
                </span>
                <span className="text-sm uppercase tracking-[0.18em] text-ink-900/70 font-semibold">
                  {t("currency")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Burrito vs Burger cross-link === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 sm:pt-14">
          <LocaleLink
            href="/burrito-vs-burger"
            className="group block border-2 border-ink-900 bg-paper-50 p-6 sm:p-8 shadow-[6px_6px_0_0_var(--color-ink-900)] hover:shadow-[10px_10px_0_0_var(--color-ink-900)] hover:-translate-y-0.5 transition-all"
          >
            <p className="hand-note text-tangerine-600 text-2xl sm:text-3xl -rotate-1">
              {t("compareCta.kicker")}
            </p>
            <div className="mt-2 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <h3 className="headline-display text-2xl sm:text-3xl text-ink-900 leading-snug">
                {t("compareCta.title")}
              </h3>
              <span className="mt-3 sm:mt-0 inline-flex shrink-0 text-ink-900 font-semibold group-hover:text-tangerine-600 transition-colors">
                {t("compareCta.link")}
              </span>
            </div>
          </LocaleLink>
        </div>
      </section>

      {/* === CTA === */}
      <section className="bg-paper-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 pb-20 sm:pt-12 sm:pb-24 text-center">
          <LocaleLink
            href="/order"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-paper-100 px-8 py-4 text-base font-semibold hover:bg-tangerine-500 hover:text-ink-900 transition-colors"
          >
            {t("cta")}
            <span aria-hidden>→</span>
          </LocaleLink>
        </div>
      </section>
    </>
  );
}
