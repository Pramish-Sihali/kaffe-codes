// components/search/SearchResults.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/products';

interface SearchResultsProps {
  results: Product[];
  query: string;
  onResultClick: () => void;
}

export function SearchResults({ results, query, onResultClick }: SearchResultsProps) {
  if (results.length === 0 && query.length >= 2) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50 p-4 text-center text-gray-500">
        No products found matching "{query}"
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto">
      {results.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          onClick={onResultClick}
          className="flex items-center p-4 hover:bg-gray-50 transition-colors duration-200 border-b last:border-b-0"
        >
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="text-sm text-gray-600">{product.brand}</p>
            <h4 className="text-base font-medium text-gray-900">{product.name}</h4>
            <p className="text-sm font-semibold text-gray-900">
              NPR. {product.price.toLocaleString()}
            </p>
          </div>
        </Link>
      ))}
      <Link
        href={`/products?search=${encodeURIComponent(query)}`}
        className="block p-4 text-center text-green-600 hover:bg-gray-50 transition-colors duration-200 font-medium"
        onClick={onResultClick}
      >
        View all results
      </Link>
    </div>
  );
}