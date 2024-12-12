import Image from 'next/image';
import BaseButton from '@/components/home/BaseButton';

interface ReviewItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  brandName: string;
  purchaseDate: string;
  onWrite: () => void;
}

const ReviewItem = ({
  image,
  name,
  price,
  quantity,
  brandName,
  purchaseDate,
  onWrite
}: ReviewItemProps) => {
  return (
    <div className="px-8 py-6">
      <div className="grid grid-cols-[auto,1fr,auto,1fr,auto] items-center gap-12">
        <div className="relative w-24 h-24 border rounded bg-white">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-2"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-base text-gray-600 mt-2">
            NPR. {price}
          </p>
        </div>

        <div className="text-base text-gray-600">
          Quantity: {quantity}
        </div>

        <div /> {/* Spacer */}

        <BaseButton
        variant = 'default'
          onClick={onWrite}
          className="w-full gap-3"
        >
          Write a Review
          <span className="text-xl leading-none">&rsaquo;</span>
        </BaseButton>
      </div>
    </div>
  );
};

export default ReviewItem;