"use client";
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const brownies = [
  {
    id: 1,
    brand: 'KAFFE CODES',
    name: 'Chocolate Brownie With Mint Leaves Toppings',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/brownies/cake1.jpg',
    description: 'Since opening our first shop in 2017 AD, Kaffe Codes goal has been straightforward.'
  },
  {
    id: 2,
    brand: 'KAFFE CODES',
    name: 'Chocolate Brownie With Mint Leaves Toppings',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/brownies/cake2.jpg'
  },
  {
    id: 3,
    brand: 'KAFFE CODES',
    name: 'Chocolate Brownie With Mint Leaves Toppings',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/brownies/cake3.jpg'
  }
];

export default function ExclusiveBrownie() {
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
      prev === brownies.length - 2 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? brownies.length - 2 : prev - 1
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
    <section className="py-12 bg-[#F5F8F5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/brownies/cake3.jpg"
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
                  style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                >
                  {brownies.map((brownie) => (
                    <div 
                      key={brownie.id} 
                      className="min-w-[calc(50%-12px)]"
                      onMouseEnter={() => setIsHovered(brownie.id)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="relative aspect-square mb-4">
                          <Image
                            src={brownie.image}
                            alt={brownie.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                          <button
                            onClick={(e) => toggleFavorite(brownie.id, e)}
                            className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-300 ${
                              isHovered === brownie.id ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <Heart 
                              className={`w-5 h-5 ${
                                favorites.includes(brownie.id) 
                                  ? 'fill-red-500 text-red-500' 
                                  : 'text-gray-400 hover:text-gray-600'
                              }`}
                            />
                          </button>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 mb-1">{brownie.brand}</p>
                          <h3 className="font-medium mb-2 line-clamp-2">{brownie.name}</h3>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i < brownie.rating 
                                    ? 'text-yellow-400' 
                                    : 'text-gray-200'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-600">
                              ({brownie.reviews})
                            </span>
                          </div>
                          <p className="font-medium">NPR. {brownie.price}</p>
                        </div>
                      </div>
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