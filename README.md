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

## Guest reviews (pulled from Google)

The reviews section loads the resort's Google reviews when the site is built (`src/data/reviews.ts`), the same way WordPress review plugins do. GitHub rebuilds the site every day, so new reviews show up on their own. It shows the overall rating and up to 6 reviews with 4 or 5 stars. Google only shares 5 reviews, the ones it ranks most relevant.

Setup:

1. In Google Cloud Console, create a project, turn on billing, enable **Places API (New)**, and create an API key restricted to that API. A daily rebuild stays far inside Google's free monthly allowance.
2. Find the resort's Place ID with Google's Place ID Finder (search "Yangkhil Resort").
3. On GitHub: repo **Settings > Secrets and variables > Actions**, add `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`.
4. To see live reviews locally, put the same two lines in a `.env` file in the project root (it is git-ignored):
   ```
   GOOGLE_PLACES_API_KEY=your-key
   GOOGLE_PLACE_ID=your-place-id
   ```

Without the key, or if Google can't be reached, the site shows the reviews written in `site.ts` instead.
