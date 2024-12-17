"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselSlide {
  id: number;
  image: string;
}

interface ProductCarouselProps {
  slides: CarouselSlide[];
}

export default function ProductCarousel({ slides }: ProductCarouselProps) {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto relative">
        <div className="h-[300px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
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
            className="h-full rounded-lg overflow-hidden"
          >
            {slides.map((slide) => (
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
            className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full hover:bg-white shadow-md transition-all -translate-x-1/2"
            type="button"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button 
            className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full hover:bg-white shadow-md transition-all translate-x-1/2"
            type="button"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2" />
        </div>
      </div>
    </div>
  );
}