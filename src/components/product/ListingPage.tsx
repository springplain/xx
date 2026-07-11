"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, SlidersHorizontal, ChevronDown } from "lucide-react";
import { ProductGrid } from "./ProductGrid";
import type { Product } from "@/data/products";

const sortOptions = [
  "Recommended",
  "What's new",
  "Price - low to high",
  "Price - high to low",
];

export function ListingPage({
  gender,
  title,
  products,
}: {
  gender: "women" | "men";
  title: string;
  products: Product[];
}) {
  const [sort, setSort] = useState(sortOptions[0]);
  const [sortOpen, setSortOpen] = useState(false);

  const sorted = useMemo(() => {
    const arr = [...products];
    if (sort === "Price - low to high") {
      arr.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
    } else if (sort === "Price - high to low") {
      arr.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
    }
    return arr;
  }, [products, sort]);

  return (
    <div className="mx-auto max-w-[1400px] px-3 py-5 md:px-5">
      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-1 text-[12px] text-neutral-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href={`/${gender}`} className="capitalize hover:underline">
          {gender}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-asos-black">{title}</span>
      </nav>

      <div className="mb-5 flex flex-col gap-4 border-b border-black/10 pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-[24px] font-bold uppercase tracking-wide text-asos-black md:text-[28px]">
            {title}
          </h1>
          <p className="mt-1 text-[13px] text-neutral-500">
            {sorted.length} styles found
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 border border-black/15 px-4 py-2.5 text-[13px] font-bold text-asos-black transition-colors hover:border-asos-black"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((o) => !o)}
              className="flex min-w-[190px] items-center justify-between gap-2 border border-black/15 px-4 py-2.5 text-[13px] font-bold text-asos-black transition-colors hover:border-asos-black"
            >
              <span>
                <span className="font-normal text-neutral-500">Sort: </span>
                {sort}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full z-30 mt-1 w-full border border-black/10 bg-white shadow-lg">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSort(opt);
                      setSortOpen(false);
                    }}
                    className="block w-full px-4 py-2.5 text-left text-[13px] text-asos-black hover:bg-neutral-100"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ProductGrid products={sorted} />

      <div className="mt-10 flex flex-col items-center gap-3">
        <p className="text-[13px] text-neutral-500">
          You've viewed {sorted.length} of {sorted.length} products
        </p>
        <button
          type="button"
          className="border border-asos-black px-10 py-3 text-[13px] font-bold tracking-wide text-asos-black transition-colors hover:bg-asos-black hover:text-white"
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}
