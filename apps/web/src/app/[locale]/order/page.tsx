import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { OrderContent } from "./OrderContent";

const SITE_URL = "https://www.juanbertos.com";
const OG_IMAGE = {
  url: `${SITE_URL}/menu/california-burrito.jpg`,
  width: 1200,
  height: 800,
  alt: "California Burrito — Juanberto's",
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const description =
    locale === "es"
      ? "Pide burritos y tacos dorados de Juanberto's en Roma Sur: visita Coahuila 192, usa WhatsApp o consulta cobertura en Rappi, DiDi Food y Uber Eats."
      : "Order burritos and rolled tacos from Juanberto's in Roma Sur. Visit Coahuila 192, use WhatsApp or check coverage on Rappi, DiDi Food and Uber Eats.";
  const url = `${SITE_URL}/${locale}/order`;
  const title = locale === "es" ? "Pide burritos y tacos dorados en CDMX | Juanberto's" : "Order Burritos & Rolled Tacos in CDMX | Juanberto's";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/order`])
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

export default async function OrderPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OrderContent />;
}
