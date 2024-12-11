// components/ui/Carousel.tsx
"use client";

import { useState, useEffect, ReactNode, cloneElement, isValidElement, ReactElement } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  itemsPerView: number;
  autoPlayInterval?: number;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

interface CarouselItemProps {
  carouselIndex?: number;
}

export function Carousel({
  children,
  itemsPerView,
  autoPlayInterval = 5000,
  className = "",
  showDots = true,
  showArrows = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          return next > maxIndex ? 0 : next;
        });
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [maxIndex, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next > maxIndex ? 0 : next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? maxIndex : prev - 1);
  };

  const gapInPixels = 32;
  const containerPadding = 64;
  const itemWidth = `calc((100% - ${containerPadding}px - (${gapInPixels}px * ${itemsPerView - 1})) / ${itemsPerView})`;
  
  // Clone children with additional props
  const clonedChildren = children.map((child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<CarouselItemProps>, {
        key: `carousel-item-${index}`,
        carouselIndex: index,
      });
    }
    return child;
  });

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden px-8">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${gapInPixels}px`,
            transform: `translateX(calc(-${currentIndex} * (${itemWidth} + ${gapInPixels}px)))`,
          }}
        >
          {clonedChildren.map((child, index) => (
            <div 
              key={`carousel-wrapper-${index}`}
              className="shrink-0"
              style={{ width: itemWidth }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && totalItems > itemsPerView && (
        <>
          <button
            onClick={handlePrev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            aria-label="Previous"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            aria-label="Next"
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </>
      )}

      {showDots && totalItems > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={`carousel-dot-${index}`}
              className={`h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-brown-500 w-4' 
                  : 'bg-gray-300 hover:bg-brown-300 w-2'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}