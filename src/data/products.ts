export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  colour?: string;
};

const img = (path: string) =>
  `https://images.asos-media.com/products/${path}?$n_640w$&wid=513&fit=constrain`;

export const saleProducts: Product[] = [
  {
    id: "209975175",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN scoop neck linen vest in stone",
    price: 20,
    salePrice: 8,
    image: img("asos-design-scoop-neck-linen-vest-in-stone/209975175-1-stone"),
  },
  {
    id: "209927982",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN tape yarn knitted tank & shorts co-ord in green",
    price: 58,
    salePrice: 21.7,
    image: img(
      "asos-design-tape-yarn-knitted-tank-shorts-co-ord-in-green/209927982-2",
    ),
  },
  {
    id: "210469427",
    brand: "New Look",
    name: "New Look lace detail satin midi dress in brown stripe",
    price: 36,
    salePrice: 14.4,
    image: img(
      "new-look-lace-detail-satin-midi-dress-in-brown-stripe/210469427-1-brown",
    ),
  },
  {
    id: "209772889",
    brand: "Topshop",
    name: "Topshop Eve woven flat sandal in black",
    price: 36,
    salePrice: 12.99,
    image: img("topshop-eve-woven-flat-sandal-in-black/209772889-1-black"),
  },
  {
    id: "210777991",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN micro runner shorts in pink stripe co ord",
    price: 22,
    salePrice: 8.8,
    image: img(
      "asos-design-micro-runner-shorts-in-pink-stripe-co-ord/210777991-1-pinkstripe",
    ),
  },
  {
    id: "210735812",
    brand: "Cheap Monday",
    name: "Cheap Monday Booty Bei denim hotpant shorts in indigo blue rinse",
    price: 25,
    salePrice: 5.99,
    image: img(
      "cheap-monday-booty-bei-denim-hotpant-shorts-in-indigo-blue-rinse/210735812-1-bluerinse",
    ),
  },
  {
    id: "210691175",
    brand: "Gina Tricot",
    name: "Gina Tricot halterneck tie top in dark chocolate brown",
    price: 28,
    salePrice: 5.49,
    image: img(
      "gina-tricot-halterneck-tie-top-in-dark-chocolate-brown/210691175-1-darkbrown",
    ),
  },
  {
    id: "210556342",
    brand: "Topshop",
    name: "Topshop denim Editor short in indigo rinse",
    price: 36,
    salePrice: 13.99,
    image: img("topshop-denim-editor-short-in-indigo-rinse/210556342-1-midblue"),
  },
  {
    id: "210035683",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN Tamara cut out studded wedges in pale gold",
    price: 38,
    salePrice: 9.49,
    image: img(
      "asos-design-tamara-cut-out-studded-wedges-in-pale-gold/210035683-1-palegold",
    ),
  },
  {
    id: "210501730",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN crop wide leg jeans in black",
    price: 42,
    salePrice: 14.99,
    image: img("asos-design-crop-wide-leg-jeans-in-black/210501730-1-black"),
  },
  {
    id: "209838325",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN Foster clog mule sandal in black",
    price: 28,
    salePrice: 11.2,
    image: img("asos-design-foster-clog-mule-sandal-in-black/209838325-1-blackpu"),
  },
  {
    id: "210539229",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN scoop neck vest with iconic slogan in ditsy print",
    price: 20,
    salePrice: 5,
    image: img(
      "asos-design-scoop-neck-vest-with-iconic-slogan-in-ditsy-print/210539229-1-ditsyprint",
    ),
  },
];

export const shoeProducts: Product[] = [
  {
    id: "209704715",
    brand: "Nike",
    name: "Nike Air Rift Satin Ballet trainers in Pink",
    price: 119.99,
    image: img("nike-air-rift-satin-ballet-trainers-in-pink/209704715-1-pink"),
  },
  {
    id: "209662600",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN Leah mary jane ballets in sand suedette",
    price: 20,
    image: img(
      "asos-design-leah-mary-jane-ballets-in-sand-suedette/209662600-1-sandsuedette",
    ),
  },
  {
    id: "210197954",
    brand: "Clarks Originals",
    name: "Clarks Originals Meare Cross sandals in black suede",
    price: 95,
    image: img(
      "clarks-originals-meare-cross-sandals-in-black-suede/210197954-1-blacksuede",
    ),
  },
  {
    id: "210007750",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN Tessa wedge with oversized studs in chocolate croc",
    price: 40,
    image: img(
      "asos-design-tessa-wedge-with-oversized-studs-in-chocolate-croc/210007750-1-choc",
    ),
  },
  {
    id: "209975175b",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN scoop neck linen vest in stone",
    price: 20,
    image: img("asos-design-scoop-neck-linen-vest-in-stone/209975175-1-stone"),
  },
  {
    id: "210469427b",
    brand: "New Look",
    name: "New Look lace detail satin midi dress in brown stripe",
    price: 36,
    image: img(
      "new-look-lace-detail-satin-midi-dress-in-brown-stripe/210469427-1-brown",
    ),
  },
];

export type CatTile = {
  label: string;
  image: string;
  href: string;
};

