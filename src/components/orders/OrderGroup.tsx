// components/orders/OrderGroup.tsx
interface OrderGroupProps {
  id: string;
  placedOn: string;
  children: React.ReactNode;
}

const OrderGroup = ({ id, placedOn, children }: OrderGroupProps) => {
  const isGreenId = id.startsWith('#2');
  const idColor = isGreenId ? 'text-green-600' : 'text-blue-600';

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="px-8 py-4">
        <p className="text-[15px]">
          Order ID{' '}
          <span className={`font-medium ${idColor}`}>{id}</span>
        </p>
        <p className="text-[15px] text-gray-500">
          Placed on {placedOn}
        </p>
      </div>
      <div className="divide-y border-t border-gray-200">
        {children}
      </div>
    </div>
  );
};

export default OrderGroup;