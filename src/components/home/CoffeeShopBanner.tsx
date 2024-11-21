"use client";
import Image from 'next/image';

export default function CoffeeShopBanner() {
  return (
    <div className="relative h-48 bg-brown-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 h-full relative z-10">
        <div className="flex items-center justify-between h-full">
          <div>
            <h1 className="text-6xl font-bold text-white">COFFEE</h1>
            <p className="text-3xl text-yellow-400 italic mt-2">Shop</p>
            <p className="text-white mt-4">• OPEN AT 9 AM •</p>
          </div>
          <div className="relative w-48 h-48">
            <Image
              src="/images/logo.png"
              alt="Coffee Cup"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* Coffee beans floating animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Image
            key={i}
            src="/images/logo.png"
            alt="Coffee Bean"
            width={24}
            height={24}
            className={`absolute animate-float opacity-50`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}