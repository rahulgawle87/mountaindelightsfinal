import himachal from "@/assets/dest-himachal.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import uttarakhand from "@/assets/dest-uttarakhand.jpg";
import sikkim from "@/assets/dest-sikkim.jpg";
import kerala from "@/assets/dest-kerala.jpg";

export type MonthRating = "Good" | "Possible" | "Avoid";

export type MonthRow = {
  month: string;
  rating: MonthRating;
  reason: string;
};

export type SampleDay = {
  day: string;
  title: string;
  body: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  altitude: string;
  bestSeason: string;
  image: string;
  short: string;
  intro: string;
  knownFor: string[];
  months: MonthRow[];
  gettingThere: string;
  sampleRoute: {
    name: string;
    duration: string;
    groupSize: string;
    days: SampleDay[];
  };
  whoFor: string;
  whoNotFor: string;
  faqs: FaqItem[];
  relatedSlugs: string[];
  guideSlug?: string;
};

export type Guide = {
  slug: string;
  title: string;
  intro: string;
  body: string[];
  faqs: FaqItem[];
  destinationSlug: string;
};

/** Primary destinations shown as individual /destinations/* pages */
export const destinations: Destination[] = [
  {
    slug: "ladakh",
    name: "Ladakh",
    region: "Trans-Himalaya, Union Territory",
    altitude: "3,500 – 5,360 m",
    bestSeason: "June – September",
    image: ladakh,
    short:
      "Cold desert valleys, monasteries above the treeline, and the highest motorable passes in the country.",
    intro:
      "Ladakh is a high-altitude cold desert in the rain shadow of the Greater Himalaya. It suits travellers who can handle thin air, long drives, and sparse landscapes. The main window is June to September, after most high passes open and before early winter closes them again.",
    knownFor: ["Pangong Tso", "Khardung La", "Hemis", "Nubra"],
    months: [
      { month: "Jan", rating: "Avoid", reason: "Extreme cold; most roads closed." },
      { month: "Feb", rating: "Avoid", reason: "Extreme cold; limited access." },
      { month: "Mar", rating: "Avoid", reason: "Still winter; passes typically closed." },
      { month: "Apr", rating: "Possible", reason: "Early season; weather can be unpredictable." },
      { month: "May", rating: "Possible", reason: "Shoulder; some routes open, cold nights." },
      { month: "Jun", rating: "Good", reason: "Main season starts; passes usually open." },
      { month: "Jul", rating: "Good", reason: "Peak season; warm days, busy routes." },
      { month: "Aug", rating: "Good", reason: "Peak season; occasional rain on some approaches." },
      { month: "Sep", rating: "Good", reason: "Clear skies, fewer crowds, cooler nights." },
      { month: "Oct", rating: "Possible", reason: "Late season; cold and early closures possible." },
      { month: "Nov", rating: "Avoid", reason: "Winter sets in; high routes close." },
      { month: "Dec", rating: "Avoid", reason: "Deep winter; limited travel." },
    ],
    gettingThere:
      "Most visitors fly into Leh (Kushok Bakula Rimpochee Airport). From Leh, road journeys radiate to Nubra, Pangong, and other valleys. Overland approaches from Manali or Srinagar are seasonal and depend on pass status. Within the region, travel is by road; distances are long and altitudes high, so pace matters more than kilometres.",
    sampleRoute: {
      name: "Classic Leh circuit (sample)",
      duration: "8 days",
      groupSize: "Up to 6 travellers, 2 guides (sample)",
      days: [
        {
          day: "Day 1–2",
          title: "Leh acclimatisation",
          body: "Arrive Leh (~3,500 m). Rest, short local walks, monasteries at lower effort. No high passes yet.",
        },
        {
          day: "Day 3–4",
          title: "Nubra via Khardung La",
          body: "Drive toward Nubra after acclimatisation. Monasteries and valley time; return or continue as planned.",
        },
        {
          day: "Day 5–6",
          title: "Pangong side",
          body: "High lake country. Overnight near the lake if conditions allow; return toward Leh.",
        },
        {
          day: "Day 7–8",
          title: "Buffer and departure",
          body: "Buffer day for weather or rest, then fly out of Leh.",
        },
      ],
    },
    whoFor:
      "People who want high-altitude desert landscapes, monasteries, and long scenic drives — and who will respect acclimatisation.",
    whoNotFor:
      "Anyone with serious altitude sensitivity who cannot spend two easy days in Leh first, or travellers expecting lush green Himalayan scenery year-round.",
    faqs: [
      {
        q: "How do I handle altitude sickness in Ladakh?",
        a: "Plan at least two easy days in Leh before any high pass. Drink water, avoid alcohol, and sleep lower rather than push higher if symptoms worsen. Serious symptoms need medical help — do not ignore them.",
      },
      {
        q: "Do I need permits for Ladakh?",
        a: "Some areas require permits; rules change by region and nationality. We arrange what is needed for the routes we run. Confirm current requirements when you book, not from old blog posts.",
      },
      {
        q: "What is an ideal trip length for a first Ladakh visit?",
        a: "About 7–10 days including acclimatisation covers Leh plus one or two valleys without rushing. Shorter trips force either skipped rest or skipped places.",
      },
      {
        q: "How are the road conditions?",
        a: "Mountain roads: narrow stretches, altitude, and weather delays are normal. Build buffer days. Surface and open status vary by season and year.",
      },
      {
        q: "Is Ladakh family-friendly?",
        a: "Yes for families who accept altitude, long drives, and basic remote facilities. Not ideal for very young children or anyone who needs rapid medical access.",
      },
    ],
    relatedSlugs: ["himachal-pradesh", "sikkim"],
    guideSlug: "best-time-ladakh",
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "Western Himalaya",
    altitude: "900 – 4,500 m",
    bestSeason: "March – June, September – November",
    image: himachal,
    short:
      "Apple orchards in Kinnaur, river towns along the Beas, and quiet trails out of Spiti and Tirthan. Shimla sits as a ridge base within the state, not a separate region.",
    intro:
      "Himachal spans lower cedar valleys to high Spiti plateaus. It suits both first-time hill travellers and people chasing quieter circuits beyond the main towns. Spring and autumn are the most reliable windows; high Spiti routes are seasonal.",
    knownFor: ["Spiti Valley", "Kinnaur", "Tirthan", "Shimla as base"],
    months: [
      { month: "Jan", rating: "Possible", reason: "Snow in higher areas; lower valleys open." },
      { month: "Feb", rating: "Possible", reason: "Winter travel; snow possible on passes." },
      { month: "Mar", rating: "Good", reason: "Spring opens lower and mid routes." },
      { month: "Apr", rating: "Good", reason: "Clear for most mid-altitude circuits." },
      { month: "May", rating: "Good", reason: "Warm valleys; high Spiti still opening." },
      { month: "Jun", rating: "Good", reason: "High routes typically accessible." },
      { month: "Jul", rating: "Possible", reason: "Monsoon risk on some roads." },
      { month: "Aug", rating: "Possible", reason: "Monsoon; landslides possible." },
      { month: "Sep", rating: "Good", reason: "Post-monsoon clarity for many circuits." },
      { month: "Oct", rating: "Good", reason: "Clear skies; cooler high country." },
      { month: "Nov", rating: "Possible", rating: "Possible", reason: "Late season; high passes start closing." },
      { month: "Dec", rating: "Possible", reason: "Snow tourism in places; Spiti limited." },
    ],
    gettingThere:
      "Chandigarh is the usual rail/air gateway for Shimla and many western Himachal routes. Manali is reached by road from Chandigarh or Delhi. Spiti circuits often run via Shimla–Kinnaur or via Manali when Kunzum is open. Local travel is by road; Shimla remains a useful ridge base for apple country and toy-train day trips, not a separate mountain system.",
    sampleRoute: {
      name: "Shimla–Kinnaur–Spiti sample loop",
      duration: "10–12 days",
      groupSize: "Up to 6 travellers, 2 guides (sample)",
      days: [
        {
          day: "Day 1–2",
          title: "Shimla base",
          body: "Arrive via Chandigarh. Ridge walks, acclimatise to altitude gently, plan onward logistics.",
        },
        {
          day: "Day 3–5",
          title: "Kinnaur",
          body: "Move toward Kalpa / Sangla side. Orchard country and high ridges before the Spiti plateau.",
        },
        {
          day: "Day 6–9",
          title: "Spiti",
          body: "High desert villages and monasteries. Pace for altitude; buffer for weather.",
        },
        {
          day: "Day 10–12",
          title: "Exit",
          body: "Exit via Manali side when open, or reverse toward Shimla. Buffer day built in.",
        },
      ],
    },
    whoFor:
      "Travellers who want variety — colonial ridge towns, apple valleys, and high Spiti — in one state, at a measured pace.",
    whoNotFor:
      "People who only want a 3-day Mall Road holiday, or who need guaranteed open high passes in winter.",
    faqs: [
      {
        q: "Is altitude a problem in Himachal?",
        a: "Lower valleys are mild. Spiti and high passes require the same respect as Ladakh: gradual gain, rest, and no rushing. Shimla itself is moderate altitude for most people.",
      },
      {
        q: "Do I need permits for Spiti or Kinnaur?",
        a: "Some border-adjacent areas have permit rules. We handle what applies to the routes we operate. Check current rules at booking time.",
      },
      {
        q: "How long should a first Himachal trip be?",
        a: "6–7 days covers Shimla–Manali style travel. A Spiti or Kinnaur extension needs closer to 10–12 days including buffers.",
      },
      {
        q: "What are road conditions like?",
        a: "Mixed: good highways near main towns, narrower mountain roads higher up. Monsoon and early snow can delay or close sections.",
      },
      {
        q: "Is it good for families?",
        a: "Yes for lower and mid-altitude stays. High Spiti is better for older kids who handle long drives and altitude.",
      },
    ],
    relatedSlugs: ["ladakh", "uttarakhand"],
    guideSlug: "spiti-7-days",
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    region: "Central Himalaya",
    altitude: "1,500 – 7,800 m",
    bestSeason: "April – June, September – early November",
    image: uttarakhand,
    short:
      "Char Dham country, Valley of Flowers season, and quieter Kumaon meadows above Munsiyari.",
    intro:
      "Uttarakhand splits into Garhwal and Kumaon — pilgrim routes, alpine meadows, and hill stations with different crowds and climates. It suits walkers and temple-route travellers who accept monsoon closures on upper trails. Best windows are pre-monsoon and post-monsoon.",
    knownFor: ["Valley of Flowers", "Kedarnath region", "Auli", "Munsiyari"],
    months: [
      { month: "Jan", rating: "Possible", reason: "Snow in higher resorts; cold." },
      { month: "Feb", rating: "Possible", reason: "Winter sports areas; limited high treks." },
      { month: "Mar", rating: "Possible", reason: "Transition; some routes still snowy." },
      { month: "Apr", rating: "Good", reason: "Spring opening for many trails." },
      { month: "May", rating: "Good", reason: "Pre-monsoon clarity on mid routes." },
      { month: "Jun", rating: "Good", reason: "High meadows open; early monsoon risk later." },
      { month: "Jul", rating: "Possible", reason: "Monsoon; flowers in some valleys, trail risk." },
      { month: "Aug", rating: "Possible", reason: "Monsoon peak; landslides possible." },
      { month: "Sep", rating: "Good", reason: "Post-monsoon recovery for many routes." },
      { month: "Oct", rating: "Good", reason: "Clear views; cooler nights." },
      { month: "Nov", rating: "Possible", reason: "Late season; early snow higher up." },
      { month: "Dec", rating: "Possible", reason: "Winter; limited high access." },
    ],
    gettingThere:
      "Dehradun (airport/rail) and Kathgodam (rail) are the main gateways for Garhwal and Kumaon respectively. From there, road travel climbs into the districts. High pilgrimage and trek trailheads often need an extra day of driving from the plains.",
    sampleRoute: {
      name: "Kumaon meadows sample",
      duration: "7 days",
      groupSize: "Up to 6 travellers, 2 guides (sample)",
      days: [
        {
          day: "Day 1–2",
          title: "Arrive and climb",
          body: "Kathgodam or similar gateway, then road to a mid-altitude base. Rest and short walks.",
        },
        {
          day: "Day 3–5",
          title: "Meadow and village time",
          body: "Day walks or a gentle multi-day trail depending on fitness and season.",
        },
        {
          day: "Day 6–7",
          title: "Descend and exit",
          body: "Return toward the railhead with a buffer for weather.",
        },
      ],
    },
    whoFor:
      "Walkers, pilgrims, and families who want Central Himalayan scenery without necessarily going to Ladakh-level altitude on day one.",
    whoNotFor:
      "Travellers who insist on fixed high-trail dates in July–August without flexibility for monsoon closures.",
    faqs: [
      {
        q: "How serious is altitude in Uttarakhand?",
        a: "It depends on the route. Hill stations are moderate; high pilgrimage and trek camps need gradual gain and rest the same as elsewhere in the Himalaya.",
      },
      {
        q: "Are permits required?",
        a: "Some trek and sanctuary areas require registration or permits. We include what the chosen route needs at the time of travel.",
      },
      {
        q: "Ideal length for a first trip?",
        a: "A week covers one region (Garhwal or Kumaon) without rushing. Combining both needs more days and more driving.",
      },
      {
        q: "Road and trail conditions?",
        a: "Mountain roads and monsoon-sensitive trails. Build buffers. Upper routes can close after heavy rain or early snow.",
      },
      {
        q: "Family-friendly?",
        a: "Yes for lower and mid-altitude stays and gentle walks. High treks are better for older children with prior hill experience.",
      },
    ],
    relatedSlugs: ["himachal-pradesh", "sikkim"],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    region: "Eastern Himalaya",
    altitude: "300 – 8,586 m",
    bestSeason: "March – May, October – mid-December",
    image: sikkim,
    short:
      "Kanchenjunga views, rhododendron forests, and gompas on steep ridges.",
    intro:
      "Sikkim is compact, steep, and often cleaner than larger Himalayan states. It suits travellers who want Eastern Himalayan culture, rhododendron season, and high viewpoints without the scale of a multi-week Ladakh circuit. Spring and autumn are the preferred windows.",
    knownFor: ["Goecha La approaches", "Tsomgo", "Pelling views", "Yumthang"],
    months: [
      { month: "Jan", rating: "Possible", reason: "Cold; some high routes limited." },
      { month: "Feb", rating: "Possible", reason: "Winter; clear spells possible." },
      { month: "Mar", rating: "Good", reason: "Spring opening; rhododendrons begin." },
      { month: "Apr", rating: "Good", reason: "Peak spring colour in many valleys." },
      { month: "May", rating: "Good", reason: "Warm; pre-monsoon views." },
      { month: "Jun", rating: "Possible", reason: "Early monsoon influence." },
      { month: "Jul", rating: "Avoid", reason: "Monsoon; leeches and road risk." },
      { month: "Aug", rating: "Avoid", reason: "Monsoon peak." },
      { month: "Sep", rating: "Possible", reason: "Transition out of monsoon." },
      { month: "Oct", rating: "Good", reason: "Clear post-monsoon views." },
      { month: "Nov", rating: "Good", reason: "Cool, clear; popular window." },
      { month: "Dec", rating: "Possible", reason: "Cold; early winter limits some high roads." },
    ],
    gettingThere:
      "Bagdogra airport and New Jalpaiguri railhead serve Sikkim. From the plains it is a road climb to Gangtok and onward to west or north Sikkim. Permits apply for some restricted areas; travel inside the state is by road.",
    sampleRoute: {
      name: "East Sikkim highlights sample",
      duration: "7 days",
      groupSize: "Up to 6 travellers, 2 guides (sample)",
      days: [
        {
          day: "Day 1–2",
          title: "Gangtok base",
          body: "Arrive from Bagdogra/NJP. City and nearby viewpoints; logistics for restricted areas if needed.",
        },
        {
          day: "Day 3–4",
          title: "East / lake country",
          body: "Day trips toward high lakes and ridges when open and permitted.",
        },
        {
          day: "Day 5–6",
          title: "West Sikkim views",
          body: "Pelling side for Kanchenjunga views and gompa visits.",
        },
        {
          day: "Day 7",
          title: "Exit",
          body: "Descend toward the plains gateway.",
        },
      ],
    },
    whoFor:
      "Travellers who want Eastern Himalayan culture, compact geography, and big mountain views in a one-week frame.",
    whoNotFor:
      "People who only travel in peak monsoon, or who need long flat valley walks rather than steep ridge driving.",
    faqs: [
      {
        q: "Altitude in Sikkim — what should I expect?",
        a: "Gangtok is moderate; north and some east high points climb quickly. Ascend gradually and treat high lake days with the same caution as elsewhere.",
      },
      {
        q: "Permits?",
        a: "Several areas require permits, especially for foreign nationals and some north/east zones. We arrange what the itinerary needs.",
      },
      {
        q: "Ideal trip length?",
        a: "Six to eight days covers Gangtok plus west or a high day trip without rushing. North Sikkim extensions need more time and buffers.",
      },
      {
        q: "Roads?",
        a: "Steep, winding, monsoon-sensitive. Landslide delays happen. Build flexibility into plans.",
      },
      {
        q: "Family-friendly?",
        a: "Yes for Gangtok and west Sikkim style travel. High restricted zones are better for older children.",
      },
    ],
    relatedSlugs: ["ladakh", "uttarakhand"],
  },
  {
    slug: "kerala-western-ghats",
    name: "Kerala — Western Ghats",
    region: "South India",
    altitude: "900 – 2,695 m",
    bestSeason: "October – March",
    image: kerala,
    short:
      "Tea ridges in Munnar, shola forests, and spice-country trails near Thekkady.",
    intro:
      "The Western Ghats in Kerala are green, misty, and nothing like the high Himalaya. They suit travellers who want tea estates, wildlife edges, and cooler hill weather without extreme altitude. October to March is the most comfortable window.",
    knownFor: ["Munnar", "Eravikulam", "Periyar / Thekkady", "Vagamon"],
    months: [
      { month: "Jan", rating: "Good", reason: "Cool, dry; clear estate views." },
      { month: "Feb", rating: "Good", reason: "Pleasant hill weather." },
      { month: "Mar", rating: "Good", reason: "Warming but still workable." },
      { month: "Apr", rating: "Possible", reason: "Hotter; pre-monsoon haze." },
      { month: "May", rating: "Possible", reason: "Hot; early showers possible." },
      { month: "Jun", rating: "Possible", reason: "Monsoon begins; lush but wet." },
      { month: "Jul", rating: "Possible", reason: "Heavy rain; leeches on trails." },
      { month: "Aug", rating: "Possible", reason: "Monsoon continues." },
      { month: "Sep", rating: "Possible", reason: "Late monsoon / shoulder." },
      { month: "Oct", rating: "Good", reason: "Post-monsoon green; improving access." },
      { month: "Nov", rating: "Good", reason: "Comfortable hill season." },
      { month: "Dec", rating: "Good", reason: "Peak comfortable season." },
    ],
    gettingThere:
      "Cochin (Kochi) airport is the usual gateway for Munnar and much of the Kerala Ghats. Thekkady / Periyar is reached by road from Kochi or from Madurai side. Travel is by road through winding estate and forest highways; altitudes stay far below Himalayan extremes.",
    sampleRoute: {
      name: "Munnar–Thekkady sample",
      duration: "6 days",
      groupSize: "Up to 6 travellers, 2 guides (sample)",
      days: [
        {
          day: "Day 1–3",
          title: "Munnar estates",
          body: "Arrive via Kochi. Tea ridges, Eravikulam side if open, easy walks between estates.",
        },
        {
          day: "Day 4–5",
          title: "Thekkady / Periyar edge",
          body: "Move toward spice country and lake edge. Boat or border walks as permitted.",
        },
        {
          day: "Day 6",
          title: "Exit",
          body: "Return toward Kochi or onward south.",
        },
      ],
    },
    whoFor:
      "Travellers who want green hills, tea country, and wildlife edges without high-altitude logistics.",
    whoNotFor:
      "People seeking snow peaks, high passes, or desert Himalayan landscapes.",
    faqs: [
      {
        q: "Is altitude a concern in the Kerala Ghats?",
        a: "Generally no. Hill stations sit well below the altitudes that cause problems in Ladakh or Spiti. Still pace long drives and heat on the plains approaches.",
      },
      {
        q: "Permits?",
        a: "National park and sanctuary entries have their own tickets and rules. We include standard access for the places we visit.",
      },
      {
        q: "Ideal trip length?",
        a: "Five to seven days covers Munnar plus Thekkady without rushing. Add buffer if you want slower estate time.",
      },
      {
        q: "Roads in monsoon?",
        a: "Winding and wet. Landslip risk exists in heavy rain. Dry season is smoother for first-time drivers and families.",
      },
      {
        q: "Family-friendly?",
        a: "Yes. Lower altitude, shorter transfers than Himalayan circuits, and plenty of gentle estate walks.",
      },
    ],
    relatedSlugs: ["himachal-pradesh", "sikkim"],
    guideSlug: "munnar-vs-thekkady",
  },
];

