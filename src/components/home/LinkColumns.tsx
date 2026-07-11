import Link from "next/link";
import type { LinkItem } from "@/data/homepage";

export function LinkColumns({
  heading,
  links,
}: {
  heading: string;
  links: LinkItem[];
}) {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-6 md:py-8">
      <h2 className="mb-6 text-[22px] font-bold text-asos-black md:text-[26px]">
        {heading}
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 md:gap-y-5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[14px] leading-snug text-neutral-700 transition-colors hover:text-asos-black hover:underline md:text-[15px]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
