import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  NEIGHBORHOODS,
  NEIGHBORHOOD_SLUGS,
  type NeighborhoodSlug,
} from "@/lib/neighborhoods";
import { NeighborhoodContent } from "./NeighborhoodContent";

const SITE_URL = "https://www.juanbertos.com";

export const dynamicParams = false;

type Props = {
  params: Promise<{ locale: string; neighborhoodSlug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    NEIGHBORHOOD_SLUGS.map((slug) => ({ locale, neighborhoodSlug: slug }))
  );
}

function isKnownSlug(slug: string): slug is NeighborhoodSlug {
  return (NEIGHBORHOOD_SLUGS as string[]).includes(slug);
}

export async function generateMetadata({ params }: Props) {
  const { locale, neighborhoodSlug } = await params;
  if (!isKnownSlug(neighborhoodSlug)) return {};
  const t = await getTranslations({
    locale,
    namespace: `neighborhoods.${neighborhoodSlug}.meta`,
  });
  const url = `${SITE_URL}/${locale}/${neighborhoodSlug}`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/${neighborhoodSlug}`])
      ),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      type: "article",
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
      images: [
        {
          url: `${SITE_URL}/menu/california-burrito.jpg`,
          width: 1200,
          height: 800,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

type FaqItem = { q: string; a: string };

export default async function NeighborhoodPage({ params }: Props) {
  const { locale, neighborhoodSlug } = await params;
  if (!isKnownSlug(neighborhoodSlug)) notFound();
  setRequestLocale(locale);

  const neighborhood = NEIGHBORHOODS[neighborhoodSlug];
  const t = await getTranslations({
    locale,
    namespace: `neighborhoods.${neighborhoodSlug}`,
  });

  const faqItems = t.raw("faq.items") as FaqItem[];
  const url = `${SITE_URL}/${locale}/${neighborhoodSlug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: t("title"),
    description: t("meta.description"),
    image: [`${SITE_URL}/menu/california-burrito.jpg`],
    author: { "@type": "Organization", name: "Juanberto's", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Juanberto's",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    datePublished: neighborhood.publishedDate,
    dateModified: neighborhood.publishedDate,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    about: [
      { "@type": "Thing", name: "California burrito" },
      {
        "@type": "Place",
        name: neighborhood.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: neighborhood.name,
          addressRegion: "CDMX",
          addressCountry: "MX",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: neighborhood.geo.lat,
          longitude: neighborhood.geo.lng,
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
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
        name: t("kicker"),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NeighborhoodContent
        slug={neighborhoodSlug}
        mapQuery={neighborhood.mapQuery}
      />
    </>
  );
}
