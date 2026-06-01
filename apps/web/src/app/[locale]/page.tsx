import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StorySection />
    </>
  );
}
