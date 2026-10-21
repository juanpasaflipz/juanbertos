import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { LEGACY_GUIDES, formatDate, sortedPosts, type Locale } from "@/lib/blog";

const SITE_URL = "https://www.juanbertos.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const url = `${SITE_URL}/${locale}/blog`;
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: url,
      languages: { es: `${SITE_URL}/es/blog`, en: `${SITE_URL}/en/blog` },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url,
      type: "website",
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
    },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = sortedPosts();

  const guides = await Promise.all(
    LEGACY_GUIDES.map(async (g) => {
      const gt = await getTranslations({ locale, namespace: g.namespace });
      return { ...g, kicker: gt("kicker"), title: gt("title"), excerpt: gt("meta.description") };
    })
  );

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/${locale}/blog#blog`,
    name: t("title"),
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.content[loc].title,
      url: `${SITE_URL}/${locale}/blog/${p.slug}`,
      datePublished: `${p.date}T00:00:00-06:00`,
      image: `${SITE_URL}${p.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <PageHero kicker={t("kicker")} title={t("title")} subtitle={t("subtitle")} />

      <section className="bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <h2 className="headline-display text-3xl sm:text-4xl text-ink-900 mb-8">{t("latest")}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard
                key={p.slug}
                href={`/blog/${p.slug}`}
                image={p.image}
                imageAlt={p.imageAlt[loc]}
                category={p.content[loc].category}
                date={formatDate(p.date, locale)}
                title={p.content[loc].title}
                excerpt={p.content[loc].excerpt}
                readMore={t("readMore")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <h2 className="headline-display text-3xl sm:text-4xl text-ink-900 mb-8">{t("guides")}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <BlogCard
                key={g.href}
                href={g.href}
                image={g.image}
                imageAlt={g.title}
                category={g.kicker}
                date={formatDate(g.date, locale)}
                title={g.title}
                excerpt={g.excerpt}
                readMore={t("readMore")}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
