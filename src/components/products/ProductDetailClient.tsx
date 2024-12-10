"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import CategoryIcons from '@/components/home/CategoryIcons';
import Footer from '@/components/layout/Footer';
import { Carousel } from '@/components/home/Carousel';
import ProductCard from '@/components/home/ProductCard';
import ProductTabs from './ProductTabs';

interface Product {
  id: number;
  brand: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

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

export default function ProductDetailClient({ product, similarProducts }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Mock multiple images for gallery
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image
  ];

  // Mock data for description, ingredients, and reviews
  const description = "A delightful blend of premium coffee beans...";
  const ingredients = ["100% Arabica coffee beans", "Natural flavors"];
  const reviews: Review[] = [
    {
      author: "Samantha Agrawal",
      date: "May 10, 2024",
      rating: 5,
      text: "This product is really very amazing,i personally Like this product very much,it change my skin tone nd it looks more younger than before... It's very reasonable nd nice product for all types of skin👍",
    },
    {
      author: "Samantha Agrawal",
      date: "May 9, 2024",
      rating: 5,
      text: "I'm nc41 and I love this shade on me ❤️ Best part is got another full size lipstick totally free with lots of free samples. Love nykaa",
    },
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
            {/* Product Images Section */}
            <div className="w-full md:w-1/2 flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 flex-shrink-0 border rounded-lg 
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

              {/* Main Image */}
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

            {/* Product Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl text-gray-600 mb-2">{product.brand}</h2>
              
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
                <button className="p-2">
                  <Heart className="w-6 h-6 text-gray-400" />
                </button>
              </div>

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

              <div className="mb-6">
                <p className="text-xl font-semibold">
                  NPR. {product.price}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Sold BY: <span className="font-medium text-gray-900">QLODU</span>
                </p>
              </div>

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

          {/* Product Tabs Section */}
          <div className="mt-16">
            <ProductTabs
              description={description}
              ingredients={ingredients}
              reviews={reviews}
            />
          </div>

          {/* Similar Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Similar Products</h2>
            <Carousel itemsPerView={4} autoPlayInterval={0}>
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Carousel>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Path: components/products/ProductDetailClient.tsx