// TopPicks.tsx
"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

const topPicks: Product[] = [
  {
    id: 1,
    brand: "HIGH VOLTAGE",
    name: "High Voltage Bones Cups - 12 Count",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/Top-picks/image1.png"
  },
  {
    id: 2,
    brand: "VALTRA MACHINES",
    name: "High Voltage Bones Cups - 12 Count",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/Top-picks/image2.png"
  },
  {
    id: 3,
    brand: "NINJA TECH",
    name: "Ninja CFP307 Specialty Coffee System",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/Top-picks/image3.png"
  },
  {
    id: 4,
    brand: "DEATH WISH COFFEE",
    name: "Organic and Fair Trade Dark Roast Whole Bean",
    rating: 5,
    reviews: 150,
    price: 733,
    image: "/images/Top-picks/image4.png"
  },
  {
    id: 5,
    brand: "ORGANIC MATCHA",
    name: "Organic Matcha Fresh Tea Powder",
    rating: 5,
    reviews: 150,
    price: 733,
    image: "/images/Top-picks/image5.png"
  },
  {
    id: 6,
    brand: 'ORGANIC MATCHA',
    name: 'Organic Matcha Fresh Tea Powder',
    rating: 5,
    reviews: 150,
    price: 733,
    image: '/images/handpicked/image5.png'
  },
  {
    id: 7,
    brand: 'COFFEE BEANS',
    name: 'Premium Coffee Beans Selection',
    rating: 5,
    reviews: 150,
    price: 733,
    image: '/images/handpicked/image3.png'
  }
];

export default function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, topPicks.length - 5);

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
    <section className="py-8 bg-gray-100">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Top Picks</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {topPicks.map((product) => (
                <div 
                  key={product.id} 
                  className="min-w-[20%] px-4"
                >
                  <ProductCard 
                    product={product} 
                    backgroundColor="bg-gray-100"
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