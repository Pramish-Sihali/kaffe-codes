"use client"
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useState } from 'react';

// Keep your existing product arrays
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
  {
    id: 2,
    brand: "HIGH VOLTAGE",
    name: "High Voltage Bones Cups - 12 Count",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/tea2.jpg"
  },
  {
    id: 3,
    brand: "DEATH WISH COFFEE",
    name: "Organic and Fair Trade Dark Roast Whole Bean",
    rating: 5,
    reviews: 150,
    price: 733,
    image: "/images/products/death-wish-coffee.jpg"
  },
  {
    id: 4,
    brand: "KICKING HORSE COFFEE",
    name: "Kicking Horse Coffee Kick Ass Whole Bean",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/products/kicking-horse-coffee.jpg"
  }
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
  {
    id: 2,
    brand: "HIGH VOLTAGE",
    name: "High Voltage Green Tea - 12 Count Premium Pack",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/tea2.jpg"
  },
  {
    id: 3,
    brand: "ORGANIC LEAF",
    name: "Organic and Fair Trade Green Tea Special Edition",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/tea1.jpg"
  },
  {
    id: 4,
    brand: "ELITE LEAF",
    name: "Premium Matcha Green Tea Powder",
    rating: 5,
    reviews: 120,
    price: 899,
    image: "/images/tea2.jpg"
  },
  {
    id: 5,
    brand: "GOLDEN TIPS",
    name: "Golden Tips Earl Grey Black Tea",
    rating: 4,
    reviews: 180,
    price: 599,
    image: "/images/products/black-tea-1.jpg"
  },
  {
    id: 6,
    brand: "HIMALAYAN PEAKS",
    name: "Himalayan Peaks Classic Green Tea",
    rating: 5,
    reviews: 200,
    price: 699,
    image: "/images/products/green-tea-5.jpg"
  }
];

export default function ProductSelections() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const ProductGrid = ({ products, columns }: { products: any[], columns: number }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
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
              className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            >
              <Heart 
                className={`w-5 h-5 ${
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
            <h3 className="font-medium text-gray-900 mt-1 line-clamp-2">{product.name}</h3>
            <div className="flex items-center mt-2">
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
            <p className="mt-2 font-medium">NPR. {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/coffee-beans-bg.jpg')] bg-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>

      {/* Coffee Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Coffee Selections</h2>
            <p className="text-gray-600 mt-1">From Harvest to Happiness</p>
          </div>
          <ProductGrid products={coffeeProducts} columns={4} />
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-brown-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Tea Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Tea Selections</h2>
            <p className="text-gray-600 mt-1">Tasty Sip After a Long Day</p>
          </div>
          <ProductGrid products={teaProducts} columns={3} />
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-brown-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>
    </div>
  );
}