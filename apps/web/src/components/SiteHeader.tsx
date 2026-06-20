import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LocaleSwitch } from "./LocaleSwitch";

export function SiteHeader() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 bg-paper-100/80 backdrop-blur-md border-b border-ink-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Juanberto's">
          <Logo size={44} priority />
          <span className="headline-display text-xl text-ink-900 hidden sm:inline">
            Juanberto&rsquo;s
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-700">
          <Link href="/menu" className="hover:text-tangerine-600 transition-colors">{t("menu")}</Link>
          <Link href="/ingredients" className="hover:text-tangerine-600 transition-colors">{t("ingredients")}</Link>
          <Link href="/story" className="hover:text-tangerine-600 transition-colors">{t("story")}</Link>
          <Link href="/locations" className="hover:text-tangerine-600 transition-colors">{t("locations")}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitch />
          <Link
            href="/order"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-paper-100 px-4 py-2 text-sm font-semibold hover:bg-tangerine-500 hover:text-ink-900 transition-colors"
          >
            {t("order")}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
