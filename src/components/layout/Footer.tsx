import Link from "next/link";
import { Facebook, Instagram, Star } from "lucide-react";
import {
  paymentMethods,
  footerColumns,
  internationalFlags,
} from "@/data/footer";
import { px } from "@/lib/img";

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.031 2c-2.4.02-4.35 1.55-4.86 3.86-.18.83-.09 2.19-.02 3.28l.01.16c.01.16-.03.31-.16.4-.15.1-.4.14-.62.03-.28-.14-.62-.27-.98-.27-.5 0-.86.29-.9.66-.03.31.16.62.72.83.09.03.2.06.32.1.42.12 1.05.31 1.22.71.09.2.05.44-.11.71l-.01.02c-.02.05-1.6 3.56-4.98 4.12-.2.03-.35.21-.34.42 0 .06.02.12.04.18.16.38.85.66 2.1.85.04.06.08.28.11.44.03.13.05.27.09.41.05.16.16.34.46.34.13 0 .29-.03.48-.07.37-.08.87-.19 1.51-.19.35 0 .72.03 1.09.09.71.12 1.32.54 2.02 1.03.99.68 2.11 1.46 3.81 1.46.05 0 .09 0 .14-.01l.19.01c1.7 0 2.82-.78 3.81-1.46.7-.48 1.31-.9 2.02-1.02.37-.06.74-.09 1.09-.09.64 0 1.14.1 1.51.18.2.04.35.06.48.06h.03c.22 0 .38-.12.44-.33.04-.14.06-.27.09-.41.03-.16.07-.38.11-.44 1.25-.19 1.94-.47 2.1-.85.02-.06.04-.12.04-.18.01-.21-.14-.39-.34-.42-3.38-.56-4.96-4.07-4.98-4.12l-.01-.02c-.16-.27-.2-.51-.11-.71.17-.4.8-.59 1.22-.71.12-.04.23-.07.32-.1.53-.2.72-.49.71-.78-.02-.4-.42-.68-.94-.68-.35 0-.68.13-.95.26-.2.1-.42.07-.56-.02-.13-.09-.17-.24-.16-.4l.01-.16c.07-1.09.16-2.45-.02-3.28C16.361 3.55 14.421 2.02 12.031 2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-2">
      {/* Social + payments row */}
      <div className="border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/apps"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2] text-white transition-transform hover:scale-105"
            >
              <Facebook className="h-5 w-5" fill="currentColor" strokeWidth={0} />
            </a>
            <a
              href="/apps"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white transition-transform hover:scale-105"
            >
              <Instagram className="h-5 w-5" strokeWidth={2} />
            </a>
            <a
              href="/apps"
              aria-label="Snapchat"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fffc00] text-black transition-transform hover:scale-105"
            >
              <SnapchatIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {paymentMethods.map((p) => (
              <span
                key={p.name}
                className="flex h-7 w-11 items-center justify-center rounded bg-white ring-1 ring-black/5"
              >
                <img src={px(p.src)} alt={p.name} className="max-h-6 max-w-9 object-contain" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dark footer */}
      <div className="bg-asos-black text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:grid-cols-3 lg:grid-cols-[240px_1fr_1fr_1fr_1.1fr]">
          {/* App download */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src={px("https://ext.same-assets.com/775347043/1430660972.png")}
                alt="DSOS app"
                className="h-14 w-14 rounded-2xl"
              />
              <div>
                <p className="font-bold">DSOS</p>
                <div className="mt-1 flex items-center gap-1">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400">1.8m</span>
                </div>
              </div>
            </div>
            <a
              href="/apps"
              className="mt-1 w-full max-w-[180px] bg-white px-4 py-2.5 text-center text-[13px] font-bold text-asos-black transition-colors hover:bg-neutral-200"
            >
              DOWNLOAD THE APP
            </a>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[15px] font-bold uppercase tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-neutral-300 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Shopping from */}
          <div>
            <h3 className="mb-4 text-[15px] font-bold uppercase tracking-wide">
              Shopping From:
            </h3>
            <div className="mb-4 flex items-center gap-2 text-[14px] text-neutral-300">
              <span>You're in</span>
              <img
                src={px("https://flagcdn.com/w40/gb.png")}
                alt="United Kingdom"
                className="h-4 w-6 rounded-sm object-cover"
              />
              <span className="text-neutral-500">|</span>
              <button type="button" className="font-bold text-white hover:underline">
                CHANGE
              </button>
            </div>
            <p className="mb-3 text-[13px] text-neutral-400">
              Some of our international sites:
            </p>
            <div className="grid grid-cols-3 gap-3">
              {internationalFlags.map((f) => (
                <button
                  key={f.code}
                  type="button"
                  aria-label={f.name}
                  className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20 transition-transform hover:scale-110"
                >
                  <img
                    src={px(`https://flagcdn.com/w80/${f.code}.png`)}
                    alt={f.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[13px] text-neutral-400 md:flex-row">
            <span>&copy; 2026 DSOS</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white hover:underline">
                Privacy &amp; Cookies
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/terms" className="hover:text-white hover:underline">
                Ts&amp;Cs
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/accessibility" className="hover:text-white hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
