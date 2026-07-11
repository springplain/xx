import type { OverlayPosition } from "@/lib/image-types";

export type Tile = {
  title?: string;
  image: string;
  href: string;
  alt: string;
  overlayLabel?: string;
  overlayPosition?: OverlayPosition;
};

export const heroImage =
  "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2026/uk_unisex_summer_drop_2_hp_global_dt_2880x1280.jpg";

// Four proposition feature tiles
export const featureTiles: Tile[] = [
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-uk-brand-campaign/propositions/generic-hp_tiles_01.jpg",
    href: "/account",
    alt: "New here: Get your first-timer discount",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-uk-brand-campaign/propositions/generic-hp_tiles_02_v2.jpg",
    href: "/apps",
    alt: "Download our app for exclusive discounts and the latest drops",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-uk-brand-campaign/propositions/generic-hp_tiles_03.jpg",
    href: "/premier-delivery",
    alt: "Get unlimited next day delivery for a whole year with dsos Premier",
    overlayLabel: "DSOS Premier",
    overlayPosition: "cover-bottom",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-uk-brand-campaign/propositions/generic-hp_tiles_04.jpg",
    href: "/returns",
    alt: "Easy and fast returns",
  },
];

export const womenBrandTiles: Tile[] = [
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_02---v3.jpg",
    href: "/women/brands/adidas",
    alt: "adidas",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_04.jpg",
    href: "/women/brands/mango",
    alt: "mango",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_01v2.jpg",
    href: "/women/brands/dsos-design",
    alt: "dsos design",
    overlayLabel: "DSOS DESIGN",
    overlayPosition: "cover-brand",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_03.jpg",
    href: "/women/brands/topshop",
    alt: "topshop",
  },
];

export const menBrandTiles: Tile[] = [
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_02---v3.jpg",
    href: "/men/brands/adidas",
    alt: "adidas",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_01.jpg",
    href: "/men/brands/new-balance",
    alt: "new balance",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_03.jpg",
    href: "/men/brands/dsos-design",
    alt: "dsos design",
    overlayLabel: "DSOS DESIGN",
    overlayPosition: "cover-brand",
  },
  {
    image:
      "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_04.jpg",
    href: "/men/brands/topman",
    alt: "topman",
  },
];

export type LinkItem = { label: string; href: string };

export const discoverBrands: LinkItem[] = [
  { label: "adidas", href: "/women/brands/adidas" },
  { label: "AllSaints", href: "/women/brands/allsaints" },
  { label: "Barbour", href: "/women/brands/barbour" },
  { label: "Birkenstock", href: "/women/brands/birkenstock" },
  { label: "Calvin Klein", href: "/women/brands/calvin-klein" },
  { label: "Columbia", href: "/women/brands/columbia" },
  { label: "Converse", href: "/women/brands/converse" },
  { label: "Crocs", href: "/women/brands/crocs" },
  { label: "Dr Martens", href: "/women/brands/dr-martens" },
  { label: "Levi's", href: "/women/brands/levis" },
  { label: "New Balance", href: "/women/brands/new-balance" },
  { label: "Nike", href: "/women/brands/nike" },
  { label: "ON Running", href: "/women/brands/on-running" },
  { label: "Puma", href: "/women/brands/puma" },
  { label: "The INKEY List", href: "/women/brands/the-inkey-list" },
  { label: "The North Face", href: "/women/brands/the-north-face" },
  { label: "The Ordinary", href: "/women/brands/the-ordinary" },
  { label: "Timberland", href: "/women/brands/timberland" },
  { label: "Tommy Hilfiger", href: "/women/brands/tommy-hilfiger" },
  { label: "Glow Hub", href: "/women/brands/glow-hub" },
];

export const womenCategories: LinkItem[] = [
  { label: "Women's Bags & Purses", href: "/women/bags-purses" },
  { label: "Blouses", href: "/women/blouses" },
  { label: "Women's Coats & Jackets", href: "/women/coats-jackets" },
  { label: "Dresses", href: "/women/dresses" },
  { label: "Women's Gifts", href: "/women/gifts" },
  { label: "Women's Jeans", href: "/women/jeans" },
  { label: "Women's Jewellery", href: "/women/jewellery" },
  { label: "Women's Loungewear", href: "/women/loungewear" },
  { label: "Women's Partywear", href: "/women/partywear" },
  { label: "Women's Shirts", href: "/women/shirts" },
  { label: "Women's Shoes", href: "/women/shoes" },
  { label: "Women's Shorts", href: "/women/shorts" },
  { label: "Skirts", href: "/women/skirts" },
  { label: "Women's Sportswear", href: "/women/sportswear" },
  { label: "Women's Suits", href: "/women/suits" },
  { label: "Women's Swimwear", href: "/women/swimwear" },
  { label: "Women's Tops", href: "/women/tops" },
  { label: "Women's Trousers", href: "/women/trousers" },
  { label: "Women's Watches", href: "/women/watches" },
  { label: "Women's Workwear", href: "/women/workwear" },
];

export const menCategories: LinkItem[] = [
  { label: "Men's Accessories", href: "/men/accessories" },
  { label: "Men's Bags", href: "/men/bags" },
  { label: "Men's Coats & Jackets", href: "/men/coats-jackets" },
  { label: "Men's Co-ords", href: "/men/co-ords" },
  { label: "Gifts for Men", href: "/men/gifts" },
  { label: "Men's Jeans", href: "/men/jeans" },
  { label: "Men's Jewellery", href: "/men/jewellery" },
  { label: "Men's Loungewear", href: "/men/loungewear" },
  { label: "Men's Partywear", href: "/men/partywear" },
  { label: "Men's Plus-Size Clothing", href: "/men/plus-size" },
  { label: "Men's Polo Shirts", href: "/men/polo-shirts" },
  { label: "Men's Shirts", href: "/men/shirts" },
  { label: "Men's Shorts", href: "/men/shorts" },
  { label: "Men's Suits", href: "/men/suits" },
  { label: "Men's Swimwear", href: "/men/swimwear" },
  { label: "Men's Tall Clothing", href: "/men/tall" },
  { label: "Men's Tracksuits", href: "/men/tracksuits" },
  { label: "Men's Underwear", href: "/men/underwear" },
  { label: "Men's Watches", href: "/men/watches" },
  { label: "Men's Workwear", href: "/men/workwear" },
];
