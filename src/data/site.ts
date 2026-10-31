import view from '../assets/view.jpg';
import resort from '../assets/resort.jpg';
import resort2 from '../assets/resort2.jpg';
import resort3 from '../assets/resort3.jpg';
import outdoor from '../assets/outdoor.jpg';
import outdoor2 from '../assets/outdoor2.jpg';
import outdoorView from '../assets/outdoor-view.jpg';
import architecture from '../assets/architecture.jpg';
import logo from '../assets/logo-yangkhil.png';
import room from '../assets/room.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';
import room4 from '../assets/room4.jpg';
import sitting from '../assets/sitting.jpg';
import viewSit from '../assets/view-sit.jpg';
import living from '../assets/living.jpg';
import living2 from '../assets/living-2.jpg';
import dine from '../assets/dine.jpg';
import dine3 from '../assets/dine3.jpg';
import bath from '../assets/bath.jpg';
import wellness2 from '../assets/wellness2.jpg';
import wellness3 from '../assets/wellness3.jpg';
import spaRoom from '../assets/spa-room.jpg';
import hotStoneBath from '../assets/hot-stone-bath.jpg';
import conference1 from '../assets/conference-1.jpg';
import conference2 from '../assets/conference-2.jpg';
// no new photos of these two places yet, so they keep the earlier photos
import exploreTaDzong from '../assets/explore-ta-dzong.jpg';
import exploreTrongsaTown from '../assets/explore-trongsa-town.jpg';

// base path for links between pages (the site is served from /yangkhil.com/ on GitHub Pages)
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const page = {
  about: `${base}/about/`,
  rooms: `${base}/rooms/`,
  amenities: `${base}/amenities/`,
  explore: `${base}/explore-trongsa/`,
  book: `${base}/book/`,
};
export const explorePage = page.explore;
// detail page for one Trongsa attraction, e.g. /explore-trongsa/ta-dzong/
export const placePage = (id: string) => `${page.explore}${id}/`;
// on other pages, '#about' style links need to go back to the home page first
export const homeLink = (href: string, path: string) =>
  href.startsWith('#') && path.replace(/\/$/, '') !== base ? `${base}/${href}` : href;

