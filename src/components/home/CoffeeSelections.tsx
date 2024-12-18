"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { coffeeProducts } from '@/data/coffeeProducts';
import ProductCard from '@/components/home/ProductCard';

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
    const products = coffeeProducts.slice(startIndex, startIndex + itemsPerGroup);
    while (products.length < itemsPerGroup) {
      products.push(null);
    }
    return products;
  };

  return (
    <section className="relative py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium mb-1">Coffee Selections</h2>
        <p className="text-gray-600 text-sm">From Harvest to Happiness</p>
      </div>

      <div className="relative flex flex-row-reverse items-center">
        <div className="w-[750px] relative z-10 pr-4 ml-auto">
          <div className="relative">
            <button 
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>

            <div className="grid grid-cols-2 gap-6">
              {getCurrentProducts().map((product, index) => (
                <div 
                  key={product?.id || `empty-${index}`} 
                  className="h-[410px]"
                >
                  {product && (
                    <ProductCard 
                      product={product}
                      section="coffee"
                      backgroundColor="bg-white"
                    />
                  )}
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

        <div className="w-[900px] h-[900px] absolute -left-32 top-1/2 -translate-y-1/2">
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{
                maskImage: 'radial-gradient(circle at 40% 50%, black 30%, transparent 65%)',
                WebkitMaskImage: 'radial-gradient(circle at 40% 50%, black 30%, transparent 65%)',
              }}
            >
              <Image
                src="/images/coffee/beans.svg"
                alt="Coffee Beans"
                fill
                className="object-cover scale-150"
                style={{
                  filter: 'blur(1px)',
                  opacity: 0.85,
                }}
                priority
              />
            </div>

            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 40% 50%, transparent 20%, white 70%)',
                filter: 'blur(20px)',
              }}
            />

            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 40% 50%, transparent 40%, rgba(255,255,255,0.8) 60%, white 70%)',
                mixBlendMode: 'overlay',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}