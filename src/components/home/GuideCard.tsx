import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, ExternalLink } from 'lucide-react';

interface GuideCardProps {
  src: string;
  title: string;
  description?: string;
  hasVideo: boolean;
  videoPreview?: string;
  onPlayVideo: () => void;
  isPriority?: boolean;
}

export function GuideCard({
  src,
  title,
  description,
  hasVideo,
  videoPreview,
  onPlayVideo,
  isPriority = false
}: GuideCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (!hasVideo) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
      if (videoRef.current && isVideoLoaded) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log('Preview playback failed:', error);
          });
        }

        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }, 6000);
      }
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div
      className="relative flex-shrink-0 w-[250px] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
        {isHovered && hasVideo ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              src={videoPreview}
              onLoadedData={() => setIsVideoLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPlayVideo();
              }}
              className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
            >
              Watch Full Video
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={isPriority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-4 px-2">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}