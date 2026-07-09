const brands = [
  { name: "NA-KD", className: "font-bold tracking-tight" },
  { name: "DSOS DESIGN", className: "font-bold tracking-[0.2em]" },
  { name: "MANGO", className: "font-bold tracking-tight" },
  { name: "TOPSHOP", className: "font-bold tracking-tight" },
  { name: "gina tricot", className: "font-semibold italic" },
  { name: "4TH & RECKLESS", className: "font-bold tracking-tight text-[15px]" },
];

export function BrandLogos({ heading = "Shop by brand" }: { heading?: string }) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-6 md:py-8">
      <h2 className="mb-6 text-[22px] font-bold text-asos-black md:text-[26px]">
        {heading}
      </h2>
      <div className="no-scrollbar flex items-center justify-between gap-6 overflow-x-auto">
        {brands.map((b) => (
          <a
            key={b.name}
            href="#"
            className={`shrink-0 whitespace-nowrap text-[22px] text-asos-black opacity-80 transition-opacity hover:opacity-100 md:text-[26px] ${b.className}`}
          >
            {b.name}
          </a>
        ))}
      </div>
    </section>
  );
}
