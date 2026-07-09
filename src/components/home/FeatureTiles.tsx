import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";
import { featureTiles } from "@/data/homepage";

export function FeatureTiles() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4">
      {featureTiles.map((tile) => (
        <Link
          key={tile.alt}
          href={tile.href}
          className="tile-zoom group relative block overflow-hidden"
        >
          <SiteImage
            src={tile.image}
            alt={tile.alt}
            overlayLabel={tile.overlayLabel}
            overlayPosition={tile.overlayPosition}
            className="h-auto w-full object-cover"
          />
        </Link>
      ))}
    </section>
  );
}
