"use client";
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const teaProducts = [
  {
    id: 1,
    brand: 'LAVAZZA',
    name: 'Sencha Super Green Tea Espresso',
    rating: 4,
    reviews: 150,
    price: 999,
    image: '/images/products/green-tea-1.png'
  },
  {
    id: 2,
    brand: 'HIGH VOLTAGE',
    name: 'High Voltage Green Tea - 12 Count',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/green-tea-2.png'
  },
  {
    id: 3,
    brand: 'ORGANIC LEAF',
    name: 'Organic and Fair Trade Green Tea',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/green-tea-3.png'
  },
  {
    id: 4,
    brand: 'ELITE LEAF',
    name: 'Kicking Green Tea Premium Box',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/green-tea-4.png'
  },
  {
    id: 5,
    brand: 'LAVAZZA',
    name: 'Premium Green Tea Special',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/green-tea-5.png'
  },
  {
    id: 6,
    brand: 'HIGH VOLTAGE',
    name: 'High Voltage Green Tea - 12 Count',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/products/green-tea-6.png'
  }
];

export default function TeaSelections() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Tea Selections</h2>
          <p className="text-gray-600 mt-1">Tasty Sip After a Long Day</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teaProducts.map((product) => (
            <div key={product.id} className="p-4">
              {/* Product Image */}
              <div className="relative mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={280}
                  className="w-full h-auto object-contain"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-2 right-2"
                >
                  <Heart 
                    className={`w-6 h-6 ${
                      favorites.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <h3 className="font-medium text-gray-900 mt-1">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <span 
                        key={index}
                        className={index < product.rating ? 'text-orange-400' : 'text-gray-200'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                </div>
                <p className="mt-2 font-medium">NPR. {product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-brown-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}