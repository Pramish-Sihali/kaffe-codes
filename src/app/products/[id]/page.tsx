// app/products/[id]/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import CategoryIcons from '@/components/home/CategoryIcons';
import Footer from '@/components/layout/Footer';
import coffeeProducts from '@/data/coffeeProducts';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Find product from coffeeProducts data
  const product = coffeeProducts.find(p => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Mock multiple images for gallery
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryIcons />

      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Gallery */}
            <div className="w-full md:w-1/2">
              {/* Main Image */}
              <div className="relative aspect-square bg-white border rounded-lg mb-4">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-4 overflow-x-auto">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-24 flex-shrink-0 border rounded-lg 
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
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2">
              {/* Brand */}
              <h2 className="text-xl text-gray-600 mb-2">{product.brand}</h2>
              
              {/* Product Name */}
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
                <button className="p-2">
                  <Heart className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < product.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-xl font-semibold">
                  NPR. {product.price}
                </p>
              </div>

              {/* Seller Info */}
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Sold BY: <span className="font-medium text-gray-900">QLODU</span>
                </p>
              </div>

              {/* Quantity Selector and Add to Cart */}
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
                <button className="flex-1 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">
                  ADDED SUCCESSFULLY
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}