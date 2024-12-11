"use client";

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { brownieProducts } from '@/data/brownieProducts';

export default function ExclusiveBrownie() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === brownieProducts.length - 2 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === brownieProducts.length - 2 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? 0 : prev - 1
    );
  };

  return (
    <section className="min-h-screen bg-[#F5F8F5]">
      <div className="max-w-[1400px] mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] h-full">
          <div className="relative h-[500px] md:h-full -ml-4 md:-ml-8">
            <Image
              src="/images/cakes/image5.png"
              alt="Brownie Box"
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-8">
              <p className="text-white text-lg">
                {brownieProducts[0].description}
              </p>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">Exclusive Brownie</h2>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out gap-6"
                  style={{ transform: `translateX(-${currentIndex * (100/2)}%)` }}
                >
                  {brownieProducts.map((brownie) => (
                    <div
                      key={brownie.id}
                      className="min-w-[calc(50%-12px)]"
                    >
                      <ProductCard
                        product={brownie}
                        backgroundColor="bg-gray-100"
                        section="brownies"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {[...Array(brownieProducts.length - 1)].map((_, index) => (
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