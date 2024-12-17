// components/account/EditProfileImageModal.tsx
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useUser } from '@/context/UserContext';
import BaseButton from '../home/BaseButton';

interface EditProfileImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileImageModal({
  isOpen,
  onClose
}: EditProfileImageModalProps) {
  const { profileData, updateProfileData } = useUser();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Change Profile Picture</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={selectedImage || profileData.image || "/images/birajDai.jpg"}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Choose Image
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setSelectedImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <BaseButton
              onClick={() => {
                if (selectedImage) {
                  updateProfileData({ image: selectedImage });
                  onClose();
                }
              }}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              disabled={!selectedImage}
            >
              Save Changes
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}