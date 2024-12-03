"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

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
    image: "/images/brownies/cake3.jpg"
  },
  {
    id: 2,
    brand: "KAFFE CODES",
    name: "Bento Brownie: A Small Bite Packed with Big Flavor",
    price: 999,
    rating: 4,
    reviews: 23,
    image: "/images/brownies/cake1.jpg"
  },
  {
    id: 3,
    brand: "KAFFE CODES",
    name: "White Forest cake: A Small Bite Packed with Big Flavor",
    price: 900,
    rating: 4,
    reviews: 23,
    image: "/images/brownies/cake2.jpg"
  },
  {
    id: 4,
    brand: "KAFFE CODES",
    name: "White Forest cake: A Small Bite Packed with Big Flavor",
    price: 799,
    rating: 4,
    reviews: 23,
    image: "/images/brownies/cake1.jpg"
  },
  {
    id: 5,
    brand: "KAFFE CODES",
    name: "Bento Brownie: A Small Bite Packed with Big Flavor",
    price: 1150,
    rating: 4,
    reviews: 23,
    image: "/images/brownies/cake3.jpg"
  }
];

export default function HotCakes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === cakes.length - 4 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? cakes.length - 4 : prev - 1
    );
  };

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
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
              {cakes.map((cake) => (
                <div 
                  key={cake.id} 
                  className="min-w-[25%] px-3"
                  onMouseEnter={() => setIsHovered(cake.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 h-[400px] flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-[250px] rounded-t-lg overflow-hidden bg-gray-50">
                      <Image
                        src={cake.image}
                        alt={cake.name}
                        fill
                        className={`object-cover transition-transform duration-300 ${
                          isHovered === cake.id ? 'scale-110' : 'scale-100'
                        }`}
                        priority
                      />
                      <button
                        onClick={(e) => toggleFavorite(cake.id, e)}
                        className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-300 ${
                          isHovered === cake.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Heart 
                          className={`w-5 h-5 ${
                            favorites.includes(cake.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-400 hover:text-gray-600'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex flex-col flex-grow">
                      <p className="text-sm text-gray-600 mb-1">{cake.brand}</p>
                      <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">
                        {cake.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`${
                              i < cake.rating 
                                ? 'text-yellow-400' 
                                : 'text-gray-200'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          ({cake.reviews})
                        </span>
                      </div>
                      <div className="mt-auto flex justify-between items-center">
                        <p className="font-medium text-lg">
                          NPR. {cake.price.toLocaleString()}
                        </p>
                        <button 
                          className={`px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium transition-all duration-300 ${
                            isHovered === cake.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10 transition-transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10 transition-transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(cakes.length - 3)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
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