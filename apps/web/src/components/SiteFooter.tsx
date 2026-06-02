import { useTranslations } from "next-intl";
import { Logo } from "./Logo";

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-900/10 bg-paper-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <span className="headline-display text-lg">Juanberto&rsquo;s</span>
        </div>
        <div className="flex flex-col md:items-end gap-1 text-sm text-ink-500">
          <a
            href="mailto:hello@juanbertos.com"
            className="text-ink-700 hover:text-tangerine-600 transition-colors"
          >
            hello@juanbertos.com
          </a>
          <p>
            &copy; {year} Juanberto&rsquo;s California Burritos. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
