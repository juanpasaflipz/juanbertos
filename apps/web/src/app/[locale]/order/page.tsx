import { setRequestLocale, getTranslations } from "next-intl/server";
import { OrderContent } from "./OrderContent";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "orderPage" });
  return { title: `${t("title")} | Juanberto's` };
}

export default async function OrderPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OrderContent />;
}
