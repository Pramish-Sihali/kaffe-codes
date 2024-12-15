// components/home/TopPicks.tsx
"use client";

import { Carousel } from '@/components/home/Carousel';
import ProductCard from './ProductCard';
import { topPicksData } from '@/data/topPicks';

export default function TopPicks() {
  return (
    <section className="py-4 md:py-6 lg:py-8 bg-gray-100">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-12">
          Top Picks
        </h2>
        
        <Carousel
          itemsPerView={5}
          autoPlayInterval={5000}
          showDots={false}
          className="max-w-[1400px] mx-auto"
        >
          {topPicksData.map((product) => (
            <div key={product.id} className="max-w-[250px] mx-auto px-2">
              <ProductCard
                product={product}
                backgroundColor="bg-gray-100"
                section="top-picks"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}