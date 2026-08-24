import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts, formatPrice, getSizeChart } from '@/lib/products';
import { ProductDetailClient } from './ProductDetailClient';
import { siteConfig } from '@/lib/config';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
      images: product.images,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = getRelatedProducts(product.slug);
  const sizeChart = getSizeChart(product.category);
  
  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
      sizeChart={sizeChart}
    />
  );
}