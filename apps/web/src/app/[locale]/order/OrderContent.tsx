"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Link as LocaleLink } from "@/i18n/navigation";
import { trackConversion, type ConversionType } from "@/lib/analytics";

type ChannelKey = "inperson" | "whatsapp" | "rappi" | "ubereats";

const CHANNELS: Array<{
  key: ChannelKey;
  icon: React.ReactNode;
  external: boolean;
  accent: string;
  conversion?: ConversionType;
  comingSoon?: boolean;
}> = [
  { key: "inperson",  external: false, accent: "bg-tangerine-500", icon: <StorefrontIcon /> },
  { key: "whatsapp",  external: true,  accent: "bg-cilantro-500",   icon: <WhatsAppIcon />, conversion: "order_whatsapp" },
  { key: "rappi",     external: true,  accent: "bg-salsa-500",      icon: <BoltIcon />,     conversion: "order_rappi" },
  { key: "ubereats",  external: true,  accent: "bg-ink-900",        icon: <BagIcon />,      conversion: "order_ubereats",  comingSoon: true },
];

export function OrderContent() {
  const t = useTranslations("orderPage");

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <section className="bg-paper-100 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {CHANNELS.map((c, i) => {
              const href = t(`channels.${c.key}.href`);
              const title = t(`channels.${c.key}.title`);
              const body = t(`channels.${c.key}.body`);
              const cta = t(`channels.${c.key}.cta`);

              const isSoon = !!c.comingSoon;
              const cardBody = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={isSoon ? undefined : { y: -4 }}
                  className={`group relative h-full bg-paper-50 border-2 border-ink-900 shadow-[6px_6px_0_0_var(--color-ink-900)] transition-all p-7 flex flex-col ${
                    isSoon ? "opacity-70" : "hover:shadow-[10px_10px_0_0_var(--color-ink-900)]"
                  }`}
                >
                  {isSoon && (
                    <span className="absolute -top-3 right-4 hand-note text-paper-50 bg-tangerine-500 text-base px-3 py-1 -rotate-2 shadow-sm">
                      {t("comingSoon")}
                    </span>
                  )}
                  <span
                    className={`${c.accent} text-paper-100 w-14 h-14 rounded-full flex items-center justify-center mb-5 shrink-0 ${
                      isSoon ? "grayscale" : ""
                    }`}
                    aria-hidden
                  >
                    {c.icon}
                  </span>
                  <h2 className="headline-display text-3xl text-ink-900">{title}</h2>
                  <p className="mt-3 text-base text-ink-700 leading-relaxed flex-1">{body}</p>
                  {!isSoon && (
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-tangerine-600 transition-colors">
                      {cta}
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  )}
                </motion.div>
              );

              return (
                <li key={c.key}>
                  {isSoon ? (
                    <div aria-disabled className="block h-full cursor-default select-none">
                      {cardBody}
                    </div>
                  ) : c.external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={c.conversion ? () => trackConversion(c.conversion!) : undefined}
                      className="block h-full"
                    >
                      {cardBody}
                    </a>
                  ) : (
                    <LocaleLink href={href} className="block h-full">
                      {cardBody}
                    </LocaleLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

/* ---------- Icons (inline SVG so we control stroke + brand consistency) ---------- */

function StorefrontIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 9l2-5h14l2 5" />
      <path d="M3 9v11h18V9" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.66 4.05 1.78 5.66L2 22l4.6-1.21a9.85 9.85 0 0 0 5.44 1.55c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.09a8.13 8.13 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.18 8.18 0 1 1 6.87 3.81zm4.45-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.1-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.19-.47-.39-.4-.55-.41-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.52.1.46-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 7h12l-1 14H7L6 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

