"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Bakery Products",
    discount: "Up to 15% OFF",
    image: "/images/carousel/bakery.jpg",
    link: "/category/bakery"
  },
  {
    id: 2,
    title: "Tea",
    discount: "Up to 10% OFF",
    image: "/images/carousel/tea.jpg",
    link: "/category/tea"
  },
  {
    id: 3,
    title: "Utensils/ Equipment and Machinery",
    discount: "Up to 10% OFF",
    image: "/images/carousel/equipment.jpg",
    link: "/category/equipment"
  }
];

export default function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden bg-black">
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
            <Image 
              src={slide.image} 
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-lg">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-3xl text-white mb-8">
                    {slide.discount}
                  </p>
                  <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}