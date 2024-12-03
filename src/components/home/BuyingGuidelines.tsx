// components/BuyingGuidelines.js
"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BuyingGuidelines = () => {
  const guides = [
    { src: '/images/guides/guide1.png', title: 'Baking Gear Guide' },
    { src: '/images/guides/guide2.png', title: 'Essential Gear For Your Bakery' },
    { src: '/images/guides/guide3.png', title: 'Coffee Machines Demystified' },
    { src: '/images/guides/guide4.png', title: 'Equip Your Kitchen' },
    { src: '/images/guides/guide5.png', title: 'Cafe Supplies!' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? guides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === guides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      className="relative bg-cover bg-no-repeat py-8"
      style={{ backgroundImage: `url('/images/guides/backdrop.svg')` }}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Buying Guidelines</h2>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {guides.map((guide, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md ${
                  index === currentIndex ? 'block' : 'hidden sm:block'
                }`}
              >
                <Image
                  src={guide.src}
                  alt={guide.title}
                  width={240}
                  height={240}
                  className="rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{guide.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 -translate-y-1/2 left-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={handlePrev}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={handleNext}
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuidelines;