import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { FeatureTiles } from "@/components/home/FeatureTiles";
import { BrandTiles } from "@/components/home/BrandTiles";
import { LinkColumns } from "@/components/home/LinkColumns";
import {
  womenBrandTiles,
  menBrandTiles,
  discoverBrands,
  womenCategories,
  menCategories,
} from "@/data/homepage";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <FeatureTiles />

      <BrandTiles
        heading="The biggest brands"
        tiles={womenBrandTiles}
        ctaLabel="SHOP WOMEN'S BRANDS"
        ctaHref="/women/brands"
      />
      <BrandTiles
        tiles={menBrandTiles}
        ctaLabel="SHOP MEN'S BRANDS"
        ctaHref="/men/brands"
      />

      <LinkColumns heading="Discover more from" links={discoverBrands} />
      <LinkColumns heading="Women's categories" links={womenCategories} />
      <LinkColumns heading="Men's categories" links={menCategories} />

      <div className="h-4" />
    </SiteShell>
  );
}
