// components/orders/OrderItem.tsx
import Image from 'next/image';

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

const OrderItem = ({
  image,
  name,
  price,
  quantity,
  status,
  deliveredDate,
  discount,
}: OrderItemProps) => {
  return (
    <div className="grid grid-cols-12 items-center gap-6 px-8 py-4">
      {/* Image */}
      <div className="col-span-1">
        <div className="relative w-16 h-16 border rounded bg-white">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-2"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="col-span-5 min-w-0">
        <h3 className="text-base font-medium text-gray-900 truncate">{name}</h3>
        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="text-gray-600">NPR. {price}</span>
          {discount && (
            <>
              <span className="text-gray-400 line-through">
                NPR. {discount.originalPrice}
              </span>
              <span className="text-green-600">
                ({discount.percentage}% OFF)
              </span>
            </>
          )}
        </div>
      </div>

      {/* Quantity */}
      <div className="col-span-2 text-gray-600 text-sm">
        Quantity: {quantity}
      </div>

      {/* Status */}
      <div className="col-span-2">
        <span
          className={`
            px-3 py-1 rounded-full text-sm whitespace-nowrap
            ${status === 'Delivered' ? 'bg-green-100 text-green-700' :
              status === 'Cancelled' ? 'bg-red-100 text-red-700' :
              'bg-yellow-100 text-yellow-700'}
          `}
        >
          {status}
        </span>
      </div>

      {/* Delivery Date */}
      <div className="col-span-2 text-sm text-gray-500 whitespace-nowrap">
        {deliveredDate && `Delivered on ${deliveredDate}`}
      </div>
    </div>
  );
};

export default OrderItem;