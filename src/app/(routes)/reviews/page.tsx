// app/(routes)/reviews/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Star, Edit2 } from 'lucide-react';
import ReviewFormModal from '@/components/reviews/ReviewFormModal';

interface Review {
  productId: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  purchaseDate: string;
  rating: number;
  review: string;
}

interface ToReviewProduct {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  purchaseDate: string;
}

const reviews: Review[] = [
  {
    productId: "high-voltage-1",
    brand: "HIGH VOLTAGE",
    name: "High Voltage Bones Cups - 12 Count",
    price: 235,
    image: "/images/coffee/coffee1.png",
    purchaseDate: "21 Jan 2024 22:08:49",
    rating: 5,
    review: "This product is really very amazing,i personally Like this product very much,it change my skin tone nd it looks more younger than before... It's very reasonable nd nice product for all typl love the shade , and the most important part its absolutely smudge proof , stick into my lips up to long hours. This velvety mat finish omg ladies you can give it a try, and trust me smash box never gonna let you down👇es of skin👍"
  },
  {
    productId: "hamilton-beach-1",
    brand: "HAMILTON BEACH",
    name: "Hamilton Beach Professional Coffee Maker",
    price: 1299,
    image: "/images/machines/machine1.png",
    purchaseDate: "21 Jan 2024 22:08:49",
    rating: 4,
    review: "Great coffee maker, works perfectly for my daily needs."
  }
];

const toReviewProducts: ToReviewProduct[] = [
  {
    id: "product-1",
    brand: "LAVAZZA",
    name: "Lavazza Super Crema Espresso",
    price: 499,
    image: "/images/coffee/coffee2.png",
    purchaseDate: "15 Jan 2024 10:05:50"
  }
];

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<'to-review' | 'reviewed'>('reviewed');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Review | ToReviewProduct | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [reviewsList, setReviewsList] = useState<Review[]>(reviews);
  const [toReviewList, setToReviewList] = useState<ToReviewProduct[]>(toReviewProducts);

  const handleWriteReview = (product: ToReviewProduct) => {
    setSelectedItem(product);
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditReview = (review: Review) => {
    setSelectedItem(review);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSubmitReview = (data: { rating: number; review: string }) => {
    if (isEditing && selectedItem) {
      // Update existing review
      setReviewsList(prev => prev.map(review => 
        review.productId === (selectedItem as Review).productId
          ? { ...review, ...data }
          : review
      ));
    } else if (selectedItem) {
      // Add new review
      const newReview: Review = {
        productId: (selectedItem as ToReviewProduct).id,
        brand: selectedItem.brand,
        name: selectedItem.name,
        price: selectedItem.price,
        image: selectedItem.image,
        purchaseDate: selectedItem.purchaseDate,
        rating: data.rating,
        review: data.review
      };
      setReviewsList(prev => [...prev, newReview]);
      setToReviewList(prev => prev.filter(item => item.id !== selectedItem.id));
    }

    setIsModalOpen(false);
    setSelectedItem(null);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">My Reviews</h1>

      <div className="border-b mb-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('to-review')}
            className={`pb-4 relative ${
              activeTab === 'to-review' 
                ? 'text-green-600 font-medium' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            To Review
            {activeTab === 'to-review' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('reviewed')}
            className={`pb-4 relative ${
              activeTab === 'reviewed' 
                ? 'text-green-600 font-medium' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Reviewed
            {activeTab === 'reviewed' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600"></div>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {activeTab === 'reviewed' ? (
          reviewsList.length > 0 ? (
            reviewsList.map((review) => (
              <div key={review.productId} className="bg-white rounded-lg shadow-sm">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-lg font-medium">{review.brand}</h2>
                    <p className="text-sm text-gray-500">Purchased on {review.purchaseDate}</p>
                  </div>

                  <div className="flex gap-6">
                    <div className="relative w-20 h-20 flex-shrink-0 border rounded">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base font-medium mb-2">{review.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">NPR. {review.price}</p>
                      
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-gray-700 mb-4">{review.review}</p>

                      <button 
                        onClick={() => handleEditReview(review)}
                        className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-2"
                      >
                        <Edit2 className="w-4 h-4" />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No reviews yet
            </div>
          )
        ) : (
          toReviewList.length > 0 ? (
            toReviewList.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-lg font-medium">{product.brand}</h2>
                    <p className="text-sm text-gray-500">Purchased on {product.purchaseDate}</p>
                  </div>

                  <div className="flex gap-6">
                    <div className="relative w-20 h-20 flex-shrink-0 border rounded">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base font-medium mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">NPR. {product.price}</p>
                      
                      <button 
                        onClick={() => handleWriteReview(product)}
                        className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
                      >
                        Write Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No products to review
            </div>
          )
        )}
      </div>

      {isModalOpen && selectedItem && (
        <ReviewFormModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedItem(null);
          }}
          onSubmit={handleSubmitReview}
          initialData={isEditing ? {
            rating: (selectedItem as Review).rating,
            review: (selectedItem as Review).review
          } : undefined}
          isEditing={isEditing}
          productInfo={{
            name: selectedItem.name,
            brand: selectedItem.brand,
            image: selectedItem.image
          }}
        />
      )}
    </div>
  );
}