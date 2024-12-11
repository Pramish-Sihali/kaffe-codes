import Image from 'next/image';

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
    <div className="px-8 py-4">
      <div className="grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
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
          <p className="text-sm text-gray-600 mt-1">
            NPR. {price}
          </p>
        </div>

        <div className="text-gray-600 text-sm">
          Quantity: {quantity}
        </div>

        <button
          onClick={onWrite}
          className="bg-green-600 text-white text-sm px-6 py-2.5 rounded hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          Write a Review
          <span className="text-lg leading-none">&rsaquo;</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;