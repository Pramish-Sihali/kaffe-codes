// components/search/SearchBar.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { Product } from '@/types/products';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useProducts from '@/hooks/useProducts';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { allProducts } = useProducts();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, allProducts]);

  const handleSearch = () => {
    if (query.length > 0) {
      router.push(`/products?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search on Kaffe Codes"
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 text-lg"
        />
        <Search 
          className="absolute left-4 top-3.5 h-6 w-6 text-gray-400 cursor-pointer" 
          onClick={handleSearch}
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
          >
            View all results
          </Link>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50 p-4 text-center text-gray-500">
          No products found matching "{query}"
        </div>
      )}
    </div>
  );
}