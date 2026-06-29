import himachal from "@/assets/dest-himachal.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import uttarakhand from "@/assets/dest-uttarakhand.jpg";
import sikkim from "@/assets/dest-sikkim.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import shimla from "@/assets/dest-shimla.jpg";
import manali from "@/assets/dest-manali.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import kashmir from "@/assets/dest-kashmir.jpg";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  altitude: string;
  bestSeason: string;
  image: string;
  short: string;
  long: string;
  knownFor: string[];
};

export const destinations: Destination[] = [
  {
    slug: "ladakh",
    name: "Ladakh",
    region: "Trans-Himalaya, Union Territory",
    altitude: "3,500 – 5,360 m",
    bestSeason: "June – September",
    image: ladakh,
    short: "Cold desert valleys, monasteries above the treeline, and the highest motorable passes in the country.",
    long: "Ladakh sits in the rain shadow of the Greater Himalaya — bare ochre ridges, turquoise lakes like Pangong and Tso Moriri, and 700-year-old monasteries at Thiksey, Hemis and Lamayuru. Plan for two days of acclimatisation in Leh (3,500 m) before driving over Khardung La or out to Nubra.",
    knownFor: ["Pangong Tso", "Khardung La", "Hemis Festival", "Nubra dunes"],
  },
  {
    slug: "himachal",
    name: "Himachal Pradesh",
    region: "Western Himalaya",
    altitude: "900 – 4,500 m",
    bestSeason: "March – June, September – November",
    image: himachal,
    short: "Apple orchards in Kinnaur, river towns along the Beas, and quiet trails out of Spiti and Tirthan.",
    long: "From Kalpa's view of Kinnaur Kailash to the cedar forests of Jibhi and the wind-stripped plateaus of Spiti, Himachal is the most varied mountain state to travel in. Roads stay open year-round in the lower valleys; Spiti's Kunzum Pass closes from November.",
    knownFor: ["Kinnaur", "Spiti Valley", "Tirthan", "Bir-Billing"],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    region: "Central Himalaya",
    altitude: "1,500 – 7,800 m",
    bestSeason: "April – June, September – early November",
    image: uttarakhand,
    short: "Char Dham pilgrim trails, the Valley of Flowers, and high-altitude meadows above Munsiyari.",
    long: "Garhwal holds the four sacred shrines and the Nanda Devi sanctuary; Kumaon keeps the older British hill stations and the quieter trekking country around Pindari and Khaliya Top. The monsoon (July–August) brings the wildflower bloom but closes most upper routes.",
    knownFor: ["Valley of Flowers", "Kedarnath", "Auli", "Munsiyari"],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    region: "Eastern Himalaya",
    altitude: "300 – 8,586 m",
    bestSeason: "March – May, October – mid-December",
    image: sikkim,
    short: "Kanchenjunga views, rhododendron forests, and Buddhist gompas built into impossibly steep ridges.",
    long: "India's smallest Himalayan state is also its cleanest. Gangtok and Pelling for the postcard views of Kanchenjunga, Yuksom for the start of the Goecha La trek, and Lachen / Lachung in the north for Gurudongmar Lake and the Yumthang valley.",
    knownFor: ["Goecha La", "Tsomgo Lake", "Pemayangtse", "Yumthang Valley"],
  },
  {
    slug: "kerala",
    name: "Kerala — Western Ghats",
    region: "South India",
    altitude: "900 – 2,695 m",
    bestSeason: "October – March",
    image: kerala,
    short: "Tea-covered ridges in Munnar, shola forests in Eravikulam, and spice trails through Thekkady.",
    long: "The southern mountains feel nothing like the Himalaya. Misty tea estates roll for hours around Munnar, the Nilgiri tahr grazes above 2,000 m in Eravikulam, and the Periyar tiger reserve borders a lake you can quietly raft across at dawn.",
    knownFor: ["Munnar", "Anamudi Peak", "Periyar", "Vagamon"],
  },
  {
    slug: "shimla",
    name: "Shimla",
    region: "Himachal Pradesh • 2,276 m",
    altitude: "2,276 m",
    bestSeason: "March – June, December for snow",
    image: shimla,
    short: "A walkable colonial hill station on a forested ridge, well connected by the UNESCO-listed toy train.",
    long: "Shimla works as both a destination and a base — the Kalka–Shimla narrow-gauge railway is a half-day trip in itself, and from here you can push on to Narkanda, Mashobra and the apple country of Kotgarh within two hours.",
    knownFor: ["Mall Road", "Kalka–Shimla Railway", "Jakhoo Temple", "Kufri"],
  },
  {
    slug: "manali",
    name: "Manali",
    region: "Himachal Pradesh • 2,050 m",
    altitude: "2,050 m",
    bestSeason: "April – June, September – October",
    image: manali,
    short: "Old Manali's wooden Himachali houses, the Beas river through deodar pines, and the gateway to Lahaul.",
    long: "Skip Mall Road and base yourself in Old Manali or the villages around Naggar. From here it's a half-day drive over the Atal Tunnel into the lunar landscape of Lahaul, or a hard day's trek to Bhrigu Lake at 4,300 m.",
    knownFor: ["Solang Valley", "Atal Tunnel", "Hadimba Temple", "Bhrigu Lake"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan — Aravallis",
    region: "Western India",
    altitude: "300 – 1,722 m",
    bestSeason: "October – March",
    image: rajasthan,
    short: "The oldest fold mountains in India — Mount Abu, Kumbhalgarh ridges, and Jain temples cut into ochre rock.",
    long: "The Aravalli range runs the length of Rajasthan, peaking at Guru Shikhar (1,722 m) above Mount Abu — the state's only hill station and a cool counterpoint to the desert below. Add Kumbhalgarh's 36-km fort wall, the marble Dilwara temples, and the leopard country around Bera for a week that mixes mountains, heritage and wildlife.",
    knownFor: ["Mount Abu", "Guru Shikhar", "Kumbhalgarh", "Dilwara Temples"],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    region: "Northwest Himalaya",
    altitude: "1,600 – 5,142 m",
    bestSeason: "April – June, September – October",
    image: kashmir,
    short: "Dal Lake shikaras, alpine meadows of Gulmarg, and the Great Himalayan peaks rising above the Kashmir Valley.",
    long: "The Kashmir Valley sits between the Pir Panjal and the Great Himalaya — a 135-km bowl of walnut orchards, saffron fields, and houseboat-lined lakes. Srinagar is the anchor: Dal Lake at dawn, the old city markets, and the Mughal gardens of Shalimar and Nishat. From here, Gulmarg opens up to the world's second-highest cable car and snowbound meadows at 3,800 m, while Pahalgam sits at the mouth of the Amarnath pilgrimage route. Sonmarg, the 'meadow of gold', is the base for the Thajiwas Glacier trek and the high-altitude lakes of Vishansar and Krishansar.",
    knownFor: ["Dal Lake", "Gulmarg Gondola", "Pahalgam", "Sonmarg"],
  },
];

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
