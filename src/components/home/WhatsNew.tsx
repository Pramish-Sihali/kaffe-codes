"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselData = [
  {
    id: 1,
    title: "CORFFAA",
    description: "Bento Brownie: A Small Bite Packed with Big Flavor, Designed to Delight Those Who Cherish the Mini and Sweet Moments in Life.",
    status: "Available Now",
    imagePath: "/images/offer1.jpg"
  },
  {
    id: 2,
    title: "CHOCOLATE DELIGHT",
    description: "Rich, fudgy brownies loaded with premium dark chocolate chunks, creating an indulgent experience for true chocolate lovers.",
    status: "New Arrival",
    imagePath: "/images/brownies/cake1.jpg"
  },
  {
    id: 3,
    title: "NUTTY PARADISE",
    description: "Classic brownies generously studded with roasted nuts, offering a perfect balance of chewy texture and nutty crunch.",
    status: "Coming Soon",
    imagePath: "/images/brownies/cake2.jpg"
  }
];

export default function WhatsNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">WHAT&apos;S NEW IN KAFFE CODES?</h2>
        
        <div className="relative bg-brown-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image section with navigation buttons */}
            <div className="relative flex items-center gap-4">
              <button
                onClick={handlePrevious}
                className="p-2 bg-#F3EEEA rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="relative flex-1">
                <div className="aspect-square relative">
                  <img
                    src={carouselData[currentIndex].imagePath}
                    alt={carouselData[currentIndex].title}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Content section */}
            <div className="flex flex-col justify-center">
              <div className="text-green-600 font-medium mb-2">
                {carouselData[currentIndex].status}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {carouselData[currentIndex].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {carouselData[currentIndex].description}
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 inline-flex items-center">
                Explore More
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-green-600 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}