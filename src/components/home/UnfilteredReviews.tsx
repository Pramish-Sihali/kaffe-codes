"use client";
import Image from 'next/image';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const allImages = [
  "/images/review/main-review.svg",
  "/images/review/review1.svg",
  "/images/review/review2.svg",
  "/images/review/review3.svg",
  "/images/review/review4.svg",
  "/images/review/review5.svg",
  "/images/review/review6.svg"
];

export default function UnfilteredReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Get small images array, excluding current main image
  const getSmallImages = () => {
    return allImages.filter((_, index) => index !== currentIndex);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Unfiltered Reviews</h2>
          <p className="text-gray-600 mt-1">Buy after knowing your product review</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Review Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={allImages[currentIndex]}
              alt="Main Review"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white opacity-90" />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-4' 
                      : 'bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Small Images Grid */}
          <div className="grid grid-cols-3 gap-4 h-fit content-start">
            {getSmallImages().slice(0, 6).map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`Review ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}