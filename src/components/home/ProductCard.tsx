"use client";

import { Heart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  backgroundColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, backgroundColor = "bg-white" }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={`${backgroundColor} w-full flex flex-col`}>
      {/* Product Image Container */}
      <div className="relative aspect-square w-full mb-2">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-3"
            priority
          />
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 z-10"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="space-y-1">
        <p className="text-xs text-gray-600">{product.brand}</p>
        <h3 className="text-sm text-gray-900 line-clamp-2 h-10 font-medium">{product.name}</h3>
        <div className="flex items-center">
          <div className="flex text-base">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`${index < product.rating ? 'text-orange-400' : 'text-gray-200'}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="ml-2 text-xs text-gray-600">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">NPR. {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;