export const site = {
  name: 'Yangkhil Resort',
  logo,
  bookUrl: page.book,
  nav: [
    { label: 'About Us', href: page.about },
    { label: 'Rooms', href: page.rooms },
    { label: 'Amenities & Experiences', href: page.amenities },
    { label: 'Explore Trongsa', href: page.explore },
  ],
  hero: {
    // Slideshow: fades between photos with a slow zoom-in. Add or reorder freely.
    slides: [
      { image: resort3, alt: 'Prayer flags above the Yangkhil gardens and main building' },
      { image: resort, alt: 'Yangkhil cottage with carved wooden balconies and a curved staircase' },
      { image: outdoor2, alt: 'Garden table laid for dinner beside flower beds' },
    ],
    label: 'Trongsa, Bhutan',
    // One entry per line of the headline.
    titleLines: ['Discover the heart', 'of Bhutan at Yangkhil', 'Resort, Trongsa.'],
    link: { label: 'Book your stay', href: page.book },
    secondary: { label: 'Explore the resort', href: page.amenities },
  },
  split: {
    title: 'Sustainability',
    text: 'Caring for the mountains and valley around us, and for the Trongsa community we are part of, so this place stays as it is for the guests who come after you.',
    link: { label: 'Learn more', href: '#contact' },
    image: outdoorView,
    alt: 'Garden shrine and waterfall among the greenery at Yangkhil',
  },

  retreat: {
    label: 'Resort amenities',
    title: 'Places to eat, unwind and gather, all within the resort',
    text: 'From a traditional hot stone bath to coffee, cocktails and spaces for meetings, everything is a short walk from your room.',
    link: { label: 'See all amenities', href: page.amenities },
  },
  roomsSection: {
    label: 'Our rooms',
    title: 'Rooms to rest after the road',
    text: 'Enjoy a comfortable stay at Yangkhil Resort, with 21 rooms across five cottages overlooking the beautiful landscapes of Trongsa. Choose from our selection of single, twin and double rooms, designed to offer a welcoming place to rest after a day of exploring Bhutan.',
    hero: living2,
    heroAlt: 'Armchairs around a table by a tall window looking out to the mountains',
    facts: [
      { value: '21', label: 'Rooms' },
      { value: '5', label: 'Cottages' },
      { value: '4', label: 'Room types' },
    ],
    // "Every room includes" strip under the room showcase
    features: [
      { title: 'Valley views', text: 'A balcony with a panoramic view of the river valley.' },
      { title: 'Modern comfort', text: 'Spacious rooms with modern amenities.' },
      { title: 'Garden cottages', text: 'Five two-storey cottages set among landscaped gardens.' },
      // the items below are typical for the resort but not confirmed: check with Yangkhil before launch
      { title: 'Private bathroom', text: 'An en-suite bathroom with a hot shower.' },
      { title: 'Warm and cosy', text: 'Room heating for cool mountain nights.' },
      { title: 'Free Wi-Fi', text: 'Stay connected throughout your stay.' },
      { title: 'Tea and coffee', text: 'Tea and coffee making facilities in your room.' },
      { title: 'Daily housekeeping', text: 'Fresh towels and a tidy room every day.' },
    ],
    note: 'Rates are subject to 10% Bhutan sales tax and 5% service charge.',
    // gallery: extra photos for each room's carousel (add more photos of a room here)
    rooms: [
      { name: 'Premium Single', guests: '1 guest', bed: 'Single bed', image: room3, alt: 'Premium Single room being made up by a member of the team', gallery: [] },
      { name: 'Premium Twin', guests: '2 guests', bed: 'Twin beds', image: room4, alt: 'Premium Twin room with two beds', gallery: [] },
      { name: 'Deluxe Single', guests: '1 guest', bed: 'Single bed', image: room2, alt: 'Deluxe Single room with a window seat', gallery: [] },
      { name: 'Deluxe Double', guests: '2 guests', bed: 'Double bed', image: room, alt: 'Deluxe Double room with a thangka above the bed', gallery: [] },
    ],
  },
  amenitiesPage: {
    label: 'Amenities & Experiences',
    title: 'Places to eat, unwind and gather',
    text: 'From comfortable accommodation and dining to wellness experiences and spaces for private gatherings, Yangkhil offers a place to unwind after a day of exploring Trongsa or travelling through Bhutan.',
    hero: outdoor,
    heroAlt: 'Restaurant terrace under a flowering timber pergola',
  },
  amenities: [
    {
      id: 'restaurant',
      title: 'Restaurant',
      details: [
        'Our restaurant serves a selection of Bhutanese and Indian dishes, bringing together local flavours and familiar favourites.',
      ],
      text: 'Bhutanese and Indian flavours',
      image: dine3,
      alt: 'Table being set on the restaurant terrace with mountain views',
      // second photo shown in the image carousel on the Amenities page
      gallery: [{ image: outdoor2, alt: 'Garden table laid for dinner beside flower beds' }],
    },
    {
      id: 'hot-stone-bath',
      title: 'Traditional Hot Stone Bath',
      details: [
        'Experience one of Bhutan’s oldest bathing traditions. Heated river stones are carefully placed into a wooden tub of water, creating a warm and soothing bathing experience rooted in Bhutanese culture.',
        'A distinctive part of local heritage, the hot stone bath offers a chance to unwind and experience a tradition passed down through generations.',
      ],
      text: 'One of Bhutan’s oldest bathing traditions',
      image: hotStoneBath,
      alt: 'Two sunken wooden hot stone bath tubs in a timber-panelled room',
      gallery: [{ image: bath, alt: 'Wooden hot stone bath tub scattered with flowers' }],
    },
    {
      id: 'spa',
      title: 'Spa & Massage',
      details: [
        'Travel can be tiring, especially along Bhutan’s winding mountain roads. Our spa and massage facilities offer guests time to rest and recharge during their stay.',
        'Whether you are unwinding after a day of sightseeing or simply looking for a little quiet, enjoy a moment of calm at Yangkhil.',
      ],
      text: 'Time to rest and recharge',
      image: spaRoom,
      alt: 'Massage table in a stone and timber treatment room',
      gallery: [{ image: wellness3, alt: 'Massage table in a timber-panelled treatment room' }],
    },
    {
      id: 'conference',
      title: 'Conference & Banquet Facilities',
      details: [
        'From meetings and workshops to conferences, banquets and private celebrations, Yangkhil offers versatile spaces for bringing people together.',
        'Our 30-seater conference hall is ideal for smaller meetings and working sessions, while the multipurpose hall accommodates larger gatherings and special occasions.',
      ],
      text: 'Spaces for bringing people together',
      image: conference1,
      alt: 'Conference hall with a long table, microphones and a painted Bodhi tree mural',
      gallery: [{ image: conference2, alt: 'Conference hall seating along a long timber table' }],
    },
    {
      id: 'thori-lounge',
      title: 'Thori Lounge',
      details: [
        'Thori Lounge serves handcrafted cocktails and a selection of fine spirits alongside panoramic views of the surrounding mountains.',
        'Whether for an evening drink or a relaxed gathering with friends, it is a welcoming spot to enjoy good drinks and the scenery.',
      ],
      text: 'Cocktails with mountain views',
      image: viewSit,
      alt: 'Lounge seating beside tall windows with mountain views',
      gallery: [{ image: living2, alt: 'Armchairs around a table by a tall window' }],
    },
    {
      id: 'coffee-lounge',
      title: 'Ngal So Coffee Lounge',
      details: [
        'Ngal So Coffee Lounge serves freshly brewed espresso, in-house baked pastries and treats, and pizza.',
        'Whether you are stopping by for a morning coffee, a light bite or an afternoon break, the lounge offers a cosy setting to sit back and enjoy something freshly prepared.',
      ],
      text: 'Fresh coffee, pastries and pizza',
      image: living,
      alt: 'Flowers in a Yangkhil Resort vase beside a stack of books',
      gallery: [{ image: sitting, alt: 'Flowers and books on a glass table beside a cane armchair' }],
    },
  ],
  about: {
    label: 'Since 2004',
    title: 'About Yangkhil',
    text: 'Since 2004, Yangkhil Resort has welcomed guests with authentic Bhutanese hospitality and contemporary comfort. Set against panoramic views of Trongsa Dzong, Taa Dzong and the Mangde Chhu valley, Yangkhil offers a peaceful retreat in the heart of Bhutan.',
    link: { label: 'Learn more', href: page.about },
    image: sitting,
    alt: 'Flowers in a Yangkhil Resort vase and books on a glass table beside a cane armchair',
    // which part of the photo stays in view when the frame crops it (keeps the vase in shot)
    position: '30% 50%',
  },
  aboutPage: {
    label: 'About us',
    title: 'A home away from home in Trongsa',
    hero: outdoor,
    heroAlt: 'Restaurant terrace under a flowering timber pergola',
    intro: 'Established in 2004, Yangkhil Resort sits on a hillside overlooking the historic Trongsa Dzong, Taa Dzong and the Mangde Chhu river, with views of mountains rising above 10,000 feet. Just a short walk from Trongsa town, the resort offers a peaceful retreat in the heart of central Bhutan.',
    sections: [
      {
        label: 'Our property',
        title: 'Five cottages, 21 rooms',
        text: [
          'The property comprises five two-storey cottages with 21 rooms, set among landscaped gardens and greenery. Over the past two decades, Yangkhil has continued to grow and improve its facilities while retaining the warmth of traditional Bhutanese hospitality.',
          'Many members of our management team have been with us since the beginning, bringing years of experience and a familiar, personal touch to the way we welcome our guests.',
        ],
        image: dine,
        alt: 'A member of the Yangkhil team in a kira arranging fruit and flowers on a terrace table',
      },
      {
        label: 'Your stay',
        title: 'A place to unwind',
        text: [
          'From comfortable accommodation and dining to wellness experiences and spaces for private gatherings, Yangkhil offers a place to unwind after a day of exploring Trongsa or travelling through Bhutan.',
          'Whether staying for a night or a little longer, we hope our guests find more than just a place to rest, but a little home away from home, surrounded by the beauty of Bhutan.',
        ],
        image: wellness2,
        alt: 'Fruit bowl and folded towels on a massage table',
      },
    ],
    // numbers shown in a row under the intro
    facts: [
      { value: '2004', label: 'Established' },
      { value: '21', label: 'Rooms' },
      { value: '5', label: 'Cottages' },
      { value: '10,000 ft', label: 'Mountains around us' },
    ],
  },
  booking: {
    label: 'Book your stay',
    title: 'Send a booking enquiry',
    text: 'Tell us your dates, number of guests and preferred room. Send your enquiry straight to our reservations team, or on WhatsApp, and we will reply to confirm availability.',
    // WhatsApp number that receives enquiries (country code, no + or spaces)
    whatsapp: '97517111588',
    email: 'yangkhilreservation@gmail.com',
    // Web3Forms access key: "Send enquiry" emails the form to the inbox this key was created with.
    // It is meant to be public (web3forms.com); make a new key there to change the receiving inbox.
    web3formsKey: '0bf27ab0-d145-4413-8887-49540d57b0c3',
    image: resort2,
    alt: 'Yangkhil cottage with painted Bhutanese woodwork and forested mountains beyond',
  },
  reviews: {
    label: 'Guest reviews',
    title: 'What our guests say',
    // Trustindex widget IDs: the part after "loader.js?" in each code Trustindex gives you.
    // When set, their live review widgets replace the review cards below (shown in this order).
    trustindex: [
      '8ea6312840a5780b4b26f821138', // Google
      '1f3a07484ef1780a039686c8060', // Tripadvisor
    ],
    // Tripadvisor's own review widget (listing ID after "-d" in the Tripadvisor link, e.g. '1159262').
    // Only needed if the Trustindex Tripadvisor widget above is removed; leave empty otherwise.
    tripadvisorId: '',
    // Google reviews are pulled in automatically (see src/data/reviews.ts).
    // These are only shown when that isn't set up: rating is out of 5; source is 'Google' or 'Tripadvisor'.
    items: [
      { quote: 'Paste a guest review from Google here.', name: 'Guest name', date: 'Month 2026', rating: 5, source: 'Google' },
      { quote: 'Paste a guest review from Tripadvisor here.', name: 'Guest name', date: 'Month 2026', rating: 5, source: 'Tripadvisor' },
      { quote: 'Paste a guest review from Google here.', name: 'Guest name', date: 'Month 2026', rating: 5, source: 'Google' },
    ],
    // Replace with the resort's own listing URLs.
    links: [
      { label: 'Read reviews on Google', href: 'https://www.google.com/maps/search/?api=1&query=Yangkhil+Resort+Trongsa' },
      { label: 'Read reviews on Tripadvisor', href: 'https://www.tripadvisor.com/Hotel_Review-g469432-d1159262-Reviews-Yangkhil_Resort-Trongsa_Trongsa_District.html' },
    ],
  },
  explore: {
    hero: view,
    heroAlt: 'Trongsa Dzong across the valley, framed by wisteria',
    label: 'Explore Trongsa',
    title: 'Stories from the heart of Bhutan',
    text: 'Dzongs, watchtowers and valley views a short way from the resort. Read our guides to Trongsa’s attractions before you go.',
    link: { label: 'Explore Trongsa', href: explorePage },
    // detail pages draft: check facts and dates with the resort before going live
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
        // full write-up for the place's detail page
        body: [
          'Chhoekhor Rabtentse Dzong, better known as Trongsa Dzong, is the largest dzong in Bhutan. Its whitewashed walls, temples and courtyards step down a narrow ridge above the Mangde Chhu gorge, and from Yangkhil you can see the whole length of it across the valley.',
          'A small temple was first founded on the site in 1543, and the dzong was enlarged into a fortress in 1644. Because it sat on the only route between eastern and western Bhutan, whoever held Trongsa controlled travel across the country.',
          'It is also the ancestral seat of the royal family. The first two kings of Bhutan ruled from Trongsa, and the crown prince traditionally serves as Trongsa Penlop, the governor of Trongsa, before taking the throne.',
          'Today the dzong houses the district administration and a community of monks. In winter it hosts the Trongsa Tshechu, when masked dances fill the main courtyard.',
        ],
        image: view,
        alt: 'Trongsa Dzong spread along a forested ridge, seen from Yangkhil',
      },
      {
        tag: 'Museum',
        title: 'Taa Dzong',
        text: 'The old watchtower above the dzong, now home to the Tower of Trongsa Royal Heritage Museum.',
        id: 'ta-dzong',
        // full write-up for the place's detail page
        body: [
          'Taa Dzong is the old watchtower on the hill above Trongsa Dzong. From its walls, guards once kept watch over the dzong and the road winding through the valley below.',
          'The tower has since been restored and now houses the Tower of Trongsa Royal Heritage Museum. Its galleries tell the story of the Wangchuck dynasty and display religious art and royal objects.',
          'The walk up to the tower gives one of the best views of Trongsa Dzong spread along its ridge, with the Mangde Chhu far below.',
        ],
        image: exploreTaDzong,
        alt: 'Taa Dzong watchtower above the trees',
      },
      {
        tag: 'Town walk',
        title: 'Trongsa Town',
        text: 'A small hillside town of shops and tea stalls, looking across to the dzong.',
        id: 'trongsa-town',
        // full write-up for the place's detail page
        body: [
          'Trongsa town is a small settlement on the hillside opposite the dzong, a short walk from Yangkhil Resort.',
          'Its main street is lined with shops, small restaurants and tea stalls. It is a good place for a slow walk, a cup of tea and a glimpse of everyday life in central Bhutan.',
          'From the town there are clear views across the valley to Trongsa Dzong, and it makes an easy outing before or after a visit to the dzong itself.',
        ],
        image: exploreTrongsaTown,
        alt: 'Rooftops of Trongsa town seen through trees',
      },
      {
        tag: 'Viewpoint',
        title: 'Mangde Chhu Valley',
        text: 'Panoramic views across the valley to Trongsa Dzong, right from the resort gardens.',
        id: 'mangde-chhu-valley',
        // full write-up for the place's detail page
        body: [
          'The Mangde Chhu is the river that runs through the deep valley below Trongsa, between the resort and the dzong.',
          'From Yangkhil’s gardens the view takes in the river, the forested slopes, Trongsa Dzong and Taa Dzong, with mountains rising above 10,000 feet beyond.',
          'It is a view that changes through the day, from morning mist in the gorge to the last light on the dzong walls in the evening, and one best enjoyed with a cup of tea on the terrace.',
        ],
        image: architecture,
        alt: 'The valley seen past prayer flags from a Yangkhil cottage',
      },
    ],
  },
  contact: {
    label: 'Contact and location',
    title: 'A meeting point, naturally',
    image: outdoorView,
    alt: 'Garden shrine and waterfall among the greenery at Yangkhil',
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
