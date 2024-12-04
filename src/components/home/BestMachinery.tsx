"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const categories = [
  { icon: '/images/icons/machineries.svg', label: 'Machineries' },
  { icon: '/images/icons/utensils.svg', label: 'Utensils' }
];

const machines = [
  {
    id: 1,
    brand: "KAFFE CODES",
    name: "Professional Coffee Machine Black Edition",
    price: 3000,
    rating: 4,
    reviews: 23,
    image: "/images/machinery/machine1.svg",
    description: "Bento Cake: A Small Bite Packed with Big Flavor"
  },
  {
    id: 2,
    brand: "KAFFE CODES",
    name: "Premium Coffee Grinder Pro",
    price: 25000,
    rating: 4,
    reviews: 23,
    image: "/images/machinery/machine2.svg",
    description: "Premium Coffee Grinder for Perfect Beans"
  },
  {
    id: 3,
    brand: "NINJA TECH",
    name: "Ninja CFP307 Specialty Coffee System",
    price: 13000,
    rating: 4,
    reviews: 23,
    image: "/images/machinery/machine3.svg",
    description: "Complete Coffee System"
  },
  {
    id: 4,
    brand: "KAFFE CODES",
    name: "Commercial Grade Coffee Machine",
    price: 17250,
    rating: 4,
    reviews: 23,
    image: "/images/machinery/machine4.svg",
    description: "Perfect for Cafes and Restaurants"
  },
  {
    id: 5,
    brand: "KAFFE CODES",
    name: "Commercial Grade Coffee Machine",
    price: 17250,
    rating: 4,
    reviews: 23,
    image: "/images/machinery/machine4.svg",
    description: "Perfect for Cafes and Restaurants"
  },
  {
    id: 7,
    brand: "KAFFE CODES",
    name: "Commercial Grade Coffee Machine",
    price: 17250,
    rating: 4,
    reviews: 23,
    image: "/images/machinery/machine4.svg",
    description: "Perfect for Cafes and Restaurants"
  }
];

export default function BestMachinery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, machines.length - 4);

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
      prev === machines.length - 4 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? maxIndex : prev - 1
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl text-center font-bold mb-8">Best Purchase on Machinery</h2>

        {/* Category Icons */}
        <div className="flex justify-center gap-8 mb-10">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-brown-50 flex items-center justify-center mb-2 group-hover:bg-brown-100 transition-colors">
                <Image 
                  src={category.icon}
                  alt={category.label}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <span className="text-sm text-gray-600">{category.label}</span>
            </div>
          ))}
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100/4)}%)` }}
            >
              {machines.map((product) => (
                <div 
                  key={product.id} 
                  className="min-w-[calc(25%-18px)]"
                >
                  <ProductCard 
                    product={product}
                    backgroundColor="bg-white" 
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
            {[...Array(maxIndex + 1)].map((_, index) => (
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
    </section>
  );
}