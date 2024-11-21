"use client";
import Link from 'next/link';
import { Coffee, Cake, Utensils, Wrench, CakeSlice, Cookie, Coffee as TeaCup } from 'lucide-react';

// Version 1: Using Lucide Icons
const categoriesWithIcons = [
  { 
    name: 'Bakery', 
    icon: <Cake className="w-6 h-6 md:w-8 md:h-8 text-brown-600" />,
    emoji: '🥖'
  },
  { 
    name: 'Coffee', 
    icon: <Coffee className="w-6 h-6 md:w-8 md:h-8 text-brown-600" />,
    emoji: '☕'
  },
  { 
    name: 'Tea', 
    icon: <TeaCup className="w-6 h-6 md:w-8 md:h-8 text-brown-600" />,
    emoji: '🫖'
  },
  { 
    name: 'Utensils', 
    icon: <Utensils className="w-6 h-6 md:w-8 md:h-8 text-brown-600" />,
    emoji: '🍽️'
  },
  { 
    name: 'Machineries', 
    icon: <Wrench className="w-6 h-6 md:w-8 md:h-8 text-brown-600" />,
    emoji: '⚙️'
  },
  { 
    name: 'Cakes', 
    icon: <CakeSlice className="w-6 h-6 md:w-8 md:h-8 text-brown-600" />,
    emoji: '🎂'
  },
  { 
    name: 'Brownies', 
    icon: <Cookie className="w-6 h-6 md:w-8 md:h-8 text-brown-600" />,
    emoji: '🍪'
  }
];


export default function CategoryIcons() {
  return (
    <div className="bg-white py-6 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between md:justify-center space-x-4 md:space-x-8 overflow-x-auto no-scrollbar">
          {categoriesWithIcons.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="flex flex-col items-center space-y-2 min-w-[72px] md:min-w-[80px] group"
            >
              {/* Version 1: Using Lucide Icons with hover effect */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brown-50 flex items-center justify-center transition-all duration-300 group-hover:bg-brown-100">
                <div className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  {category.icon}
                </div>
                <div className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-2xl md:text-3xl">
                  {category.emoji}
                </div>
              </div>

           

              <span className="text-xs md:text-sm text-gray-600 text-center whitespace-nowrap">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}