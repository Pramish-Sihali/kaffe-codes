"use client";
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const brownies = [
  {
    id: 1,
    brand: 'KAFFE CODES',
    name: 'Chocolate Brownie With Mint Leaves Toppings',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/brownies/cake1.jpg'
  },
  // Add other brownies...
];

export default function ExclusiveBrownie() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Exclusive Brownie</h2>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 no-scrollbar pb-4">
            {brownies.map((brownie) => (
              <div key={brownie.id} className="min-w-[240px] flex-shrink-0">
                <div className="relative mb-3">
                  <Image
                    src={brownie.image}
                    alt={brownie.name}
                    width={240}
                    height={240}
                    className="rounded-lg"
                  />
                  <button
                    onClick={() => toggleFavorite(brownie.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites.includes(brownie.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <p className="text-sm text-gray-600">{brownie.brand}</p>
                  <h3 className="font-medium mb-2">{brownie.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-${i < brownie.rating ? 'yellow' : 'gray'}-400`}
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
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/3 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-0 top-1/3 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3].map((dot) => (
              <button
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  dot === 1 ? 'bg-brown-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}