"use client";

import { useState } from 'react';
import OrderItem from '@/components/orders/OrderItem';
import OrderGroup from '@/components/orders/OrderGroup';

const mockOrders = [
  {
    id: '#207386448192921',
    placedOn: '21 Jan 2024 22:08:49',
    items: [
      {
        image: "/images/coffee/coffee1.png",
        name: 'Sumatra Single - Origin Coffee | 12oz',
        price: 305,
        quantity: 3,
        status: 'Delivered' as const,
        deliveredDate: '21 Jan 2024 22:08:49'
      },
      {
        image: "/images/coffee/coffee2.png",
        name: 'Lavazza Super Crema Espresso',
        price: 400,
        quantity: 5,
        status: 'Cancelled' as const,
        deliveredDate: '15Jan 2024 10:05:50'
      },
      {
        image: "/images/coffee/coffee3.png",
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
        image: "/images/coffee/coffee1.png",
        name: 'BLACK+DECKER 12-Cup Digital Coffee Maker',
        price: 1048,
        quantity: 3,
        status: 'Delivered' as const,
        deliveredDate: '21 Jan 2024 22:08:49',
        discount: {
          originalPrice: 1498,
          percentage: 30
        }
      }
    ]
  }
];

export default function OrdersPage() {
  const [filter, setFilter] = useState('All Orders');

  const totalItems = mockOrders.reduce((sum, order) => sum + order.items.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-2xl font-medium">
            My Orders
          </h1>
          <span className="text-xl text-gray-500">({totalItems} items)</span>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className="text-sm">Show:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-4 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              <option>All Orders</option>
              <option>Delivered</option>
              <option>Cancelled</option>
              <option>Processing</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {mockOrders.map((order) => (
          <OrderGroup 
            key={order.id} 
            id={order.id}
            placedOn={order.placedOn}
          >
            {order.items.map((item, index) => (
              <OrderItem key={`${order.id}-${index}`} {...item} />
            ))}
          </OrderGroup>
        ))}
      </div>
    </div>
  );
}