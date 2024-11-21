"use client";
import Image from 'next/image';
import { CircleDot, Truck, Headphones, RotateCcw } from 'lucide-react';

const brands = [
  { name: 'Slack', logo: '/images/brands/slack.png' },
  { name: 'Microsoft', logo: '/images/brands/microsoft.png' },
  { name: 'Netflix', logo: '/images/brands/netflix.png' },
  { name: 'Amazon Prime', logo: '/images/brands/amazon.png' },
  { name: 'Monday.com', logo: '/images/brands/monday.png' },
  { name: 'Swift', logo: '/images/brands/swift.png' },
];

const features = [
  {
    icon: <CircleDot className="h-6 w-6" />,
    title: '100% authentic',
    description: 'Find a curated selection of 100% authentic products, ensuring trust and quality with every purchase'
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'Free Shipping',
    description: 'On all orders above Rs 5000'
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: 'Experts Tips & Advice',
    description: 'All products are quality free'
  },
  {
    icon: <RotateCcw className="h-6 w-6" />,
    title: 'Easy returns',
    description: 'Enjoy effortless pickups and hassle-free refunds with our service'
  }
];

export default function BrandsSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Brands We Work With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with some of the world's most exciting brands across a vast range of categories to create 
            better brand positioning and brand conceived innovation.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center mb-16">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={40}
                className="object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}