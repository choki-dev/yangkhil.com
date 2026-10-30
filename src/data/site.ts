import hero from '../assets/hero-poster.jpg';
import heroCottages from '../assets/hero-cottages.jpg';
import heroFlags from '../assets/hero-flags.jpg';
import heroDishes from '../assets/hero-dishes.jpg';
import logo from '../assets/logo-yangkhil.png';
import garden from '../assets/garden.jpg';
import roomPremiumSingle from '../assets/room-premium-single.jpg';
import roomPremiumTwin from '../assets/room-premium-twin.jpg';
import roomDeluxeSingle from '../assets/room-deluxe-single.jpg';
import roomDeluxeDouble from '../assets/room-deluxe-double.jpg';
import amenityRestaurant from '../assets/amenity-restaurant.jpg';
import amenityHotStoneBath from '../assets/amenity-hot-stone-bath.jpg';
import amenitySpa from '../assets/amenity-spa.jpg';
import amenityConference from '../assets/amenity-conference.jpg';
import amenityThoriLounge from '../assets/amenity-thori-lounge.jpg';
import amenityCoffeeLounge from '../assets/amenity-coffee-lounge.jpg';
import exploreTrongsaDzong from '../assets/explore-trongsa-dzong.jpg';
import exploreTaDzong from '../assets/explore-ta-dzong.jpg';
import exploreTrongsaTown from '../assets/explore-trongsa-town.jpg';
import exploreValley from '../assets/explore-valley.jpg';
import aboutNight from '../assets/about-night.jpg';
import contactShrine from '../assets/contact-shrine.jpg';

// base path for links between pages (the site is served from /yangkhil.com/ on GitHub Pages)
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const explorePage = `${base}/explore-trongsa/`;
// on other pages, '#about' style links need to go back to the home page first
export const homeLink = (href: string, path: string) =>
  href.startsWith('#') && path.replace(/\/$/, '') !== base ? `${base}/${href}` : href;

