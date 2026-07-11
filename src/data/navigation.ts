export type SubNavItem = {
  label: string;
  href: string;
  highlight?: boolean;
};

// Women's secondary navigation bar
export const womenSubNav: SubNavItem[] = [
  { label: "Sale", href: "/women/sale", highlight: true },
  { label: "New in", href: "/women/new-in" },
  { label: "Clothing", href: "/women/clothing" },
  { label: "Trending", href: "/women/trending" },
  { label: "Dresses", href: "/women/dresses" },
  { label: "Shoes", href: "/women/shoes" },
  { label: "Accessories", href: "/women/accessories" },
  { label: "Brands", href: "/women/brands" },
  { label: "Face + Body", href: "/women/face-body" },
  { label: "Activewear", href: "/women/activewear" },
  { label: "Topshop", href: "/women/topshop" },
  { label: "Vintage", href: "/women/vintage" },
  { label: "Credit Card", href: "/credit-card" },
];

// Men's secondary navigation bar
export const menSubNav: SubNavItem[] = [
  { label: "Sale", href: "/men/sale", highlight: true },
  { label: "New in", href: "/men/new-in" },
  { label: "Clothing", href: "/men/clothing" },
  { label: "Trending", href: "/men/trending" },
  { label: "Shoes", href: "/men/shoes" },
  { label: "Accessories", href: "/men/accessories" },
  { label: "Brands", href: "/men/brands" },
  { label: "Face + Body", href: "/men/face-body" },
  { label: "Sportswear", href: "/men/sportswear" },
  { label: "Topman", href: "/men/topman" },
  { label: "Outlet", href: "/men/outlet" },
  { label: "Credit Card", href: "/credit-card" },
];

export type MegaMenuColumn = {
  title: string;
  links: { label: string; href: string; bold?: boolean }[];
};

// Mega menu contents keyed by subnav label
export const womenMegaMenus: Record<string, MegaMenuColumn[]> = {
  "New in": [
    {
      title: "New in",
      links: [
        { label: "View all", href: "/women/new-in", bold: true },
        { label: "New in: Today", href: "/women/new-in/today" },
        { label: "New in: Clothing", href: "/women/new-in/clothing" },
        { label: "New in: Shoes", href: "/women/new-in/shoes" },
        { label: "New in: Accessories", href: "/women/new-in/accessories" },
        { label: "New in: Face + Body", href: "/women/new-in/face-body" },
        { label: "New in: Brands", href: "/women/new-in/brands" },
      ],
    },
    {
      title: "The Edit",
      links: [
        { label: "Trending now", href: "/women/trending" },
        { label: "The drop", href: "/women/the-drop" },
        { label: "Back in stock", href: "/women/back-in-stock" },
        { label: "Your most hyped", href: "/women/most-hyped" },
        { label: "Summer shop", href: "/women/summer" },
      ],
    },
  ],
  Clothing: [
    {
      title: "Clothing",
      links: [
        { label: "View all clothing", href: "/women/clothing", bold: true },
        { label: "Dresses", href: "/women/dresses" },
        { label: "Tops", href: "/women/tops" },
        { label: "Coats & Jackets", href: "/women/coats-jackets" },
        { label: "Jeans", href: "/women/jeans" },
        { label: "Trousers & Leggings", href: "/women/trousers" },
        { label: "Skirts", href: "/women/skirts" },
        { label: "Shorts", href: "/women/shorts" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Co-ords", href: "/women/co-ords" },
        { label: "Hoodies & Sweatshirts", href: "/women/hoodies" },
        { label: "Jumpers & Cardigans", href: "/women/jumpers" },
        { label: "Loungewear", href: "/women/loungewear" },
        { label: "Lingerie & Nightwear", href: "/women/lingerie" },
        { label: "Swimwear & Beachwear", href: "/women/swimwear" },
        { label: "Suits & Separates", href: "/women/suits" },
      ],
    },
  ],
  Dresses: [
    {
      title: "Shop by style",
      links: [
        { label: "View all dresses", href: "/women/dresses", bold: true },
        { label: "Mini dresses", href: "/women/dresses/mini" },
        { label: "Midi dresses", href: "/women/dresses/midi" },
        { label: "Maxi dresses", href: "/women/dresses/maxi" },
        { label: "Going out dresses", href: "/women/dresses/going-out" },
        { label: "Summer dresses", href: "/women/dresses/summer" },
        { label: "Wedding guest", href: "/women/dresses/wedding-guest" },
      ],
    },
  ],
  Shoes: [
    {
      title: "Shop by product",
      links: [
        { label: "View all shoes", href: "/women/shoes", bold: true },
        { label: "Trainers", href: "/women/shoes/trainers" },
        { label: "Heels", href: "/women/shoes/heels" },
        { label: "Sandals", href: "/women/shoes/sandals" },
        { label: "Flat shoes", href: "/women/shoes/flat" },
        { label: "Boots", href: "/women/shoes/boots" },
        { label: "Loafers", href: "/women/shoes/loafers" },
      ],
    },
  ],
};

export const menMegaMenus: Record<string, MegaMenuColumn[]> = {
  "New in": [
    {
      title: "New in",
      links: [
        { label: "View all", href: "/men/new-in", bold: true },
        { label: "New in: Today", href: "/men/new-in/today" },
        { label: "New in: Clothing", href: "/men/new-in/clothing" },
        { label: "New in: Shoes", href: "/men/new-in/shoes" },
        { label: "New in: Accessories", href: "/men/new-in/accessories" },
        { label: "New in: Brands", href: "/men/new-in/brands" },
      ],
    },
  ],
  Clothing: [
    {
      title: "Clothing",
      links: [
        { label: "View all clothing", href: "/men/clothing", bold: true },
        { label: "T-Shirts & Vests", href: "/men/t-shirts" },
        { label: "Shirts", href: "/men/shirts" },
        { label: "Coats & Jackets", href: "/men/coats-jackets" },
        { label: "Jeans", href: "/men/jeans" },
        { label: "Trousers & Chinos", href: "/men/trousers" },
        { label: "Shorts", href: "/men/shorts" },
        { label: "Hoodies & Sweatshirts", href: "/men/hoodies" },
      ],
    },
  ],
};
