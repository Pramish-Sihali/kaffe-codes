
"use client";
import Image from 'next/image';
import { Trash } from 'lucide-react';
import { Product } from '@/types/products';
import AddButton from '@/components/home/AddButton';
import BaseListItem from '@/components/home/BaseListItem';

interface WishlistItemProps {
  product: Product;
  isSelected: boolean;
  isAdded: boolean;
  onSelect: () => void;
  onRemove: () => void;
  onAddToBag: () => void;
}

export default function WishlistItem({
  product,
  isSelected,
  isAdded,
  onSelect,
  onRemove,
  onAddToBag,
}: WishlistItemProps) {
  return (
    <BaseListItem>
      <div className="flex items-center gap-8 flex-1 max-w-4xl">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          className="w-5 h-5 border-gray-900 rounded text-green-600 bg-gray-900 focus:ring-green-500"
        />
        
        <div className="relative w-16 h-16">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="text-sm mt-1">
            <span className="text-gray-500">NPR.</span> {product.price.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8 ml-8">
        <button
          onClick={onRemove}
          className="p-2 text-gray-400 hover:text-gray-600 rounded"
        >
          <Trash className="w-5 h-5" />
        </button>
        <AddButton
          text={isAdded ? 'ADDED' : 'ADD TO BAG'}
          onClick={onAddToBag}
          className={isAdded ? 'cursor-not-allowed' : ''}
          disabled={isAdded}
          variant="list"
        />
      </div>
    </BaseListItem>
  );
}