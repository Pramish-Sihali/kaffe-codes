// components/wishlist/WishlistItem.tsx
import Image from 'next/image';
import { Trash } from 'lucide-react';
import { Product } from '@/types/products';
import { useCart } from '@/context/CartContext';

interface WishlistItemProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
}

export default function WishlistItem({
  product,
  isSelected,
  onSelect,
  onRemove,
}: WishlistItemProps) {
  const { addToCart } = useCart();

  const handleAddToBag = () => {
    addToCart(product);
  };

  return (
    <div className="flex items-center gap-4 py-4 px-4 bg-white">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        className="w-5 h-5 border-gray-300 rounded text-green-600 focus:ring-green-500"
      />
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-medium text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">NPR. {product.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onRemove}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Trash className="w-5 h-5 text-gray-400" />
        </button>
        <button
          onClick={handleAddToBag}
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm whitespace-nowrap"
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}