export function replaceAsos(text: string): string {
  return text.replace(/asos/gi, (match) => {
    if (match === match.toUpperCase()) return "DSOS";
    if (match[0] === match[0].toUpperCase()) return "Dsos";
    return "dsos";
  });
}

// In this preview environment, most external image hosts don't render
// directly in the browser (content.asos-media.com is fully blocked; others
// fail to load), but the weserv image proxy works reliably. Route all
// remote images through it so imagery renders consistently.
const PROXY_HOSTS = [
  "content.asos-media.com",
  "images.asos-media.com",
  "ext.same-assets.com",
  "flagcdn.com",
];

export function px(url: string): string {
  if (!url) return url;
  if (PROXY_HOSTS.some((h) => url.includes(h))) {
    const stripped = url.replace(/^https?:\/\//, "");
    return `https://images.weserv.nl/?url=${encodeURIComponent(stripped)}`;
  }
  return url;
}
