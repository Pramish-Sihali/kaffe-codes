import Image from 'next/image';
import { Trash } from 'lucide-react';
import { Product } from '@/types/products';
import { useCart } from '@/context/CartContext';
import BaseCartItem, { CartQuantityButton } from '@/components/cart/BaseCartItem';

interface CartItemProps {
  item: Product & { quantity: number };
  isSelected: boolean;
  onSelect: () => void;
}

const CartItem = ({ item, isSelected, onSelect }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <BaseCartItem>
      <div className="flex items-start gap-8 flex-1">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          className="w-5 h-5 mt-6 border-gray-300 rounded text-green-600 bg-gray-100 focus:ring-green-500"
        />

        <div className="relative w-24 h-24">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex-1 pt-4">
          <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-2">
            NPR. {item.price.toLocaleString()}
          </p>
        </div>

        <div className="flex items-start gap-8 pt-4">
          <div className="flex items-center bg-white rounded-full border">
            <CartQuantityButton
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              −
            </CartQuantityButton>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <CartQuantityButton
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </CartQuantityButton>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="p-2 text-gray-400 hover:text-gray-600 rounded transition-colors"
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      </div>
    </BaseCartItem>
  );
};

export default CartItem;