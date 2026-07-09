import { setRequestLocale, getTranslations } from "next-intl/server";
import { MenuContent } from "./MenuContent";

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
  const t = await getTranslations({ locale, namespace: "menuPage" });
  const description =
    locale === "es"
      ? "Menú completo de Juanberto's en Roma Sur, CDMX. California burrito, Porkbelly, Ensenada, Breakfast, Chimichanga y más. Precios en MXN."
      : "Full Juanberto's menu in Roma Sur, Mexico City. California burrito, Porkbelly, Ensenada, Breakfast, Chimichanga and more. Prices in MXN.";
  const title = `${t("title")} | Juanberto's`;
  const url = `${SITE_URL}/${locale}/menu`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es/menu`,
        en: `${SITE_URL}/en/menu`,
      },
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

type SignatureItem = { name: string; desc: string; price: string; badge: string };
type Tier1Item = { name: string; desc: string };
type FriesItem = { name: string; desc: string; price: string };

export default async function MenuPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "menuPage" });
  const signatureItems = t.raw("signature.items") as SignatureItem[];
  const tier1Items = t.raw("tier1.items") as Tier1Item[];
  const masterpiece = t.raw("masterpiece") as { name: string; desc: string; price: string };
  const friesItems = t.raw("fries.items") as FriesItem[];
  const aguas = t.raw("aguas") as { name: string; desc: string; price: string; flavors: string[] };

  const toMenuItem = (item: { name: string; desc: string; price?: string }) => ({
    "@type": "MenuItem",
    name: item.name,
    description: item.desc,
    ...(item.price && {
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: "MXN",
      },
    }),
  });

  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_URL}/${locale}/menu#menu`,
    name: "Juanberto's Menu",
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: t("signature.label"),
        hasMenuItem: signatureItems.map(toMenuItem),
      },
      {
        "@type": "MenuSection",
        name: t("tier1.label"),
        hasMenuItem: tier1Items.map(toMenuItem),
      },
      {
        "@type": "MenuSection",
        name: t("masterpiece.label"),
        hasMenuItem: [toMenuItem(masterpiece)],
      },
      {
        "@type": "MenuSection",
        name: t("fries.label"),
        hasMenuItem: friesItems.map(toMenuItem),
      },
      {
        "@type": "MenuSection",
        name: t("aguas.label"),
        hasMenuItem: [
          {
            ...toMenuItem(aguas),
            menuAddOn: aguas.flavors.map((flavor) => ({
              "@type": "MenuItem",
              name: flavor,
            })),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <MenuContent />
    </>
  );
}
