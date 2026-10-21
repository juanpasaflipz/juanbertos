import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function BlogCard({
  href,
  image,
  imageAlt,
  category,
  date,
  title,
  excerpt,
  readMore,
}: {
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readMore: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col border-2 border-ink-900 bg-paper-100 shadow-[6px_6px_0_0_var(--color-ink-900)] hover:-translate-y-1 hover:shadow-[8px_10px_0_0_var(--color-ink-900)] transition-all"
    >
      <div className="relative aspect-[3/2] overflow-hidden border-b-2 border-ink-900">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-tangerine-600 font-semibold">
          {category} · {date}
        </p>
        <h3 className="headline-display text-2xl text-ink-900 mt-2 leading-tight">{title}</h3>
        <p className="mt-3 text-ink-700 leading-relaxed flex-1">{excerpt}</p>
        <span className="mt-4 text-sm font-semibold text-ink-900 group-hover:text-tangerine-600">
          {readMore} →
        </span>
      </div>
    </Link>
  );
}
