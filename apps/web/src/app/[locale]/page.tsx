import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { StickerCollage } from "@/components/StickerCollage";
import { NeighborhoodsGrid } from "@/components/NeighborhoodsGrid";
import { BurritoAnatomy } from "@/components/BurritoAnatomy";
import { LoveWall } from "@/components/LoveWall";

const SITE_URL = "https://www.juanbertos.com";

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
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StorySection />
      <StickerCollage />
      <NeighborhoodsGrid namespace="homeNeighborhoods" />
      <BurritoAnatomy />
      <LoveWall />
    </>
  );
}