// Trending category tray (women)
export const trendingTiles: CatTile[] = [
  {
    label: "Summer staples",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/trending/155476131-1.jpg",
    href: "/women/summer",
  },
  {
    label: "Swim",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/trending/156472613-1.jpg",
    href: "/women/swimwear",
  },
  {
    label: "Co-ords",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/trending/157890919-1.jpg",
    href: "/women/co-ords",
  },
  {
    label: "Sundresses",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/trending/154675049-1.jpg",
    href: "/women/dresses/summer",
  },
  {
    label: "Gingham",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/trending/155317148-1.jpg",
    href: "/women/gingham",
  },
  {
    label: "Party",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/trending/156252432-1.jpg",
    href: "/women/dresses/party",
  },
];

// New in category tray (women)
export const newInTiles: CatTile[] = [
  {
    label: "The latest drops",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/cat-tray/157497949-1.jpg",
    href: "/women/new-in",
  },
  {
    label: "Arrange",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/cat-tray/arrange.jpg",
    href: "/women/brands/arrange",
  },
  {
    label: "Dresses",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/cat-tray/155471769---v2.jpg",
    href: "/women/dresses",
  },
  {
    label: "Your most hyped",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/cat-tray/2026_homepage_ymh_ww_870x1110.jpg",
    href: "/women/most-hyped",
  },
  {
    label: "Summer shop",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/cat-tray/156576682-1.jpg",
    href: "/women/summer",
  },
  {
    label: "Face + Body: Gisou",
    image:
      "https://content.asos-media.com/-/media/homepages/ww/2026/july/06-uk-hp/cat-tray/gisou-image-4-1.jpg",
    href: "/women/face-body",
  },
];

export const womenSaleHero =
  "https://content.asos-media.com/-/media/homepages/unisex/events-2026/june/sale/furthers/uk-au-apac-mena-row/mon19-salehero-desktop-uk-furthers-2880-x-336.jpg";

export const menSaleHero = womenSaleHero;

export const menSaleProducts: Product[] = [
  {
    id: "208841916",
    brand: "DSOS COLLECTIVE",
    name: "DSOS COLLECTIVE heavyweight t-shirt in black",
    price: 18,
    salePrice: 7.2,
    image: img("asos-collective-heavyweight-t-shirt-in-black/208841916-1-black"),
  },
  {
    id: "209997013",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN Premium SUPIMA cotton regular fit polo in light green",
    price: 22,
    salePrice: 8.8,
    image: img(
      "asos-design-premium-supima-cotton-regular-fit-polo-in-light-green/209997013-1-pigeon",
    ),
  },
  {
    id: "209958626",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN Essentials regular fit polo in brown pique",
    price: 14,
    salePrice: 5.6,
    image: img(
      "asos-design-essentials-regular-fit-polo-in-brown-pique/209958626-1-sepiatint",
    ),
  },
  {
    id: "209702819",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN boxy oversized linen look stripe shirt in dark green",
    price: 25,
    salePrice: 6.25,
    image: img(
      "asos-design-boxy-oversized-linen-look-stripe-shirt-in-dark-green/209702819-1-darkgreen",
    ),
  },
  {
    id: "209718136",
    brand: "Nike",
    name: "Nike Club knit shorts in green",
    price: 37.99,
    salePrice: 15.19,
    image: img("nike-club-knit-shorts-in-green/209718136-1-midgreen"),
  },
  {
    id: "210456472",
    brand: "JJ Rebel",
    name: "JJ Rebel textured shorts in beige",
    price: 18,
    salePrice: 6.99,
    image: img("jj-rebel-textured-shorts-in-beige/210456472-1-moonbeam"),
  },
  {
    id: "209726239",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN co-ord textured mid length shorts in sage green",
    price: 28,
    salePrice: 11.2,
    image: img(
      "asos-design-co-ord-textured-mid-length-shorts-in-sage-green/209726239-1-sagegreen",
    ),
  },
  {
    id: "210146079",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN textured bermuda denim jorts in ecru",
    price: 32,
    salePrice: 9.6,
    image: img("asos-design-textured-bermunda-denim-jorts-in-ecru/210146079-1-ecru"),
  },
  {
    id: "210066976",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN flip flops with grosgrain strap in black",
    price: 16,
    salePrice: 6.4,
    image: img(
      "asos-design-flip-flops-with-grosgrain-strap-in-black/210066976-1-black",
    ),
  },
  {
    id: "210492610",
    brand: "True Religion",
    name: "True Religion Ricky Super T straight jeans in rinse indigo",
    price: 189,
    salePrice: 66.15,
    image: img(
      "true-religion-ricky-super-t-straight-jeans-in-rinse-indigo/210492610-1-indigo",
    ),
  },
  {
    id: "210490963",
    brand: "GAP",
    name: "GAP 5 pocket straight fit city stretch jeans in beige",
    price: 50,
    salePrice: 12.99,
    image: img("gap-5-pocket-straight-fit-city-stretch-jeans-in-beige/210490963-1-blue"),
  },
  {
    id: "210063540",
    brand: "DSOS DESIGN",
    name: "DSOS DESIGN heavyweight oversized tank with chest graphic in white",
    price: 18,
    salePrice: 7.2,
    image: img(
      "asos-design-heavyweight-oversized-tank-with-chest-graphic-in-white-textured-fabric/210063540-1-white",
    ),
  },
];

