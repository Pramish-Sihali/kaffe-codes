import Image from 'next/image';
import { Star } from 'lucide-react';

interface ReviewedItemProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  review: string;
  onEdit: () => void;
}

const ReviewedItem = ({
  image,
  name,
  price,
  rating,
  review,
  onEdit
}: ReviewedItemProps) => {
  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-8">
          <div className="relative w-24 h-24 border rounded bg-white flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain p-2"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-base text-gray-600 mt-2">NPR. {price}</p>
          </div>
        </div>

        <button
          onClick={onEdit}
          className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 text-base"
        >
          Edit
        </button>
      </div>

      <div className="flex gap-1 mb-4 pl-32">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
            }`}
          />
        ))}
      </div>

      <p className="text-base text-gray-700 pl-32">{review}</p>
    </div>
  );
};

export default ReviewedItem;