"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Heart, Truck, RotateCcw } from "lucide-react";
import { useStore } from "@/lib/store-context";
import { px, replaceAsos } from "@/lib/img";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export function ProductDetail({ product }: { product: Product }) {
  const { addToBag, toggleWishlist, isWished } = useStore();
  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const wished = isWished(product.id);
  const hasSale = typeof product.salePrice === "number";
  const price = product.salePrice ?? product.price;

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    addToBag({
      id: `${product.id}-${size}`,
      brand: product.brand,
      name: product.name,
      price,
      image: product.image,
      size,
    });
  };

  return (
    <div className="mx-auto max-w-[1100px] px-3 py-5 md:px-5">
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-[12px] text-neutral-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-asos-black">{product.brand}</span>
      </nav>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {/* Image */}
        <div className="bg-neutral-100">
          <img
            src={px(product.image)}
            alt={replaceAsos(product.name)}
            className="aspect-[513/640] w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:pt-2">
          <p className="text-[16px] font-bold text-asos-black">{product.brand}</p>
          <h1 className="mt-1 text-[18px] leading-snug text-neutral-700">
            {product.name.replace(new RegExp(`^${product.brand}\\s*`), "")}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            {hasSale ? (
              <>
                <span className="text-[20px] font-bold text-asos-sale">
                  £{price.toFixed(2)}
                </span>
                <span className="text-[15px] text-neutral-400 line-through">
                  £{product.price.toFixed(2)}
                </span>
                <span className="bg-asos-sale px-2 py-0.5 text-[12px] font-bold text-white">
                  SALE
                </span>
              </>
            ) : (
              <span className="text-[20px] font-bold text-asos-black">
                £{price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Size selector */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[13px] font-bold text-asos-black">Size</span>
              <button type="button" className="text-[13px] text-neutral-500 underline">
                Size guide
              </button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSize(s);
                    setError(false);
                  }}
                  className={cn(
                    "border py-2.5 text-[13px] font-medium transition-colors",
                    size === s
                      ? "border-asos-black bg-asos-black text-white"
                      : "border-black/20 text-asos-black hover:border-asos-black",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && (
              <p className="mt-2 text-[13px] font-medium text-asos-sale">
                Please select a size
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-asos-black py-3.5 text-[14px] font-bold tracking-wide text-white transition-colors hover:bg-neutral-700"
            >
              ADD TO BAG
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-label="Save"
              className="flex w-14 items-center justify-center border border-black/20 transition-colors hover:border-asos-black"
            >
              <Heart
                className={cn("h-5 w-5", wished && "fill-asos-sale text-asos-sale")}
              />
            </button>
          </div>

          {/* Delivery info */}
          <div className="mt-6 space-y-3 border-t border-black/10 pt-6">
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 h-5 w-5 text-asos-black" strokeWidth={1.5} />
              <div>
                <p className="text-[13px] font-bold text-asos-black">
                  Free Standard Delivery
                </p>
                <p className="text-[12px] text-neutral-500">
                  On orders over £35 (Ts&amp;Cs apply)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="mt-0.5 h-5 w-5 text-asos-black" strokeWidth={1.5} />
              <div>
                <p className="text-[13px] font-bold text-asos-black">
                  Free returns
                </p>
                <p className="text-[12px] text-neutral-500">
                  Return within 28 days of purchase
                </p>
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="mt-6 border-t border-black/10 pt-6">
            <h3 className="mb-2 text-[14px] font-bold text-asos-black">
              Product Details
            </h3>
            <ul className="list-disc space-y-1 pl-4 text-[13px] text-neutral-600">
              <li>Part of the {product.brand} collection</li>
              <li>Regular fit</li>
              <li>Machine wash</li>
              <li>Model wears UK M / EU M / US M and is 188cm/6'2" tall</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
