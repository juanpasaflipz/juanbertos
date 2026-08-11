import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/Hero";
import { FlagshipBanner } from "@/components/FlagshipBanner";
import { StorySection } from "@/components/StorySection";
import { StickerCollage } from "@/components/StickerCollage";
import { NeighborhoodsGrid } from "@/components/NeighborhoodsGrid";
import { BurritoAnatomy } from "@/components/BurritoAnatomy";
import { LoveWall } from "@/components/LoveWall";

const SITE_URL = "https://www.juanbertos.com";
const OG_IMAGE = {
  url: `${SITE_URL}/menu/california-supreme.jpg`,
  width: 1264,
  height: 848,
  alt: "California Supreme — Juanberto's",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const url = `${SITE_URL}/${locale}`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
      ),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      type: "website",
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [OG_IMAGE.url],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FlagshipBanner />
      <StorySection />
      <StickerCollage />
      <NeighborhoodsGrid namespace="homeNeighborhoods" />
      <BurritoAnatomy />
      <LoveWall />
    </>
  );
}
