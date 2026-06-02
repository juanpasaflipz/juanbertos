import { useTranslations } from "next-intl";

export function StorySection() {
  const t = useTranslations("story");

  return (
    <section className="relative bg-ink-900 text-paper-100 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-paper-100) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-24 sm:py-32 relative">
        <p className="hand-note text-tangerine-500 text-3xl mb-4 -rotate-2">
          {t("kicker")}
        </p>
        <p className="headline-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {t("body")}
        </p>
      </div>
    </section>
  );
}
