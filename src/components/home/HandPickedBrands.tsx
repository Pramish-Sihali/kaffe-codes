// components/home/HandPickedBrands.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { Carousel } from '@/components/home/Carousel';
import { handpickedProducts, categories } from '@/data/handpickedProducts';

export default function HandPickedBrands() {
  return (
    <section className="py-6 md:py-8 lg:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 lg:mb-12">
          Hand-Picked Brands
        </h2>

        <div className="flex justify-start md:justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10 overflow-x-auto no-scrollbar px-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brown-50 hover:bg-brown-100 flex items-center justify-center mb-2 transition-colors">
                <Image 
                  src={category.icon}
                  alt={category.label}
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
              <span className="text-xs md:text-sm text-gray-600 whitespace-nowrap">
                {category.label}
              </span>
            </div>
          ))}
        </div>

        <Carousel
          itemsPerView={6}
          autoPlayInterval={5000}
          showDots={true}
          showArrows={true}
          className="px-4"
        >
          {handpickedProducts.map((product) => (
            <div key={product.id} className="max-w-[250px] mx-auto">
              <ProductCard
                product={product}
                backgroundColor="bg-white"
                section="handpicked"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
