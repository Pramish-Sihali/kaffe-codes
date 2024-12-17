// components/products/ReviewsTab.tsx
"use client";

import { useState } from 'react';
import { Star } from 'lucide-react';
import BaseButton from '@/components/home/BaseButton';
import ReviewFormModal from '../reviews/ReviewFormModal';

interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
  verified?: boolean;
  authorImage?: string;
}

interface ReviewsTabProps {
  reviews: Review[];
  totalReviews: number;
  averageRating: number;
  userInfo?: {
    name: string;
    email: string;
    image: string;
  };
  isAuthenticated: boolean;
  onSubmit: (data: { rating: number; review: string }) => Promise<void>;
}

export default function ReviewsTab({
  reviews,
  totalReviews,
  averageRating,
  userInfo,
  isAuthenticated,
  onSubmit
}: ReviewsTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitReview = async (data: { rating: number; review: string }) => {
    try {
      await onSubmit(data);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-lg font-medium text-gray-900 mb-2">
        Our Valued Customer's Reviews
      </h2>

      <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mb-8">
        <div className="text-gray-600">
          <span className="font-medium">{totalReviews}</span> genuine and verified reviews.
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="flex items-center text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  fill={i < Math.floor(averageRating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-gray-700">{averageRating.toFixed(1)} Overall Rating</span>
          </div>
          <BaseButton
            variant="text"
            onClick={() => setIsModalOpen(true)}
            className="px-6"
          >
            Write a Review
          </BaseButton>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="flex gap-4 pb-6 border-b border-gray-100 last:border-0">
            {review.authorImage && (
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={review.authorImage}
                    alt={review.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  {review.verified && (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      {userInfo && (
        <ReviewFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmitReview}
          productInfo={{
            name: userInfo.name,
            brand: userInfo.email,
            image: userInfo.image
          }}
        />
      )}
    </div>
  );
}