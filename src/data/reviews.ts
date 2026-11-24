// Guest reviews for the home page slider: 5-star reviews copied from the resort's Tripadvisor listing
// (https://www.tripadvisor.com.sg/Hotel_Review-g469432-d1159262-Reviews-Yangkhil_Resort-Trongsa_Trongsa_District.html).
// Cards are laid out like callofthedragonbhutan.com's review slider.
//
// To add one: copy a block, newest first. `date` is the month the review was written (YYYY-MM);
// the "x months ago" label is worked out from it. `id` is the number after "-r" in the review's link.
// Use <br> for line breaks and &amp; for "&". Only reviews with rating 5 are shown.

export type Review = {
  id: string;
  date: string;
  name: string;
  rating: number;
  title: string;
  text: string;
  /** profile photo file in src/assets/reviews/avatars; without one, a coloured letter is shown */
  avatar?: string;
};

const listing = 'https://www.tripadvisor.com.sg/Hotel_Review-g469432-d1159262-Reviews-Yangkhil_Resort-Trongsa_Trongsa_District.html';
export const tripadvisorUrl = listing;
// overall score shown beside the cards; update from the listing now and then
export const tripadvisorSummary = { rating: 4.3, total: 240 };
export const reviewUrl = (id: string) =>
  `https://www.tripadvisor.com.sg/ShowUserReviews-g469432-d1159262-r${id}-Yangkhil_Resort-Trongsa_Trongsa_District.html`;

const all: Review[] = [
  {
    id: '1083490868',
    date: '2026-10',
    name: 'SKLRk',
    avatar: 'ta-sklrk.jpg',
    rating: 5,
    title: 'View, staff and food - all outstanding',
    text: 'Outstanding hotel in all respects. Incredible view over the beautiful and fascinating Trongsa Zhong (the stunning night time view from our hotel room will stay with me forever.<br>Staff were excellent and friendly. To top it all, we had some of the best food in Bhutan - lunch (buffet), evening (we went à la carte) and then breakfast(with an egg station! No pre cooked rubber eggs!). And great value Bhutan wine (Which is excellent btw).<br>I would highly recommend staying at this lovely hotel and seeing the sights of Trongsa Zhong lit.',
  },
  {
    id: '1059670918',
    date: '2026-05',
    name: 'B Russell',
    rating: 5,
    title: 'Memorable stay in Trongsa',
    text: 'Fabulous hotel. Beautiful buildings, lovely room with balcony looking across to Trongsa Fortress. Delicious meals and wonderful service.',
  },
  {
    id: '947751846',
    date: '2024-04',
    name: 'KarmaKids',
    rating: 5,
    title: 'Trongsa’s Resort Hotel',
    text: 'Yangkhil Resort is a great choice near the historic town of Trongsa. The grounds are landscaped with gardens, fish ponds and view of distant mountains. Our rooms and balconies looked directly at Trongsa Dzong, Taa Dzong. and the Mandge River. The town museum is well worth a visit, and it includes a well-made video in English. Meals were good and the staff was eager to please.',
  },
  {
    id: '885364981',
    date: '2023-04',
    name: 'annminky',
    avatar: 'ta-annminky.jpg',
    rating: 5,
    title: 'Restful Resort',
    text: 'Such a nice resort over looking the fortress. Check-in was effortless, with a warm towel to refresh a weary traveler, and a delightful welcome drink. My luggage was delivered to my room ahead of me, as they showed me the dining area. Lovely property with lots of beautiful flowers, clean surroundings, and an excellent view of the mountains.<br>Room was spacious, with a medium size heater and huge bathroom. The veranda was nice, except it was cold to sit outside and enjoy the view.<br>Dinner and breakfast were equally good. I give compliments to the very attentive staff.<br>I had a nice stay, as I had a good night sleep, and the birds outside were my alarm clock.',
  },
  {
    id: '735483968',
    date: '2019-12',
    name: 'Stef G',
    avatar: 'ta-stef-g.jpg',
    rating: 5,
    title: 'Spectacular staff',
    text: '3 star resort with 5+ star staff on side of hill opposite the Trongsa Dhzong and museum. It was quiet (no dogs barking), most rooms have a view, reliable and plentiful hot water, good WiFi (when there is electricity - they rely on the hydro electrical dam and during maintenance periods everyone loses power), super friendly and attentive staff and a great restaurant. They have a nightly buffet but we always asked to order off the menu a la carte and ate some of the best Indian cuisine our entire trip! I would recommend staying just to expereince the staff - super hard workers, always offering a beverage (I always chose milk tea - so good!!) which came with cookies (luxury since "dessert" is not something you will see in Bhutan), carrying our luggage up and down the hill &amp; stairs (no elevators), or to chat with us about our day.',
  },
  {
    id: '726182746',
    date: '2019-11',
    name: 'Ann G',
    avatar: 'ta-ann-g.jpg',
    rating: 5,
    title: 'Lovely overnight stay',
    text: 'A lovely hotel set in nice surroundings with views over the river and towards the Dzong. Rooms were large and bathroom had a bath. Food was good and as we were leaving very early the next morning the hotel packed a very good breakfast for us to take. Staff were extremely helpful and friendly.',
  },
  {
    id: '683427885',
    date: '2019-06',
    name: 'Saurabh Gupta',
    avatar: 'ta-saurabh-gupta.jpg',
    rating: 5,
    title: 'Leisure Trip !',
    text: 'We were there for a single night on June 8th while returning from Bumthang. The property is strategically located overlooking the valley and Trongsa Town. Almost all the room have a valley view. The staff is warm and friendly, restaurant serves good eating options including Indian cuisine.',
  },
  {
    id: '665499220',
    date: '2019-04',
    name: 'Lizzie0909',
    avatar: 'ta-lizzie0909.jpg',
    rating: 5,
    title: 'Wish we could have stayed longer',
    text: 'We only stayed here for one night as part of our birding trip to Bhutan. I wish it could have been longer as Yangkhil Resort was a fabulous place to stay. Friendly staff, lovely food and beautiful bedrooms.<br>We were upstairs in room 504. A nice twin room, with a balcony that had chairs and a table. Comfortable beds, hot powerful shower with toiletries, kettle with tea &amp; coffee, bottled water, electric heater and good storage. Luggage delivered and collected to and from our room by very polite staff.<br>Excellent buffet evening meal, very reasonable bar prices, WiFi available in all areas. Didn’t have breakfast as we left before 5am.',
  },
  {
    id: '658818833',
    date: '2019-03',
    name: 'studebjw',
    avatar: 'ta-studebjw.jpg',
    rating: 5,
    title: 'Great little hotel',
    text: 'Loved this place! Great view of the Dzong, in particular at night when it is lit up. Rooms very adequate with an large bathroom with the required amenities.<br>The staff was absolutely great, professional, friendly and caring.<br>Finally, the food was GOOD! It had some character and without a doubt the hotel had a chef.<br>And one final comment, the beer was cold!<br>Highly recommend the Yangkhil Resort.',
  },
  {
    id: '657458954',
    date: '2019-03',
    name: 'White Mountain',
    avatar: 'ta-white-mountain.jpg',
    rating: 5,
    title: 'Good view and good property',
    text: 'The rooms they have is two category deluxe and standard. If you are on deluxe you will have a good view of Trongsa fortress. They also have good sit out with cane sofa to relax and enjoy the sight. The property is good and modern with staff so friendly and helpful. We had Indian breakfast and it was delicious.',
  },
  {
    id: '656350807',
    date: '2019-03',
    name: 'Pat C',
    avatar: 'ta-pat-c.jpg',
    rating: 5,
    title: 'Fantastic resort, very good food, view stunning',
    text: 'On a tour with RoadScholar we had a very nice room with a deck and a view of the valley and mountains that was stunning. The dinner and breakfast were both very good and the help very nice. The also had the nicest shower of our 2 week trip. The place is awesome.',
  },
  {
    id: '648837641',
    date: '2019-01',
    name: 'Linda',
    avatar: 'ta-linda.jpg',
    rating: 5,
    title: 'Perfect position.',
    text: 'This place is so friendly as most places in Bhutan are. Position is the best, on the side of the hill. Most rooms have a great view with small balcony, table and chairs. There is a prayer wheel in a viewing area which is beautiful to sit, relax and take it all in. The rooms are average but comfortable.',
  },
];

