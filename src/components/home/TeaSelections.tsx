// components/home/TeaSelections.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { teaProducts } from '@/data/teaProducts';

export default function TeaSelections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 6;

  const totalPages = Math.ceil(teaProducts.length / productsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProducts = () => {
    const start = currentIndex * productsPerPage;
    return teaProducts.slice(start, start + productsPerPage);
  };

  return (
    <section className="max-w-[1400px] mx-auto relative py-16">
      <div className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium mb-1">Tea Selections</h2>
          <p className="text-gray-600 text-sm">Every Sip Tells a Journey</p>
        </div>

        <div className="flex">
          {/* Products Grid */}
          <div className="w-[60%] relative">
            <div className="relative">
              <button 
                onClick={handlePrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {getCurrentProducts().map((product) => (
                  <div key={product.id} className="relative group">
                    <button className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    </button>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="aspect-square relative mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
                        <h3 className="text-sm text-gray-900 line-clamp-2">{product.name}</h3>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span 
                                key={i} 
                                className={`text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                        <p className="text-sm font-medium">
                          NPR. {product.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? 'bg-brown-500 w-6'
                      : 'bg-gray-200 w-2 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Background Image */}
          <div className="relative flex-1">
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[1100px] h-[1100px]"
            >
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                  }}
                >
                  <Image
                    src="/images/tea/beans.png"
                    alt="Tea Beans"
                    fill
                    className="object-cover scale-125"
                    style={{
                      filter: 'blur(2px)',
                    }}
                  />
                </div>

                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 20%, white 70%)',
                    filter: 'blur(30px)',
                  }}
                />

                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 40%, rgba(255,255,255,0.8) 60%, white 80%)',
                    mixBlendMode: 'overlay',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}