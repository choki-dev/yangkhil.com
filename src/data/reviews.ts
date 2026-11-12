// Guest reviews for the home page slider, shown as Google-style cards (same approach as callofthedragonbhutan.com).
//
// Two sources, in this order:
// 1. Live Google reviews, fetched when the site is built, if GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are set
//    (.env locally, GitHub secrets in the deploy workflow). Google only shares 5 reviews.
// 2. The saved reviews below. Copy them from the resort's Google listing; nothing is loaded from other sites,
//    so they never expire or break.
// With neither, the Tripadvisor widget is shown instead (see site.reviews.tripadvisorId).

export type Review = {
  /** when it was posted, as a Unix timestamp in seconds; the "3 months ago" label is worked out from it */
  time: number;
  name: string;
  rating: number;
  /** the review text; use <br> for line breaks */
  text: string;
  /** optional profile photo URL; without one, a coloured circle with the first letter is shown */
  photo?: string;
  /** optional link to the review itself */
  href?: string;
};

// Add one block per review, newest first. To get `time` for a date, open the browser console and run
// new Date('2026-03-15').getTime() / 1000
export const savedReviews: Review[] = [
  // {
  //   time: 1773532800,
  //   name: 'Guest name',
  //   rating: 5,
  //   text: 'The review text, copied from Google.<br><br>A second paragraph.',
  // },
];

export type Reviews = { items: Review[]; rating?: number; total?: number; googleUrl?: string };

// only show reviews with at least this many stars, and at most this many cards
const MIN_RATING = 4;
const MAX_ITEMS = 12;

// .env values arrive through import.meta.env; in the GitHub workflow they are plain process env vars
const env = (key: string): string | undefined =>
  import.meta.env[key] ?? (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env[key];

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

type PlaceReview = {
  rating: number;
  text?: { text: string };
  originalText?: { text: string };
  publishTime: string;
  authorAttribution?: { displayName: string; uri?: string; photoUri?: string };
  googleMapsUri?: string;
};
type Place = { rating?: number; userRatingCount?: number; googleMapsUri?: string; reviews?: PlaceReview[] };

let cached: Promise<Reviews> | undefined;

async function fetchReviews(): Promise<Reviews> {
  const fallback: Reviews = { items: savedReviews.filter((r) => r.rating >= MIN_RATING).slice(0, MAX_ITEMS) };
  const key = env('GOOGLE_PLACES_API_KEY');
  const id = env('GOOGLE_PLACE_ID');
  if (!key || !id) return fallback;
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${id}?languageCode=en`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews' },
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    const place: Place = await res.json();
    const items = (place.reviews ?? [])
      .filter((r) => r.rating >= MIN_RATING && (r.text?.text || r.originalText?.text))
      .slice(0, MAX_ITEMS)
      .map((r) => ({
        time: Math.floor(new Date(r.publishTime).getTime() / 1000),
        name: r.authorAttribution?.displayName ?? 'Google user',
        rating: r.rating,
        text: escape((r.text?.text || r.originalText?.text)!),
        photo: r.authorAttribution?.photoUri,
        href: r.googleMapsUri ?? r.authorAttribution?.uri,
      }));
    if (!items.length) return fallback;
    return { items, rating: place.rating, total: place.userRatingCount, googleUrl: place.googleMapsUri };
  } catch (err) {
    console.warn('[reviews] could not load Google reviews, using the saved ones:', err);
    return fallback;
  }
}

// fetched once per build, shared by every page that shows reviews
export const getReviews = () => (cached ??= fetchReviews());
