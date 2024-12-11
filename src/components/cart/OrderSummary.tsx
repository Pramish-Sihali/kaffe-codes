import BaseButton from '@/components/home/BaseButton';
import { Product } from '@/types/products';

interface CartItem extends Product {
  quantity: number;
}

interface OrderSummaryProps {
  cartItems: CartItem[];
  selectedItemIds: string[];
  onCheckout: () => void;
}

const OrderSummary = ({
  cartItems = [],
  selectedItemIds = [],
  onCheckout
}: OrderSummaryProps) => {
  if (!cartItems || !Array.isArray(cartItems)) return null;

  const selectedItems = cartItems.filter(item => selectedItemIds?.includes(item.id));
  const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = selectedItems.length > 0 ? 272 : 0;
  const shippingDiscount = selectedItems.length > 0 ? 136 : 0;
  const total = subtotal + shippingFee - shippingDiscount;

  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <h2 className="text-xl font-medium mb-8">Order Summary</h2>
      
      <div className="space-y-4 mb-8">
        <div className="flex justify-between text-base">
          <span className="text-gray-600">
            Sub Total ({selectedItems.length} {selectedItems.length === 1 ? 'item' : 'items'})
          </span>
          <span>NPR. {subtotal.toLocaleString()}</span>
        </div>
        {selectedItems.length > 0 && (
          <>
            <div className="flex justify-between text-base">
              <span className="text-gray-600">Shipping Fee</span>
              <span>NPR. {shippingFee}</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="text-gray-600">Shipping Fee Discount</span>
              <span>NPR. {shippingDiscount}</span>
            </div>
          </>
        )}
      </div>

      <div className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Voucher Code"
            className="flex-1 px-4 py-2.5 border rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <button className="px-6 py-2.5 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
            APPLY
          </button>
        </div>
      </div>

      <div className="flex justify-between text-lg font-medium mb-8">
        <span>Total</span>
        <span>NPR. {total.toLocaleString()}</span>
      </div>

      <BaseButton
        onClick={onCheckout}
        disabled={selectedItems.length === 0}
        className="w-full"
      >
        {`PROCEED TO CHECKOUT (${selectedItems.length})`}
      </BaseButton>
    </div>
  );
};

export default OrderSummary;