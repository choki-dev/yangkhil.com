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

- Font: Palatino Linotype everywhere (`--font-brand` in `src/styles/global.css`). It is a system font on Windows and macOS (as Palatino); other devices fall back to Book Antiqua, URW Palladio L, then any serif.
- Colours: logo gold `#A5890E`, navy `#2A3F56`, blue `#3F5E81` (`--gold`, `--navy`, `--blue`). Navy is the text colour, blue fills the rooms split panel, navy the contact card, gold is the accent (menu hover, slider progress, input focus).

## Placeholders to replace

Phone number, address, Instagram URL, and the Dining / Experiences / Gift Cards links (currently anchors to on-page sections).

## Guest reviews

The home page shows guest reviews as Google-style cards in a slider (the same approach as callofthedragonbhutan.com). The reviews are part of the site, not a third-party widget, so nothing can expire or break. The old Trustindex widgets were removed when their free trial ended.

The cards come from, in this order:

1. **Saved reviews** in `src/data/reviews.ts` (`savedReviews`). Copy reviews from the resort's Google listing into that list, newest first: name, star rating, the text, and the date as a Unix timestamp (the file shows how to get one). The "3 months ago" label is worked out from the date. Only 4 and 5 star reviews are shown, up to 12.
2. **Live Google reviews (optional).** If `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are set, the build fetches up to 5 reviews and the overall rating from Google instead, and GitHub rebuilds the site daily. This needs a Google Cloud project with billing and **Places API (New)** enabled. Add the two values under repo **Settings > Secrets and variables > Actions**, or in a git-ignored `.env` file locally.

With no reviews from either source, the section shows Tripadvisor's free review widget instead (`tripadvisorId` in `src/data/site.ts`).