export const reviews = all.filter((r) => r.rating === 5);

// 5-star Google reviews, shown in a second slider below the Tripadvisor one.
// Copied from the resort's Google Maps listing (only reviews posted on Google, not the Tripadvisor ones Google also lists).
// Google only shows "3 weeks ago" style dates, so `date` here is the approximate day (YYYY-MM-DD).
export const googleUrl = 'https://www.google.com/maps/search/?api=1&query=Yangkhil+Resort+Trongsa';
export const googleSummary = { rating: 4.6, total: 170 };

export type GoogleReview = { date: string; name: string; rating: number; text: string; avatar?: string };

const google: GoogleReview[] = [
  {
    date: '2026-11-10',
    name: 'Patrick Otto',
    avatar: 'g-patrick-otto.png',
    rating: 5,
    text: 'The hotel grounds are very beautiful and well-maintained 🏨. We really enjoyed the hotel; the restaurant is a bit upscale and very good. The service is first-class, and everyone is very friendly. Highly recommended!',
  },
  {
    date: '2026-11-03',
    name: 'Steve Clarke',
    avatar: 'g-steve-clarke.png',
    rating: 5,
    text: 'Outstanding hotel in all respects. We just spent one night sadly - but the night view of Trongsa Zhong from our room will stay with me forever. Trongsa Zhong is one of the most picturesque and interesting in Bhutan and Yangkhil has an unbeatable view of it and the beautiful valley below.<br>Staff were superb and friendly. To top it all, we had some of the best food - lunch (buffet) , dinner (we chose à la carte) and breakfast (with an egg station!! No rubber pre cooked eggs).<br>For all the above reasons , i would highly recommend choosing the Yangkhil.',
  },
  {
    date: '2026-11-03',
    name: 'Alexander Hochmeister',
    avatar: 'g-alexander-hochmeister.png',
    rating: 5,
    text: 'A very family-run hotel in a traditional style with excellent cuisine and laundry service – top value for money.',
  },
  {
    date: '2026-10-24',
    name: 'Zero Emission',
    avatar: 'g-zero-emission.png',
    rating: 5,
    text: 'Excellent hotel with beautiful, spotless rooms and exceptional attention to detail.<br>If you travel extensively in Bhutan, you quickly learn to appreciate a hotel where everything is truly clean and well maintained. Many hotels seem to struggle with similar plumbing issues, and unpleasant smells can unfortunately be quite common. Bathrooms are often small or in need of attention, and many rooms tend to look more or less the same.<br><br>Yangkhil Resort is completely different. Everything is absolutely spotless and beautifully maintained. The bathrooms are spacious, immaculate, and thoughtfully designed, with plenty of room to store your belongings. The furniture and interior design reflect a beautiful, classic style that gives the hotel a warm and elegant atmosphere.<br><br>The entire property is surrounded by a beautiful, spacious garden, with an obvious love for detail throughout. The internet connection is also excellent and completely reliable—something that is especially valuable when you need to get some work done while traveling.<br><br>The staff are incredibly friendly, helpful, and flexible, making the stay even more enjoyable. We have already started planning our next visit to this beautiful resort and are very much looking forward to returning.',
  },
  {
    date: '2026-10-24',
    name: 'pd chic',
    avatar: 'g-pd-chic.png',
    rating: 5,
    text: 'Pretty good true 3-star hotel. Most 3-star hotels in Bhutan don’t meet the international standards for 3-star hotels. The property is beautiful. The room is spacious and the food is good. The view is spectacular!',
  },
  {
    date: '2026-10-24',
    name: 'Ariela Charlap',
    avatar: 'g-ariela-charlap.png',
    rating: 5,
    text: 'Excellent hotel, courteous service, breathtaking view, recommended',
  },
  {
    date: '2026-05-24',
    name: 'Victoria Meyer',
    avatar: 'g-victoria-meyer.jpg',
    rating: 5,
    text: 'A magical stay with a breathtaking view of Trongsa Fortress, particularly stunning when illuminated at night.<br><br>We thoroughly enjoyed the delicious meal, accompanied by friendly and attentive service. The room, beautifully decorated for our honeymoon, added an extra special touch to our stay.<br><br>Special mention goes to the couples massage, which was very pleasant after a day of hiking—a truly relaxing experience.<br><br>A wonderful experience that we highly recommend!',
  },
  {
    date: '2026-05-24',
    name: 'Maxi Wappler',
    avatar: 'g-maxi-wappler.png',
    rating: 5,
    text: 'A magnificent accommodation with all amenities, fabulous and extremely attentive service, fantastic local food, wonderfully relaxing massages, the best view in the entire valley, a beautifully maintained garden, on-site parking – simply paradise! Anyone who doesn’t stay here is missing out!',
  },
  {
    date: '2026-05-24',
    name: 'Vivek Mehta',
    avatar: 'g-vivek-mehta.png',
    rating: 5,
    text: 'We stayed here for one day but regret that we could have extended the stay The location is breathtaking overlooking the Trongsa Dzong and hospitality is superb with lovely food and stay arrangements<br>Must stay at this place while going to bhumtang',
  },
  {
    date: '2025-12-24',
    name: 'Robert De Raeve',
    avatar: 'g-robert-de-raeve.jpg',
    rating: 5,
    text: 'Very nice hotel with great views. The staff is very friendly and the food was delicious. Also good WiFi. Highly recommended!',
  },
  {
    date: '2025-11-24',
    name: 'Thinley Dhendup',
    avatar: 'g-thinley-dhendup.jpg',
    rating: 5,
    text: 'We had a really good stay at Yangkhil Resort. The staff were professional, and very helpful from the time we arrived until check-out.<br><br>The rooms were clean and comfortable, and the whole place was neat and well maintained.<br><br>There was good water pressure and hot water all the time, which made the stay even better. (Minor but makes a huge difference after a long day of travel)<br><br>The view of Trongsa Dzong from the resort is amazing, you can sit and enjoy the scenery for hours.<br><br>The food was healthy, fresh, and tasty, with plenty of good options. Overall, it’s a quiet and peaceful place with great service, professional staff, and a beautiful view. We would definitely stay here again.',
  },
  {
    date: '2025-11-24',
    name: 'Martin Cowie',
    avatar: 'g-martin-cowie.png',
    rating: 5,
    text: 'One of the most professional hotels and staff we came across in our Bhutan travels. Hotel views from the deluxe rooms are amazing,food excellent all served on Hot plates.<br>wish we had stayed 2 days. Also visit the museum if in the area',
  },
];

export const googleReviews = google.filter((r) => r.rating === 5);
