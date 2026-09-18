import { setRequestLocale, getTranslations } from "next-intl/server";
import { MenuContent } from "./MenuContent";

const SITE_URL = "https://www.juanbertos.com";
const OG_IMAGE = {
  url: `${SITE_URL}/menu/california-supreme.jpg`,
  width: 1264,
  height: 848,
  alt: "California Supreme — Juanberto's",
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const description =
    locale === "es"
      ? "Burritos California, tacos dorados Rollbertos con birria o cochinita, papas y aguas frescas. Consulta el menú y los precios de Juanberto's en Roma Sur."
      : "California burritos, Rollbertos topped with birria or cochinita, loaded fries and aguas frescas. See menu prices at Juanberto's in Roma Sur, Mexico City.";
  const title = locale === "es" ? "Menú de burritos y tacos dorados en CDMX | Juanberto's" : "Burrito & Rolled Taco Menu, Mexico City | Juanberto's";
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
  const flagship = t.raw("flagship") as { name: string; desc: string; price: string };
  const friesItems = t.raw("fries.items") as FriesItem[];
  const aguas = t.raw("aguas") as { name: string; desc: string; price: string; flavors: string[] };
  const specialsItems = t.raw("specials.items") as SignatureItem[];
  const extrasItems = t.raw("extras.items") as FriesItem[];
  const drinksItems = t.raw("drinks.items") as FriesItem[];

  const toMenuItem = (item: { name: string; desc: string; price?: string }) => ({
    "@type": "MenuItem",
    name: item.name,
    description: item.desc,
    ...(item.price && /^\d/.test(item.price) && {
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
        name: t("flagship.label"),
        hasMenuItem: [toMenuItem(flagship)],
      },
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
      {
        "@type": "MenuSection",
        name: t("specials.label"),
        hasMenuItem: specialsItems.map(toMenuItem),
      },
      {
        "@type": "MenuSection",
        name: t("extras.label"),
        hasMenuItem: extrasItems.map(toMenuItem),
      },
      {
        "@type": "MenuSection",
        name: t("drinks.label"),
        hasMenuItem: drinksItems.map(toMenuItem),
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
