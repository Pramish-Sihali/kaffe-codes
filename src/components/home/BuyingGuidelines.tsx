"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const guides = [
  {
    id: 1,
    title: "Baking Gear Guide",
    image: "/images/guide1.png",
    duration: "4:30",
    category: "Bakery"
  },
  {
    id: 2,
    title: "Essential Gear For Your Bakery",
    image: "/images/guide2.png",

    duration: "5:15",
    category: "Bakery"
  },
  {
    id: 3,
    title: "Coffee Machines Demystified",
    image: "/images/guide3.png",

    duration: "6:45",
    category: "Coffee"
  },
  {
    id: 4,
    title: "Equip Your Kitchen",
    image: "/images/guide4.png",

    duration: "3:20",
    category: "Kitchen"
  },
  {
    id: 5,
    title: "Cafe Supplies Guide",
    image: "/images/guide5.png",

    duration: "4:50",
    category: "Cafe"
  }
];

export default function BuyingGuidelines() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === guides.length - 3 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? guides.length - 3 : prev - 1
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Buying Guidelines</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {guides.map((guide) => (
                <div 
                  key={guide.id} 
                  className="min-w-[33.33%] px-4"
                  onMouseEnter={() => setIsHovered(guide.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="relative group cursor-pointer">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className={`object-cover transition-transform duration-300 ${
                          isHovered === guide.id ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <PlayCircle 
                          className={`w-12 h-12 text-white transition-transform duration-300 ${
                            isHovered === guide.id ? 'scale-110' : 'scale-100'
                          }`} 
                        />
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {guide.duration}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="mt-4">
                      <span className="text-sm text-green-600 font-medium">
                        {guide.category}
                      </span>
                      <h3 className="font-medium text-lg mt-1">{guide.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-5 top-1/3 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10 transition-transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-5 top-1/3 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 z-10 transition-transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(guides.length - 2)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex 
                    ? 'bg-brown-500 w-4' 
                    : 'bg-gray-300 hover:bg-brown-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}