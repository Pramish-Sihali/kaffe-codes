// components/home/ProductCard.tsx
"use client";

import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import { useEffect, useState, useCallback, memo } from 'react';
import { Product } from '@/types/products';

interface ProductCardProps {
  product: Product;
  backgroundColor?: string;
  section?: string;
}

const ProductCard = memo(({ 
  product, 
  backgroundColor = "bg-white",
  section = 'default'
}: ProductCardProps) => {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const [isFavorite, setIsFavorite] = useState(false);

  const uniqueProductId = `${section}-${product.id}`;
  
  const modifiedProduct = {
    ...product,
    id: uniqueProductId,
  };

  const checkIsInWishlist = useCallback(() => {
    return wishlistItems.some(item => item.id === uniqueProductId);
  }, [wishlistItems, uniqueProductId]);

  useEffect(() => {
    setIsFavorite(checkIsInWishlist());
  }, [checkIsInWishlist]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      removeFromWishlist(uniqueProductId);
    } else {
      addToWishlist(modifiedProduct);
    }
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className={`${backgroundColor} w-full flex flex-col transition-all duration-300 hover:shadow-lg rounded-lg p-3`}>
        <div className="relative aspect-square w-full mb-2">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          {!product.inStock ? (
            <span className="absolute top-3 right-3 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
              Out of Stock
            </span>
          ) : (
            <button
              onClick={handleFavoriteClick}
              className="absolute top-3 right-3 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart 
                className={`w-5 h-5 ${
                  isFavorite 
                    ? 'text-red-500 fill-current' 
                    : 'text-gray-400 group-hover:text-gray-600'
                }`}
              />
            </button>
          )}
        </div>

        <div className="space-y-2 flex-grow">
          <div className="space-y-1">
            <p className="text-sm text-gray-600 font-medium">{product.brand}</p>
            <h3 className="text-base text-gray-900 font-medium line-clamp-2 h-12">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center">
            <div className="flex text-base">
              {[...Array(5)].map((_, index) => (
                <span
                  key={`star-${uniqueProductId}-${index}`}
                  className={`${index < product.rating ? 'text-orange-400' : 'text-gray-200'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviews})
            </span>
          </div>

          <div className="pt-2">
            <p className="text-lg font-semibold text-gray-900">
              NPR. {product.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;