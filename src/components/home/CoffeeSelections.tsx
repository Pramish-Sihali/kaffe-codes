"use client";
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const coffees = [
  {
    id: 1,
    brand: 'LAUVAZZA',
    name: 'Lavazza Super Crema Espresso',
    price: 999,
    rating: 4,
    reviews: 23,
    image: '/images/coffee/lavazza.jpg'
  },
  {
    id: 2,
    brand: 'HIGH VOLTAGE',
    name: 'High Voltage Bones Cups - 12 Count',
    price: 733,
    rating: 4,
    reviews: 150,
    image: '/images/coffee/high-voltage.jpg'
  },
  {
    id: 3,
    brand: 'DEATH WISH COFFEE',
    name: 'Organic and Fair Trade Dark Roast Whole Bean',
    price: 733,
    rating: 5,
    reviews: 150,
    image: '/images/coffee/death-wish.jpg'
  },
  {
    id: 4,
    brand: 'KICKING HORSE COFFEE',
    name: 'Kicking Horse Coffee Kick Ass Whole Bean',
    price: 733,
    rating: 4,
    reviews: 150,
    image: '/images/coffee/kicking-horse.jpg'
  }
];

export default function CoffeeSelections() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/coffee/coffee-bg.jpg"
          alt="Coffee Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Coffee Selections</h2>
          <p className="text-gray-600">From Harvest to Happiness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coffees.map((coffee) => (
            <div key={coffee.id} className="bg-white rounded-lg p-4 shadow-lg">
              <div className="relative mb-3">
                <Image
                  src={coffee.image}
                  alt={coffee.name}
                  width={200}
                  height={200}
                  className="w-full object-cover rounded-lg"
                />
                <button
                  onClick={() => toggleFavorite(coffee.id)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
                >
                  <Heart 
                    className={`h-5 w-5 ${
                      favorites.includes(coffee.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>

              <div>
                <p className="text-sm text-gray-600">{coffee.brand}</p>
                <h3 className="font-medium mb-2">{coffee.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-${i < coffee.rating ? 'yellow' : 'gray'}-400`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({coffee.reviews})
                  </span>
                </div>
                <p className="font-medium">NPR. {coffee.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}