"use client";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { icon: '⚙️', label: 'Machineries' },
  { icon: '🍽️', label: 'Utensils' }
];

const machines = [
  {
    id: 1,
    brand: 'KAFFE CODES',
    name: 'Bento Cake: A Small Bite Packed with Big Flavor',
    price: 3000,
    rating: 4,
    reviews: 23,
    image: '/images/machinery/machine-1.jpg'
  },
  {
    id: 2,
    brand: 'KAFFE CODES',
    name: 'Bento Brownie: A Small Bite Packed with Big Flavor',
    price: 25000,
    rating: 4,
    reviews: 23,
    image: '/images/machinery/machine-2.jpg'
  },
  {
    id: 3,
    brand: 'KAFFE CODES',
    name: 'White Forest cake: A Small Bite Packed with Big Flavor',
    price: 13000,
    rating: 4,
    reviews: 23,
    image: '/images/machinery/machine-3.jpg'
  },
  {
    id: 4,
    brand: 'KAFFE CODES',
    name: 'Red Velvet Cake: A Small Bite Packed with Big Flavor',
    price: 17250,
    rating: 4,
    reviews: 23,
    image: '/images/machinery/machine-4.jpg'
  }
];

export default function BestMachinery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Best Purchase on Machinery
        </h2>

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

        {/* Products Grid/Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 no-scrollbar pb-4">
            {machines.map((machine) => (
              <div key={machine.id} className="min-w-[280px] flex-shrink-0">
                <div className="relative mb-3">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    width={280}
                    height={280}
                    className="rounded-lg"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-600">{machine.brand}</p>
                  <h3 className="font-medium mb-2">{machine.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-${i < machine.rating ? 'yellow' : 'gray'}-400`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({machine.reviews})
                    </span>
                  </div>
                  <p className="font-medium">NPR. {machine.price.toLocaleString()}</p>
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