"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { coffeeProducts } from '@/data/coffeeProducts';

export default function CoffeeSelections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerGroup = 4;

  const totalGroups = Math.ceil(coffeeProducts.length / itemsPerGroup);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const getCurrentProducts = () => {
    const startIndex = currentIndex * itemsPerGroup;
    return coffeeProducts.slice(startIndex, startIndex + itemsPerGroup);
  };

  return (
    <section className="max-w-[1400px] mx-auto relative py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium mb-1">Coffee Selections</h2>
        <p className="text-gray-600 text-sm">From Harvest to Happiness</p>
      </div>

      {/* Main Content Container */}
      <div className="relative flex items-center">
        {/* Background Image Section */}
        <div className="absolute left-0 w-[759px] h-[800px]">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/coffee/beans.svg"
              alt="Coffee Beans"
              fill
              className="object-cover"
              style={{
                filter: 'blur(2px)',
                opacity: 0.7,
                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, transparent 100%)',
              }}
              priority
            />
          </div>
        </div>

        {/* Products Grid Section - Positioned to overlap slightly with the faded image */}
        <div className="ml-auto w-[750px] relative">
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>

            {/* 2x2 Product Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {getCurrentProducts().map((product) => (
                <div key={product.id}>
                  <ProductCard
                    product={product}
                    backgroundColor="bg-white"
                    section="coffee"
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalGroups)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-brown-500 w-6'
                    : 'bg-gray-200 w-2 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}