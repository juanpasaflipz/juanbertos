import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { INGREDIENT_SLUGS, INGREDIENTS } from "@/lib/ingredients";
import { IngredientsIndexContent } from "./IngredientsIndexContent";

const SITE_URL = "https://www.juanbertos.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ingredientsIndex.meta" });
  const url = `${SITE_URL}/${locale}/ingredients`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/ingredients`])
      ),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      type: "website",
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
      images: [
        {
          url: `${SITE_URL}/menu/california-burrito.jpg`,
          width: 1200,
          height: 800,
          alt:
            locale === "es"
              ? "Ingredientes del California burrito en Juanberto's"
              : "California burrito ingredients at Juanberto's",
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

export default async function IngredientsIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const url = `${SITE_URL}/${locale}/ingredients`;
  const tIndex = await getTranslations({ locale, namespace: "ingredientsIndex" });

  const itemNames = await Promise.all(
    INGREDIENT_SLUGS.map(async (slug) => {
      const t = await getTranslations({ locale, namespace: `ingredientsIndex.items.${slug}` });
      return t("label");
    })
  );

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: tIndex("meta.title"),
    description: tIndex("meta.description"),
    inLanguage: locale === "es" ? "es-MX" : "en-US",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    itemListElement: INGREDIENT_SLUGS.map((slug, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/${locale}/ingredients/${slug}`,
      name: itemNames[i],
      image: `${SITE_URL}${INGREDIENTS[slug].image}`,
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
        name: tIndex("kicker"),
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IngredientsIndexContent />
    </>
  );
}
