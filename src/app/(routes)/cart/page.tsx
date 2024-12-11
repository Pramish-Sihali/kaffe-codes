// app/(routes)/cart/page.tsx
"use client";

import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import { ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cartItems, totalAmount, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Your shopping bag is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gray-50 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Shopping Bag</h1>
            <span className="text-gray-500">({cartItems.length} items)</span>
          </div>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Clear All
          </button>
        </div>

        {/* Items */}
        <div className="divide-y px-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Summary */}
        <div className="px-6 py-4 bg-white mt-4 rounded-b-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">NPR. {totalAmount.toLocaleString()}</span>
          </div>
          <button 
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}