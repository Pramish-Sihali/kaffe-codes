"use client";

import ReturnItem from '@/components/returns/ReturnItem';
import ReturnGroup from '@/components/returns/ReturnGroup';

const mockReturns = [
  {
    id: '#507376442192921',
    returnedOn: '21 Jan 2024 22:08:49',
    items: [
      {
        image: '/images/products/sumatra-coffee.png',
        name: 'Sumatra Single - Origin Coffee | 12oz',
        price: 305,
        quantity: 3,
        status: 'Returned' as const
      },
      {
        image: '/images/products/lavazza-coffee.png',
        name: 'Lavazza Super Crema Espresso',
        price: 400,
        quantity: 3,
        status: 'Returned' as const
      },
      {
        image: '/images/products/bones-cups.png',
        name: 'High Voltage Bones Cups - 12 Count',
        price: 235,
        quantity: 3,
        status: 'Returned' as const
      }
    ]
  },
  {
    id: '#507376442192921',
    returnedOn: '15 Jan 2024 22:08:49',
    items: [
      {
        image: '/images/products/black-decker.png',
        name: 'BLACK+DECKER 12-Cup Digital Coffee Maker',
        price: 1048,
        quantity: 3,
        status: 'Returned' as const,
        discount: {
          originalPrice: 1498,
          percentage: 30
        }
      }
    ]
  }
];

export default function ReturnsPage() {
  const totalItems = mockReturns.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-medium">
            My Returns & Cancellations
          </h1>
          <span className="text-xl text-gray-500">({totalItems} items)</span>
        </div>
      </div>

      <div className="space-y-6">
        {mockReturns.map((group) => (
          <ReturnGroup 
            key={group.id} 
            id={group.id}
            returnedOn={group.returnedOn}
          >
            {group.items.map((item, index) => (
              <ReturnItem key={`${group.id}-${index}`} {...item} />
            ))}
          </ReturnGroup>
        ))}
      </div>
    </div>
  );
}