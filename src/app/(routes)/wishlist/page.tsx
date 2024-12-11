"use client";

import { useState } from 'react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import WishlistItem from '@/components/wishlist/WishlistItem';
import { Trash } from 'lucide-react';
import { Product } from '@/types/products';
import AddButton from '@/components/home/AddButton';

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleSelectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(wishlistItems.map((item) => item.id));
    }
  };

  const handleSelectItem = (productId: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => removeFromWishlist(id));
    setSelectedItems([]);
    setAddedItems([]);
  };

  const handleAddToBag = (product: Product) => {
    if (!addedItems.includes(product.id)) {
      addToCart(product);
      setAddedItems((prev) => [...prev, product.id]);
    }
  };

  const handleAddAllToBag = () => {
    wishlistItems.forEach((product) => handleAddToBag(product));
    setSelectedItems([]);
  };

  const itemsByBrand = wishlistItems.reduce((acc, item) => {
    if (!acc[item.brand]) {
      acc[item.brand] = [];
    }
    acc[item.brand].push(item);
    return acc;
  }, {} as Record<string, Product[]>);

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-medium mb-8">My Wishlist</h1>
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-8">
        My Wishlist{' '}
        <span className="text-xl text-gray-500">({wishlistItems.length} items)</span>
      </h1>

      <div className="bg-gray-100 rounded-lg mb-8 p-6">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedItems.length === wishlistItems.length}
              onChange={handleSelectAll}
              className="w-5 h-5 border-gray-300 rounded text-green-600 bg-gray-100 focus:ring-green-500"
            />
            <span className="font-medium text-base">SELECT ALL</span>
          </label>

          <div className="flex items-center gap-6">
            <button
              onClick={handleRemoveSelected}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 rounded"
              disabled={selectedItems.length === 0}
            >
              <Trash className="w-5 h-5" />
              <span className="font-medium">DELETE</span>
            </button>
            <AddButton
              text={addedItems.length === wishlistItems.length ? 'ADDED SUCCESSFULLY' : 'ADD TO BAG'}
              onClick={handleAddAllToBag}
              disabled={selectedItems.length === 0}
              className={selectedItems.length === 0 ? 'cursor-not-allowed' : ''}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(itemsByBrand).map(([brand, items]) => (
          <div key={brand} className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="px-8 py-4 border-b border-gray-200">
              <h2 className="text-base font-medium">{brand}</h2>
            </div>
            <div>
              {items.map((item) => (
                <WishlistItem
                  key={item.id}
                  product={item}
                  isSelected={selectedItems.includes(item.id)}
                  isAdded={addedItems.includes(item.id)}
                  onSelect={() => handleSelectItem(item.id)}
                  onRemove={() => removeFromWishlist(item.id)}
                  onAddToBag={() => handleAddToBag(item)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}