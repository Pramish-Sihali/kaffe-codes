"use client";
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const guides = [
  {
    title: "Baking Gear Guide",
    image: "/images/guides/baking.jpg",
  },
  {
    title: "Essential Gear For Your Bakery",
    image: "/images/guides/bakery.jpg",
  },
  {
    title: "Coffee Machines Demystified",
    image: "/images/guides/coffee-machine.jpg",
  },
  {
    title: "Equip Your Kitchen",
    image: "/images/guides/kitchen.jpg",
  },
  {
    title: "Cafe Supplies !",
    image: "/images/guides/cafe.jpg",
  }
];

export default function BuyingGuidelines() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Buying Guidelines</h2>
        
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar">
            {guides.map((guide, index) => (
              <div 
                key={index}
                className="min-w-[280px] flex-shrink-0 relative group"
              >
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-white opacity-90" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 font-medium text-center">{guide.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}