// components/home/CoffeeSelections.tsx
"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { coffeeProducts } from '@/data/coffeeProducts';

export default function CoffeeSelections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerGroup, setItemsPerGroup] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerGroup(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerGroup(2);
      } else {
        setItemsPerGroup(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <section className="py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Coffee Selections</h2>
          <p className="text-gray-600">From Harvest to Happiness</p>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[500px]">
          {/* Left side with coffee beans and frame */}
          <div className="hidden lg:block w-full lg:w-1/2 relative -ml-12">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="relative w-[600px] h-[600px]">
                  <Image
                    src="/images/coffee/beans.svg"
                    alt="Coffee Beans"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="relative w-[600px] h-[600px]">
                  <Image
                    src="/images/coffee/frame.svg"
                    alt="Coffee Frame"
                    fill
                    className="object-contain opacity-100"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side with products grid */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-8">
            <div className="relative">
              <div className="flex items-center">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10 mr-4"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[400px]">
                    {getCurrentProducts().map((product) => (
                      <div key={product.id} className="w-full">
                        <div className="max-w-[250px] mx-auto">
                          <ProductCard
                            product={product}
                            backgroundColor="bg-white"
                            section="coffee"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10 ml-4"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {[...Array(totalGroups)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-brown-500 w-4'
                        : 'bg-gray-300 hover:bg-brown-300'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}