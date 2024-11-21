"use client";
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Bakery Products',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/categories/bakery.jpg',
    link: '/category/bakery'
  },
  {
    id: 2,
    name: 'Tea',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/categories/tea.jpg',
    link: '/category/tea'
  },
  {
    id: 3,
    name: 'Coffee',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/categories/coffee.jpg',
    link: '/category/coffee'
  },
  {
    id: 4,
    name: 'Utensils',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/categories/utensils.jpg',
    link: '/category/utensils'
  },
  {
    id: 5,
    name: 'Machinery',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/categories/machinery.jpg',
    link: '/category/machinery'
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={category.link}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-white/90">
                  {category.discount}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}