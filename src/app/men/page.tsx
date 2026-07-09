import { SiteShell } from "@/components/layout/SiteShell";
import { SaleBanner } from "@/components/home/SaleBanner";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { CategoryTray } from "@/components/product/CategoryTray";
import { BrandLogos } from "@/components/home/BrandLogos";
import {
  menSaleProducts,
  menShopSummerTiles,
  menNewInTiles,
  menSaleHero,
  topMenCategories,
} from "@/data/products";

const description =
  "From wardrobe staples to statement pieces, DSOS has menswear on lock. Shop DSOS DESIGN for everyday essentials and elevated 'fits, then stock up on the biggest brands – think Nike, adidas, New Balance and The North Face. Whether you're after sharp tailoring, off-duty basics or the latest trainers, we've got the styles to see you through every season. Next stop: checkout.";

export default function MenPage() {
  return (
    <SiteShell gender="men" showSubNav>
      <SaleBanner
        image={menSaleHero}
        href="/men/sale"
        alt="Sale up to 70% off - Shop all"
        overlayLabel="DSOS"
        overlayPosition="cover-bottom"
      />

      <ProductCarousel
        heading="Sale: biggest deals"
        subtitle="Limited time only. Selected styles marked down as shown."
        products={menSaleProducts}
        viewAllHref="/men/sale"
      />

      <CategoryTray heading="Shop summer" tiles={menShopSummerTiles} />

      <CategoryTray
        heading="New in"
        tiles={menNewInTiles}
        viewAllHref="/men/new-in"
      />

      <BrandLogos heading="Shop by brand" />

      <section className="mx-auto max-w-[1180px] px-4 py-6 md:py-8">
        <h2 className="mb-6 text-[22px] font-bold text-asos-black md:text-[26px]">
          Top men's categories
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
          {topMenCategories.map((label) => (
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

      <section className="mx-auto max-w-[860px] px-4 pb-10 pt-2 text-center">
        <p className="text-[14px] italic leading-relaxed text-neutral-500">
          {description}
        </p>
      </section>
    </SiteShell>
  );
}
