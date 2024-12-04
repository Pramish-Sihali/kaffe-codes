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
    image: "/images/carousel/bakery.jpg",
    discount: "Up to 25% OFF",
    link: "/category/brownies",
    buttonText: "Explore"
  }
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
      prev === 0 ? carouselItems.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === carouselItems.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative bg-gray-50">
      <div className="w-full overflow-hidden space-x-2">
        <div 
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {carouselItems.map((item) => (
            <div 
              key={item.id}
              className="w-full min-w-[calc(33.33vw-32px)] relative group"
            >
              <div className="relative h-[500px] overflow-hidden mt-4 px-2 ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-lg mb-6">
                      {item.discount}
                    </p>
                    <Link 
                      href={item.link}
                      className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg"
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

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 ">
        {Array.from({ length: carouselItems.length - 2 }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors  ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50'
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
          />
        ))}
      </div>
    </section>
  );
}