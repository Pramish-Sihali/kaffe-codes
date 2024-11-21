"use client";
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    mainImage: "/images/reviews/main-review.jpg",
    smallImages: [
      "/images/reviews/coffee-1.jpg",
      "/images/reviews/coffee-1.jpg",
      "/images/reviews/coffee-1.jpg",
      "/images/reviews/coffee-1.jpg",
      "/images/reviews/coffee-1.jpg",
      "/images/reviews/coffee-1.jpg",
     
    ]
  }
];

export default function UnfilteredReviews() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Unfiltered Reviews</h2>
          <p className="text-gray-600 mt-1">Buy after knowing your product review</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Review Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={reviews[0].mainImage}
              alt="Main Review"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white opacity-90" />
            </div>
          </div>

          {/* Small Images Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {reviews[0].smallImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Review ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-2 h-2 rounded-full bg-brown-500" />
          <button className="w-2 h-2 rounded-full bg-gray-300" />
          <button className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}