
"use client";
// ProductCard.tsx
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  brand: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image Container */}
      <div className="relative mb-2">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="w-full h-[100px] object-contain mx-auto"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-0 right-0 p-1.5 rounded-full bg-white/80 hover:bg-white"
        >
          <Heart 
            className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-wider text-gray-500">{product.brand}</p>
        <h3 className="text-xs font-medium text-gray-900 line-clamp-2 h-8">{product.name}</h3>
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-[10px] ${index < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="ml-1 text-[10px] text-gray-500">({product.reviews})</span>
        </div>
        <p className="text-xs font-medium text-gray-900">NPR. {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;