import { Star, X } from 'lucide-react';

interface BaseReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }
  
  const BaseReviewModal = ({ 
    isOpen, 
    onClose, 
    title, 
    children 
  }: BaseReviewModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-lg w-full">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-medium">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };
  
  export default BaseReviewModal;