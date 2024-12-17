"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const carouselSlides = [
  {
    id: 1,
    image: "/images/ad-banner.svg"
  },
  {
    id: 2,
    image: "/images/ad-banner.svg"
  },
  {
    id: 3,
    image: "/images/ad-banner.svg"
  }
];

export default function ProductCarousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full bg-[#2C1810] relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[300px]">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              enabled: true,
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-white/50',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            {carouselSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button 
            className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all"
            type="button"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all"
            type="button"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2" />
        </div>
      </div>
    </div>
  );
}