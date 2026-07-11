import type { OverlayPosition } from "@/lib/image-types";
import { px, replaceAsos } from "@/lib/img";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  overlayLabel?: string;
  overlayPosition?: OverlayPosition;
};

export function SiteImage({
  src,
  alt,
  className,
  loading,
  overlayLabel,
  overlayPosition = "center",
}: SiteImageProps) {
  const displayAlt = replaceAsos(alt);
  const label = overlayLabel ? replaceAsos(overlayLabel) : null;

  return (
    <div className="relative">
      <img
        src={px(src)}
        alt={displayAlt}
        className={className}
        loading={loading}
      />
      {label && overlayPosition === "hero" && (
        <div className="pointer-events-none absolute inset-x-[10%] top-[24%] bottom-[24%] flex items-center justify-center bg-white shadow-sm md:inset-x-[14%] md:top-[26%] md:bottom-[26%]">
          <span className="text-5xl font-bold uppercase tracking-[0.22em] text-asos-black md:text-8xl">
            {label}
          </span>
        </div>
      )}
      {label && overlayPosition === "center" && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="bg-white/98 px-6 py-3 shadow-sm md:px-10 md:py-4">
            <span className="text-xl font-bold uppercase tracking-[0.15em] text-asos-black md:text-3xl">
              {label}
            </span>
          </div>
        </div>
      )}
      {label && overlayPosition === "cover-brand" && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[30%] flex items-end justify-center bg-white pb-4 md:pb-6">
          <span className="px-3 text-center text-base font-bold uppercase tracking-[0.12em] text-asos-black md:text-xl">
            {label}
          </span>
        </div>
      )}
      {label && overlayPosition === "cover-bottom" && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[52%] flex items-center justify-center bg-white">
          <span className="px-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-asos-black md:text-2xl">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
