// components/filters/FilterSection.tsx
"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterState {
  brands: string[];
  priceRange: [number, number];
  category: string[];
  discount: string[];
  inStock: boolean;
}

interface FilterSectionProps {
  availableBrands: string[];
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
}

export default function FilterSection({ availableBrands, onFiltersChange, onReset }: FilterSectionProps) {
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    priceRange: [0, 2500],
    category: [],
    discount: [],
    inStock: false
  });

  const [expanded, setExpanded] = useState({
    category: false,
    brands: false,
    discount: false,
    price: false,
    availability: false
  });

  const toggleSection = (section: keyof typeof expanded) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  return (
    <div className="w-full md:w-64 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center bg-brown-600 text-white px-4 py-3">
        <h3 className="text-lg font-medium">Filter by</h3>
        <button
          onClick={onReset}
          className="text-sm hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Filter Sections */}
      <div className="divide-y">
        {/* Category Section */}
        <div className="px-4 py-3">
          <button
            onClick={() => toggleSection('category')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Category</span>
            {expanded.category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expanded.category && (
            <div className="mt-2 space-y-2">
              {/* Add your categories here */}
            </div>
          )}
        </div>

        {/* Brands Section */}
        <div className="px-4 py-3">
          <button
            onClick={() => toggleSection('brands')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Brands</span>
            {expanded.brands ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expanded.brands && (
            <div className="mt-2 space-y-2">
              {availableBrands.map((brand) => (
                <label key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => {
                      const newBrands = filters.brands.includes(brand)
                        ? filters.brands.filter(b => b !== brand)
                        : [...filters.brands, brand];
                      updateFilters({ brands: newBrands });
                    }}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Discount Section */}
        <div className="px-4 py-3">
          <button
            onClick={() => toggleSection('discount')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Discount</span>
            {expanded.discount ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expanded.discount && (
            <div className="mt-2">
              {/* Add your discount options here */}
            </div>
          )}
        </div>

        {/* Price Range Section */}
        <div className="px-4 py-3">
          <button
            onClick={() => toggleSection('price')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Price</span>
            {expanded.price ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expanded.price && (
            <div className="mt-4 px-2">
              <div className="relative mb-4">
                <input
                  type="range"
                  min="0"
                  max="2500"
                  value={filters.priceRange[1]}
                  onChange={(e) => updateFilters({
                    priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                  })}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => updateFilters({
                      priceRange: [parseInt(e.target.value) || 0, filters.priceRange[1]]
                    })}
                    className="w-full px-3 py-2 border rounded text-sm"
                    placeholder="NPR. 0"
                  />
                </div>
                <span className="text-gray-500">To</span>
                <div className="flex-1">
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => updateFilters({
                      priceRange: [filters.priceRange[0], parseInt(e.target.value) || 2500]
                    })}
                    className="w-full px-3 py-2 border rounded text-sm"
                    placeholder="NPR. 2500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Availability Section */}
        <div className="px-4 py-3">
          <button
            onClick={() => toggleSection('availability')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Availability</span>
            {expanded.availability ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expanded.availability && (
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => updateFilters({ inStock: e.target.checked })}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">In Stock (15)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Out of Stock (7)</span>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}