"use client";
import { useState, useEffect } from 'react';

export default function PlatformIntro() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["OPERATE", "START", "GROW"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Reduced total time to 2 seconds per word

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Kaffe Code Platform To
        </h2>
        <div className="h-[48px] md:h-[56px] relative overflow-hidden">
          {words.map((word, index) => (
            <div
              key={word}
              className="absolute w-full transition-all duration-400 ease-out"
              style={{
                opacity: currentWordIndex === index ? 1 : 0,
                transform: `translateY(${(index - currentWordIndex) * 100}%)`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '400ms',
                visibility: Math.abs(index - currentWordIndex) <= 1 ? 'visible' : 'hidden'
              }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-green-500">
                {word}
              </h1>
            </div>
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Your Bakery/ Tea/ Coffee Business
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Kaffe Codes is the platform to run a successful online business in Nepal.
        </p>
      </div>
    </div>
  );
}