import { setRequestLocale, getTranslations } from "next-intl/server";
import { MenuContent } from "./MenuContent";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "menuPage" });
  return { title: `${t("title")} | Juanberto's` };
}

export default async function MenuPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MenuContent />;
}
