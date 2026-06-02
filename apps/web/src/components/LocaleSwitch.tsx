"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const other = locale === "en" ? "es" : "en";
  const label = other.toUpperCase();

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: other as (typeof routing.locales)[number] })}
      className="text-xs font-semibold tracking-wider text-ink-500 hover:text-ink-900 transition-colors"
      aria-label={`Switch to ${label}`}
    >
      {locale.toUpperCase()} <span className="text-ink-300">/</span>{" "}
      <span className="text-ink-900">{label}</span>
    </button>
  );
}