export const site = {
  name: 'Yangkhil Resort',
  logo,
  bookUrl: '#contact',
  nav: [
    { label: 'About Us', href: '#about' },
    { label: 'Amenities & Experiences', href: '#amenities' },
    { label: 'Explore Trongsa', href: '#explore-trongsa' },
  ],
  hero: {
    // Slideshow: fades between photos with a slow zoom-in. Add or reorder freely.
    slides: [
      { image: hero, alt: 'Trongsa Dzong rising above the valley, seen from Yangkhil Resort' },
      { image: heroCottages, alt: 'Yangkhil cottages with carved wooden balconies' },
      { image: heroFlags, alt: 'Garden path lined with prayer flags at Yangkhil' },
      { image: heroDishes, alt: 'Bhutanese dishes laid out on a table with flowers' },
    ],
    label: 'Trongsa, Bhutan',
    // One entry per line of the headline.
    titleLines: ['Discover the heart', 'of Bhutan at Yangkhil', 'Resort, Trongsa.'],
    link: { label: 'Book your stay', href: '#contact' },
  },
  split: {
    title: 'Sustainability',
    text: 'Caring for the mountains and valley around us, and for the Trongsa community we are part of, so this place stays as it is for the guests who come after you.',
    link: { label: 'Learn more', href: '#contact' },
    image: garden,
    alt: 'Resort gardens and stone walkway with prayer flags overhead',
  },

  retreat: {
    label: 'Resort amenities',
    title: 'Places to eat, unwind and gather, all within the resort',
    text: 'From a traditional hot stone bath to coffee, cocktails and spaces for meetings, everything is a short walk from your room.',
    link: { label: 'Enquire', href: '#contact' },
  },
  roomsSection: {
    label: 'Our rooms',
    title: 'Rooms to rest after the road',
    text: 'Enjoy a comfortable stay with 21 rooms across five cottages overlooking the beautiful landscapes of Trongsa. Choose from single, twin and double rooms, designed to offer a welcoming place to rest after a day of exploring Bhutan.',
    rooms: [
      { name: 'Premium Single', guests: '1 guest', bed: 'Single bed', image: roomPremiumSingle, alt: 'Premium Single room' },
      { name: 'Premium Twin', guests: '2 guests', bed: 'Twin beds', image: roomPremiumTwin, alt: 'Premium Twin room with two beds' },
      { name: 'Deluxe Single', guests: '1 guest', bed: 'Single bed', image: roomDeluxeSingle, alt: 'Deluxe Single room' },
      { name: 'Deluxe Double', guests: '2 guests', bed: 'Double bed', image: roomDeluxeDouble, alt: 'Deluxe Double room with traditional artwork' },
    ],
  },
  amenities: [
    {
      title: 'Restaurant',
      text: 'Bhutanese and Indian flavours',
      image: amenityRestaurant,
      alt: 'Dining terrace under a timber pergola',
    },
    {
      title: 'Traditional Hot Stone Bath',
      text: 'One of Bhutan’s oldest bathing traditions',
      image: amenityHotStoneBath,
      alt: 'Wooden hot stone bath tub scattered with flowers',
    },
    {
      title: 'Spa & Massage',
      text: 'Time to rest and recharge',
      image: amenitySpa,
      alt: 'Massage table with folded towels and a fruit bowl',
    },
    {
      title: 'Conference & Banquet Facilities',
      text: 'Spaces for bringing people together',
      image: amenityConference,
      alt: 'Conference hall with a long table and a painted tree mural',
    },
    {
      title: 'Thori Lounge',
      text: 'Cocktails with mountain views',
      image: amenityThoriLounge,
      alt: 'Thori Lounge seating beside tall windows with valley views',
    },
    {
      title: 'Ngal So Coffee Lounge',
      text: 'Fresh coffee, pastries and pizza',
      image: amenityCoffeeLounge,
      alt: 'Yangkhil lounge building lit up at dusk',
    },
  ],
  about: {
    label: 'Since 2004',
    title: 'About Yangkhil',
    text: 'Since 2004, Yangkhil Resort has welcomed guests with authentic Bhutanese hospitality and contemporary comfort. Set against panoramic views of Trongsa Dzong, Taa Dzong and the Mangde Chhu valley, Yangkhil offers a peaceful retreat in the heart of Bhutan.',
    link: { label: 'Plan your stay', href: '#contact' },
    image: aboutNight,
    alt: 'Yangkhil Resort lit up at dusk above the garden',
  },
  reviews: {
    label: 'Guest reviews',
    title: 'What our guests say',
    // Copy real reviews from the resort's Google and Tripadvisor listings.
    // rating is out of 5; source is 'Google' or 'Tripadvisor'.
    items: [
      { quote: 'Paste a guest review from Google here.', name: 'Guest name', date: 'Month 2026', rating: 5, source: 'Google' },
      { quote: 'Paste a guest review from Tripadvisor here.', name: 'Guest name', date: 'Month 2026', rating: 5, source: 'Tripadvisor' },
      { quote: 'Paste a guest review from Google here.', name: 'Guest name', date: 'Month 2026', rating: 5, source: 'Google' },
    ],
    // Replace with the resort's own listing URLs.
    links: [
      { label: 'Read reviews on Google', href: 'https://www.google.com/maps/search/?api=1&query=Yangkhil+Resort+Trongsa' },
      { label: 'Read reviews on Tripadvisor', href: 'https://www.tripadvisor.com/Search?q=Yangkhil+Resort+Trongsa' },
    ],
  },
  explore: {
    label: 'Explore Trongsa',
    title: 'Stories from the heart of Bhutan',
    text: 'Dzongs, watchtowers and valley views a short way from the resort. Read our guides to Trongsa’s attractions before you go.',
    link: { label: 'Explore Trongsa', href: explorePage },
    posts: [
      {
        tag: 'Heritage',
        title: 'Trongsa Dzong',
        text: 'The largest dzong in Bhutan, stepping down a ridge above the Mangde Chhu gorge.',
        // longer write-up, shown beside the photo on the home page and on the Explore Trongsa page
        details: [
          'Built in 1644, Bhutan’s largest dzong is the ancestral seat of the royal family and hosts the Trongsa Tshechu each winter.',
        ],
        id: 'trongsa-dzong',
        image: exploreTrongsaDzong,
        alt: 'Trongsa Dzong spread along a forested ridge',
      },
      {
        tag: 'Museum',
        title: 'Taa Dzong',
        text: 'The old watchtower above the dzong, now home to the Tower of Trongsa Royal Heritage Museum.',
        id: 'ta-dzong',
        image: exploreTaDzong,
        alt: 'Taa Dzong watchtower above the trees',
      },
      {
        tag: 'Town walk',
        title: 'Trongsa Town',
        text: 'A small hillside town of shops and tea stalls, looking across to the dzong.',
        id: 'trongsa-town',
        image: exploreTrongsaTown,
        alt: 'Rooftops of Trongsa town seen through trees',
      },
      {
        tag: 'Viewpoint',
        title: 'Mangde Chhu Valley',
        text: 'Panoramic views across the valley to Trongsa Dzong, right from the resort gardens.',
        id: 'mangde-chhu-valley',
        image: exploreValley,
        alt: 'Trongsa Dzong across the valley, framed by wisteria',
      },
    ],
  },
  contact: {
    label: 'Contact and location',
    title: 'A meeting point, naturally',
    image: contactShrine,
    alt: 'Garden shrine and waterfall beside the Yangkhil Resort sign',
    // Google Maps embed; change the search text after q= to move the pin.
    map: 'https://www.google.com/maps?q=Yangkhil+Resort,+Trongsa,+Bhutan&output=embed',
    details: [
      { text: 'Phone +975-3-521417/18', href: 'tel:+9753521417' },
      { text: 'Phone +975-17111588', href: 'tel:+97517111588' },
      { text: 'yangkhilreservation@gmail.com', href: 'mailto:yangkhilreservation@gmail.com' },
      { text: 'Trongsa, Bhutan' },
    ] as { text: string; href?: string }[],
  },
  // Floating chat buttons (bottom right). WhatsApp uses the mobile number.
  chat: [
    { label: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/97517111588' },
    { label: 'Call us', icon: 'phone', href: 'tel:+97517111588' },
    { label: 'Email', icon: 'email', href: 'mailto:yangkhilreservation@gmail.com' },
  ],
  footer: {
    quickLinks: [
      { label: 'Department of Tourism', href: 'https://bhutan.travel/' },
      { label: 'Drukair', href: 'https://drukair.com.bt/' },
      { label: 'Bhutan Airlines', href: 'https://www.bhutanairlines.bt/' },
      { label: 'Trongsa Dzongkhag', href: 'https://trongsa.gov.bt/' },
      { label: 'Immigration', href: 'https://www.immi.gov.bt/' },
    ],
    // Replace with the resort's own profile URLs.
    social: [
      { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/' },
      { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/' },
      { label: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/' },
    ],
  },

};
