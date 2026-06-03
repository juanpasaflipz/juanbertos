import { setRequestLocale, getTranslations } from "next-intl/server";
import { CornerstoneContent } from "./CornerstoneContent";

const SITE_URL = "https://www.juanbertos.com";
const SLUG = "burrito-california-cdmx";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cornerstone.meta" });
  const url = `${SITE_URL}/${locale}/${SLUG}`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es/${SLUG}`,
        en: `${SITE_URL}/en/${SLUG}`,
      },
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
          alt: "California Burrito — Juanberto's",
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

export default async function CornerstonePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "cornerstone" });
  const faqItems = t.raw("faq.items") as FaqItem[];
  const url = `${SITE_URL}/${locale}/${SLUG}`;

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
    datePublished: "2026-06-02T00:00:00-06:00",
    dateModified: "2026-06-02T00:00:00-06:00",
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    about: [
      { "@type": "Thing", name: "California burrito" },
      { "@type": "Thing", name: "Ciudad de México" },
      { "@type": "Thing", name: "Roma Sur" },
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
      <CornerstoneContent />
    </>
  );
}
