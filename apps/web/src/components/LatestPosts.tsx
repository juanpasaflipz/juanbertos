import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BlogCard } from "./BlogCard";
import { formatDate, sortedPosts, type Locale } from "@/lib/blog";

/** Homepage teaser: the three newest blog posts. */
export async function LatestPosts() {
  const locale = await getLocale();
  const loc = locale as Locale;
  const t = await getTranslations("blog");
  const posts = sortedPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="bg-paper-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center mb-10">
          <p className="hand-note text-tangerine-600 text-3xl sm:text-4xl -rotate-2">{t("homeKicker")}</p>
          <h2 className="headline-display text-4xl sm:text-5xl text-ink-900 mt-2">{t("homeTitle")}</h2>
        </div>
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
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 px-5 py-3 font-semibold text-ink-900 hover:bg-ink-900 hover:text-paper-100 transition-colors"
          >
            {t("homeCta")} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
