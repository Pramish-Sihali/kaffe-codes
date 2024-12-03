"use client";
import { useState, useEffect } from 'react';

export default function PlatformIntro() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["OPERATE", "START", "GROW"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

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
            <h1
              key={word}
              className={`text-3xl md:text-4xl font-bold text-green-500 absolute w-full transition-transform duration-500 ease-in-out ${
                index === currentWordIndex 
                  ? 'translate-y-0 opacity-100' 
                  : index < currentWordIndex 
                    ? '-translate-y-full opacity-0'
                    : 'translate-y-full opacity-0'
              }`}
            >
              {word}
            </h1>
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