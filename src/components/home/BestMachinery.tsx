"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

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
    image: "/images/brownies/machine1.jpg",
    description: "Bento Cake: A Small Bite Packed with Big Flavor"
  },
  {
    id: 2,
    brand: "KAFFE CODES",
    name: "Premium Coffee Grinder Pro",
    price: 25000,
    rating: 4,
    reviews: 23,
    image: "/images/brownies/machine3.jpg",
    description: "Premium Coffee Grinder for Perfect Beans"
  },
  {
    id: 3,
    brand: "NINJA TECH",
    name: "Ninja CFP307 Specialty Coffee System",
    price: 13000,
    rating: 4,
    reviews: 23,
    image: "/images/brownies/machine2.jpg",
    description: "Complete Coffee System"
  },
  {
    id: 4,
    brand: "KAFFE CODES",
    name: "Commercial Grade Coffee Machine",
    price: 17250,
    rating: 4,
    reviews: 23,
    image: "/images/brownies/machine1.jpg",
    description: "Perfect for Cafes and Restaurants"
  }
];

export default function BestMachinery() {
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
      prev === machines.length - 3 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? machines.length - 3 : prev - 1
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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Best Purchase on Machinery</h2>

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

        {/* Products Grid/Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {machines.map((machine) => (
                <div 
                  key={machine.id} 
                  className="min-w-[33.33%] px-4"
                  onMouseEnter={() => setIsHovered(machine.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 h-[450px] flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-[300px] rounded-t-lg overflow-hidden bg-gray-50">
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        fill
                        className={`object-cover transition-transform duration-300 ${
                          isHovered === machine.id ? 'scale-110' : 'scale-100'
                        }`}
                        priority
                      />
                      <button
                        onClick={(e) => toggleFavorite(machine.id, e)}
                        className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-300 ${
                          isHovered === machine.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Heart 
                          className={`w-5 h-5 ${
                            favorites.includes(machine.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-400 hover:text-gray-600'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-gray-600 mb-1">{machine.brand}</p>
                      <h3 className="font-medium text-gray-900 text-lg mb-2">
                        {machine.name}
                      </h3>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`${
                              i < machine.rating 
                                ? 'text-yellow-400' 
                                : 'text-gray-200'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          ({machine.reviews})
                        </span>
                      </div>
                      <div className="mt-auto flex justify-between items-center">
                        <p className="font-medium text-lg">
                          NPR. {machine.price.toLocaleString()}
                        </p>
                        <button 
                          className={`px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium transition-all duration-300 ${
                            isHovered === machine.id ? 'opacity-100' : 'opacity-0'
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
            {[...Array(machines.length - 2)].map((_, index) => (
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