export const menShopSummerTiles: CatTile[] = [
  {
    label: "Summer shop",
    image:
      "https://content.asos-media.com/-/media/homepages/mw/2026/june/29-uk-hp/missions/summer-essentials.jpg",
    href: "/men/summer",
  },
  {
    label: "Courtside edit",
    image:
      "https://content.asos-media.com/-/media/homepages/mw/2026/june/29-uk-hp/missions/tennis.jpg",
    href: "/men/trending",
  },
  {
    label: "Shoes",
    image:
      "https://content.asos-media.com/-/media/homepages/mw/2026/june/29-uk-hp/missions/shoes.jpg",
    href: "/men/shoes",
  },
  {
    label: "Basics under £30",
    image:
      "https://content.asos-media.com/-/media/homepages/mw/2026/june/29-uk-hp/missions/basics.jpg",
    href: "/men/clothing",
  },
];

export const menNewInTiles: CatTile[] = [
  {
    label: "The latest drops",
    image:
      "https://content.asos-media.com/-/media/homepages/mw/2026/july/06-uk-hp/cat-tray/154757306-1.jpg",
    href: "/men/new-in",
  },
  {
    label: "Match-day ready",
    image:
      "https://content.asos-media.com/-/media/homepages/mw/2026/june/29-uk-hp/cat-tray/152628351.jpg",
    href: "/men/trending",
  },
  {
    label: "Your most hyped",
    image:
      "https://content.asos-media.com/-/media/homepages/mw/2026/july/06-uk-hp/cat-tray/2026_homepage_ymh_mw_870x1110.jpg",
    href: "/men/most-hyped",
  },
  {
    label: "Summer shop",
    image:
      "https://content.asos-media.com/-/media/homepages/mw/2026/july/06-uk-hp/cat-tray/156762131-1.jpg",
    href: "/men/summer",
  },
];

export function getAllProducts(): Product[] {
  return [...saleProducts, ...shoeProducts, ...menSaleProducts];
}

export function getProductById(id: string): Product | undefined {
  const base = id.replace(/-x\d+$/, "");
  return getAllProducts().find((p) => p.id === base);
}

// Build a fuller product pool for listing pages
export function getListingProducts(gender: "women" | "men"): Product[] {
  const base = gender === "men" ? menSaleProducts : [...saleProducts, ...shoeProducts];
  // Duplicate with fresh ids to fill out a grid
  const extra = base.map((p, i) => ({
    ...p,
    id: `${p.id}-x${i}`,
    salePrice: undefined,
    price: p.salePrice ?? p.price,
  }));
  return [...base, ...extra];
}

export const topMenCategories: string[] = [
  "Men's Cargo Trousers",
  "Men's Linen Trousers",
  "Men's Wide Leg Jeans",
  "Men's Straight Leg Jeans",
  "Men's Oversized T-Shirts",
  "Men's Polo Shirts",
  "Men's Linen Shirts",
  "Men's Denim Shorts",
  "Men's Chino Shorts",
  "Men's Swim Shorts",
  "Men's White Trainers",
  "Men's Black Trainers",
  "Men's Sandals",
  "Men's Espadrilles",
  "Men's Sunglasses",
  "Men's Caps",
  "Men's Crossbody Bags",
  "Men's Silver Jewellery",
  "Men's Aftershave",
  "Men's Grooming",
];

// Top women's categories (footer-style link cloud on women page)
export const topWomenCategories: string[][] = [
  [
    "Wedding Guest Dresses",
    "Prom Dresses",
    "Boho Dresses",
    "Floral Dresses",
    "Linen Dresses",
    "White Midi Dresses",
    "Women's Straight Leg Jeans",
    "Women's Wide Leg Jeans",
    "Women's Linen Trousers",
    "Women's Wide Leg Trousers",
  ],
  [
    "Women's Denim Shorts",
    "Denim Skirts",
    "Women's Airport Outfits",
    "Bikinis",
    "White Bikini Tops",
    "Cut Out Swimming Costumes",
    "White Crop Tops",
    "Halter Neck Tops",
    "Women's Denim Jackets",
    "Women's Trench Coats",
  ],
  [
    "Women's Black Flat Sandals",
    "Women's Brown Sandals",
    "Black Slingback Heels",
    "Ankle Strap Heels",
    "Brown Cowboy Boots",
    "Women's Red Trainers",
    "Women's Pink Trainers",
    "Women's Beige Trainers",
    "Women's Blue Trainers",
    "Women's Flat Work Shoes",
  ],
  [
    "Women's Black Caps",
    "Women's Black Sunglasses",
    "Women's Backpacks",
    "Women's Brown Bags",
    "Women's Travel Bags",
    "Women's Travel Sized Toiletries",
    "Vanilla Perfumes",
    "Korean Skincare",
    "Festival Makeup & Hair Accessories",
    "Women's Styling Tips",
  ],
];
