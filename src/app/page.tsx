// src/app/page.tsx
import Navbar from '@/components/home/Navbar';
import CategoryIcons from '@/components/home/CategoryIcons';
import FeaturedCarousel from '@/components/home/FeaturedCarousel';
import PlatformIntro from '@/components/home/PlatformIntro';
import TopPicks from '@/components/home/TopPicks';
import CategoriesSection from '@/components/home/CategoriesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CategoryIcons />
      <FeaturedCarousel />
      <PlatformIntro />
      <TopPicks />
      <CategoriesSection />
    </main>
  );
}

