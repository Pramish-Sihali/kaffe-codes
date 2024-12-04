"use client";
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Play } from 'lucide-react';

const guides = [
  {
    src: '/images/guides/guide1.png',
    title: 'Baking Gear Guide',
    hasVideo: true
  },
  {
    src: '/images/guides/guide2.png',
    title: 'Essential Gear For Your Bakery',
    hasVideo: true
  },
  {
    src: '/images/guides/guide3.png',
    title: 'Coffee Machines Demystified',
    hasVideo: true
  },
  {
    src: '/images/guides/guide4.png',
    title: 'Equip Your Kitchen',
    hasVideo: true
  },
  {
    src: '/images/guides/guide5.png',
    title: 'Café Supplies',
    hasVideo: true
  }
];

export default function BuyingGuidelines() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? guides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === guides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundImage: `url('/images/guides/backdrop.svg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Buying Guidelines</h2>
        
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto no-scrollbar py-4">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[250px] group"
              >
                <div className="relative h-[570px] rounded-2xl overflow-hidden">
                  <Image
                    src={guide.src}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                  {guide.hasVideo && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-800">{guide.title}</h3>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}