import { notFound } from 'next/navigation';
import { getSolutionBySlug, resolveCanonicalSolutionSlug } from '@/lib/solutions';
import SolutionDetailClient from './SolutionDetailClient';
import { api } from '@/lib/api';
import { SiteFooter } from '@/components/layout/SiteFooter';

interface BackendProduct {
  id: string;
  slug: string;
  name: string;
  price: string;
  description?: string;
  images: string[];
  stock: number;
}

async function getProducts(): Promise<BackendProduct[]> {
  try {
    const res = await api.get(`/products?limit=50`);
    return res.data.products ?? [];
  } catch {
    return [];
  }
}

export default async function SolutionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = getSolutionBySlug(params.slug);
  if (!content) notFound();

  const products = await getProducts();
  const product = products.find((p) => {
    const canonical = resolveCanonicalSolutionSlug(p.slug, p.name);
    return canonical === content.slug;
  }) ?? null;

  return (
    <>
      <SolutionDetailClient content={content} product={product} products={products} />
      <SiteFooter />
    </>
  );
}
