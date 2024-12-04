"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CoffeeBean {
  id: number;
  top: string;
  left: string;
  delay: string;
}

export default function CoffeeShopBanner() {
  const [coffeeBeans, setCoffeeBeans] = useState<CoffeeBean[]>([]);

  useEffect(() => {
    const beans: CoffeeBean[] = Array.from({ length: 8 }, (_, index) => ({
      id: index,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`
    }));
    setCoffeeBeans(beans);
  }, []);

  return (
    <section className="relative bg-white">
      <div className="relative w-full h-[400px]"> {/* Container for banner */}
        <Image
          src="/images/ad-banner.svg"
          alt="Coffee Shop Banner"
          fill
          priority
          className="object-cover w-full"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div>
                <h1 className="text-6xl font-bold text-white">COFFEE</h1>
                <p className="text-3xl text-yellow-400 italic mt-2">Shop</p>
                <p className="text-white mt-4">• OPEN AT 9 AM •</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coffee beans animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {coffeeBeans.map((bean) => (
            <div
              key={bean.id}
              className="absolute animate-float opacity-50"
              style={{
                top: bean.top,
                left: bean.left,
                animationDelay: bean.delay,
              }}
            >
              <Image
                src="/images/icons/beans.svg"
                alt="Coffee Bean"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}