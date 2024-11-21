"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const topPicks = [
  {
    id: 1,
    brand: "HIGH VOLTAGE",
    name: "High Voltage Bones Cups - 12 Count",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/products/coffee-1.jpg"
  },
  {
    id: 2,
    brand: "VALTRA MACHINES",
    name: "High Voltage Bones Cups - 12 Count",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/products/coffee-2.jpg"
  },
  {
    id: 3,
    brand: "NINJA TECH",
    name: "Ninja CFP307 Specialty Coffee System",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/products/coffee-3.jpg"
  },
  {
    id: 4,
    brand: "DEATH WISH COFFEE",
    name: "Organic and Fair Trade Dark Roast Whole Bean",
    rating: 5,
    reviews: 150,
    price: 733,
    image: "/images/products/coffee-1.jpg"
  },
  {
    id: 5,
    brand: "ORGANIC MATCHA",
    name: "Organic Matcha Fresh Tea Powder",
    rating: 5,
    reviews: 150,
    price: 733,
    image: "/images/products/coffee-2.jpg"
  }
];

export default function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === topPicks.length - 4 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? topPicks.length - 4 : prev - 1
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Picks</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {topPicks.map((product) => (
                <div 
                  key={product.id} 
                  className="min-w-[25%] px-3"
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-[400px] flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-[250px] rounded-t-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority
                      />
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-colors ${
                            favorites.includes(product.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-gray-400 hover:text-gray-600'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex flex-col flex-grow">
                      <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                      <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`${
                              i < product.rating 
                                ? 'text-yellow-400' 
                                : 'text-gray-200'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>
                      <p className="font-medium mt-auto">
                        NPR. {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(topPicks.length - 3)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-gray-800' 
                    : 'bg-gray-300'
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