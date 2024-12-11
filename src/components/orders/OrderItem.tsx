// components/orders/OrderItem.tsx
import Image from 'next/image';
import { Product } from '@/types/products';

interface OrderItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  status: 'Delivered' | 'Cancelled' | 'Processing';
  deliveredDate?: string;
  discount?: {
    originalPrice: number;
    percentage: number;
  };
}

export default function OrderItem({
  image,
  name,
  price,
  quantity,
  status,
  deliveredDate,
  discount,
}: OrderItemProps) {
  return (
    <div className="flex items-center gap-6 py-4">
      <div className="relative w-20 h-20 border rounded">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-900">{name}</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">NPR. {price.toLocaleString()}</p>
          {discount && (
            <>
              <span className="text-sm text-gray-400 line-through">
                NPR.{discount.originalPrice.toLocaleString()}
              </span>
              <span className="text-sm text-green-600">
                ({discount.percentage}% OFF)
              </span>
            </>
          )}
        </div>
      </div>

      <div className="text-right">
        <div className="flex items-center justify-end gap-8">
          <p className="text-sm text-gray-600">Quantity: {quantity}</p>
          <span className={`px-3 py-1 rounded-full text-sm ${
            status === 'Delivered' 
              ? 'bg-green-100 text-green-700'
              : status === 'Cancelled'
              ? 'bg-red-100 text-red-700'
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {status}
          </span>
        </div>
        {deliveredDate && (
          <p className="text-sm text-gray-500 mt-1">
            Delivered on {deliveredDate}
          </p>
        )}
      </div>
    </div>
  );
}