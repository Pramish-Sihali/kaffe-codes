"use client";

import React from 'react';
import { Tab } from '@headlessui/react';
import ReviewsTab from './ReviewsTab';

interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
}

interface ProductTabsProps {
  description: string;
  ingredients: string[];
  reviews: Review[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({ description, ingredients, reviews }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 border-b border-gray-200">
        <Tab
          className={({ selected }) =>
            `px-4 py-3 text-sm font-medium leading-5 text-gray-600 focus:outline-none ${
              selected ? 'border-b-2 border-black' : 'hover:text-gray-800'
            }`
          }
        >
          DESCRIPTION
        </Tab>
        <Tab
          className={({ selected }) =>
            `px-4 py-3 text-sm font-medium leading-5 text-gray-600 focus:outline-none ${
              selected ? 'border-b-2 border-black' : 'hover:text-gray-800'
            }`
          }
        >
          INGREDIENTS
        </Tab>
        <Tab
          className={({ selected }) =>
            `px-4 py-3 text-sm font-medium leading-5 text-gray-600 focus:outline-none ${
              selected ? 'border-b-2 border-black' : 'hover:text-gray-800'
            }`
          }
        >
          REVIEWS ({reviews.length})
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-6">
        <Tab.Panel>
          <p className="text-gray-600">{description}</p>
        </Tab.Panel>
        <Tab.Panel>
          <ul className="list-disc pl-4 text-gray-600">
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </Tab.Panel>
        <Tab.Panel>
          <ReviewsTab
            reviews={reviews}
            totalReviews={reviews.length}
            averageRating={reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length}
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductTabs;