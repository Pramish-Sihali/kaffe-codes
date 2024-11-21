import Navbar from '@/components/home/Navbar';
import CategoryIcons from '@/components/home/CategoryIcons';
import FeaturedCarousel from '@/components/home/FeaturedCarousel';
import PlatformIntro from '@/components/home/PlatformIntro';
import HandPickedBrands from '@/components/home/HandPickedBrands';
import ExclusiveBrownie from '@/components/home/ExclusiveBrownie';
import HotCakes from '@/components/home/HotCakes';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CategoryIcons />
      <FeaturedCarousel />
      <PlatformIntro />
      <HandPickedBrands />
      <HotCakes />
      <ExclusiveBrownie />
    </main>
  );
}