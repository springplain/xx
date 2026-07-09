"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { DsosLogo } from "@/components/DsosLogo";
import { useStore } from "@/lib/store-context";
import { cn } from "@/lib/utils";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const pathname = usePathname();
  const { bagCount, wishlist, setBagOpen } = useStore();
  const [query, setQuery] = useState("");

  const isMen = pathname?.startsWith("/men");
  const isWomen = pathname?.startsWith("/women");

  return (
    <div className="bg-asos-black text-white">
      <div className="flex h-[56px] items-center gap-2 px-3 sm:h-[64px] sm:gap-3 sm:px-4">
        {/* Mobile menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="flex items-center justify-center p-1 sm:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <Link href="/" aria-label="DSOS home" className="shrink-0">
          <DsosLogo className="h-5 w-[68px] sm:h-6 sm:w-[80px]" />
        </Link>

        {/* Gender tabs */}
        <nav className="ml-1 hidden h-full items-stretch sm:flex">
          <Link
            href="/women"
            className={cn(
              "flex items-center px-4 text-[14px] font-bold tracking-wide transition-colors lg:px-7 lg:text-[15px]",
              isWomen
                ? "bg-white text-asos-black"
                : "text-white hover:bg-white/10",
            )}
          >
            WOMEN
          </Link>
          <Link
            href="/men"
            className={cn(
              "flex items-center px-4 text-[14px] font-bold tracking-wide transition-colors lg:px-7 lg:text-[15px]",
              isMen ? "bg-white text-asos-black" : "text-white hover:bg-white/10",
            )}
          >
            MEN
          </Link>
        </nav>

        {/* Search */}
        <form
          action="/search"
          className="relative ml-auto flex max-w-[560px] flex-1 items-center sm:ml-4"
        >
          <input
            type="search"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for items and brands"
            className="h-9 w-full rounded-full bg-white px-4 pr-11 text-[14px] text-asos-black placeholder:text-neutral-500 focus:outline-none sm:h-10"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-1 flex h-7 w-8 items-center justify-center rounded-full text-asos-black sm:h-8"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          <Link
            href="/account"
            aria-label="My account"
            className="hidden items-center justify-center rounded-full p-2 transition-colors hover:bg-white/10 sm:flex"
          >
            <User className="h-6 w-6" strokeWidth={1.5} />
          </Link>
          <Link
            href="/wishlist"
            aria-label="Saved items"
            className="relative flex items-center justify-center rounded-full p-2 transition-colors hover:bg-white/10"
          >
            <Heart className="h-6 w-6" strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-asos-sale px-1 text-[10px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setBagOpen(true)}
            aria-label="Bag"
            className="relative flex items-center justify-center rounded-full p-2 transition-colors hover:bg-white/10"
          >
            <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
            {bagCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-asos-sale px-1 text-[10px] font-bold text-white">
                {bagCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
