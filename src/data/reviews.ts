import { site } from './site';

// Guest reviews for the home page slider, shown as Google-style cards (same approach as callofthedragonbhutan.com).
//
// Sources, in this order (the first one that returns reviews is used):
// 1. Featurable (free): Google reviews from a Featurable widget, fetched when the site is built.
//    Set site.reviews.featurableId to the widget ID. GitHub rebuilds daily, so new reviews appear on their own.
// 2. Google Places API, if GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are set (needs Google Cloud billing).
// 3. The saved reviews below, copied by hand from the resort's Google listing.
// With none, the Tripadvisor widget is shown instead (see site.reviews.tripadvisorId).

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

export type Reviews = {
  items: Review[];
  rating?: number;
  total?: number;
  googleUrl?: string;
  /** Featurable's free plan asks for a small "Powered by Featurable" credit */
  credit?: { label: string; href: string };
};

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

type FeaturableReview = {
  author?: { name?: string; avatarUrl?: string | null };
  text?: string | null;
  originalText?: string | null;
  rating?: { value: number };
  publishedAt?: string;
  createdAt?: string;
  url?: string | null;
};
type FeaturableWidget = {
  success: boolean;
  widget?: {
    isExampleReviews?: boolean;
    showBranding?: boolean;
    gbpLocationSummary?: { reviewsCount?: number; rating?: number };
    reviews?: FeaturableReview[];
  };
};

/** Google reviews from a free Featurable widget (https://featurable.com) */
async function fromFeaturable(id: string): Promise<Reviews | undefined> {
  const res = await fetch(`https://api.featurable.com/v2/widgets/${encodeURIComponent(id)}`);
  if (!res.ok) throw new Error(`Featurable ${res.status}`);
  const data: FeaturableWidget = await res.json();
  const w = data.widget;
  if (!data.success || !w) throw new Error('Featurable: widget not found');
  const items = (w.reviews ?? [])
    .filter((r) => (r.rating?.value ?? 0) >= MIN_RATING && (r.text || r.originalText))
    .slice(0, MAX_ITEMS)
    .map((r) => ({
      time: Math.floor(new Date(r.publishedAt ?? r.createdAt ?? Date.now()).getTime() / 1000),
      name: r.author?.name || 'Google user',
      rating: r.rating!.value,
      text: escape((r.text || r.originalText)!),
      photo: r.author?.avatarUrl ?? undefined,
      href: r.url ?? undefined,
    }));
  if (!items.length) return undefined;
  return {
    items,
    rating: w.gbpLocationSummary?.rating,
    total: w.gbpLocationSummary?.reviewsCount,
    credit: w.showBranding === false ? undefined : { label: 'Powered by Featurable', href: 'https://featurable.com' },
  };
}

let cached: Promise<Reviews> | undefined;

async function fetchReviews(): Promise<Reviews> {
  const fallback: Reviews = { items: savedReviews.filter((r) => r.rating >= MIN_RATING).slice(0, MAX_ITEMS) };
  if (site.reviews.featurableId) {
    try {
      const reviews = await fromFeaturable(site.reviews.featurableId);
      if (reviews) return reviews;
    } catch (err) {
      console.warn('[reviews] could not load Featurable reviews:', err);
    }
  }
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
