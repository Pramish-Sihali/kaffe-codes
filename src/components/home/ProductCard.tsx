// components/home/ProductCard.tsx
"use client";

import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import { useEffect, useState, useCallback, memo } from 'react';
import { Product } from '@/types/products';
import { Toast } from '@/components/ui/Toast';

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
  const [showToast, setShowToast] = useState(false);

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
      setShowToast(true);
    } else {
      addToWishlist(modifiedProduct);
      setShowToast(true);
    }
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <Link href={`/products/${product.id}`} className="group block w-full">
      <div className={`${backgroundColor} h-[410px] w-[231px] flex flex-col rounded-lg transition-all duration-300`}>
          <div className="relative aspect-square w-full h-[300px]">
            <div className="relative w-full h-full p-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            <button
              onClick={handleFavoriteClick}
              className="absolute top-4 right-4 z-10 p-2"
              aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite
                    ? 'text-red-500 fill-current'
                    : 'text-gray-400'
                }`}
                fill={isFavorite ? 'currentColor' : 'none'}
              />
            </button>
          </div>

          <div className="p-4 space-y-2">
            <p className="text-sm text-gray-500 uppercase font-medium">{product.brand}</p>
            <h3 className="text-base text-gray-900 font-medium line-clamp-2 min-h-[48px]">
              {product.name}
            </h3>
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={`star-${uniqueProductId}-${index}`}
                    className={index < product.rating ? '' : 'text-gray-200'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
            <p className="text-base font-medium text-gray-900">
              NPR. {product.price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>

      {showToast && (
        <Toast 
          message={isFavorite ? 'Added to wishlist' : 'Removed from wishlist'}
          type="success"
        />
      )}
    </>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;