"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import { ShoppingBag } from 'lucide-react';
import OrderSummary from '@/components/cart/OrderSummary';
import { Product } from '@/types/products';

const CartPage = () => {
  const { cartItems } = useCart();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const itemsByBrand = cartItems?.reduce((acc, item) => {
    if (!acc[item.brand]) {
      acc[item.brand] = [];
    }
    acc[item.brand].push(item);
    return acc;
  }, {} as Record<string, (Product & { quantity: number })[]>) || {};

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems?.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems?.map((item) => item.id) || []);
    }
  };

  const handleCheckout = () => {
    // Implement checkout logic
    console.log('Checking out with items:', selectedItems);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-medium mb-8">My Bag</h1>
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">Your shopping bag is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-8">
        My Bag <span className="text-xl text-gray-500">({cartItems.length} items)</span>
      </h1>

      <div className="flex gap-8">
        <div className="flex-1">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedItems.length === cartItems.length}
                  onChange={handleSelectAll}
                  className="w-5 h-5 border-gray-300 rounded text-green-600 bg-gray-50 focus:ring-green-500"
                />
                <span className="font-medium text-base">SELECT ALL</span>
              </label>
            </div>

            {Object.entries(itemsByBrand).map(([brand, items]) => (
              <div key={brand} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="px-8 py-4 border-b border-gray-200">
                  <h2 className="text-base font-medium">{brand}</h2>
                </div>
                <div>
                  {items.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      isSelected={selectedItems.includes(item.id)}
                      onSelect={() => {
                        setSelectedItems(prev => {
                          if (prev.includes(item.id)) {
                            return prev.filter(id => id !== item.id);
                          }
                          return [...prev, item.id];
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-96">
          <OrderSummary
            cartItems={cartItems}
            selectedItemIds={selectedItems}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;