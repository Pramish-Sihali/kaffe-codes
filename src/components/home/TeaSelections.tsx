"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ProductCard from './ProductCard';

const teaProducts = [
  {
    id: 1,
    brand: "GREEN LEAF",
    name: "Premium Green Tea Leaves",
    rating: 4,
    reviews: 23,
    price: 999,
    image: "/images/tea/tea1.png"
  },
  {
    id: 2,
    brand: "ORGANIC MATCHA",
    name: "Ceremonial Grade Matcha",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/tea/tea2.png"
  },
  {
    id: 3,
    brand: "EARL GREY",
    name: "Classic Earl Grey Black Tea",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/tea/tea3.png"
  },
  {
    id: 4,
    brand: "HERBAL ESSENCE",
    name: "Chamomile Herbal Tea Blend",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/tea/tea4.png"
  },
  {
    id: 5,
    brand: "DARJEELING",
    name: "Premium Darjeeling First Flush",
    rating: 5,
    reviews: 120,
    price: 899,
    image: "/images/tea/tea5.png"
  },
  {
    id: 6,
    brand: "OOLONG MASTER",
    name: "Traditional Oolong Tea",
    rating: 5,
    reviews: 180,
    price: 859,
    image: "/images/tea/tea6.png"
  },
  {
    id: 7,
    brand: "JASMINE PEARL",
    name: "Premium Jasmine Pearl Green Tea",
    rating: 5,
    reviews: 200,
    price: 899,
    image: "/images/tea/tea1.png"
  },
  {
    id: 8,
    brand: "ROOIBOS GOLD",
    name: "African Rooibos Red Tea",
    rating: 4,
    reviews: 175,
    price: 879,
    image: "/images/tea/tea2.png"
  },
  {
    id: 9,
    brand: "SILVER NEEDLE",
    name: "White Silver Needle Tea",
    rating: 5,
    reviews: 220,
    price: 799,
    image: "/images/tea/tea3.png"
  },
  {
    id: 10,
    brand: "SENCHA",
    name: "Japanese Sencha Green Tea",
    rating: 4,
    reviews: 160,
    price: 869,
    image: "/images/tea/tea4.png"
  }
];

export default function TeaSelections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerGroup = 6;
  const totalGroups = Math.ceil(teaProducts.length / itemsPerGroup);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const getCurrentProducts = () => {
    const startIndex = currentIndex * itemsPerGroup;
    return teaProducts.slice(startIndex, startIndex + itemsPerGroup);
  };

  return (
    <section className="py-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Tea Selections</h2>
          <p className="text-gray-600">From Garden to Cup</p>
        </div>

        <div className="flex min-h-[550px]">
          <div className="w-3/5 flex flex-col justify-center relative pr-12">
            <div className="flex items-center h-full">
              <button
                onClick={handlePrev}
                className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10 mr-4"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex-1 h-full flex flex-col justify-center">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-[800px]">
                  {getCurrentProducts().map((product) => (
                    <div key={product.id} className="w-full">
                      <div className="max-w-[180px]">
                        <ProductCard
                          product={product}
                          backgroundColor="bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10 ml-4"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {[...Array(totalGroups)].map((_, index) => (
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

          <div className="w-2/5 relative -mr-32">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="relative w-[900px] h-[900px]">
                  <Image
                    src="/images/tea/beans.svg"
                    alt="Tea Leaves"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="relative w-[900px] h-[900px]">
                  <Image
                    src="/images/tea/frame.svg"
                    alt="Tea Frame"
                    fill
                    className="object-contain opacity-100"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}