import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LocationsContent } from "./LocationsContent";

const SITE_URL = "https://www.juanbertos.com";
const OG_IMAGE = {
  url: `${SITE_URL}/menu/california-burrito.jpg`,
  width: 1200,
  height: 800,
  alt: "Juanberto's — Coahuila 192, Roma Sur, CDMX",
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const description =
    locale === "es"
      ? "Juanberto's en Coahuila 192, Roma Sur, CDMX. Horarios, teléfono, cómo llegar y los barrios de la Ciudad de México a los que servimos."
      : "Juanberto's at Coahuila 192, Roma Sur, Mexico City. Hours, phone, directions and the CDMX neighborhoods we serve.";
  const url = `${SITE_URL}/${locale}/locations`;
  const title = locale === "es" ? "Juanberto's Roma Sur: dirección y horarios en CDMX" : "Juanberto's Roma Sur: Location & Hours, Mexico City";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/locations`])
      ),
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function LocationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LocationsContent />;
}
