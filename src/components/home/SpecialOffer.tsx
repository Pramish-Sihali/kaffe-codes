"use client";

import Image from 'next/image';

export default function SpecialOffer() {
  return (
    <div className="relative bg-custom-brown text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Friday Special Offer at Kaffe Codes !!!
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-2xl md:text-4xl font-bold">
            GET 50% OFF
          </span>
          <div className="hidden md:block relative w-[200px] h-[160px]">
            <Image
              src="/images/creamcake.svg"
              alt="Special Offer"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}