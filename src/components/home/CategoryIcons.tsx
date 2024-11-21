"use client";
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Bakery', icon: '/images/icons/bakery.png' },
  { name: 'Coffee', icon: '/images/icons/coffee.png' },
  { name: 'Tea', icon: '/images/icons/tea.png' },
  { name: 'Utensils', icon: '/images/icons/utensils.png' },
  { name: 'Machineries', icon: '/images/icons/machineries.png' },
  { name: 'Cakes', icon: '/images/icons/cakes.png' },
  { name: 'Brownies', icon: '/images/icons/brownies.png' }
];

export default function CategoryIcons() {
  return (
    <div className="bg-white py-6 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between md:justify-center space-x-4 md:space-x-8 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="flex flex-col items-center space-y-2 min-w-[72px] md:min-w-[80px]"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brown-50 flex items-center justify-center">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>
              <span className="text-xs md:text-sm text-gray-600 text-center">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}