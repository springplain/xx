import { SiteImage } from "@/components/SiteImage";
import type { OverlayPosition } from "@/lib/image-types";

export function SaleBanner({
  image,
  href,
  alt,
  overlayLabel,
  overlayPosition,
}: {
  image: string;
  href: string;
  alt: string;
  overlayLabel?: string;
  overlayPosition?: OverlayPosition;
}) {
  return (
    <a href={href} className="tile-zoom block w-full overflow-hidden bg-neutral-100">
      <SiteImage
        src={image}
        alt={alt}
        overlayLabel={overlayLabel}
        overlayPosition={overlayPosition ?? "bottom"}
        className="h-auto w-full object-cover"
      />
    </a>
  );
}
