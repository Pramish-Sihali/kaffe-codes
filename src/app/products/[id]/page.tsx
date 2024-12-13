// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import { coffeeProducts } from '@/data/coffeeProducts';
import { teaProducts } from '@/data/teaProducts';
import { cakeProducts } from '@/data/cakeProducts';
import { machines } from '@/data/machineProduct';
import { topPicksData } from '@/data/topPicks';
import { handpickedProducts } from '@/data/handpickedProducts';
import { brownieProducts } from '@/data/brownieProducts';

const allProducts = [
  ...coffeeProducts,
  ...teaProducts,
  ...cakeProducts,
  ...machines,
  ...topPicksData,
  ...handpickedProducts,
  ...brownieProducts,
];

interface PageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: PageProps) {
  const baseId = params.id.split('-').pop() || params.id;
  
  const product = allProducts.find(p => 
    p.id === params.id || p.id === baseId
  );

  if (!product) {
    notFound();
  }

  const similarProducts = allProducts
    .filter(p => 
      p.category === product.category && 
      p.id !== product.id
    )
    .slice(0, 6);

  return (
    <ProductDetailClient 
      product={product}
      similarProducts={similarProducts}
    />
  );
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}
