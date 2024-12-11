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
    <div className="grid grid-cols-[auto,1fr,auto,auto,auto] items-center gap-8 px-8 py-4">
      <div className="relative w-16 h-16 border rounded bg-white">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div>
        <h3 className="text-base font-medium text-gray-900">{name}</h3>
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

      <div className="text-gray-600 text-sm">
        Quantity: {quantity}
      </div>

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

      {deliveredDate && (
        <p className="text-sm text-gray-500 whitespace-nowrap">
          Delivered on {deliveredDate}
        </p>
      )}
    </div>
  );
};

export default OrderItem;