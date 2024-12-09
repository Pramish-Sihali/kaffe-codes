"use client"

import React, { useState } from 'react';
import { 
  SiApple,
  SiGoogle,
  SiMicrosoft,
  SiAmazon,
  SiNetflix,
  SiSpotify
} from 'react-icons/si';
import type { IconType } from 'react-icons';

interface Brand {
  id: number;
  name: string;
  Icon: IconType;
  color: string;
}

const brands: Brand[] = [
  { id: 1, name: 'Apple', Icon: SiApple, color: '#000000' },
  { id: 2, name: 'Google', Icon: SiGoogle, color: '#4285F4' },
  { id: 3, name: 'Microsoft', Icon: SiMicrosoft, color: '#00A4EF' },
  { id: 4, name: 'Amazon', Icon: SiAmazon, color: '#FF9900' },
  { id: 5, name: 'Netflix', Icon: SiNetflix, color: '#E50914' },
  { id: 6, name: 'Spotify', Icon: SiSpotify, color: '#1DB954' }
];

export default function BrandGrid() {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Brands We Work With</h2>
          <p className="text-gray-600">
            We collaborate with leading technology brands to deliver exceptional services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <div 
                className={`
                  flex flex-col items-center justify-center p-6 rounded-lg 
                  transition-all duration-300 border border-transparent
                  ${hoveredBrand === brand.id 
                    ? 'bg-white shadow-lg scale-105 border-gray-100' 
                    : 'bg-gray-50'
                  }
                `}
              >
                {React.createElement(brand.Icon, {
                  className: `text-4xl transition-all duration-300`,
                  style: { 
                    color: brand.color,
                    opacity: hoveredBrand === brand.id ? 1 : 0.6,
                    transform: hoveredBrand === brand.id ? 'scale(1.1)' : 'scale(1)'
                  }
                })}
                <span 
                  className={`
                    mt-2 text-sm font-medium transition-all duration-300
                    ${hoveredBrand === brand.id 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform -translate-y-2'
                    }
                  `}
                >
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}