import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductDetail } from "@/components/product/ProductDetail";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { getProductById, saleProducts } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <SiteShell>
      <ProductDetail product={product} />
      <ProductCarousel
        heading="You might also like"
        products={saleProducts.filter((p) => p.id !== product.id).slice(0, 10)}
      />
    </SiteShell>
  );
}
