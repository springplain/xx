"use client";

import Link from "next/link";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { womenSubNav, menSubNav } from "@/data/navigation";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"women" | "men">("women");
  const items = tab === "women" ? womenSubNav : menSubNav;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 sm:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed left-0 top-0 z-[70] flex h-full w-[85%] max-w-[340px] flex-col bg-white shadow-2xl transition-transform duration-300 sm:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-end border-b border-black/10 p-3">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-1 hover:bg-neutral-100"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>

        <div className="grid grid-cols-2 border-b border-black/10">
          {(["women", "men"] as const).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setTab(g)}
              className={cn(
                "py-3.5 text-[15px] font-bold uppercase tracking-wide transition-colors",
                tab === g
                  ? "border-b-2 border-asos-black text-asos-black"
                  : "text-neutral-400",
              )}
            >
              {g}
            </button>
          ))}
        </div>

        <nav className="flex-1 overflow-y-auto">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between border-b border-black/5 px-5 py-3.5 text-[15px] hover:bg-neutral-50"
            >
              <span
                className={cn(
                  item.highlight && "font-bold text-asos-sale",
                )}
              >
                {item.label}
              </span>
              <ChevronRight className="h-4 w-4 text-neutral-400" />
            </Link>
          ))}
        </nav>

        <div className="border-t border-black/10 p-4">
          <Link
            href="/account"
            onClick={onClose}
            className="block py-2 text-[14px] font-bold text-asos-black"
          >
            My Account
          </Link>
          <Link
            href="/help"
            onClick={onClose}
            className="block py-2 text-[14px] text-neutral-600"
          >
            Help &amp; FAQs
          </Link>
        </div>
      </aside>
    </>
  );
}
