import { setRequestLocale, getTranslations } from "next-intl/server";
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
  const t = await getTranslations({ locale, namespace: "orderPage" });
  const description =
    locale === "es"
      ? "Pide tu California burrito de Juanberto's: pasa por Roma Sur, escríbenos por WhatsApp, o pide en Rappi, Didi Food o Uber Eats. Entrega en CDMX en 30 minutos."
      : "Order a Juanberto's California burrito: walk in to Roma Sur, message us on WhatsApp, or order on Rappi, Didi Food, or Uber Eats. CDMX delivery in 30 minutes.";
  const url = `${SITE_URL}/${locale}/order`;
  const title = `${t("title")} | Juanberto's`;
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
