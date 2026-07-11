"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useStore } from "@/lib/store-context";
import { px, replaceAsos } from "@/lib/img";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { toggleWishlist, isWished, addToBag } = useStore();
  const wished = isWished(product.id);
  const hasSale = typeof product.salePrice === "number";

  return (
    <div className={cn("group flex flex-col", className)}>
      <div className="relative overflow-hidden bg-neutral-100">
        <Link href={`/product/${product.id}`} className="block">
          <img
            src={px(product.image)}
            alt={replaceAsos(product.name)}
            loading="lazy"
            className="aspect-[513/640] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={wished ? "Remove from saved" : "Save for later"}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-asos-black shadow-sm transition-transform hover:scale-110"
        >
          <Heart
            className={cn("h-4 w-4", wished && "fill-asos-sale text-asos-sale")}
            strokeWidth={2}
          />
        </button>
        <button
          type="button"
          onClick={() =>
            addToBag({
              id: product.id,
              brand: product.brand,
              name: product.name,
              price: product.salePrice ?? product.price,
              image: product.image,
            })
          }
          className="absolute inset-x-2 bottom-2 translate-y-3 bg-asos-black py-2.5 text-center text-[12px] font-bold uppercase tracking-wide text-white opacity-0 transition-all duration-200 hover:bg-neutral-700 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Add to bag
        </button>
      </div>
      <Link href={`/product/${product.id}`} className="mt-2 flex flex-col gap-0.5">
        <p className="line-clamp-2 text-[13px] leading-snug text-asos-black">
          <span className="font-bold">{product.brand}</span>{" "}
          {product.name.replace(new RegExp(`^${product.brand}\\s*`), "")}
        </p>
        <div className="mt-0.5 flex items-center gap-2">
          {hasSale ? (
            <>
              <span className="text-[13px] text-neutral-400 line-through">
                £{product.price.toFixed(2)}
              </span>
              <span className="text-[13px] font-bold text-asos-sale">
                £{product.salePrice!.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[13px] text-asos-black">
              £{product.price.toFixed(2)}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
