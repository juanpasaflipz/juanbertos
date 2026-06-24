import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LocationsContent } from "./LocationsContent";

const SITE_URL = "https://www.juanbertos.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "locationsPage" });
  const description =
    locale === "es"
      ? "Juanberto's en Coahuila 192, Roma Sur, CDMX. Horarios, teléfono, cómo llegar y los barrios de la Ciudad de México a los que servimos."
      : "Juanberto's at Coahuila 192, Roma Sur, Mexico City. Hours, phone, directions and the CDMX neighborhoods we serve.";
  const url = `${SITE_URL}/${locale}/locations`;
  return {
    title: `${t("title")} | Juanberto's`,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/locations`])
      ),
    },
    openGraph: {
      title: `${t("title")} | Juanberto's`,
      description,
      url,
      type: "website",
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | Juanberto's`,
      description,
    },
  };
}

export default async function LocationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LocationsContent />;
}
