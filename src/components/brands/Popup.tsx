"use client";

import { FC } from "react";
import Image from "next/image";

// Define the type for the brand data
interface BrandData {
  name: string;
  category: string;
  image_path: string;
  additional_info: string;
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  brandData: BrandData | null;
}

const Popup: FC<PopupProps> = ({ isOpen, onClose, brandData }) => {
  if (!isOpen || !brandData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-xl w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{brandData.name}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            X
          </button>
        </div>
        <div className="mt-4 flex items-center">
          <Image
            src={brandData.image_path}
            alt={brandData.name}
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="ml-4">
            <p className="text-lg">{brandData.additional_info}</p>
            <p className="text-gray-500 mt-2">Category: {brandData.category}</p>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-4 py-2 rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
