import Link from "next/link";

export function PromoBanner() {
  return (
    <div className="bg-asos-black text-white">
      <div className="flex items-center justify-between gap-3 px-3 py-2.5 md:px-6 md:py-3">
        <Link
          href="/women"
          className="hidden shrink-0 border border-white px-6 py-2 text-[13px] font-bold tracking-wide transition-colors hover:bg-white hover:text-asos-black sm:block md:px-9"
        >
          WOMEN
        </Link>

        <p className="flex-1 text-center text-[13px] font-bold leading-tight md:text-[15px]">
          New here? Get 15% off + Free Next Day Delivery on your first order
          <br className="hidden sm:block" /> with code NEWHERE*
        </p>

        <Link
          href="/men"
          className="hidden shrink-0 border border-white px-6 py-2 text-[13px] font-bold tracking-wide transition-colors hover:bg-white hover:text-asos-black sm:block md:px-9"
        >
          MEN
        </Link>
      </div>
    </div>
  );
}
