import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'cubic-bezier(.65,0,.35,1)';
const $ = <T extends HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

/* ---------- smooth scroll ---------- */
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- word splitting ---------- */
function splitWords(el: HTMLElement): HTMLElement[] {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  const inners: HTMLElement[] = [];
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    node.textContent!.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) return frag.append(' ');
      const word = document.createElement('span');
      word.className = 'word';
      const inner = document.createElement('span');
      inner.className = 'word-inner';
      inner.textContent = part;
      word.append(inner);
      frag.append(word);
      inners.push(inner);
    });
    node.replaceWith(frag);
  });
  return inners;
}

const reveal = (words: HTMLElement[], delay = 0) =>
  gsap.fromTo(words, { yPercent: 100 }, { yPercent: 0, duration: 0.9, ease: EASE, stagger: 0.05, delay });

const heroTitle = $('[data-hero-title]');
const titles = $$('[data-split]');
const wordsByEl = new Map<HTMLElement, HTMLElement[]>();
titles.forEach((el) => wordsByEl.set(el, splitWords(el)));

if (reduced) {
  document.querySelectorAll<HTMLElement>('[data-split],[data-fade]').forEach((e) => (e.style.visibility = 'visible'));
} else {
  titles.forEach((el) => {
    const words = wordsByEl.get(el)!;
    gsap.set(words, { yPercent: 100 });
    el.style.visibility = 'visible';
    if (el === heroTitle) return;
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => reveal(words) });
  });

  $$('[data-fade]').forEach((el) => {
    gsap.set(el, { y: 20, opacity: 0, visibility: 'visible' });
    // hero copy is on screen at load, so it plays straight after the headline
    if (el.closest('.hero')) return gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: EASE, delay: 0.9 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: EASE }),
    });
  });

  /* ---------- hero: zoom-in fade slideshow, headline reveals on load ---------- */
  const slides = $$('[data-hero-slide]');
  if (slides.length) {
    const HOLD = 5.5;
    const FADE = 1.6;
    gsap.set(slides, { opacity: 0, scale: 1 });
    const loadLater = () => $$<HTMLImageElement>('img[data-srcset]').forEach((img) => {
      img.srcset = img.dataset.srcset!;
      img.src = img.dataset.src!;
    });
    if (document.readyState === 'complete') loadLater();
    else window.addEventListener('load', loadLater, { once: true });
    let current = 0;
    const show = (i: number) => {
      const next = slides[i];
      const prev = slides[(i + slides.length - 1) % slides.length];
      gsap.set(next, { zIndex: 2 });
      gsap.fromTo(next, { opacity: 0 }, { opacity: 1, duration: FADE, ease: 'power1.inOut', overwrite: true });
      // keeps zooming through its own fade-out so the motion never snaps back
      gsap.fromTo(next, { scale: 1 }, { scale: 1.14, duration: HOLD + FADE * 2, ease: 'none' });
      if (prev !== next) {
        gsap.set(prev, { zIndex: 1 });
        gsap.to(prev, { opacity: 0, duration: FADE, ease: 'power1.inOut' });
      }
    };
    show(0);
    gsap.delayedCall(HOLD, function tick() {
      current = (current + 1) % slides.length;
      show(current);
      gsap.delayedCall(HOLD, tick);
    });
  }
  if (heroTitle) reveal(wordsByEl.get(heroTitle)!, 0.3);

  /* ---------- image parallax / scale ---------- */
  $$('[data-parallax]').forEach((frame) => {
    const img = $('img', frame);
    if (!img) return;
    gsap.fromTo(img, { yPercent: -6, scale: 1.15 }, {
      yPercent: 6, scale: 1, ease: 'none',
      scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

/* ---------- header ---------- */
const header = $('#header')!;
const burger = $('#burger')!;
ScrollTrigger.create({ start: 10, onToggle: (self) => header.classList.toggle('is-scrolled', self.isActive) });

let open = false;
function setMenu(next: boolean) {
  open = next;
  header.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
burger.addEventListener('click', () => setMenu(!open));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) setMenu(false); });

/* ---------- floating chat ---------- */
const chaty = $('#chaty');
if (chaty) {
  const toggle = $('#chaty-toggle', chaty)!;
  const items = $$<HTMLAnchorElement>('.chaty__item', chaty);
  const setChat = (next: boolean) => {
    chaty.classList.toggle('is-open', next);
    toggle.setAttribute('aria-expanded', String(next));
    toggle.setAttribute('aria-label', next ? 'Close contact options' : 'Contact us');
    items.forEach((a) => (a.tabIndex = next ? 0 : -1));
  };
  toggle.addEventListener('click', () => setChat(!chaty.classList.contains('is-open')));
  document.addEventListener('click', (e) => { if (!chaty.contains(e.target as Node)) setChat(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setChat(false); });
}

/* ---------- in-page links: smooth scroll, clear of the fixed header ---------- */
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href')!;
  const target = href === '#top' || href === '#' ? document.body : $(href);
  if (!target) return;
  e.preventDefault();
  setMenu(false);
  if (lenis) lenis.scrollTo(target, { offset: target === document.body ? 0 : -header.offsetHeight });
  else target.scrollIntoView();
});

/* ---------- amenity cards slider ---------- */
$$('[data-slider]').forEach((el) => {
  const section = el.closest('section')!;
  const bar = $('[data-progress]', section)!;
  const update = (s: Swiper) => {
    const total = s.slides.length;
    const visible = Math.min(total, Math.max(1, s.params.slidesPerView as number));
    const w = (visible / total) * 100;
    bar.style.width = `${w}%`;
    bar.style.left = `${Math.min(Math.max(s.progress, 0), 1) * (100 - w)}%`;
  };
  const swiper = new Swiper(el, {
    slidesPerView: 1.2,
    spaceBetween: 8,
    speed: 700,
    breakpoints: { 768: { slidesPerView: 2.2 }, 1100: { slidesPerView: 3 } },
    on: { init: update, progress: update, slideChange: update, resize: update },
  });
  $('[data-prev]', section)!.addEventListener('click', () => swiper.slidePrev());
  $('[data-next]', section)!.addEventListener('click', () => swiper.slideNext());
});

window.addEventListener('load', () => ScrollTrigger.refresh());
