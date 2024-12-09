"use client";
import { useState } from 'react';

import VideoModal from './VideoModal';
import { GuideCard } from './GuideCard';
import { Carousel } from './Carousel';

interface Guide {
  src: string;
  title: string;
  hasVideo: boolean;
  videoPreview?: string;
  description?: string;
  videoPath?: string;
}

const guides: Guide[] = [
  {
    src: '/images/guides/guide1.png',
    title: 'Professional Baking Equipment',
    description: 'Complete guide to ovens, mixers, and baking tools',
    hasVideo: true,
    videoPreview: '/images/guides/guide8.mp4',
    videoPath: '/images/guides/guide8.mp4'
  },
  {
    src: '/images/guides/guide2.png',
    title: 'Restaurant Kitchen Essentials',
    description: 'Essential equipment for commercial kitchens',
    hasVideo: true,
    videoPreview: '/images/guides/guide8.mp4',
    videoPath: '/images/guides/guide8.mp4'
  },
  {
    src: '/images/guides/guide3.png',
    title: 'Café Setup Guide',
    description: 'From espresso machines to grinders - complete café guide',
    hasVideo: true,
    videoPreview: '/images/guides/guide8.mp4',
    videoPath: '/images/guides/guide8.mp4'
  },
  {
    src: '/images/guides/guide4.png',
    title: 'Food Storage Solutions',
    description: 'Professional storage and refrigeration equipment',
    hasVideo: true,
    videoPreview: '/images/guides/guide8.mp4',
    videoPath: '/images/guides/guide8.mp4'
  },
  {
    src: '/images/guides/guide5.png',
    title: 'Food Prep Equipment',
    description: 'Essential tools for professional food preparation',
    hasVideo: true,
    videoPreview: '/images/guides/guide8.mp4',
    videoPath: '/images/guides/guide8.mp4'
  },
  {
    src: '/images/guides/guide1.png',
    title: 'Kitchen Safety Equipment',
    description: 'Essential safety gear and equipment for professional kitchens',
    hasVideo: true,
    videoPreview: '/images/guides/guide8.mp4',
    videoPath: '/images/guides/guide8.mp4'
  },
  {
    src: '/images/guides/guide2.png',
    title: 'Dishwashing Systems',
    description: 'Commercial dishwashing and cleaning equipment guide',
    hasVideo: true,
    videoPreview: '/images/guides/guide8.mp4',
    videoPath: '/images/guides/guide8.mp4'
  },
  {
    src: '/images/guides/guide3.png',
    title: 'Ventilation Systems',
    description: 'Commercial kitchen ventilation and hood systems',
    hasVideo: true,
    videoPreview: '/images/guides/guide8.mp4',
    videoPath: '/images/guides/guide8.mp4'
  }
];

export default function BuyingGuidelines() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoPath, setSelectedVideoPath] = useState('');

  const handlePlayVideo = (videoPath: string) => {
    setSelectedVideoPath(videoPath);
    setIsModalOpen(true);
  };

  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundImage: `url('/images/guides/backdrop.svg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Buying Guidelines</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive guides to help you make informed decisions about your equipment needs
          </p>
        </div>
        
        {/* Remove the inner max-w-[1400px] div since it's redundant */}
        <div className="w-full">
          <Carousel 
            itemsPerView={4} 
            autoPlayInterval={10000}
            className="w-full"
          >
            {guides.map((guide, index) => (
              <GuideCard
                key={index}
                src={guide.src}
                title={guide.title}
                description={guide.description}
                hasVideo={guide.hasVideo}
                videoPreview={guide.videoPreview}
                isPriority={index < 5} // Only set priority for first 5 items
                onPlayVideo={() => handlePlayVideo(guide.videoPath || '')}
              />
            ))}
          </Carousel>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={selectedVideoPath}
      />
    </section>
  );
}