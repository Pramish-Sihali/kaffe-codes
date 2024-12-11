// app/(routes)/orders/page.tsx
"use client";

import { useState } from 'react';
import OrderItem from '@/components/orders/OrderItem';

const mockOrders = [
  {
    id: '#207386448192921',
    placedOn: '21 Jan 2024 22:08:49',
    items: [
      {
        image: '/images/coffee/coffee1.png',
        name: 'Sumatra Single - Origin Coffee | 12oz',
        price: 305,
        quantity: 3,
        status: 'Delivered' as const,
        deliveredDate: '21 Jan 2024 22:08:49'
      },
      {
        image: '/images/coffee/coffee2.png',
        name: 'Lavazza Super Crema Espresso',
        price: 400,
        quantity: 5,
        status: 'Cancelled' as const,
        deliveredDate: '15Jan 2024 10:05:50'
      },
      {
        image: '/images/coffee/coffee3.png',
        name: 'High Voltage Bones Cups - 12 Count',
        price: 235,
        quantity: 1,
        status: 'Delivered' as const,
        deliveredDate: '5 Jan 2024 22:08:49'
      }
    ]
  },
  {
    id: '#50737644219291',
    placedOn: '15 Jan 2024 23:07:50',
    items: [
      {
        image: '/images/machines/machine1.png',
        name: 'BLACK+DECKER 12-Cup Digital Coffee Maker',
        price: 1048,
        quantity: 3,
        status: 'Delivered' as const,
        deliveredDate: '21 Jan 2024 22:08:49',
        discount: {
          originalPrice: 1498,
          percentage: 30
        }
      },
      {
        image: '/images/machines/machine2.png',
        name: 'Ninja CFN601 Espresso & Coffee Barista System',
        price: 1200,
        quantity: 3,
        status: 'Delivered' as const,
        deliveredDate: '21 Jan 2024 22:08:49'
      }
    ]
  }
];

export default function OrdersPage() {
  const [filter, setFilter] = useState('All Orders');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gray-50 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">My Orders</h1>
            <span className="text-gray-500">(6 items)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-brown-500"
            >
              <option>All Orders</option>
              <option>Delivered</option>
              <option>Cancelled</option>
              <option>Processing</option>
            </select>
          </div>
        </div>

        {/* Orders */}
        <div className="divide-y">
          {mockOrders.map((order) => (
            <div key={order.id} className="px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm">
                    Order ID{' '}
                    <span className="text-green-600 font-medium">{order.id}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Placed on {order.placedOn}
                  </p>
                </div>
              </div>
              <div className="divide-y">
                {order.items.map((item, index) => (
                  <OrderItem key={`${order.id}-${index}`} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}