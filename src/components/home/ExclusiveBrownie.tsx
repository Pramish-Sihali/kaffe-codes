// components/home/ExclusiveBrownie.tsx
"use client";

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { brownieProducts } from '@/data/brownieProducts';

export default function ExclusiveBrownie() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 2 < brownieProducts.length) {
      setCurrentIndex(prev => prev + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 2);
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-8">
          {/* Left Column */}
          <div className="p-6">
            <div className="bg-[#F7F7F7] rounded-2xl p-6">
              <Image
                src="/images/cakes/image5.png"
                alt="Brownie Box"
                width={500}
                height={500}
                className="w-full h-auto"
              />
              <p className="text-gray-700 mt-4">
                Since opening our first shop in 2017, AG's Coffee house has been straight forwards...
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="px-6">
            <h2 className="text-2xl font-medium mb-8">Exclusive Brownie</h2>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                >
                  {brownieProducts.map((brownie) => (
                    <div 
                      key={brownie.id} 
                      className="min-w-[calc(50%-12px)]"
                    >
                      <ProductCard 
                        product={brownie}
                        backgroundColor="bg-[#F7F7F7]"
                        section="brownies"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex + 2 >= brownieProducts.length}
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: Math.ceil(brownieProducts.length / 2) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx * 2)}
                    className={`h-2 rounded-full transition-colors ${
                      currentIndex === idx * 2
                        ? 'bg-brown-500 w-6'
                        : 'bg-gray-200 hover:bg-gray-300 w-2'
                    }`}
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