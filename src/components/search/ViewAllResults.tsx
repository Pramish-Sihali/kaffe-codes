// components/search/ViewAllResults.tsx
"use client";

import { useEffect } from 'react';
import { Product } from '@/types/products';
import ProductCard from '@/components/home/ProductCard';

interface ViewAllResultsProps {
  products: Product[];
  searchQuery: string;
  onClearSearch?: () => void;
}

export default function ViewAllResults({ 
  products, 
  searchQuery,
  onClearSearch 
}: ViewAllResultsProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          No results found for "{searchQuery}"
        </h2>
        <p className="text-gray-600 mb-4">
          Try adjusting your search or browse our categories below
        </p>
        {onClearSearch && (
          <button
            onClick={onClearSearch}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Clear Search
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Search Results for "{searchQuery}"
        </h2>
        {onClearSearch && (
          <button
            onClick={onClearSearch}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Clear Search
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow">
            <ProductCard 
              product={product}
              section={product.category.toLowerCase()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}