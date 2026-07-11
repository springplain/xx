import { SiteShell } from "@/components/layout/SiteShell";
import { SaleBanner } from "@/components/home/SaleBanner";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { CategoryTray } from "@/components/product/CategoryTray";
import { BrandLogos } from "@/components/home/BrandLogos";
import {
  saleProducts,
  shoeProducts,
  trendingTiles,
  newInTiles,
  womenSaleHero,
  topWomenCategories,
} from "@/data/products";

const description =
  "Your one-stop destination for fashion-forward 'fits, DSOS serves up the hottest womenswear and accessories – so you can feel your best, whatever you're into. Resident style icon DSOS DESIGN drops collections for every occasion (and aesthetic), from smart-casj throw-on-and-go styles to head-turning 'fits for dialled-up drama. Looking for statement pieces to elevate your off-duty look szn to szn? On-trend trousers, tops, footwear and accessories in must-have cuts and colourways await. Next stop: checkout.";

export default function WomenPage() {
  return (
    <SiteShell gender="women" showSubNav>
      <SaleBanner
        image={womenSaleHero}
        href="/women/sale"
        alt="Sale up to 70% off - Shop all"
        overlayLabel="DSOS"
        overlayPosition="cover-bottom"
      />

      <ProductCarousel
        heading="Sale: biggest deals"
        subtitle="Limited time only. Selected styles marked down as shown."
        products={saleProducts}
        viewAllHref="/women/sale"
      />

      <CategoryTray heading="Trending" tiles={trendingTiles} />

      <CategoryTray
        heading="New in"
        tiles={newInTiles}
        viewAllHref="/women/new-in"
      />

      <ProductCarousel
        heading="In demand: shoes + trainers"
        products={shoeProducts}
        viewAllHref="/women/shoes"
      />

      <BrandLogos />

      {/* Top categories */}
      <section className="mx-auto max-w-[1180px] px-4 py-6 md:py-8">
        <h2 className="mb-6 text-[22px] font-bold text-asos-black md:text-[26px]">
          Top women's categories
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
          {topWomenCategories.flat().map((label) => (
            <a
              key={label}
              href="#"
              className="text-[14px] leading-snug text-neutral-700 transition-colors hover:text-asos-black hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* SEO description */}
      <section className="mx-auto max-w-[860px] px-4 pb-10 pt-2 text-center">
        <p className="text-[14px] italic leading-relaxed text-neutral-500">
          {description}
        </p>
      </section>
    </SiteShell>
  );
}
