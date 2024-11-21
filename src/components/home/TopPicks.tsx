"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    brand: 'HIGH VOLTAGE',
    name: 'High Voltage Bones Cups - 12 Count',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/coffee-1.jpg'
  },
  {
    id: 2,
    brand: 'VALTRA MACHINES',
    name: 'High Voltage Bones Cups - 12 Count',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/coffee-2.jpg'
  },
  // Add other products similarly
];

export default function TopPicks() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Picks</h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 no-scrollbar">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="min-w-[250px] flex-shrink-0"
              >
                <div className="relative mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-${i < product.rating ? 'yellow' : 'gray'}-400`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>
                  <p className="font-medium">NPR. {product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="absolute left-0 top-1/3 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-0 top-1/3 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}