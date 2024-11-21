"use client";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { icon: '🍱', label: 'Bento Cake' },
  { icon: '🎂', label: 'Regular Cake' },
  { icon: '🍫', label: 'Brownies' }
];

const cakes = [
  {
    id: 1,
    brand: 'KAFFE CODES',
    name: 'Bento Cake: A Small Bite Packed with Big',
    rating: 4,
    reviews: 23,
    price: 512,
    image: '/images/cakes/bento-cake-1.jpg'
  },
  // Add other cakes...
];

export default function HotCakes() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Hot Cakes</h2>

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

        {/* Cakes Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 no-scrollbar pb-4">
            {cakes.map((cake) => (
              <div key={cake.id} className="min-w-[240px] flex-shrink-0">
                <div className="relative mb-3">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    width={240}
                    height={240}
                    className="rounded-lg"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-600">{cake.brand}</p>
                  <h3 className="font-medium mb-2">{cake.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-${i < cake.rating ? 'yellow' : 'gray'}-400`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({cake.reviews})
                    </span>
                  </div>
                  <p className="font-medium">NPR. {cake.price}</p>
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
        </div>
      </div>
    </section>
  );
}