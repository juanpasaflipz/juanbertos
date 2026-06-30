import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { StoryContent } from "./StoryContent";

const SITE_URL = "https://www.juanbertos.com";
const IMAGE_PATH = "/menu/california-burrito.jpg";
const SLUG = "story";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "storyPage" });
  const description =
    locale === "es"
      ? "Cómo Juanberto's llevó el California burrito de San Diego a Coahuila 192 en Roma Sur. Carne asada, papas adentro, hecho a mano en CDMX."
      : "How Juanberto's brought the California burrito from San Diego to Coahuila 192 in Roma Sur. Carne asada, fries inside, hand-rolled in Mexico City."
  ;
  const url = `${SITE_URL}/${locale}/${SLUG}`;
  const title = `${t("title")} | Juanberto's`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/${SLUG}`])
      ),
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
      images: [
        {
          url: `${SITE_URL}${IMAGE_PATH}`,
          width: 1200,
          height: 800,
          alt: "California Burrito — Juanberto's",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "storyPage" });
  const url = `${SITE_URL}/${locale}/${SLUG}`;
  const description =
    locale === "es"
      ? "Cómo Juanberto's llevó el California burrito de San Diego a Coahuila 192 en Roma Sur. Carne asada, papas adentro, hecho a mano en CDMX."
      : "How Juanberto's brought the California burrito from San Diego to Coahuila 192 in Roma Sur. Carne asada, fries inside, hand-rolled in Mexico City.";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: t("title"),
    description,
    image: [`${SITE_URL}${IMAGE_PATH}`],
    author: { "@type": "Organization", name: "Juanberto's", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Juanberto's",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    datePublished: "2026-01-01T00:00:00-06:00",
    dateModified: "2026-06-29T00:00:00-06:00",
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    about: [
      { "@type": "Thing", name: "California burrito" },
      { "@type": "Thing", name: "San Diego" },
      { "@type": "Thing", name: locale === "es" ? "Ciudad de México" : "Mexico City" },
      { "@type": "Thing", name: "Roma Sur" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Juanberto's",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("title"),
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StoryContent />
    </>
  );
}
