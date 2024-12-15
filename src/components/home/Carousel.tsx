// components/home/Carousel.tsx
"use client";

import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: number;
  autoPlayInterval?: number;
  className?: string;
  showArrows?: boolean;
}

export function Carousel({
  children,
  itemsPerView = 5,
  autoPlayInterval = 0,
  className = "",
  showArrows = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(itemsPerView);
  const totalItems = children.length;

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

  const showNavigation = totalItems > currentItemsPerView;
  const maxIndex = Math.max(0, totalItems - currentItemsPerView);

  const handleNext = () => {
    setCurrentIndex(prev => {
      const next = prev + currentItemsPerView;
      return next >= totalItems ? 0 : next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(prev => {
      const next = prev - currentItemsPerView;
      return next < 0 ? maxIndex : next;
    });
  };

  if (totalItems === 0) {
    return (
      <div className="flex justify-center items-center h-[404px] bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-lg">Currently no products available</p>
      </div>
    );
  }

  if (totalItems <= currentItemsPerView) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {children.map((child, index) => (
          <div key={index} className="flex justify-center">
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / totalItems}%)`
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="px-6 flex justify-center"
              style={{
                width: `${100 / currentItemsPerView}%`,
                flexShrink: 0,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showNavigation && showArrows && (
        <>
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </>
      )}

      {showNavigation && (
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(totalItems / currentItemsPerView))].slice(0, 5).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * currentItemsPerView)}
              className={`h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / currentItemsPerView) === index
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