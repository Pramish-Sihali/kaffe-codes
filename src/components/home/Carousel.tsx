// components/home/Carousel.tsx
"use client";

import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: number;
  autoPlayInterval?: number;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

export function Carousel({
  children,
  itemsPerView = 5,
  autoPlayInterval = 5000,
  className = "",
  showDots = true,
  showArrows = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(itemsPerView);
  const totalItems = children.length;
  const maxIndex = Math.max(0, Math.ceil(totalItems - currentItemsPerView));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCurrentItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setCurrentItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setCurrentItemsPerView(3);
      } else if (window.innerWidth < 1280) {
        setCurrentItemsPerView(4);
      } else {
        setCurrentItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [currentIndex, currentItemsPerView]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden px-6">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / currentItemsPerView}%)`
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="px-6 flex justify-center"
              style={{
                width: `${100 / currentItemsPerView}%`,
                minWidth: `${100 / currentItemsPerView}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && totalItems > currentItemsPerView && (
        <>
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </>
      )}

      {showDots && totalItems > currentItemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-brown-500 w-6'
                  : 'bg-gray-200 hover:bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}