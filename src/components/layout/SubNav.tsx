"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  womenSubNav,
  menSubNav,
  womenMegaMenus,
  menMegaMenus,
  type SubNavItem,
} from "@/data/navigation";

export function SubNav({ gender }: { gender: "women" | "men" }) {
  const items: SubNavItem[] = gender === "women" ? womenSubNav : menSubNav;
  const menus = gender === "women" ? womenMegaMenus : menMegaMenus;
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className="relative hidden border-b border-black/5 bg-white sm:block"
      onMouseLeave={() => setActive(null)}
    >
      <nav className="no-scrollbar flex items-center justify-start overflow-x-auto lg:justify-center">
        {items.map((item) => {
          const hasMenu = Boolean(menus[item.label]);
          return (
            <div key={item.label} onMouseEnter={() => setActive(item.label)}>
              <Link
                href={item.href}
                className={cn(
                  "flex h-[46px] items-center whitespace-nowrap px-2.5 text-[14px] transition-colors lg:px-3 lg:text-[15px]",
                  item.highlight
                    ? "font-bold text-asos-sale"
                    : "text-asos-black hover:text-neutral-500",
                  active === item.label && !item.highlight && "text-neutral-500",
                )}
              >
                {item.highlight ? (
                  <span className="bg-asos-sale px-2.5 py-1 text-white">
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Mega menu */}
      {active && menus[active] && (
        <div className="absolute left-0 right-0 top-full z-40 border-t border-black/5 bg-white shadow-[0_12px_24px_-12px_rgba(0,0,0,0.25)]">
          <div className="mx-auto grid max-w-6xl grid-cols-4 gap-8 px-8 py-8">
            {menus[active].map((col) => (
              <div key={col.title}>
                <h4 className="mb-3 text-[15px] font-bold text-asos-black">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-[14px] text-neutral-600 transition-colors hover:text-asos-black hover:underline",
                          link.bold && "font-bold text-asos-black",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
