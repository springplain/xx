import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";
import { heroImage } from "@/data/homepage";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-200">
      <SiteImage
        src={heroImage}
        alt="DSOS - Style Each Moment"
        overlayLabel="DSOS"
        overlayPosition="hero"
        className="h-auto w-full object-cover"
      />

      {/* Overlay content */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-[6%] md:justify-center md:pb-0">
        <div className="pointer-events-auto flex flex-col items-center gap-4 md:mt-[14%]">
          <div className="flex gap-3">
            <Link
              href="/women"
              className="min-w-[150px] bg-white px-6 py-3 text-center text-[14px] font-bold tracking-wide text-asos-black transition-colors hover:bg-asos-black hover:text-white md:min-w-[170px]"
            >
              SHOP WOMENS
            </Link>
            <Link
              href="/men"
              className="min-w-[150px] bg-white px-6 py-3 text-center text-[14px] font-bold tracking-wide text-asos-black transition-colors hover:bg-asos-black hover:text-white md:min-w-[170px]"
            >
              SHOP MENS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
