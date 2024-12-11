// app/(routes)/returns/page.tsx
"use client";

import Image from 'next/image';

interface ReturnedItem {
  id: string;
  name: string;
  brand?: string;
  price: number;
  originalPrice?: number; // Added as optional
  discount?: string; // Added as optional
  quantity: number;
  image: string;
  status: "Returned" | "Cancelled" | "Processing";
}

interface ReturnOrder {
  orderId: string;
  returnedOn: string;
  items: ReturnedItem[];
}

const returnOrders: ReturnOrder[] = [
  {
    orderId: "#50737644219291",
    returnedOn: "21 Jan 2024 22:08:49",
    items: [
      {
        id: "1",
        name: "Sumatra Single - Origin Coffee | 12oz",
        price: 305,
        quantity: 3,
        image: "/images/coffee/coffee1.png",
        status: "Returned"
      },
      {
        id: "2",
        name: "Lavazza Super Crema Espresso",
        price: 400,
        quantity: 3,
        image: "/images/coffee/coffee2.png",
        status: "Returned"
      },
      {
        id: "3",
        name: "High Voltage Bones Cups - 12 Count",
        price: 235,
        quantity: 3,
        image: "/images/coffee/coffee3.png",
        status: "Returned"
      }
    ]
  },
  {
    orderId: "#50737644219291",
    returnedOn: "15 Jan 2024 22:08:49",
    items: [
      {
        id: "4",
        name: "BLACK+DECKER 12-Cup Digital Coffee Maker",
        price: 1048,
        originalPrice: 1498,
        discount: "30% OFF",
        quantity: 3,
        image: "/images/machines/machine1.png",
        status: "Returned"
      }
    ]
  }
];

export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-xl font-semibold">My Returns & Cancellations</h1>
        <span className="text-gray-500">({returnOrders.reduce((acc, order) => acc + order.items.length, 0)} items)</span>
      </div>

      <div className="space-y-8">
        {returnOrders.map((order) => (
          <div key={`${order.orderId}-${order.returnedOn}`} className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <p className="text-sm">
                Returned on {order.returnedOn}
              </p>
              <p className="text-sm">
                Order ID{' '}
                <span className="text-green-600">
                  {order.orderId}
                </span>
              </p>
            </div>

            <div className="divide-y">
              {order.items.map((item) => (
                <div key={item.id} className="p-4 flex items-center">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 ml-4">
                    <h3 className="text-base font-medium">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-sm">
                        NPR. {item.price}
                      </p>
                      {item.originalPrice && item.discount && (
                        <>
                          <span className="text-sm text-gray-400 line-through">
                            NPR. {item.originalPrice}
                          </span>
                          <span className="text-sm text-green-600">
                            ({item.discount})
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.status === 'Returned' 
                        ? 'bg-red-100 text-red-600'
                        : item.status === 'Cancelled'
                        ? 'bg-gray-100 text-gray-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}