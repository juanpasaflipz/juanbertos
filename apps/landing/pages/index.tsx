import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────
   Brand constants — swap these with real values when ready.
   ──────────────────────────────────────────────────────────────────── */
const ADDRESS_LINE = "Coahuila 192";
const ADDRESS_NEIGHBORHOOD_ES = "Roma Norte, 06700 CDMX";
const ADDRESS_NEIGHBORHOOD_EN = "Roma Norte, 06700 CDMX";
const ADDRESS_QUERY = "Coahuila+192+Roma+Norte+06700+CDMX";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_QUERY}`;
const WHATSAPP_PHONE = "5215629152086"; // +52 1 56 2915 2086
const IG_URL = "https://www.instagram.com/juanbertos.california.burritos/";

const HOURS = {
  es: ["Todos los días · 11:00 — 21:00"],
  en: ["Daily · 11am — 9pm"],
};

/* Delivery — TODO replace # with real URLs once each platform is live */
const DELIVERY = [
  { id: "rappi", label: "Rappi", url: "#", color: "bg-[#FF441F] hover:bg-[#E63A18] text-white" },
  { id: "uber", label: "Uber Eats", url: "#", color: "bg-[#06C167] hover:bg-[#05A85A] text-white" },
  { id: "didi", label: "DiDi Food", url: "#", color: "bg-[#FF7900] hover:bg-[#E66E00] text-white" },
];

type MenuItem = {
  id: string;
  name: { es: string; en: string };
  desc: { es: string; en: string };
  hero?: boolean;
};
const MENU: MenuItem[] = [
  {
    id: "california",
    hero: true,
    name: { es: "California Burrito", en: "California Burrito" },
    desc: {
      es: "Carne asada, papas fritas adentro, queso, guac, crema, pico. La razón por la que existimos.",
      en: "Carne asada, fries inside, cheese, guac, sour cream, pico. The whole reason we exist.",
    },
  },
  {
    id: "ensenada-fish",
    name: { es: "Ensenada Fish Burrito", en: "Ensenada Fish Burrito" },
    desc: {
      es: "Pescado capeado estilo Baja, col, crema chipotle, salsa de la casa.",
      en: "Baja-style beer-battered fish, cabbage slaw, chipotle crema, house salsa.",
    },
  },
  {
    id: "gringa-pastor",
    name: { es: "Gringa Burrito · Pastor", en: "Gringa Burrito · Pastor" },
    desc: {
      es: "Pastor del trompo, piña, queso fundido, cebolla y cilantro. Estilo gringa.",
      en: "Pastor off the trompo, pineapple, melted cheese, onion, cilantro. Gringa style.",
    },
  },
  {
    id: "pollo-asado",
    name: { es: "Pollo Asado Burrito", en: "Grilled Chicken Burrito" },
    desc: {
      es: "Pollo marinado al carbón, arroz, frijoles, queso, salsa verde.",
      en: "Charcoal-grilled marinated chicken, rice, beans, cheese, salsa verde.",
    },
  },
  {
    id: "portobello",
    name: { es: "Portobello Veggie", en: "Portobello Veggie" },
    desc: {
      es: "Hongos portobello a la parrilla, pimientos asados, frijoles, queso, guac.",
      en: "Grilled portobello, charred peppers, beans, cheese, guac.",
    },
  },
  {
    id: "breakfast",
    name: { es: "Breakfast Burrito", en: "Breakfast Burrito" },
    desc: {
      es: "Huevo, chorizo, papa frita, queso, salsa roja. Disponible todo el día.",
      en: "Egg, chorizo, fried potato, cheese, red salsa. Available all day.",
    },
  },
];

type Lang = "es" | "en";
const COPY = {
  es: {
    langSwitch: "EN",
    openBadge: "Abierto",
    openSub: "Coahuila 192, Roma Norte",
    title:
      "JUANBERTO'S — Burritos Californianos en Roma Norte, CDMX | Hecho con Corazón",
    hero: {
      eyebrow: "WORLD FAMOSO · SINCE 2026",
      line1: "Burritos",
      line2: "Californianos.",
      sub: "Carne asada. Papas adentro. Hecho con corazón.",
      ctaDirections: "Cómo llegar",
      ctaMenu: "Ver menú",
      ctaWhatsapp: "Pedir por WhatsApp",
    },
    story: {
      kicker: "La historia",
      title: "Una cosa.\nBien hecha.",
      body: "Nacido en San Diego, criado en la calle, aterrizado en Roma Norte. El burrito californiano es carne asada, papas fritas, queso y nada más. Sin arroz. Sin frijoles. Sin atajos. Algo enorme, indulgente y perfecto.",
      pull: "Las papas van adentro.",
      pullEnd: "Ese es el punto.",
    },
    menu: {
      kicker: "El menú",
      title: "Lo que servimos.",
      subtitle:
        "Pocos burritos. Hechos como deben hacerse. Pídelos para llevar o cómelos aquí con una cerveza fría.",
      note: "Menú sujeto a disponibilidad del día.",
    },
    beer: {
      kicker: "Para beber",
      line1: "Sí, tenemos",
      line2: "cerveza fría.",
      body: "Cerveza bien fría y refrescos a la mano. Porque un burrito californiano sin algo helado es una oportunidad perdida.",
    },
    delivery: {
      kicker: "Para llevar",
      title: "Ordena en línea.",
      sub: "Disponible en tus apps favoritas. Llega caliente, llega rápido.",
    },
    visit: {
      kicker: "Encuéntranos",
      title: "Coahuila\n192.",
      hoursLabel: "Horarios",
      mapsCta: "Abrir en Google Maps",
      directionsCta: "Cómo llegar",
    },
    social: {
      kicker: "Instagram",
      title: "Sigue la leyenda.",
      sub: "Míranos cocinarlo. Sin filtros.",
    },
    footer: {
      contact: "WhatsApp",
      rights: "Todos los derechos reservados.",
      tagline: "Hecho con corazón en Roma Norte.",
    },
  },
  en: {
    langSwitch: "ES",
    openBadge: "Open",
    openSub: "Coahuila 192, Roma Norte",
    title:
      "JUANBERTO'S — California Burritos in Roma Norte, CDMX | Made with Heart",
    hero: {
      eyebrow: "WORLD FAMOSO · SINCE 2026",
      line1: "California",
      line2: "Burritos.",
      sub: "Carne asada. Fries inside. Made with heart.",
      ctaDirections: "Get directions",
      ctaMenu: "See the menu",
      ctaWhatsapp: "Order on WhatsApp",
    },
    story: {
      kicker: "The story",
      title: "One thing.\nDone right.",
      body: "Born in San Diego. Forged in the street. Landed in Roma Norte. The California burrito is carne asada, fries, cheese — and nothing else. No rice. No beans. No shortcuts. Something huge, indulgent, and perfect.",
      pull: "The fries go inside.",
      pullEnd: "That's the whole point.",
    },
    menu: {
      kicker: "The menu",
      title: "What we serve.",
      subtitle:
        "A few burritos. Made the way they're supposed to be made. Take them to go or eat in with a cold beer.",
      note: "Menu subject to daily availability.",
    },
    beer: {
      kicker: "To drink",
      line1: "Yes, we have",
      line2: "cold beer.",
      body: "Cold beer and ice-cold sodas on hand. A California burrito without something cold is a wasted opportunity.",
    },
    delivery: {
      kicker: "Delivery",
      title: "Order online.",
      sub: "Available on your favorite apps. Arrives hot, arrives fast.",
    },
    visit: {
      kicker: "Find us",
      title: "Coahuila\n192.",
      hoursLabel: "Hours",
      mapsCta: "Open in Google Maps",
      directionsCta: "Get directions",
    },
    social: {
      kicker: "Instagram",
      title: "Follow the legend.",
      sub: "Watch us cook it. No filter.",
    },
    footer: {
      contact: "WhatsApp",
      rights: "All rights reserved.",
      tagline: "Made with heart in Roma Norte.",
    },
  },
} as const;

const ease = [0.25, 0.4, 0.25, 1];

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BurritoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 38 Q 32 22 54 38 L 50 46 Q 32 56 14 46 Z" />
      <path d="M18 40 Q 22 36 28 38" opacity="0.7" />
      <path d="M36 38 Q 42 36 46 40" opacity="0.7" />
      <path d="M22 44 Q 32 48 42 44" opacity="0.5" />
    </svg>
  );
}

const Home: NextPage = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = window.localStorage.getItem("jb.lang");
      if (saved === "es" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  const t = COPY[lang];
  const addressNeighborhood = lang === "es" ? ADDRESS_NEIGHBORHOOD_ES : ADDRESS_NEIGHBORHOOD_EN;

  const toggleLang = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    try {
      window.localStorage.setItem("jb.lang", next);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    lang === "es"
      ? "¡Hola! Quiero ordenar de Juanberto's 🌯"
      : "Hi! I'd like to order from Juanberto's 🌯"
  )}`;

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <link rel="canonical" href="https://www.juanbertos.com" />
        <link rel="alternate" hrefLang="en" href="https://www.juanbertos.com" />
        <link rel="alternate" hrefLang="es" href="https://es.juanbertos.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.juanbertos.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "JUANBERTO'S",
              description:
                "California burritos in Roma Norte, CDMX. Carne asada. Fries inside. Made with heart.",
              url: "https://www.juanbertos.com",
              telephone: "",
              email: "hello@juanbertos.com",
              servesCuisine: ["Mexican", "California Burritos"],
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Coahuila 192",
                addressLocality: "Roma Norte",
                postalCode: "06700",
                addressRegion: "CDMX",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.4128,
                longitude: -99.1626,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "11:00",
                  closes: "21:00",
                },
              ],
              image: "https://www.juanbertos.com/og-image.png",
              logo: "https://www.juanbertos.com/logo.png",
              sameAs: [IG_URL],
            }),
          }}
        />
      </Head>

      <div className="fixed top-0 left-0 right-0 h-1 bg-lime z-50" />

      <div className="fixed top-3 left-0 right-0 z-50 px-4 sm:px-6 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto inline-flex items-center gap-2 bg-forest text-cream-light text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-mono font-semibold px-3 py-1.5 rounded-full open-pill-glow">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-80" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
          </span>
          {t.openBadge}
          <span className="hidden sm:inline opacity-60">— {t.openSub}</span>
        </div>
        <button
          type="button"
          onClick={toggleLang}
          aria-label={`Switch language to ${t.langSwitch === "EN" ? "English" : "Español"}`}
          className="pointer-events-auto inline-flex items-center justify-center min-w-[44px] min-h-[40px] px-3 text-[11px] uppercase tracking-[0.22em] font-mono font-semibold text-ink/60 hover:text-ink bg-cream-light/70 hover:bg-cream-light backdrop-blur rounded-full border border-ink/10 transition-colors"
        >
          {mounted ? t.langSwitch : "ES"}
        </button>
      </div>

      <div className="grain-overlay" />

      {/* HERO */}
      <header
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden hero-bg pt-20 pb-16"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full border-[1.5px] border-dashed border-forest/15" />
          <div className="absolute -bottom-32 -right-32 w-[24rem] h-[24rem] rounded-full border-[1.5px] border-dashed border-brick/15" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="mb-8 sm:mb-10"
          >
            <img
              src="/logo.png"
              alt="Juanberto's — California Burritos · Made with heart"
              className="mx-auto w-56 sm:w-72 md:w-80 drop-shadow-[0_4px_24px_rgba(45,90,45,0.18)]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-brick font-mono font-semibold mb-5"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-ink"
          >
            {t.hero.line1}
            <br />
            <span className="text-brick">{t.hero.line2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-7 text-base sm:text-lg md:text-xl text-ink-soft font-medium max-w-xl mx-auto"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-cream font-semibold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-200 hover:bg-forest active:scale-[0.98] min-h-[44px]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t.hero.ctaDirections}
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime text-ink font-semibold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-200 hover:bg-lime-deep active:scale-[0.98] min-h-[44px]"
            >
              {t.hero.ctaMenu}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest text-cream-light font-semibold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-200 hover:bg-forest-deep active:scale-[0.98] min-h-[44px]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.hero.ctaWhatsapp}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="mt-10 text-[11px] uppercase tracking-[0.3em] text-ink-mute font-mono"
          >
            {ADDRESS_LINE} · {addressNeighborhood}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-subtle-float"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-ink/30 to-transparent" />
        </motion.div>
      </header>

      <main>
        {/* STORY */}
        <section
          id="story"
          className="relative py-24 md:py-36 px-6 bg-cream-light overflow-hidden"
        >
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.4em] text-forest font-mono font-semibold mb-6">
                · {t.story.kicker} ·
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-[0.92] whitespace-pre-line">
                {t.story.title}
              </h2>
            </FadeIn>

            <div className="mt-14 md:mt-16 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <FadeIn delay={0.1}>
                <p className="text-lg text-ink-soft leading-relaxed">
                  {t.story.body}
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-5">
                  {[
                    lang === "es" ? "Carne asada de verdad" : "Real carne asada",
                    lang === "es" ? "Papas frescas adentro" : "Fresh fries inside",
                    lang === "es" ? "Sin atajos, sin filtros" : "No shortcuts, no filters",
                    lang === "es" ? "Hecho con corazón" : "Made with heart",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span className="w-2.5 h-2.5 bg-brick rounded-full shrink-0" />
                      <span className="text-lg font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <FadeIn delay={0.15}>
              <div className="mt-20 pt-16 border-t border-ink/10">
                <p className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-snug">
                  {t.story.pull}
                  <br />
                  <span className="text-brick">{t.story.pullEnd}</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MENU */}
        <section id="menu" className="relative py-24 md:py-36 px-6 bg-cream">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
                <p className="text-[10px] uppercase tracking-[0.4em] text-forest font-mono font-semibold mb-5">
                  · {t.menu.kicker} ·
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[0.92]">
                  {t.menu.title}
                </h2>
                <p className="mt-6 text-base md:text-lg text-ink-soft leading-relaxed">
                  {t.menu.subtitle}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {MENU.map((item, i) => (
                <FadeIn key={item.id} delay={0.05 * i}>
                  <article
                    className={`group h-full flex flex-col rounded-2xl overflow-hidden bg-cream-light border border-ink/10 transition-all duration-300 hover:border-ink/25 hover:-translate-y-0.5 ${
                      item.hero ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""
                    }`}
                  >
                    <div
                      className={`relative aspect-[4/3] overflow-hidden ${
                        item.hero
                          ? "bg-gradient-to-br from-lime via-lime-deep to-forest"
                          : i % 3 === 0
                          ? "bg-gradient-to-br from-cream-dark via-cream to-lime/40"
                          : i % 3 === 1
                          ? "bg-gradient-to-br from-brick/15 via-cream to-cream-dark"
                          : "bg-gradient-to-br from-forest/20 via-cream-light to-cream"
                      }`}
                    >
                      <BurritoMark
                        className={`absolute inset-0 m-auto w-24 h-24 ${
                          item.hero ? "text-ink/70" : "text-ink/40"
                        } transition-transform duration-500 group-hover:scale-105`}
                      />
                      {item.hero && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-ink text-cream-light text-[10px] uppercase tracking-[0.2em] font-mono font-semibold px-2.5 py-1 rounded-full">
                          ★ {lang === "es" ? "El clásico" : "The classic"}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col flex-1 p-5 md:p-6">
                      <h3 className="font-display text-xl md:text-2xl text-ink leading-tight mb-2">
                        {item.name[lang]}
                      </h3>
                      <p className="text-sm md:text-[15px] text-ink-soft leading-relaxed flex-1">
                        {item.desc[lang]}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              <p className="mt-12 text-center text-xs text-ink-mute font-mono">
                {t.menu.note}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ORDER ONLINE */}
        <section id="order" className="relative py-20 md:py-28 px-6 bg-cream-light">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.4em] text-forest font-mono font-semibold mb-5">
                · {t.delivery.kicker} ·
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[0.92]">
                {t.delivery.title}
              </h2>
              <p className="mt-6 text-base md:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
                {t.delivery.sub}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-3">
                {DELIVERY.map((d) => (
                  <a
                    key={d.id}
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-200 active:scale-[0.98] min-h-[44px] ${d.color}`}
                  >
                    {d.label}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* BEER */}
        <section
          id="cerveza"
          className="relative py-24 md:py-32 px-6 bg-lime overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full border-[1.5px] border-dashed border-ink/15" />
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full border-[1.5px] border-dashed border-ink/10" />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.4em] text-ink/70 font-mono font-semibold mb-5">
                · {t.beer.kicker} ·
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-[0.92]">
                {t.beer.line1}
                <br />
                <span className="text-brick-deep">{t.beer.line2}</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-10 text-lg md:text-xl text-ink-soft max-w-xl mx-auto leading-relaxed">
                {t.beer.body}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="relative py-24 md:py-36 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-14 items-start">
              <FadeIn>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-forest font-mono font-semibold mb-6">
                    · {t.visit.kicker} ·
                  </p>
                  <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink leading-[0.92] whitespace-pre-line">
                    {t.visit.title}
                  </h2>
                  <p className="mt-5 text-xl text-ink-soft">{addressNeighborhood}</p>

                  <div className="mt-10">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-ink-mute font-mono font-semibold mb-4">
                      {t.visit.hoursLabel}
                    </p>
                    <ul className="space-y-2">
                      {HOURS[lang].map((line) => (
                        <li
                          key={line}
                          className="flex items-center gap-3 text-base md:text-lg text-ink"
                        >
                          <span className="w-1.5 h-1.5 bg-forest rounded-full shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-ink text-cream font-semibold px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200 hover:bg-forest active:scale-[0.98] min-h-[44px]"
                    >
                      {t.visit.directionsCta}
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-cream-light text-ink font-semibold px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200 hover:bg-cream-dark active:scale-[0.98] min-h-[44px] border border-ink/10"
                    >
                      {t.visit.mapsCta}
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Coahuila 192, Roma Norte in Google Maps"
                  className="block aspect-[4/5] md:aspect-[4/4] rounded-2xl overflow-hidden relative bg-gradient-to-br from-cream-dark via-cream to-lime/30 border border-ink/10 hover:border-ink/25 transition-colors group"
                >
                  <div className="absolute inset-0 opacity-[0.07]">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className="absolute left-0 right-0 h-px bg-ink"
                        style={{ top: `${(i + 1) * 9}%` }}
                      />
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className="absolute top-0 bottom-0 w-px bg-ink"
                        style={{ left: `${(i + 1) * 9}%` }}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <motion.div
                      initial={{ y: -8 }}
                      animate={{ y: 0 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1.6,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-brick/20 blur-xl" />
                      <svg
                        className="relative w-12 h-12 text-brick drop-shadow-[0_4px_8px_rgba(156,46,31,0.25)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C7.589 2 4 5.589 4 9.995 4 16.5 12 22 12 22s8-5.5 8-12.005C20 5.589 16.411 2 12 2zm0 11a3 3 0 110-6 3 3 0 010 6z" />
                      </svg>
                    </motion.div>
                    <p className="font-display text-xl text-ink">{ADDRESS_LINE}</p>
                    <p className="text-sm text-ink-soft">{addressNeighborhood}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-ink-mute font-mono font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                      {t.visit.mapsCta} →
                    </span>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="relative py-24 md:py-32 px-6 bg-forest-deep overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(196, 215, 76, 0.12) 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.4em] text-lime font-mono font-semibold mb-5">
                · {t.social.kicker} ·
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream-light leading-[0.92]">
                {t.social.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 text-lg sm:text-xl text-lime font-bold hover:text-cream-light transition-colors duration-200 group"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @juanbertos.california.burritos
              </a>
              <p className="mt-4 text-sm text-cream/50">{t.social.sub}</p>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-14 px-6 bg-ink text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-2xl sm:text-3xl text-cream-light tracking-wide">
            JUANBERTO&apos;S
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cream/40 font-mono">
            {t.footer.tagline}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-lime transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.footer.contact}
            </a>
            <a
              href="mailto:hello@juanbertos.com"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-lime transition-colors duration-200"
            >
              hello@juanbertos.com
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-lime transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
          <p className="mt-8 text-xs text-cream/25">
            &copy; {new Date().getFullYear()} Juanberto&apos;s. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
