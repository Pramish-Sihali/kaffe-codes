"use client"
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const coffeeProducts = [
  {
    id: 1,
    brand: "LAVAZZA",
    name: "Lavazza Super Crema Espresso",
    rating: 4,
    reviews: 23,
    price: 999,
    image: "/images/tea1.jpg"
  },
  // ... your other coffee products
];

const teaProducts = [
  {
    id: 1,
    brand: "LAVAZZA",
    name: "Sencha Super Green Tea Premium",
    rating: 4,
    reviews: 150,
    price: 999,
    image: "/images/tea1.jpg"
  },
  // ... your other tea products
];

export default function ProductSelections() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const ProductSection = ({ title, subtitle, products }: { 
    title: string, 
    subtitle: string, 
    products: any[] 
  }) => (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-1">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative">
            {/* Product Image */}
            <div className="relative aspect-[3/4] mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
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
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
              <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <span 
                      key={index}
                      className={index < product.rating ? 'text-yellow-400' : 'text-gray-200'}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
              </div>
              <p className="font-medium">NPR. {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        <div className="w-3 h-3 rounded-full bg-brown-500"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        {title === "Coffee Selections" && (
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        )}
      </div>
    </section>
  );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Coffee Section */}
        <ProductSection 
          title="Coffee Selections" 
          subtitle="From Harvest to Happiness"
          products={coffeeProducts} 
        />

        {/* Tea Section */}
        <ProductSection 
          title="Tea Selections" 
          subtitle="Tasty Sip After a Long Day"
          products={teaProducts} 
        />
      </div>

      {/* Background Image - Positioned fixed to cover both sections */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/7.png')] bg-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>
    </div>
  );
}