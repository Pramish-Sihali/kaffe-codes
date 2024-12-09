"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    title: "Bakery Products",
    image: "/images/carousel/bakery.png",
    discount: "Up to 15% OFF",
    link: "/category/bakery",
    buttonText: "Explore"
  },
  {
    id: 2,
    title: "Tea",
    image: "/images/carousel/tea.png",
    discount: "Up to 10% OFF",
    link: "/category/tea",
    buttonText: "Explore"
  },
  {
    id: 3,
    title: "Utensils/ Equipment and Machinery",
    image: "/images/carousel/equipment.jpg",
    discount: "Up to 10% OFF",
    link: "/category/machinery",
    buttonText: "Explore"
  },
  {
    id: 4,
    title: "Coffee Selection",
    image: "/images/carousel/coffee.jpg",
    discount: "Up to 20% OFF",
    link: "/category/coffee",
    buttonText: "Explore"
  },
  {
    id: 5,
    title: "Special Brownies",
    image: "/images/carousel/bakery.png",
    discount: "Up to 25% OFF",
    link: "/category/brownies",
    buttonText: "Explore"
  }
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to avoid hydration mismatch

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => 
      prev === 0 ? carouselItems.length - (isMobile ? 1 : 3) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === carouselItems.length - (isMobile ? 1 : 3) ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full bg-gray-50">
      <div className="w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out gap-0 md:gap-6"
          style={{ 
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)`
          }}
        >
          {carouselItems.map((item) => (
            <div 
              key={item.id}
              className="w-full md:w-1/3 flex-shrink-0"
            >
              <div className="relative h-[400px] md:h-[60vh] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base mb-4">
                      {item.discount}
                    </p>
                    <Link 
                      href={item.link}
                      className="inline-block bg-white text-black px-4 md:px-6 py-2 hover:bg-gray-100 transition-colors text-sm"
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
      >
        <ChevronLeft className="h-4 md:h-5 w-4 md:w-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
      >
        <ChevronRight className="h-4 md:h-5 w-4 md:w-5" />
      </button>
    </section>
  );
}