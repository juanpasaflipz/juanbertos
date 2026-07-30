/**
 * Star row + "via Google" attribution for a single review.
 *
 * Reviews are copied by hand from the Google Business Profile into
 * `messages/{en,es}.json`. They are deliberately NOT emitted as
 * Review/AggregateRating JSON-LD: Google's review snippet guidelines
 * forbid marking up reviews aggregated from other sites, so doing that
 * would risk a manual action and buy nothing (the rating already shows
 * in Google's own local pack).
 */

/** Canonical Maps listing for Juanberto's California Burrito (cid = place id). */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?cid=15706835590188597587";

/** Business Profile short link that opens the write-a-review form directly. */
export const GOOGLE_WRITE_REVIEW_URL =
  "https://g.page/r/CVOBpzrA4_nZEBM/review";

export type Review = {
  quote: string;
  name: string;
  source: string;
  rating: number;
};

export function ReviewStars({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex gap-0.5 text-tangerine-600"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < rating ? "fill-current" : "fill-ink-900/15"}`}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.65l5.9-.85z" />
        </svg>
      ))}
    </span>
  );
}
