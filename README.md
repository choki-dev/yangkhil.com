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
