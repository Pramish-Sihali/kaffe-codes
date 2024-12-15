"use client";

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { machines } from '@/data/machineProduct';
import { Tabs } from '@/components/ui/Tabs';
import { Carousel } from '@/components/home/Carousel';

const categories = [
  { 
    id: 'machineries', 
    icon: '/images/icons/machineries.svg', 
    label: 'Machineries'
  },
  { 
    id: 'utensils', 
    icon: '/images/icons/utensils.svg', 
    label: 'Utensils'
  }
] as const;

export default function BestMachinery() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const filteredMachines = useMemo(() => {
    if (!activeTab) return machines;
    return machines.filter(
      (machine) => machine.category.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  const handleTabChange = (tabId: string | null) => {
    setActiveTab(tabId);
  };

  const productCards = filteredMachines.map((machine) => (
    <div key={machine.id} className="w-[280px]">
      <ProductCard
        product={machine}
        backgroundColor="bg-gray-50"
        section="machinery"
      />
    </div>
  ));

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Best Purchase on Machinery
        </h2>

        <Tabs
          items={categories.map(cat => ({
            id: cat.id,
            icon: cat.icon,
            label: cat.label
          }))}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {filteredMachines.length === 0 ? (
          <div className="flex justify-center items-center h-[300px]">
            <p className="text-gray-500 text-lg">No items available</p>
          </div>
        ) : (
          <div className="mt-8">
            <Carousel
              itemsPerView={4}
              autoPlayInterval={0}
              showArrows={true}
              className="max-w-full"
            >
              {productCards}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}