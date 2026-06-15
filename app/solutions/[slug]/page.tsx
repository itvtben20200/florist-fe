import { notFound } from 'next/navigation';
import { getSolutionBySlug } from '@/lib/solutions';
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

async function getProductBySlug(slug: string): Promise<BackendProduct | null> {
  try {
    const res = await api.get(`/products?limit=50`);
    const products: BackendProduct[] = res.data.products ?? [];
    return products.find((p) => p.slug === slug) ?? null;
  } catch {
    return null;
  }
}

export default async function SolutionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = getSolutionBySlug(params.slug);
  if (!content) notFound();

  const product = await getProductBySlug(params.slug);

  return (
    <>
      <SolutionDetailClient content={content} product={product} />
      <SiteFooter />
    </>
  );
}
