// components/products/ReviewsTab.tsx
"use client";

import { Star } from 'lucide-react';

interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
}

interface ReviewsTabProps {
  reviews: Review[];
  totalReviews: number;
  averageRating: number;
}

export default function ReviewsTab({ 
  reviews, 
  totalReviews, 
  averageRating 
}: ReviewsTabProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-gray-600">Our Valued Customer's Reviews</p>
          <p className="text-gray-500 text-sm">{totalReviews} genuine and verified reviews.</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center text-yellow-500 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-5 h-5" 
                fill={i < Math.floor(averageRating) ? 'currentColor' : 'none'} 
              />
            ))}
          </div>
          <p className="text-gray-600">{averageRating.toFixed(1)}/5 Overall Rating</p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
          Write a Review
        </button>
      </div>

      {reviews.map((review, idx) => (
        <div key={idx} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
          <div className="flex items-center mb-2">
            <p className="font-semibold text-gray-800 mr-2">{review.author}</p>
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4" 
                  fill={i < review.rating ? 'currentColor' : 'none'} 
                />
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-2">{review.date}</p>
          <p className="text-gray-600">{review.text}</p>
        </div>
      ))}
    </div>
  );
}