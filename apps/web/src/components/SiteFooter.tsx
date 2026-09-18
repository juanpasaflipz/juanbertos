import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";

export function SiteFooter() {
  const t = useTranslations("footer");
  const shop = useTranslations("locationsPage.shop");
  const hours = shop.raw("hours") as { days: string; time: string }[];
  const tCorner = useTranslations("cornerstone");
  const tCompare = useTranslations("burritoVsBurger");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-900/10 bg-paper-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-6">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <span className="headline-display text-lg">Juanberto&rsquo;s</span>
        </div>

        <div className="text-sm">
          <h3 className="text-xs uppercase tracking-[0.18em] text-ink-500 font-semibold mb-3">
            {t("guides")}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/burrito-california-cdmx"
                className="text-ink-700 hover:text-tangerine-600 transition-colors"
              >
                {tCorner("kicker")}
              </Link>
            </li>
            <li>
              <Link
                href="/burrito-vs-burger"
                className="text-ink-700 hover:text-tangerine-600 transition-colors"
              >
                {tCompare("kicker")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:items-end gap-1 text-sm text-ink-500">
          <address className="not-italic md:text-right">
            <Link href="/locations" className="text-ink-700 hover:text-tangerine-600">
              {shop("address")}
            </Link>
            <br />
            <a href={`tel:${shop("phoneTel")}`} className="text-ink-700 hover:text-tangerine-600">
              {shop("phone")}
            </a>
          </address>
          <ul aria-label={shop("hoursTitle")} className="md:text-right">
            {hours.map(({ days, time }) => <li key={days}>{days}: {time}</li>)}
          </ul>
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
