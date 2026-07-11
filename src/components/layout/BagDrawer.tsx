"use client";

import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store-context";
import { replaceAsos, px } from "@/lib/img";
import { cn } from "@/lib/utils";

export function BagDrawer() {
  const { bag, bagOpen, setBagOpen, bagTotal, bagCount, updateQty, removeFromBag } =
    useStore();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300",
          bagOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setBagOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300",
          bagOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <h2 className="text-[18px] font-bold text-asos-black">
            My Bag {bagCount > 0 && `(${bagCount})`}
          </h2>
          <button
            type="button"
            onClick={() => setBagOpen(false)}
            aria-label="Close bag"
            className="rounded-full p-1 hover:bg-neutral-100"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>

        {bag.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-14 w-14 text-neutral-300" strokeWidth={1} />
            <p className="text-[16px] font-bold text-asos-black">Your bag is empty</p>
            <p className="text-[14px] text-neutral-500">
              Add items you love to your bag. Review them anytime and easily move
              to your saved items.
            </p>
            <button
              type="button"
              onClick={() => setBagOpen(false)}
              className="mt-2 bg-asos-black px-8 py-3 text-[14px] font-bold text-white transition-colors hover:bg-neutral-700"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-black/5 overflow-y-auto">
              {bag.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-3 p-4">
                  <img
                    src={px(item.image)}
                    alt={replaceAsos(item.name)}
                    className="h-28 w-20 shrink-0 bg-neutral-100 object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[13px] font-bold text-asos-black">
                          {replaceAsos(item.brand)}
                        </p>
                        <p className="line-clamp-2 text-[13px] text-neutral-600">
                          {replaceAsos(item.name)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromBag(item.id)}
                        aria-label="Remove"
                        className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-asos-black"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    {item.size && (
                      <p className="mt-1 text-[12px] text-neutral-500">
                        Size: {item.size}
                      </p>
                    )}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-black/15">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="flex h-7 w-7 items-center justify-center hover:bg-neutral-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-[13px] font-medium">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="flex h-7 w-7 items-center justify-center hover:bg-neutral-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-[14px] font-bold text-asos-black">
                        £{(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-black/10 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[15px] text-neutral-600">Total</span>
                <span className="text-[18px] font-bold text-asos-black">
                  £{bagTotal.toFixed(2)}
                </span>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-asos-black py-3.5 text-center text-[14px] font-bold text-white transition-colors hover:bg-neutral-700"
              >
                CHECKOUT
              </Link>
              <button
                type="button"
                onClick={() => setBagOpen(false)}
                className="mt-2 block w-full py-3 text-center text-[13px] font-bold text-asos-black underline"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
