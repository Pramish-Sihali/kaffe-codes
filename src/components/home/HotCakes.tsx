"use client";
import Image from 'next/image';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Carousel } from '@/components/home/Carousel';
import { cakeProducts } from '@/data/cakeProducts';
import { Tabs } from '@/components/ui/Tabs';

const categories = [
  { id: 'bento cake', icon: '/images/icons/bento-cake.svg', label: 'Bento Cake' },
  { id: 'royal cake', icon: '/images/icons/royal-cake.svg', label: 'Royal Cake' },
  { id: 'brownies', icon: '/images/icons/brownies.svg', label: 'Brownies' },
];

export default function HotCakes() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const filteredCakes = activeTab
    ? cakeProducts.filter((cake) => cake.category.toLowerCase() === activeTab.toLowerCase())
    : cakeProducts;

  const handleTabChange = (tabId: string | null) => {
    setActiveTab(tabId);
  };

  return (
    <section className="py-6 md:py-8 lg:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 lg:mb-12">
          Hot Cakes
        </h2>

        <Tabs
          items={categories}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <div className="px-4">
          <Carousel
            itemsPerView={5}
            autoPlayInterval={5000}
            showArrows={true}
            className="max-w-full"
          >
            {filteredCakes.map((cake) => (
              <div key={cake.id} className="flex justify-center">
                <div className="w-[231px]">
                  <ProductCard
                    product={cake}
                    backgroundColor="bg-white"
                    section="cakes"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}