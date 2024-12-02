"use client";

import { useState } from 'react';
import { brands, categories } from '@/data/brands';
import AlphabetFilter from '@/components/brands/AlphabetFilter';
import CategoryFilter from '@/components/brands/CategoryFilter';
import BrandGrid from '@/components/brands/BrandGrid';

export default function BrandsPage() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Handle letter click - if same letter is clicked, clear the filter
  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? "" : letter);
  };

  // Handle category click - if same category is clicked, clear the filter
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? "" : category);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="flex">
        <AlphabetFilter
          selectedLetter={selectedLetter}
          onLetterClick={handleLetterClick}
        />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Brands Selection</h1>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
          <BrandGrid
            brands={brands}
            selectedLetter={selectedLetter}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </main>
  );
}