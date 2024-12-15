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
    <section className="max-w-[1400px] mx-auto relative py-16">
      <div className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium mb-1">Coffee Selections</h2>
          <p className="text-gray-600 text-sm">From Harvest to Happiness</p>
        </div>

        <div className="flex">
          {/* Background Image */}
          <div className="relative flex-1">
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[1100px] h-[1100px]"
            >
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                  }}
                >
                  <Image
                    src="/images/coffee/beans.svg"
                    alt="Coffee Beans"
                    fill
                    className="object-cover scale-125"
                    style={{
                      filter: 'blur(2px)',
                    }}
                  />
                </div>

                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 20%, white 70%)',
                    filter: 'blur(30px)',
                  }}
                />

                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 40%, rgba(255,255,255,0.8) 60%, white 80%)',
                    mixBlendMode: 'overlay',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="w-[60%] relative">
            <div className="relative">
              <button 
                onClick={handlePrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 min-h-[400px]">
                {getCurrentProducts().map((product) => (
                  <div key={product.id} className="w-full">
                    <div className="max-w-[250px] mx-auto h-full">
                      <div className="h-full flex items-center justify-center">
                        <ProductCard
                          product={product}
                          backgroundColor="bg-white"
                          section="coffee"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {/* Placeholder items to maintain grid structure */}
                {getCurrentProducts().length < 2 && 
                  Array.from({ length: 2 - getCurrentProducts().length }).map((_, index) => (
                    <div key={`placeholder-${index}`} className="w-full opacity-0">
                      <div className="max-w-[250px] mx-auto h-full">
                        <div className="h-full flex items-center justify-center">
                          <div className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  ))
                }
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}