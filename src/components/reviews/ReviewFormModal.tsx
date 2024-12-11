import { useState } from 'react';
import Image from 'next/image';
import { Star, X } from 'lucide-react';
import BaseReviewModal from './BaseReviewModal';

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

const ReviewFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditing = false,
  productInfo
}: ReviewFormModalProps) => {
  const [rating, setRating] = useState(initialData?.rating || 0);
  const [review, setReview] = useState(initialData?.review || '');
  const [hover, setHover] = useState(0);

  return (
    <BaseReviewModal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? 'Edit Review' : 'Write a Review'}
    >
      <div className="p-6">
        {/* Product Info */}
        <div className="flex gap-4 mb-6 pb-6 border-b">
          <div className="relative w-16 h-16 border rounded bg-white">
            <Image
              src={productInfo.image}
              alt={productInfo.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <div>
            <h3 className="font-medium">{productInfo.brand}</h3>
            <p className="text-sm text-gray-600">{productInfo.name}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Rating</p>
          <div className="flex gap-1">
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

        {/* Review Text */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Review</p>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border rounded-lg p-4 h-32 resize-none focus:ring-1 focus:ring-green-500 focus:outline-none"
            placeholder="Share your thoughts about this product..."
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end items-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit({ rating, review })}
            disabled={!rating || !review.trim()}
            className="bg-green-600 text-white px-6 py-2.5 rounded hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isEditing ? 'Update Review' : 'Submit Review'}
          </button>
        </div>
      </div>
    </BaseReviewModal>
  );
};

export default ReviewFormModal;