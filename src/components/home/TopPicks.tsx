// components/home/TopPicks.tsx
"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { topPicksData } from '@/data/topPicks';

export default function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [slideAmount, setSlideAmount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
        setSlideAmount(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
        setSlideAmount(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
        setSlideAmount(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4);
        setSlideAmount(3);
      } else {
        setItemsPerView(5);
        setSlideAmount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, slideAmount]);

  const maxIndex = Math.max(0, topPicksData.length - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + slideAmount;
      return next >= maxIndex ? 0 : next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - slideAmount;
      return next < 0 ? maxIndex : next;
    });
  };

  return (
    <section className="py-4 md:py-6 lg:py-8 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-12">
          Top Picks
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`
              }}
            >
              {topPicksData.map((product) => (
                <div
                  key={product.id}
                  className={`min-w-[100%] sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] xl:min-w-[20%] px-2`}
                >
                  <div className="max-w-[250px] mx-auto">
                    <ProductCard
                      product={product}
                      backgroundColor="bg-gray-100"
                      section="top-picks"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}