"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const brands = [
  {
    id: 1,
    brand: 'LAVAZZA',
    name: 'Lavazza Super Crema Espresso',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/products/lavazza.jpg'
  },
  {
    id: 2,
    brand: 'HIGH VOLTAGE',
    name: 'High Voltage Bones Cups - 12 Count',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/high-voltage.jpg'
  },
  // Add other products...
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
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Hand-Picked Brands</h2>

        {/* Category Icons */}
        <div className="flex justify-center gap-8 mb-10">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mb-2">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-sm text-gray-600">{category.label}</span>
            </div>
          ))}
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 no-scrollbar pb-4">
            {brands.map((product) => (
              <div key={product.id} className="min-w-[240px] flex-shrink-0">
                <div className="relative mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={240}
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