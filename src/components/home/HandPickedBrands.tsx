"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const brands = [
  {
    id: 1,
    brand: 'LAVAZZA',
    name: 'Lavazza Super Crema Espresso',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/products/brand1.jpg'
  },
  {
    id: 2,
    brand: 'HIGH VOLTAGE',
    name: 'High Voltage Bones Cups - 12 Count',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/brand2.jpg'
  },
  {
    id: 3,
    brand: 'NINJA TECH',
    name: 'Ninja CFP307 Specialty Coffee System',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/brand3.jpg'
  },
  {
    id: 4,
    brand: 'DEATH WISH COFFEE',
    name: 'Organic and Fair Trade Dark Roast Whole Bean',
    rating: 5,
    reviews: 150,
    price: 733,
    image: '/images/products/brand1.jpg'
  },
  {
    id: 5,
    brand: 'ORGANIC MATCHA',
    name: 'Organic Matcha Fresh Tea Powder',
    rating: 5,
    reviews: 150,
    price: 733,
    image: '/images/products/brand2.jpg'
  }
];

const categories = [
  { icon: '☕', label: 'Coffee' },
  { icon: '🥖', label: 'Bakery' },
  { icon: '🫖', label: 'Tea' },
  { icon: '🍽️', label: 'Utensils' },
  { icon: '⚙️', label: 'Machineries' },
  { icon: '🎂', label: 'Cakes' }
];

export default function HandPickedBrands() {
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
      prev === brands.length - 4 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? brands.length - 4 : prev - 1
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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Hand-Picked Brands</h2>

        {/* Category Icons */}
        <div className="flex justify-center gap-8 mb-10 overflow-x-auto no-scrollbar px-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-14 h-14 rounded-full bg-brown-50 hover:bg-brown-100 flex items-center justify-center mb-2 transition-colors">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-sm text-gray-600 whitespace-nowrap">{category.label}</span>
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
              {brands.map((product) => (
                <div 
                  key={product.id} 
                  className="min-w-[25%] px-3"
                  onMouseEnter={() => setIsHovered(product.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 h-[400px] flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-[250px] rounded-t-lg overflow-hidden bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className={`object-contain p-4 transition-transform duration-300 ${
                          isHovered === product.id ? 'scale-110' : 'scale-100'
                        }`}
                        priority
                      />
                      <button
                        onClick={(e) => toggleFavorite(product.id, e)}
                        className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-300 ${
                          isHovered === product.id ? 'opacity-100' : 'opacity-0'
                        }`}
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
                      <h3 className="font-medium text-gray-900 line-clamp-2 mb-2 min-h-[48px]">
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
                      <div className="mt-auto flex justify-between items-center">
                        <p className="font-medium text-lg">
                          NPR. {product.price.toLocaleString()}
                        </p>
                        <button 
                          className={`px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm transition-all duration-300 ${
                            isHovered === product.id ? 'opacity-100' : 'opacity-0'
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
            {[...Array(brands.length - 3)].map((_, index) => (
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