"use client";

import React from 'react';

export default function ProductBanner() {
  return (
    <div className="w-7xl bg-[#2C1810] relative px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[300px]">
          <img
            src="/images/ad-banner.svg"
            alt="Advertisement Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}