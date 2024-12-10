// app/products/[id]/page.tsx
import { use } from 'react';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import coffeeProducts from '@/data/coffeeProducts';

export default function ProductPage({ params }: { params: { id: string } }) {
  const id = use(Promise.resolve(params.id));
  const product = coffeeProducts.find(p => p.id.toString() === id);
  
  // Get similar products (excluding current product)
  const similarProducts = coffeeProducts
    .filter(p => p.id.toString() !== id)
    .slice(0, 6);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailClient product={product} similarProducts={similarProducts} />;
}