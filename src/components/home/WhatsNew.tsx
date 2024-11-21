"use client";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WhatsNew() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">WHAT&apos; NEW IN KAFFE CODES?</h2>
        
        <div className="relative bg-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/images/brownies/cake3.jpg"
                alt="CORFFAA"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <div className="text-green-600 font-medium mb-2">Available Now</div>
              <h3 className="text-2xl font-bold mb-4">CORFFAA</h3>
              <p className="text-gray-600 mb-6">
                Bento Brownie: A Small Bite Packed with Big Flavor, 
                Designed to Delight Those Who Cherish the Mini and Sweet 
                Moments in Life.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 inline-flex items-center">
                Explore More
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}