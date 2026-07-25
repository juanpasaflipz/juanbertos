import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

const SITE_URL = "https://www.juanbertos.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
  );
  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${SITE_URL}/${locale}`,
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale });
  const shop = t.raw("locationsPage.shop") as {
    name: string;
    address: string;
    phone: string;
    phoneTel: string;
    directionsUrl: string;
  };

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: "Juanberto's",
    description: t("meta.description"),
    url: `${SITE_URL}/${locale}`,
    telephone: shop.phoneTel,
    priceRange: "$$",
    servesCuisine: ["Mexican", "California-style burritos", "San Diego"],
    image: [`${SITE_URL}/california-burrito.png`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Coahuila 192",
      addressLocality: "Roma Sur",
      addressRegion: "CDMX",
      postalCode: "06760",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.4087,
      longitude: -99.1612,
    },
    hasMap: shop.directionsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:30",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:30",
        closes: "19:30",
      },
    ],
    menu: `${SITE_URL}/${locale}/menu`,
    acceptsReservations: false,
    sameAs: [
      "https://www.rappi.com.mx/restaurantes/delivery/687998-juanberto-s",
    ],
    areaServed: [
      { "@type": "City", name: "Ciudad de México" },
      { "@type": "Place", name: "Roma Sur" },
      { "@type": "Place", name: "Roma Norte" },
      { "@type": "Place", name: "Condesa" },
      { "@type": "Place", name: "Juárez" },
    ],
  };

  return (
    <NextIntlClientProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <div lang={locale} className="min-h-dvh flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </div>
    </NextIntlClientProvider>
  );
}
