// components/home/ExclusiveCakes.tsx
"use client";

import Image from 'next/image';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { cakeProducts } from '@/data/cakeProducts';

const categories = [
  {
    id: 'bento-cake',
    icon: '/images/icons/bento-cake.svg',
    label: 'Bento Cake',
  },
  {
    id: 'royal-cake',
    icon: '/images/icons/royal-cake.svg',
    label: 'Royal Cake',
  },
  {
    id: 'brownies',
    icon: '/images/icons/brownies.svg',
    label: 'Brownies',
  },
];

export default function ExclusiveCakes() {
  const [activeCategory, setActiveCategory] = useState('bento-cake');

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Title and Category Tabs */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Hot Cakes</h2>
          <div className="flex justify-center items-center gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="flex flex-col items-center group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-brown-600' 
                    : 'bg-gray-100 group-hover:bg-brown-100'
                }`}>
                  <Image
                    src={category.icon}
                    alt={category.label}
                    width={24}
                    height={24}
                    className={`w-6 h-6 transition-colors ${
                      activeCategory === category.id ? 'text-white' : 'text-gray-600'
                    }`}
                  />
                </div>
                <span className={`text-sm ${
                  activeCategory === category.id 
                    ? 'text-brown-600 font-medium' 
                    : 'text-gray-600'
                }`}>
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {cakeProducts.map((cake) => (
            <div key={cake.id} className="w-full">
              <ProductCard 
                product={cake}
                backgroundColor="bg-white"
                section="cakes"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}