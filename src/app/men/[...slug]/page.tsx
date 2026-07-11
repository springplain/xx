import { SiteShell } from "@/components/layout/SiteShell";
import { ListingPage } from "@/components/product/ListingPage";
import { getListingProducts } from "@/data/products";

function titleFromSlug(slug: string[]): string {
  const last = slug[slug.length - 1] ?? "clothing";
  return last.replace(/-/g, " ");
}

export default async function MenListing({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const title = titleFromSlug(slug);
  const products = getListingProducts("men");

  return (
    <SiteShell gender="men" showSubNav>
      <ListingPage gender="men" title={title} products={products} />
    </SiteShell>
  );
}
