"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const categories = [
  { icon: '/images/icons/cake.svg', label: 'Bento Cake' },
  { icon: '/images/icons/bakery.svg', label: 'Regular Cake' },
  { icon: '/images/icons/brownies.svg', label: 'Brownies' }
];

const cakes = [
  {
    id: 1,
    brand: "KAFFE CODES",
    name: "Bento Cake: A Small Bite Packed with Big Flavor",
    price: 512,
    rating: 4,
    reviews: 23,
    image: "/images/cakes/image1.png"
  },
  {
    id: 2,
    brand: "KAFFE CODES",
    name: "Bento Brownie: A Small Bite Packed with Big Flavor",
    price: 999,
    rating: 4,
    reviews: 23,
    image: "/images/cakes/image2.png"
  },
  {
    id: 3,
    brand: "KAFFE CODES",
    name: "White Forest cake: A Small Bite Packed with Big Flavor",
    price: 900,
    rating: 4,
    reviews: 23,
    image: "/images/cakes/image3.png"
  },
  {
    id: 4,
    brand: "KAFFE CODES",
    name: "White Forest cake: A Small Bite Packed with Big Flavor",
    price: 799,
    rating: 4,
    reviews: 23,
    image: "/images/cakes/image4.png"
  },
  {
    id: 5,
    brand: "KAFFE CODES",
    name: "Bento Brownie: A Small Bite Packed with Big Flavor",
    price: 1150,
    rating: 4,
    reviews: 23,
    image: "/images/cakes/image5.png"
  }
];

export default function HotCakes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, cakes.length - 5);

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
      prev >= maxIndex ? maxIndex : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? 0 : prev - 1
    );
  };

  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Hot Cakes</h2>

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
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {cakes.map((product) => (
                <div 
                  key={product.id} 
                  className="min-w-[25%] px-4"
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
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}