/**
 * Live-ish business numbers shown across the site.
 *
 * UPKEEP: update these from the Google Business Profile
 * (https://www.google.com/maps?cid=15706835590188597587) whenever the
 * count moves. Every "%%RATING%%" / "%%REVIEWS%%" token in
 * messages/{en,es}.json is replaced with these values at request time
 * (see src/i18n/request.ts), so this is the only place to edit.
 */
export const GOOGLE_RATING = "4.9";
export const GOOGLE_REVIEW_COUNT = 154;
export const STATS_UPDATED = "2026-10-13";

const TOKENS: Record<string, string> = {
  "%%RATING%%": GOOGLE_RATING,
  "%%REVIEWS%%": String(GOOGLE_REVIEW_COUNT),
};

/** Deep-replace stat tokens in a messages object. */
export function injectStats<T>(value: T): T {
  if (typeof value === "string") {
    let out: string = value;
    for (const [token, v] of Object.entries(TOKENS)) out = out.split(token).join(v);
    return out as T;
  }
  if (Array.isArray(value)) return value.map(injectStats) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, injectStats(v)])
    ) as T;
  }
  return value;
}
