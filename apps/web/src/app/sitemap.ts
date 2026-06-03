import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://www.juanbertos.com";

const ROUTES = ["", "/menu", "/story", "/locations", "/order"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => {
      const url = `${SITE_URL}/${locale}${route}`;
      const languages = Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}${route}`])
      );
      return {
        url,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1.0 : 0.8,
        alternates: { languages },
      };
    })
  );
}
