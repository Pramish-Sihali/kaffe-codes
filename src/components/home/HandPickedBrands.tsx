"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ProductCard from './ProductCard';

const brands = [
  {
    id: 1,
    brand: 'LAVAZZA',
    name: 'Lavazza Super Crema Espresso',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/handpicked/image1.png'
  },
  {
    id: 2,
    brand: 'HIGH VOLTAGE',
    name: 'High Voltage Bones Cups - 12 Count',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/handpicked/image2.png'
  },
  {
    id: 3,
    brand: 'NINJA TECH',
    name: 'Ninja CFP307 Specialty Coffee System',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/handpicked/image6.png'
  },
  {
    id: 4,
    brand: 'DEATH WISH COFFEE',
    name: 'Organic and Fair Trade Dark Roast Whole Bean',
    rating: 5,
    reviews: 150,
    price: 733,
    image: '/images/handpicked/image4.png'
  },
  {
    id: 5,
    brand: 'ORGANIC MATCHA',
    name: 'Organic Matcha Fresh Tea Powder',
    rating: 5,
    reviews: 150,
    price: 733,
    image: '/images/handpicked/image5.png'
  },
  {
    id: 6,
    brand: 'COFFEE BEANS',
    name: 'Premium Coffee Beans Selection',
    rating: 5,
    reviews: 150,
    price: 733,
    image: '/images/handpicked/image3.png'
  },
  {
    id: 7,
    brand: "DEATH WISH COFFEE",
    name: "Organic and Fair Trade Dark Roast Whole Bean",
    rating: 5,
    reviews: 150,
    price: 733,
    image: "/images/Top-picks/image4.png"
  },
  {
    id: 8,
    brand: "ORGANIC MATCHA",
    name: "Organic Matcha Fresh Tea Powder",
    rating: 5,
    reviews: 150,
    price: 733,
    image: "/images/Top-picks/image5.png"
  }
];

const categories = [
  { icon: '/images/icons/beans.svg', label: 'Coffee' },
  { icon: '/images/icons/bakery.svg', label: 'Bakery' },
  { icon: '/images/icons/tea.svg', label: 'Tea' },
  { icon: '/images/icons/utensils.svg', label: 'Utensils' },
  { icon: '/images/icons/machineries.svg', label: 'Machineries' },
  { icon: '/images/icons/cake.svg', label: 'Cakes' }
];

export default function HandPickedBrands() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, brands.length - 5);

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
      prev === brands.length - 4 ? 0 : prev + 1
    );
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? 0 : prev - 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === brands.length - 4 ? 0 : prev + 1
      );
    }, 5000);
  
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Hand-Picked Brands</h2>

        <div className="flex justify-center gap-8 mb-10 overflow-x-auto no-scrollbar px-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-14 h-14 rounded-full bg-brown-50 hover:bg-brown-100 flex items-center justify-center mb-2 transition-colors">
                <Image 
                  src={category.icon}
                  alt={category.label}
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <span className="text-sm text-gray-600 whitespace-nowrap">{category.label}</span>
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
      {brands.map((product) => (
        <div 
          key={product.id} 
          className="min-w-[calc(20%-18px)]"  // 25% width minus 3/4 of the gap (24px)
        >
          <ProductCard 
            product={product}
            backgroundColor="bg-white"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Navigation Arrows */}
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
</div>
     </div>
    </section>
  );
}