import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "404 — Juanberto's",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-2xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="stamp text-tangerine">{t("kicker")}</p>
      <h1 className="headline-display text-ink text-5xl sm:text-6xl">
        {t("title")}
      </h1>
      <p className="text-ink/80 text-lg max-w-md">{t("body")}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-tangerine px-6 py-3 font-semibold text-paper hover:bg-tangerine/90 transition"
        >
          {t("ctaHome")}
        </Link>
        <Link
          href="/menu"
          className="rounded-full border-2 border-ink px-6 py-3 font-semibold text-ink hover:bg-ink hover:text-paper transition"
        >
          {t("ctaMenu")}
        </Link>
      </div>
    </section>
  );
}
