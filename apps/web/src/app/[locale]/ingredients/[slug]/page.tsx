import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  INGREDIENTS,
  INGREDIENT_SLUGS,
  type IngredientSlug,
} from "@/lib/ingredients";
import { IngredientContent } from "./IngredientContent";

const SITE_URL = "https://www.juanbertos.com";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    INGREDIENT_SLUGS.map((slug) => ({ locale, slug }))
  );
}

function isKnownSlug(slug: string): slug is IngredientSlug {
  return (INGREDIENT_SLUGS as string[]).includes(slug);
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isKnownSlug(slug)) return {};
  const t = await getTranslations({
    locale,
    namespace: `ingredients.${slug}.meta`,
  });
  const ingredient = INGREDIENTS[slug];
  const url = `${SITE_URL}/${locale}/ingredients/${slug}`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          `${SITE_URL}/${l}/ingredients/${slug}`,
        ])
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
          url: `${SITE_URL}${ingredient.image}`,
          width: 1200,
          height: 800,
          alt:
            locale === "es"
              ? ingredient.imageAlt.es
              : ingredient.imageAlt.en,
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

export default async function IngredientPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isKnownSlug(slug)) notFound();
  setRequestLocale(locale);

  const ingredient = INGREDIENTS[slug];
  const t = await getTranslations({
    locale,
    namespace: `ingredients.${slug}`,
  });
  const tCornerstone = await getTranslations({
    locale,
    namespace: "cornerstone",
  });

  const faqItems = t.raw("faq.items") as FaqItem[];
  const url = `${SITE_URL}/${locale}/ingredients/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: t("title"),
    description: t("meta.description"),
    image: [`${SITE_URL}${ingredient.image}`],
    author: { "@type": "Organization", name: "Juanberto's", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Juanberto's",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    datePublished: ingredient.publishedDate,
    dateModified: ingredient.publishedDate,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    about: [
      { "@type": "Thing", name: t("kicker") },
      { "@type": "Thing", name: "California burrito" },
      { "@type": "Thing", name: "Ciudad de México" },
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
        name: tCornerstone("kicker"),
        item: `${SITE_URL}/${locale}/burrito-california-cdmx`,
      },
      {
        "@type": "ListItem",
        position: 3,
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
      <IngredientContent slug={slug} image={ingredient.image} />
    </>
  );
}
