import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { INGREDIENT_SLUGS } from "@/lib/ingredients";
import { NEIGHBORHOOD_SLUGS } from "@/lib/neighborhoods";

const SITE_URL = "https://www.juanbertos.com";

const ROUTES = [
  "",
  "/menu",
  "/story",
  "/locations",
  "/order",
  "/burrito-california-cdmx",
  "/ingredients",
  ...INGREDIENT_SLUGS.map((slug) => `/ingredients/${slug}` as const),
  ...NEIGHBORHOOD_SLUGS.map((slug) => `/${slug}` as const),
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => {
      const url = `${SITE_URL}/${locale}${route}`;
      const languages = Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}${route}`])
      );
      const priority =
        route === ""
          ? 1.0
          : route === "/burrito-california-cdmx"
            ? 0.9
            : route.startsWith("/burritos-")
              ? 0.9
              : route.startsWith("/ingredients/")
                ? 0.85
                : 0.8;
      return {
        url,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority,
        alternates: { languages },
      };
    })
  );
}
