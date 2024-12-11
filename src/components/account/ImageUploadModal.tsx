// components/account/ImageUploadModal.tsx
import { useState, useRef } from 'react';
import { X, Upload } from 'lucide-react';
import Image from 'next/image';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: string;
  onSave: (imageFile: File) => void;
}

export default function ImageUploadModal({
  isOpen,
  onClose,
  currentImage,
  onSave
}: ImageUploadModalProps) {
  const [previewImage, setPreviewImage] = useState(currentImage);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (selectedFile) {
      onSave(selectedFile);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Update Profile Picture</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-dashed border-gray-300">
              <Image
                src={previewImage || '/images/default-avatar.png'}
                alt="Profile Preview"
                fill
                className="object-cover"
              />
            </div>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*"
              className="hidden"
            />
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
            >
              <Upload className="w-4 h-4" />
              Choose Image
            </button>
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
              disabled={!selectedFile}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}