// components/reviews/ReviewFormModal.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Star, X } from 'lucide-react';
import BaseButton from '@/components/home/BaseButton';

interface ReviewFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { rating: number; review: string }) => void;
  initialData?: {
    rating: number;
    review: string;
  };
  isEditing?: boolean;
  productInfo: {
    name: string;
    brand: string;
    image: string;
  };
}

export default function ReviewFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditing = false,
  productInfo
}: ReviewFormModalProps) {
  const [rating, setRating] = useState(initialData?.rating || 0);
  const [review, setReview] = useState(initialData?.review || '');
  const [hover, setHover] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ rating, review });
    setRating(0);
    setReview('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-medium">
            {isEditing ? 'Edit Review' : 'Write a Review'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex gap-6 mb-8 pb-6 border-b">
            <div className="relative w-20 h-20 border rounded bg-white">
              <Image
                src={productInfo.image}
                alt={productInfo.name}
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">{productInfo.brand}</h3>
              <p className="text-base text-gray-600 mt-1">{productInfo.name}</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-base text-gray-600 mb-3">Rating</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(0)}
                >
                  <Star
                    className={`w-8 h-8 ${
                      index <= (hover || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-200'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-base text-gray-600 mb-3">Review</p>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border rounded-lg p-4 h-40 resize-none focus:ring-1 focus:ring-green-500 focus:outline-none text-base"
              placeholder="Share your thoughts about this product..."
            />
          </div>

          <div className="flex justify-end items-center gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-gray-600 hover:text-gray-900 text-base"
            >
              Cancel
            </button>
            <BaseButton
              variant="text"
              onClick={handleSubmit}
              disabled={!rating || !review.trim()}
              className="px-8"
            >
              {isEditing ? 'Update Review' : 'Submit Review'}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}