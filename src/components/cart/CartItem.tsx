// components/cart/CartItem.tsx
import Image from 'next/image';
import { Trash } from 'lucide-react';
import { Product } from '@/types/products';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="relative w-20 h-20 border rounded">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-2"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600">NPR. {item.price.toLocaleString()}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-50"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="px-3 py-1 border-x">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-50"
          >
            +
          </button>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Trash className="w-5 h-5 text-gray-400" />
        </button>

        <p className="text-base font-medium min-w-[100px] text-right">
          NPR. {(item.price * item.quantity).toLocaleString()}
        </p>
      </div>
    </div>
  );
}