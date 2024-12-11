// components/account/EditProfileImageModal.tsx
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useUser } from '@/context/UserContext';

interface EditProfileImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileImageModal({ isOpen, onClose }: EditProfileImageModalProps) {
  const { profileData, updateProfileData } = useUser();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (selectedImage) {
      updateProfileData({ image: selectedImage });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Change Profile Picture</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden">
              <Image
                src={selectedImage || profileData.image}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Choose Image
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              disabled={!selectedImage}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}