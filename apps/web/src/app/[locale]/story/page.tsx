import { setRequestLocale, getTranslations } from "next-intl/server";
import { StoryContent } from "./StoryContent";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "storyPage" });
  return { title: `${t("title")} | Juanberto's` };
}

export default async function StoryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StoryContent />;
}
