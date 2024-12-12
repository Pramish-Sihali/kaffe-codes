"use client";

import { useState } from 'react';
import { Star } from 'lucide-react';
import ReviewFormModal from '@/components/reviews/ReviewFormModal';
import BaseButton from '@/components/home/BaseButton';
import Image from 'next/image';

const mockToReview = [
  {
    brand: "HIGH VOLTAGE",
    purchaseDate: "21 Jan 2024 22:08:49",
    items: [
      {
        id: "hv-1",
        image: "/images/products/high-voltage-1.png",
        name: "High Voltage Bones Cups - 12 Count",
        price: 235,
        quantity: 3
      },
      {
        id: "hv-2",
        image: "/images/products/sumatra-1.png",
        name: "Sumatra Single - Origin Coffee | 12oz",
        price: 305,
        quantity: 3
      },
      {
        id: "hv-3",
        image: "/images/products/sumatra-2.png", 
        name: "Sumatra Single - Origin Coffee | 12oz",
        price: 305,
        quantity: 3
      }
    ]
  },
  {
    brand: "HAMILTON BEACH",
    purchaseDate: "23 Jan 2024 22:08:49", 
    items: [
      {
        id: "hb-1",
        image: "/images/products/black-decker.png",
        name: "BLACK+DECKER 12-Cup Digital Coffee Maker",
        price: 1048,
        quantity: 3,
        discount: {
          originalPrice: 1498,
          percentage: 30
        }
      }
    ]
  }
];

const mockReviewed = [
  {
    brand: "HIGH VOLTAGE",
    purchaseDate: "21 Jan 2024 22:08:49",
    items: [
      {
        id: "rv-1",
        image: "/images/products/high-voltage-1.png",
        name: "High Voltage Bones Cups - 12 Count",
        price: 235,
        rating: 5,
        review: "This product is really very amazing, I personally like this product very much. It's very reasonable and nice product for all types. The quality is exceptional and the taste is perfect."
      }
    ]
  },
  {
    brand: "HAMILTON BEACH",
    purchaseDate: "21 Jan 2024 22:08:49",
    items: [
      {
        id: "rv-2",
        image: "/images/products/black-decker.png",
        name: "BLACK+DECKER 12-Cup Digital Coffee Maker",
        price: 1048,
        rating: 4,
        review: "Great coffee maker, perfect for daily use. Easy to clean and maintain."
      }
    ]
  }
];

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<'to-review' | 'reviewed'>('to-review');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleWriteReview = (item: any, brand: string, purchaseDate: string) => {
    setSelectedItem({
      ...item,
      brand,
      purchaseDate
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditReview = (item: any, brand: string) => {
    setSelectedItem({
      ...item,
      brand
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-8">My Reviews</h1>

      <div className="bg-gray-50 rounded-lg mb-6">
        <div className="flex">
          <button
            onClick={() => setActiveTab('to-review')}
            className={`px-6 py-4 relative ${
              activeTab === 'to-review' ? 'text-green-600 font-medium' : 'text-gray-600'
            }`}
          >
            To Review
            {activeTab === 'to-review' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('reviewed')}
            className={`px-6 py-4 relative ${
              activeTab === 'reviewed' ? 'text-green-600 font-medium' : 'text-gray-600'
            }`}
          >
            Reviewed
            {activeTab === 'reviewed' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {activeTab === 'to-review' ? (
          mockToReview.map((group) => (
            <div
              key={group.brand}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-2">
                  <h2 className="text-base font-medium">{group.brand}</h2>
                  <p className="text-sm text-gray-500">
                    Purchased on {group.purchaseDate}
                  </p>
                </div>

                {group.items.map((item) => (
                  <div key={item.id} className="mt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-6">
                        <div className="relative w-20 h-20 border rounded bg-white">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div>
                          <h3 className="text-base font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            NPR. {item.price}
                          </p>
                        </div>
                      </div>
                      <BaseButton
                        onClick={() =>
                          handleWriteReview(item, group.brand, group.purchaseDate)
                        }
                        className="px-4 py-1 border rounded hover:bg-gray-50"
                      >
                        Write Review
                      </BaseButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          mockReviewed.map((group) => (
            <div key={group.brand} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="mb-2">
                  <h2 className="text-base font-medium">{group.brand}</h2>
                  <p className="text-sm text-gray-500">Purchased on {group.purchaseDate}</p>
                </div>

                {group.items.map((item) => (
                  <div key={item.id} className="mt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-6">
                        <div className="relative w-20 h-20 border rounded bg-white">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div>
                          <h3 className="text-base font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">NPR. {item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleEditReview(item, group.brand)}
                        className="px-4 py-1 border rounded hover:bg-gray-50"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="mt-4">
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= item.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{item.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && selectedItem && (
        <ReviewFormModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedItem(null);
          }}
          onSubmit={(data) => {
            console.log('Review submitted:', data);
            setIsModalOpen(false);
            setSelectedItem(null);
          }}
          isEditing={isEditing}
          initialData={isEditing ? {
            rating: selectedItem.rating,
            review: selectedItem.review
          } : undefined}
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