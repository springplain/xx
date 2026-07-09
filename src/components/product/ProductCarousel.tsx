"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/data/products";

export function ProductCarousel({
  heading,
  subtitle,
  products,
  viewAllHref = "#",
}: {
  heading: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-[1400px] px-3 py-6 md:px-5 md:py-8">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-[22px] font-bold text-asos-black md:text-[26px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="mt-1 text-[13px] text-neutral-500">{subtitle}</p>
          )}
        </div>
        <a
          href={viewAllHref}
          className="border border-asos-black px-5 py-2 text-[13px] font-bold tracking-wide text-asos-black transition-colors hover:bg-asos-black hover:text-white"
        >
          VIEW ALL
        </a>
      </div>

      <div className="group relative">
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x gap-3 overflow-x-auto scroll-smooth"
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              className="w-[44%] shrink-0 snap-start sm:w-[23%] md:w-[19.5%] lg:w-[16%] xl:w-[15.5%]"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous"
          className="absolute left-1 top-[38%] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-neutral-100 md:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next"
          className="absolute right-1 top-[38%] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-neutral-100 md:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
