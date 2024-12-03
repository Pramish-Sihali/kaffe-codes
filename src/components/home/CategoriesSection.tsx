"use client";
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Bakery Products',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/carousel/categories/01.png',
    link: '/category/bakery'
  },
  {
    id: 2,
    name: 'Tea',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/carousel/categories/02.png',
    link: '/category/tea'
  },
  {
    id: 3,
    name: 'Coffee',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/carousel/categories/03.png',
    link: '/category/coffee'
  },
  {
    id: 4,
    name: 'Utensils',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/carousel/categories/04.png',
    link: '/category/utensils'
  },
  {
    id: 5,
    name: 'Machinery',
    discount: 'Up To 25% Off On Entire Range',
    image: '/images/carousel/categories/05.png',
    link: '/category/machinery'
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-8 px-16 my-8 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-950">Categories</h2>
        
        <div className="grid grid-cols-6 gap-3">
          {/* First Row */}
          <Link 
            href={categories[0].link}
            className="col-span-2 relative overflow-hidden rounded-lg h-[280px]"
          >
            <Image
              src={categories[0].image}
              alt={categories[0].name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-medium mb-1">
                {categories[0].name}
              </h3>
              <p className="text-white/90 text-sm">
                {categories[0].discount}
              </p>
            </div>
          </Link>
          <Link 
            href={categories[1].link}
            className="col-span-2 relative overflow-hidden rounded-lg h-[280px]"
          >
            <Image
              src={categories[1].image}
              alt={categories[1].name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-medium mb-1">
                {categories[1].name}
              </h3>
              <p className="text-white/90 text-sm">
                {categories[1].discount}
              </p>
            </div>
          </Link>
          <Link 
            href={categories[2].link}
            className="col-span-2 relative overflow-hidden rounded-lg h-[280px]"
          >
            <Image
              src={categories[2].image}
              alt={categories[2].name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-medium mb-1">
                {categories[2].name}
              </h3>
              <p className="text-white/90 text-sm">
                {categories[2].discount}
              </p>
            </div>
          </Link>

          {/* Second Row */}
          <Link 
            href={categories[3].link}
            className="col-span-3 relative overflow-hidden rounded-lg h-[280px]"
          >
            <Image
              src={categories[3].image}
              alt={categories[3].name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-medium mb-1">
                {categories[3].name}
              </h3>
              <p className="text-white/90 text-sm">
                {categories[3].discount}
              </p>
            </div>
          </Link>
          <Link 
            href={categories[4].link}
            className="col-span-3 relative overflow-hidden rounded-lg h-[280px]"
          >
            <Image
              src={categories[4].image}
              alt={categories[4].name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-medium mb-1">
                {categories[4].name}
              </h3>
              <p className="text-white/90 text-sm">
                {categories[4].discount}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}