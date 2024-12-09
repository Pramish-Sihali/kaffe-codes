// components/VideoModal.tsx
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  className?: string;
}

export default function VideoModal({ 
  isOpen, 
  onClose, 
  videoSrc,
  className = "max-w-5xl" // default max width
}: VideoModalProps): JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className={`relative w-full mx-4 ${className}`}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-16 right-0 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="bg-black rounded-xl overflow-hidden aspect-video shadow-2xl">
          <video
            className="w-full h-full"
            controls
            autoPlay
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}