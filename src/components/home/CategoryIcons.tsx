"use client";
import Link from 'next/link';
import Image from 'next/image';

const categoriesWithIcons = [
  { 
    name: 'Bakery', 
    icon: '/images/icons/bakery.svg',
  },
  { 
    name: 'Tea', 
    icon: '/images/icons/tea.svg',
  },
  { 
    name: 'Brownies', 
    icon: '/images/icons/brownies.svg',
  },
  { 
    name: 'Utensils', 
    icon: '/images/icons/utensils.svg',
  },
  { 
    name: 'Machineries', 
    icon: '/images/icons/machineries.svg',
  },
  { 
    name: 'Cake', 
    icon: '/images/icons/cake.svg',
  },
  { 
    name: 'Beans', 
    icon: '/images/icons/beans.svg',
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
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brown-50 flex items-center justify-center hover:bg-brown-100 transition-colors duration-300">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
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