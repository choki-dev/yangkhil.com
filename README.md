# Yangkhil Resort (Astro)

Single-page resort site built from `yangkhil-astro-prompt.md.pdf`. Astro static output, GSAP + ScrollTrigger, Lenis, Swiper.

## Setup

```
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview
```

## Swap copy and images

- All copy, links and image references live in `src/data/site.ts`.
- Images are in `src/assets/`, named by section (`hero-poster.jpg`, `exterior.jpg`, `split-dish.jpg`, `garden.jpg`, `card-*.jpg`, `about-host.jpg`, `contact.jpg`, `footer.jpg`, `menu.jpg`). Replace a file with the same name, or change the import in `site.ts`. They came from the `assets/photos` folder.
- Hero video: put a clip at `public/video/hero.mp4` and set `hero.video` to `'/video/hero.mp4'` in `site.ts`. With no video, the hero uses the poster image with the same inset-to-full-bleed intro.

## Brand

- Fonts: titles, labels and menu links use Palatino Linotype (`--font-display` in `src/styles/global.css`), a system font on Windows and macOS that falls back to Book Antiqua, URW Palladio L, then any serif. Body text uses Raleway (`--font-body`), self-hosted from the `@fontsource/raleway` package and loaded in `src/layouts/Layout.astro`.
- Colours: logo gold `#A5890E`, navy `#2A3F56`, blue `#3F5E81` (`--gold`, `--navy`, `--blue`). Navy is the text colour, blue fills the rooms split panel, navy the contact card, gold is the accent (menu hover, slider progress, input focus).

## Placeholders to replace

Phone number, address, Instagram URL, and the Dining / Experiences / Gift Cards links (currently anchors to on-page sections).

## Guest reviews

The home page shows guest reviews as Google-style cards in a slider (the same approach as callofthedragonbhutan.com). The reviews are part of the site, not a third-party widget, so nothing can expire or break. The old Trustindex widgets were removed when their free trial ended.

The cards come from the first of these that has reviews:

1. **Featurable (free, recommended).** Google reviews are pulled in automatically when the site is built, and GitHub rebuilds daily, so new reviews appear on their own. The free plan has unlimited page views and up to 15 reviews, and shows a small "Powered by Featurable" credit.
   1. Sign up free at [featurable.com](https://featurable.com) and connect the resort's Google Business Profile (you need to be an owner or manager of the listing).
   2. Create a Google reviews widget, open **Embed > API**, and copy the widget ID.
   3. Paste it into `featurableId` in `src/data/site.ts`, then commit and push.
2. **Google Places API (optional).** If `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are set as GitHub secrets (or in a git-ignored `.env` locally), the build fetches up to 5 reviews and the overall rating. Needs a Google Cloud project with billing and **Places API (New)** enabled.
3. **Saved reviews** in `src/data/reviews.ts` (`savedReviews`), copied by hand, newest first.

Only 4 and 5 star reviews are shown, up to 12. With no reviews from any source, the section shows Tripadvisor's free review widget instead (`tripadvisorId` in `src/data/site.ts`).
