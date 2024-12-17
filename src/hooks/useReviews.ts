// hooks/useReviews.ts
import { useState } from 'react';
import type { Review, ReviewFormData } from '@/types/review';

export function useReviews(initialReviews: Review[]) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const addReview = async (data: ReviewFormData) => {
    const newReview: Review = {
      author: "Current User",
      date: new Date().toISOString().split('T')[0],
      rating: data.rating,
      text: data.review,
      verified: true,
      authorImage: "/default-avatar.png"
    };

    setReviews([newReview, ...reviews]);
  };

  return {
    reviews,
    addReview
  };
}