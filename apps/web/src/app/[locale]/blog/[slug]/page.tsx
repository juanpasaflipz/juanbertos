import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { BlogCard } from "@/components/BlogCard";
import { POST_SLUGS, formatDate, getPost, sortedPosts, type Block, type Locale } from "@/lib/blog";

const SITE_URL = "https://www.juanbertos.com";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => POST_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const c = post.content[locale as Locale];
  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  return {
    title: `${c.title} | Juanberto's`,
    description: c.excerpt,
    alternates: {
      canonical: url,
      languages: { es: `${SITE_URL}/es/blog/${slug}`, en: `${SITE_URL}/en/blog/${slug}` },
    },
    openGraph: {
      title: c.title,
      description: c.excerpt,
      url,
      type: "article",
      siteName: "Juanberto's",
      locale: locale === "es" ? "es_MX" : "en_US",
      publishedTime: `${post.date}T00:00:00-06:00`,
      images: [{ url: `${SITE_URL}${post.image}`, alt: post.imageAlt[locale as Locale] }],
    },
    twitter: { card: "summary_large_image", title: c.title, description: c.excerpt },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="headline-display text-3xl sm:text-4xl text-ink-900 mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-lg text-ink-700 leading-relaxed mt-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg text-ink-700 leading-relaxed">
              <span className="text-tangerine-600 font-bold" aria-hidden>✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} className="mt-10 border-l-4 border-tangerine-500 pl-5 py-2">
          <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-1">{block.text}</p>
        </blockquote>
      );
    case "cta":
      return (
        <p key={i} className="mt-10">
          <Link
            href={block.href}
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-paper-100 px-5 py-3 font-semibold hover:bg-tangerine-500 hover:text-ink-900 transition-colors"
          >
            {block.text} <span aria-hidden>→</span>
          </Link>
        </p>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getPost(slug);
  if (!post) notFound();
  const loc = locale as Locale;
  const c = post.content[loc];
  const t = await getTranslations({ locale, namespace: "blog" });
  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const more = sortedPosts().filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: c.title,
    description: c.excerpt,
    image: [`${SITE_URL}${post.image}`],
    author: { "@type": "Organization", name: "Juanberto's", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Juanberto's",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    datePublished: `${post.date}T00:00:00-06:00`,
    dateModified: `${post.date}T00:00:00-06:00`,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Juanberto's", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: c.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-paper-100">
        <header className="mx-auto max-w-3xl px-4 sm:px-6 pt-14 sm:pt-20">
          <Link href="/blog" className="text-sm font-semibold text-ink-500 hover:text-tangerine-600">
            {t("back")}
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-tangerine-600 font-semibold">
            {c.category} · {formatDate(post.date, locale)} · {t("minRead", { minutes: post.readMinutes })}
          </p>
          <h1 className="headline-display text-4xl sm:text-5xl lg:text-6xl text-ink-900 mt-3 leading-[1.05]">
            {c.title}
          </h1>
          <p className="mt-5 text-xl text-ink-700 leading-relaxed">{c.excerpt}</p>
        </header>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 mt-10">
          <figure className="border-2 border-ink-900 shadow-[10px_10px_0_0_var(--color-ink-900)] overflow-hidden">
            <div className="relative aspect-[3/2]">
              <Image
                src={post.image}
                alt={post.imageAlt[loc]}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">{c.body.map(renderBlock)}</div>
      </article>

      <section className="bg-ink-900 text-paper-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 text-center">
          <h2 className="headline-display text-4xl sm:text-5xl">{t("ctaTitle")}</h2>
          <p className="mt-3 text-paper-100/80">{t("ctaBody")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/order" className="rounded-full bg-tangerine-500 text-ink-900 px-5 py-3 font-semibold hover:bg-paper-100 transition-colors">
              {t("ctaOrder")} →
            </Link>
            <Link href="/menu" className="rounded-full border-2 border-paper-100 px-5 py-3 font-semibold hover:bg-paper-100 hover:text-ink-900 transition-colors">
              {t("ctaMenu")}
            </Link>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="bg-paper-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
            <h2 className="headline-display text-3xl sm:text-4xl text-ink-900 mb-8">{t("latest")}</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {more.map((p) => (
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
      )}
    </>
  );
}
