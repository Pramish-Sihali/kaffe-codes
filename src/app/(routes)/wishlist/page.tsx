// src/app/(routes)/wishlist/page.tsx
"use client";

import { useState } from 'react';
import { useWishlist } from '@/context/WishlistContext';
import WishlistItem from '@/components/wishlist/WishlistItem';
import { Trash, ShoppingBag } from 'lucide-react';

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(wishlistItems.map(item => item.id));
    }
  };

  const handleSelectItem = (productId: string) => {
    setSelectedItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach(id => removeFromWishlist(id));
    setSelectedItems([]);
  };

  const handleAddToBag = (productId: string) => {
    // Add to cart functionality will be implemented here
    console.log('Adding to bag:', productId);
  };

  // Group items by brand
  const itemsByBrand = wishlistItems.reduce((acc, item) => {
    if (!acc[item.brand]) {
      acc[item.brand] = [];
    }
    acc[item.brand].push(item);
    return acc;
  }, {} as Record<string, typeof wishlistItems>);

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-gray-500">Your wishlist is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gray-50 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">My Wishlist</h1>
            <span className="text-gray-500">({wishlistItems.length} items)</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleRemoveSelected}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              disabled={selectedItems.length === 0}
            >
              <Trash className="w-5 h-5" />
              DELETE
            </button>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2"
              disabled={selectedItems.length === 0}
            >
              <ShoppingBag className="w-5 h-5" />
              ADD TO BAG
            </button>
          </div>
        </div>

        {/* Select All */}
        <div className="px-4 py-3 border-b">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedItems.length === wishlistItems.length}
              onChange={handleSelectAll}
              className="w-5 h-5 border-gray-300 rounded text-green-600 focus:ring-green-500"
            />
            <span className="font-medium">SELECT ALL</span>
          </label>
        </div>

        {/* Items by Brand */}
        <div className="divide-y">
          {Object.entries(itemsByBrand).map(([brand, items]) => (
            <div key={brand}>
              <div className="px-4 py-2 bg-gray-100">
                <h2 className="font-medium">{brand}</h2>
              </div>
              <div className="divide-y">
                {items.map(item => (
                  <WishlistItem
                    key={item.id}
                    product={item}
                    isSelected={selectedItems.includes(item.id)}
                    onSelect={() => handleSelectItem(item.id)}
                    onRemove={() => removeFromWishlist(item.id)}
                    onAddToBag={() => handleAddToBag(item.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}