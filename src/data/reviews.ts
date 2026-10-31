// Guest reviews pulled from the resort's Google listing at build time (Places API).
// Needs GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID, from .env locally or GitHub secrets in the deploy workflow.
// Without them, or if Google can't be reached, the hand-written reviews in site.ts are used instead.
import { site } from './site';

export type Review = { quote: string; name: string; date: string; rating: number; source: string; href?: string };
export type Reviews = { items: Review[]; rating?: number; total?: number; googleUrl?: string };

// only show reviews with at least this many stars, and at most this many cards
const MIN_RATING = 4;
const MAX_ITEMS = 6;

// .env values arrive through import.meta.env; in the GitHub workflow they are plain process env vars
const env = (key: string): string | undefined =>
  import.meta.env[key] ?? (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env[key];

type PlaceReview = {
  rating: number;
  text?: { text: string };
  originalText?: { text: string };
  publishTime: string;
  authorAttribution?: { displayName: string; uri?: string };
  googleMapsUri?: string;
};
type Place = { rating?: number; userRatingCount?: number; googleMapsUri?: string; reviews?: PlaceReview[] };

let cached: Promise<Reviews> | undefined;

async function fetchReviews(): Promise<Reviews> {
  const fallback: Reviews = { items: site.reviews.items };
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
        quote: (r.text?.text || r.originalText?.text)!,
        name: r.authorAttribution?.displayName ?? 'Google user',
        date: new Date(r.publishTime).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
        rating: r.rating,
        source: 'Google',
        href: r.googleMapsUri ?? r.authorAttribution?.uri,
      }));
    if (!items.length) return fallback;
    return { items, rating: place.rating, total: place.userRatingCount, googleUrl: place.googleMapsUri };
  } catch (err) {
    console.warn('[reviews] could not load Google reviews, using the ones in site.ts:', err);
    return fallback;
  }
}

// fetched once per build, shared by every page that shows reviews
export const getReviews = () => (cached ??= fetchReviews());
