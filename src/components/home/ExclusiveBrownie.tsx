"use client";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const brownies = [
  {
    id: 1,
    brand: 'KAFFE CODES',
    name: 'Chocolate Brownie With Mint Leaves Toppings',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/cakes/image6.png',
    description: 'Since opening our first shop in 2017 AD, Kaffe Codes goal has been straightforward.'
  },
  {
    id: 2,
    brand: 'KAFFE CODES',
    name: 'Chocolate Brownie With Mint Leaves Toppings',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/cakes/image6.png'
  },
  {
    id: 3,
    brand: 'KAFFE CODES',
    name: 'Chocolate Brownie With Mint Leaves Toppings',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/cakes/image6.png'
  }
];

export default function ExclusiveBrownie() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === brownies.length - 2 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === brownies.length - 2 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? 0 : prev - 1
    );
  };

  return (
    <section className="py-12 bg-[#F5F8F5]">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Title and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/cakes/image5.png"
              alt="Brownie Box"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-8">
              <p className="text-white text-lg">
                {brownies[0].description}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Exclusive Brownie</h2>
            
            {/* Products Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out gap-6"
                  style={{ transform: `translateX(-${currentIndex * (100/2)}%)` }}
                >
                  {brownies.map((brownie) => (
                    <div 
                      key={brownie.id} 
                      className="min-w-[calc(50%-12px)]"
                    >
                      <ProductCard 
                        product={brownie}
                        backgroundColor="bg-gray-100"
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

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(brownies.length - 1)].map((_, index) => (
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