// hooks/useProducts.ts
"use client";

import { useMemo } from 'react';
import { Product } from '@/types/products';
import { coffeeProducts } from '@/data/coffeeProducts';
import { teaProducts } from '@/data/teaProducts';
import { cakeProducts } from '@/data/cakeProducts';
import { machines } from '@/data/machineProduct';
import { topPicksData } from '@/data/topPicks';
import { handpickedProducts } from '@/data/handpickedProducts';
import { brownieProducts } from '@/data/brownieProducts';

const baseProducts = [
  ...coffeeProducts,
  ...teaProducts,
  ...cakeProducts,
  ...machines,
  ...topPicksData,
  ...handpickedProducts,
  ...brownieProducts,
];

export default function useProducts() {
  const allProducts = useMemo<Product[]>(() => {
    return baseProducts.map(product => ({
      ...product,
      id: product.id.includes('-') ? product.id : `${product.category.toLowerCase()}-${product.id}`
    }));
  }, []);

  const getProductById = (id: string) => {
    const baseId = id.includes('-') ? id.split('-')[1] : id;
    return allProducts.find(p => p.id === id || p.id.endsWith(`-${baseId}`));
  };

  const searchProducts = (query: string) => {
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    allProducts,
    getProductById,
    searchProducts
  };
}