import Link from "next/link";
import type { Tile } from "@/data/homepage";
import { SiteImage } from "@/components/SiteImage";

export function BrandTiles({
  heading,
  tiles,
  ctaLabel,
  ctaHref,
}: {
  heading?: string;
  tiles: Tile[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="mx-auto max-w-[1180px] px-3 py-6 md:px-4 md:py-8">
      {heading && (
        <h2 className="mb-6 text-center text-[26px] font-bold text-asos-black md:mb-8 md:text-[34px]">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 md:gap-2">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="tile-zoom group relative block overflow-hidden bg-neutral-100"
            aria-label={tile.alt}
          >
            <SiteImage
              src={tile.image}
              alt={tile.alt}
              overlayLabel={tile.overlayLabel}
              overlayPosition={tile.overlayPosition ?? "cover-bottom"}
              className="h-auto w-full object-cover"
            />
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-center md:mt-8">
        <Link
          href={ctaHref}
          className="border border-asos-black px-10 py-3.5 text-center text-[14px] font-bold leading-tight tracking-wide text-asos-black transition-colors hover:bg-asos-black hover:text-white"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
