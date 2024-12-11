// components/products/ProductTabs.tsx
"use client";

import { useState } from 'react';
import ReviewsTab from './ReviewsTab';
import { Star } from 'lucide-react';

interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
}

interface ProductTabsProps {
  description: string;
  ingredients?: string[];
  reviews: Review[];
  rating: number;
  totalReviews: number;
}

export default function ProductTabs({
  description,
  ingredients = [],
  reviews,
  rating,
  totalReviews
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div>
      <div className="border-b">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-4 text-sm font-medium ${
              activeTab === 'description'
                ? 'border-b-2 border-brown-600 text-brown-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`pb-4 text-sm font-medium ${
              activeTab === 'ingredients'
                ? 'border-b-2 border-brown-600 text-brown-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Ingredients
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 text-sm font-medium ${
              activeTab === 'reviews'
                ? 'border-b-2 border-brown-600 text-brown-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Reviews ({totalReviews})
          </button>
        </div>
      </div>

      <div className="mt-8">
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <p>{description}</p>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Product Ingredients</h3>
            {ingredients.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No ingredients information available.</p>
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <ReviewsTab 
            reviews={reviews}
            totalReviews={totalReviews}
            averageRating={rating}
          />
        )}
      </div>
    </div>
  );
}