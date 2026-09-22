import { redirect } from "next/navigation";
import { PRODUCTS } from "@/constants/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (product) {
    redirect(`/products#${product.slug}`);
  }

  redirect("/products");
}
