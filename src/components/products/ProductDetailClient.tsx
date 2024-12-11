// components/products/ProductDetailClient.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Product } from '@/types/products';
import { useWishlist } from '@/context/WishlistContext';
import { Carousel } from '@/components/home/Carousel';
import ProductCard from '@/components/home/ProductCard';
import ProductTabs from './ProductTabs';

interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
}

interface ProductDetailClientProps {
  product: Product;
  similarProducts: Product[];
}

const mockReviews: Review[] = [
  {
    author: "John Doe",
    date: "May 10, 2024",
    rating: 5,
    text: "Excellent product, would definitely buy again!",
  },
  {
    author: "Jane Smith",
    date: "May 9, 2024",
    rating: 4,
    text: "Good quality product, fast delivery.",
  },
];

export default function ProductDetailClient({ 
  product, 
  similarProducts 
}: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);

  const productImages = Array(5).fill(product.image);

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleWishlistToggle = () => {
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 flex gap-4">
                <div className="flex flex-col gap-4">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-16 md:w-20 h-16 md:h-20 flex-shrink-0 border rounded-lg 
                                ${selectedImage === index ? 'border-brown-600' : 'border-gray-200'}`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </button>
                  ))}
                </div>

                <div className="flex-1">
                  <div className="relative aspect-square bg-white border rounded-lg">
                    <Image
                      src={productImages[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-xl text-gray-600 mb-2">{product.brand}</h2>
                
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
                  <button 
                    onClick={handleWishlistToggle}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart 
                      className={`w-6 h-6 ${
                        isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
                      }`} 
                    />
                  </button>
                </div>

                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-2xl font-semibold text-gray-900">
                    NPR. {product.price.toLocaleString()}
                  </p>
                </div>

                <div className="mb-6 space-y-2">
                  <p className="text-sm text-gray-600">
                    Category: <span className="font-medium text-gray-900">{product.category}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Availability: 
                    <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? ' In Stock' : ' Out of Stock'}
                    </span>
                  </p>
                </div>

                {product.inStock && (
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                    <button className="flex-1 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <ProductTabs
              description={product.description || "No description available."}
              reviews={mockReviews}
              rating={product.rating}
              totalReviews={product.reviews}
            />
          </div>

          {similarProducts.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-8">Similar Products</h2>
              <Carousel 
                itemsPerView={5}
                autoPlayInterval={0}
                showDots={true}
                showArrows={true}
                className="px-2"
              >
                {similarProducts.map((similarProduct) => (
                  <ProductCard 
                    key={similarProduct.id} 
                    product={similarProduct}
                    section={similarProduct.category.toLowerCase()}
                  />
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}