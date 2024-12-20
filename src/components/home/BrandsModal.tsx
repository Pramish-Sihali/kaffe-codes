"use client";

import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Brand } from '@/types';
import { brands } from '@/data/brands';

interface BrandsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryTabs = [
  { id: 'tea', label: 'Top Tea Brands' },
  { id: 'coffee', label: 'Top Coffee Brands' },
  { id: 'utensils', label: 'Utensils' },
  { id: 'machinery', label: 'Machinery' },
  { id: 'bakery', label: 'Bakery Products' },
];

const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const BrandsModal: React.FC<BrandsModalProps> = ({ isOpen, onClose }) => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>(brands);

  // Group brands by first letter
  const brandsByLetter = brands.reduce((acc: { [key: string]: string[] }, brand) => {
    const firstLetter = brand.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(brand.name);
    return acc;
  }, {});

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    let filtered = [...brands];

    if (activeTab) {
      filtered = filtered.filter(brand => 
        brand.tab_category === categoryTabs.find(tab => tab.id === activeTab)?.label
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLetter) {
      filtered = filtered.filter(brand =>
        brand.name.charAt(0).toUpperCase() === selectedLetter
      );
    }

    setFilteredBrands(filtered);
  }, [searchQuery, activeTab, selectedLetter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50">
      <div className="fixed inset-20 bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex h-full">
          {/* Left Sidebar */}
          <div className="w-80 bg-gray-50 flex flex-col rounded-l-xl relative p-4">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Brands"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 text-lg rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Brand List and Alphabet Navigation */}
            <div className="flex flex-1 overflow-hidden">
              {/* Brand List */}
              <div className="flex-1 overflow-y-auto pr-4">
                {alphabet.map((letter) => {
                  const brandsForLetter = brandsByLetter[letter] || [];
                  if (brandsForLetter.length === 0) return null;
                  
                  return (
                    <div key={letter} className="mb-6">
                      <div className="text-xl font-semibold mb-2">{letter}</div>
                      {brandsForLetter.map((brandName) => (
                        <div
                          key={brandName}
                          onClick={() => setSelectedLetter(letter)}
                          className={`py-1.5 text-lg cursor-pointer ${
                            selectedLetter === letter ? 'text-green-600' : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {brandName}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>

              {/* Alphabet Quick Navigation */}
              <div className="w-8 flex flex-col items-center py-2">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => {
                      setSelectedLetter(letter);
                      const firstBrandElement = document.querySelector(`[data-letter="${letter}"]`);
                      if (firstBrandElement) {
                        firstBrandElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`text-sm py-1 w-full text-center transition-colors ${
                      selectedLetter === letter 
                        ? 'text-green-600 font-medium' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Category Tabs */}
            <div className="px-8 pt-6 pb-8">
              <div className="flex space-x-4 overflow-x-auto">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(activeTab === tab.id ? null : tab.id);
                      setSelectedLetter(null);
                    }}
                    className={`px-6 py-3 rounded-lg text-lg font-semibold whitespace-nowrap transition-colors
                      ${activeTab === tab.id 
                        ? 'bg-green-900 text-white' 
                        : 'bg-green-900 bg-opacity-5 text-green-900 hover:bg-opacity-10'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Brands Grid */}
            <div className="flex-1 overflow-y-auto px-8 pb-8">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                {filteredBrands.map((brand) => (
                  <Link
                    key={brand.name}
                    href={`/products?brand=${encodeURIComponent(brand.name)}`}
                    onClick={() => onClose()}
                    className="group"
                  >
                    <div 
                      data-letter={brand.name.charAt(0).toUpperCase()}
                      className="aspect-square bg-white border rounded-xl p-4 flex items-center justify-center transition-all hover:shadow-lg hover:border-green-200"
                    >
                      <Image
                        src={brand.image_path}
                        alt={brand.name}
                        width={70}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-3 text-base text-center text-gray-700 font-medium group-hover:text-green-600">
                      {brand.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandsModal;