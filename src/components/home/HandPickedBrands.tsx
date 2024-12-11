// components/home/HandPickedBrands.tsx
"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { handpickedProducts, categories } from '@/data/handpickedProducts';

export default function HandPickedBrands() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4);
      } else {
        setItemsPerView(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, handpickedProducts.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev >= maxIndex ? 0 : prev + 1
    );
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? maxIndex : prev - 1
    );
  };

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

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-3 md:gap-4 lg:gap-6"
              style={{ transform: `translateX(-${currentIndex * (100/itemsPerView)}%)` }}
            >
              {handpickedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className={`min-w-[calc(100%)] sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-18px)] xl:min-w-[calc(16.666%-20px)]`}
                >
                  <div className="max-w-[250px] mx-auto">
                    <ProductCard 
                      product={product}
                      backgroundColor="bg-white"
                      section="handpicked"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-4 md:mt-6 space-x-1 md:space-x-2">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-200 ${
                currentIndex === index ? 'bg-brown-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}