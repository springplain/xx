import { px } from "@/lib/img";

export function TopBar() {
  return (
    <div className="hidden bg-white sm:block">
      <div className="flex items-center justify-end gap-0 text-[13px]">
        <a
          href="/apps"
          className="bg-asos-lime px-4 py-2 font-bold text-asos-black transition-opacity hover:opacity-90"
        >
          Download our new app
        </a>
        <a
          href="/help"
          className="px-4 py-2 text-asos-black transition-colors hover:underline"
        >
          Help &amp; FAQs
        </a>
        <button
          type="button"
          aria-label="Select country"
          className="flex items-center px-4 py-1.5"
        >
          <span className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-full ring-1 ring-black/10">
            <img
              src={px("https://flagcdn.com/w80/gb.png")}
              alt="United Kingdom"
              className="h-full w-full object-cover"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
