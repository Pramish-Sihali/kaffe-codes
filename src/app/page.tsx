import Navbar from '@/components/home/Navbar';
import CategoryIcons from '@/components/home/CategoryIcons';
import FeaturedCarousel from '@/components/home/FeaturedCarousel';
import PlatformIntro from '@/components/home/PlatformIntro';
import SpecialOffer from '@/components/home/SpecialOffer';
import HandPickedBrands from '@/components/home/HandPickedBrands';
import HotCakes from '@/components/home/HotCakes';
import ExclusiveBrownie from '@/components/home/ExclusiveBrownie';
import BestMachinery from '@/components/home/BestMachinery';
import CoffeeSelections from '@/components/home/CoffeeSelections';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CategoryIcons />
      <FeaturedCarousel />
      <PlatformIntro />
      <SpecialOffer />
      <HandPickedBrands />
      <HotCakes />
      <ExclusiveBrownie />
      <BestMachinery />
      <CoffeeSelections />
    </main>
  );
}