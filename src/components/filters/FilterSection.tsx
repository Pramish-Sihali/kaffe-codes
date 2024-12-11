// components/filters/FilterSection.tsx
"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FilterState {
  brands: string[];
  priceRange: [number, number];
  category: string[];
  discount: string[];
  inStock: boolean;
}

interface FilterSectionProps {
  availableBrands: string[];
  availableCategories: string[];
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
  initialFilters: FilterState;
}

export default function FilterSection({
  availableBrands,
  availableCategories,
  onFiltersChange,
  onReset,
  initialFilters
}: FilterSectionProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [expanded, setExpanded] = useState({
    category: true,
    brands: true,
    discount: true,
    price: true,
    availability: true
  });
  const [brandSearch, setBrandSearch] = useState('');

  const toggleSection = (section: keyof typeof expanded) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const filteredBrands = availableBrands.filter(brand =>
    brand.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <div className="bg-white rounded shadow w-72">
      <div className="flex justify-between items-center bg-brown-600 text-white px-4 py-3 rounded-t">
        <h3 className="text-base font-medium">Filter by</h3>
        <button 
          onClick={onReset}
          className="text-sm hover:underline"
        >
          Reset
        </button>
      </div>

      <div className="divide-y">
        {/* Category Filter */}
        <div className="px-4 py-4">
          <button
            onClick={() => toggleSection('category')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Category</span>
            {expanded.category ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expanded.category && (
            <div className="mt-3 space-y-2.5">
              {availableCategories.map((category) => (
                <label key={category} className="flex items-center hover:bg-gray-50 p-1 rounded">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(category)}
                    onChange={() => {
                      const newCategories = filters.category.includes(category)
                        ? filters.category.filter(c => c !== category)
                        : [...filters.category, category];
                      updateFilters({ category: newCategories });
                    }}
                    className="w-4 h-4 border-gray-300 rounded text-brown-600 focus:ring-brown-500"
                  />
                  <span className="ml-2 text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brands Filter */}
        <div className="px-4 py-4">
          <button
            onClick={() => toggleSection('brands')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Brands</span>
            {expanded.brands ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expanded.brands && (
            <div className="mt-3">
              <div className="relative mb-3">
                <input
                  type="text"
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  placeholder="Search brands..."
                  className="w-full pl-8 pr-3 py-1.5 border rounded text-sm focus:ring-1 focus:ring-brown-500 focus:border-brown-500"
                />
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {filteredBrands.map((brand) => (
                  <label key={brand} className="flex items-center hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => {
                        const newBrands = filters.brands.includes(brand)
                          ? filters.brands.filter(b => b !== brand)
                          : [...filters.brands, brand];
                        updateFilters({ brands: newBrands });
                      }}
                      className="w-4 h-4 border-gray-300 rounded text-brown-600 focus:ring-brown-500"
                    />
                    <span className="ml-2 text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="px-4 py-4">
          <button
            onClick={() => toggleSection('price')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Price</span>
            {expanded.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expanded.price && (
            <div className="mt-4">
              <div className="px-2 mb-4">
                <input
                  type="range"
                  min="0"
                  max="2500"
                  value={filters.priceRange[1]}
                  onChange={(e) => updateFilters({
                    priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                  })}
                  className="w-full accent-brown-600"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <input
                    type="text"
                    value={`NPR. ${filters.priceRange[0]}`}
                    onChange={(e) => {
                      const value = parseInt(e.target.value.replace(/\D/g, ''));
                      updateFilters({
                        priceRange: [value || 0, filters.priceRange[1]]
                      });
                    }}
                    className="w-full px-3 py-1.5 border rounded text-sm focus:ring-1 focus:ring-brown-500 focus:border-brown-500"
                  />
                </div>
                <span className="text-sm text-gray-500">To</span>
                <div className="flex-1">
                  <input
                    type="text"
                    value={`NPR. ${filters.priceRange[1]}`}
                    onChange={(e) => {
                      const value = parseInt(e.target.value.replace(/\D/g, ''));
                      updateFilters({
                        priceRange: [filters.priceRange[0], value || 2500]
                      });
                    }}
                    className="w-full px-3 py-1.5 border rounded text-sm focus:ring-1 focus:ring-brown-500 focus:border-brown-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Availability */}
        <div className="px-4 py-4">
          <button
            onClick={() => toggleSection('availability')}
            className="flex justify-between items-center w-full"
          >
            <span className="text-base font-medium">Availability</span>
            {expanded.availability ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expanded.availability && (
            <div className="mt-3 space-y-2.5">
              <label className="flex items-center justify-between hover:bg-gray-50 p-1 rounded">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => updateFilters({ inStock: e.target.checked })}
                    className="w-4 h-4 border-gray-300 rounded text-brown-600 focus:ring-brown-500"
                  />
                  <span className="ml-2 text-gray-700">In Stock</span>
                </div>
                <span className="text-sm text-gray-400">(15)</span>
              </label>
              <label className="flex items-center justify-between hover:bg-gray-50 p-1 rounded opacity-50">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    disabled
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700">Out of Stock</span>
                </div>
                <span className="text-sm text-gray-400">(7)</span>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}