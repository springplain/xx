import { SiteImage } from "@/components/SiteImage";
import type { CatTile } from "@/data/products";

export function CategoryTray({
  heading,
  tiles,
  viewAllHref,
}: {
  heading: string;
  tiles: CatTile[];
  viewAllHref?: string;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-3 py-6 md:px-5 md:py-8">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-[22px] font-bold text-asos-black md:text-[26px]">
          {heading}
        </h2>
        {viewAllHref && (
          <a
            href={viewAllHref}
            className="border border-asos-black px-5 py-2 text-[13px] font-bold tracking-wide text-asos-black transition-colors hover:bg-asos-black hover:text-white"
          >
            VIEW ALL
          </a>
        )}
      </div>

      <div className="no-scrollbar flex gap-2 overflow-x-auto md:gap-3">
        {tiles.map((tile) => (
          <a
            key={tile.label}
            href={tile.href}
            className="tile-zoom group relative block w-[42%] shrink-0 overflow-hidden bg-neutral-100 sm:w-[23%] md:w-[16.2%]"
          >
            <SiteImage
              src={tile.image}
              alt={tile.label}
              loading="lazy"
              className="aspect-[87/111] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
              <span className="text-[15px] font-bold text-white">
                {tile.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
