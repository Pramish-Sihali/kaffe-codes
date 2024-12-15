// components/home/HandPickedBrands.tsx
"use client";

import { useState, useMemo } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Carousel } from '@/components/home/Carousel';
import ProductCard from './ProductCard';
import { handpickedProducts, categories } from '@/data/handpickedProducts';

export default function HandPickedBrands() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!activeTab) return handpickedProducts;
    return handpickedProducts.filter(product => 
      product.category.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  const handleTabChange = (tabId: string | null) => {
    setActiveTab(tabId);
  };

  return (
    <section className="py-6 md:py-8 lg:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 lg:mb-12">
          Hand-Picked Brands
        </h2>

        <Tabs
          items={categories.slice(1)}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <div className="px-4">
          <Carousel
            itemsPerView={5}
            autoPlayInterval={0}
            showArrows={true}
            className="max-w-full"
          >
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex justify-center"
              >
                <div className="w-[231px]">
                  <ProductCard
                    product={product}
                    backgroundColor="bg-white"
                    section="handpicked"
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