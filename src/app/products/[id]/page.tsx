// src/app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import { coffeeProducts } from '@/data/coffeeProducts';
import { teaProducts } from '@/data/teaProducts';
import { cakeProducts } from '@/data/cakeProducts';
import { machines } from '@/data/machineProduct';
import { topPicksData } from '@/data/topPicks';

const allProducts = [
  ...coffeeProducts,
  ...teaProducts,
  ...cakeProducts,
  ...machines,
  ...topPicksData
];

export default function ProductPage({
  params 
}: { 
  params: { id: string } 
}) {
  // Get the base ID without section prefix
  const baseId = params.id.includes('-') ? 
    params.id.split('-')[1] : 
    params.id;

  const product = allProducts.find(p => 
    p.id === params.id || p.id === baseId
  );

  if (!product) {
    notFound();
  }

  // Get similar products from the same category
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