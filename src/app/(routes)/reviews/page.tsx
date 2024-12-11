"use client";

import { useState } from 'react';
import ReviewItem from '@/components/reviews/ReviewItem';
import ReviewGroup from '@/components/reviews/ReviewGroup';
import ReviewFormModal from '@/components/reviews/ReviewFormModal';

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

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<'to-review' | 'reviewed'>('to-review');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleWriteReview = (item: any, brand: string, purchaseDate: string) => {
    setSelectedItem({
      ...item,
      brand,
      purchaseDate
    });
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-6">My Reviews</h1>

      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('to-review')}
          className={`pb-4 relative ${
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
          className={`pb-4 relative ${
            activeTab === 'reviewed' ? 'text-green-600 font-medium' : 'text-gray-600'
          }`}
        >
          Reviewed
          {activeTab === 'reviewed' && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600" />
          )}
        </button>
      </div>

      <div className="space-y-6">
        {mockToReview.map((group) => (
          <ReviewGroup
            key={group.brand}
            brandName={group.brand}
            purchaseDate={group.purchaseDate}
          >
            {group.items.map((item) => (
              <ReviewItem
                key={item.id}
                {...item}
                brandName={group.brand}
                purchaseDate={group.purchaseDate}
                onWrite={() => handleWriteReview(item, group.brand, group.purchaseDate)}
              />
            ))}
          </ReviewGroup>
        ))}
      </div>

      {selectedItem && (
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