export const guides: Guide[] = [
  {
    slug: "best-time-ladakh",
    title: "Best time to visit Ladakh, month by month",
    intro:
      "Ladakh’s usable window is short and altitude-driven. This guide summarises month-by-month conditions in plain terms so you can match dates to open passes and acclimatisation, not brochure slogans.",
    body: [
      "The practical season for most road circuits is roughly June through September. Earlier and later months can work for limited areas but carry more cold and closure risk.",
      "Always plan two easy days in Leh before high passes. Month choice does not remove the need to acclimatise.",
      "For a destination overview, sample pacing, and FAQs, see the full Ladakh trip planning page.",
    ],
    faqs: [
      {
        q: "Is May safe for a full Ladakh circuit?",
        a: "May is shoulder season. Some routes open; nights stay cold and weather can shift. Treat it as possible, not peak reliability.",
      },
      {
        q: "Is October still good?",
        a: "Early October can be clear and quiet; late October risks early winter closures. Build flexibility.",
      },
      {
        q: "Can I visit in winter?",
        a: "Limited winter travel exists around Leh, but most high circuits are closed. It is a different trip, not a discounted summer itinerary.",
      },
    ],
    destinationSlug: "ladakh",
  },
  {
    slug: "spiti-7-days",
    title: "Spiti Valley itinerary: 7 days",
    intro:
      "A seven-day Spiti outline only works if you accept altitude, long drives, and one buffer mindset. This is a sample structure — not a fixed departure — for travellers already comfortable with mountain roads.",
    body: [
      "Day 1–2: Reach a sensible staging point and sleep lower before the highest camps.",
      "Day 3–5: Core Spiti villages and monasteries at a pace that allows rest.",
      "Day 6–7: Exit with a weather buffer. Seven days is tight; eight is kinder.",
      "Pair this with the Himachal Pradesh destination page for season tables and who-it-suits notes.",
    ],
    faqs: [
      {
        q: "Is 7 days enough for Spiti?",
        a: "It is enough for a focused loop if roads cooperate. It is not enough if you want leisurely side valleys and zero stress about delays.",
      },
      {
        q: "Which direction is better?",
        a: "Depends on season and open passes. We choose direction when we know the travel month, not from a generic template.",
      },
      {
        q: "Do I need prior altitude experience?",
        a: "Helpful but not mandatory if you acclimatise and do not rush. Prior hill driving patience is more important than peak-bagging experience.",
      },
    ],
    destinationSlug: "himachal-pradesh",
  },
  {
    slug: "munnar-vs-thekkady",
    title: "Munnar vs Thekkady: which to pick",
    intro:
      "Munnar is tea-ridge and open views; Thekkady sits on the Periyar edge with spice country and lake access. Many travellers do both; if you must choose one, match it to pace and interest.",
    body: [
      "Choose Munnar if you want longer estate walks, cooler open ridges, and classic Kerala hill scenery.",
      "Choose Thekkady if wildlife edges, boat time, and spice-plantation stays matter more than endless tea views.",
      "Full region context sits on the Kerala Western Ghats destination page.",
    ],
    faqs: [
      {
        q: "Can I do both in five days?",
        a: "Yes if you accept two bases and some driving. Six days is more comfortable.",
      },
      {
        q: "Which is better in monsoon?",
        a: "Both are wet. Trails get leechy; roads slow down. Dry season is simpler for first visits.",
      },
      {
        q: "Which is better for families?",
        a: "Both work. Munnar edges out for easy ridge walks; Thekkady for a single memorable lake outing when available.",
      },
    ],
    destinationSlug: "kerala-western-ghats",
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

/** Legacy list kept for any remaining blog cards */
export const blogPosts = [
  {
    slug: "first-time-ladakh",
    number: "01",
    title: "Acclimatising in Leh without losing three days to a headache",
    excerpt: "The boring stuff — water, salt, sleep, and one trick most guidebooks skip.",
    readTime: "6 min read",
    tag: "Practical",
  },
  {
    slug: "spiti-in-winter",
    number: "02",
    title: "Driving the Spiti circuit in late October, before the passes close",
    excerpt: "A two-week loop from Shimla to Kaza and back, with where to stop and what to skip.",
    readTime: "11 min read",
    tag: "Itinerary",
  },
  {
    slug: "monastery-festivals",
    number: "03",
    title: "Six Himalayan monastery festivals worth planning a trip around",
    excerpt: "Cham dances at Hemis, the mask festivals of Tawang, and how to be a good guest.",
    readTime: "8 min read",
    tag: "Culture",
  },
  {
    slug: "munnar-monsoon",
    number: "04",
    title: "Why the Western Ghats are best in the shoulder months",
    excerpt: "Tea estates, leech socks, and the case for visiting Munnar in September.",
    readTime: "5 min read",
    tag: "Seasons",
  },
];
