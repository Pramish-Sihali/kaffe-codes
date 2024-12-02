import Navbar from '@/components/home/Navbar';
import CategoryIcons from '@/components/home/CategoryIcons';
import FeaturedCarousel from '@/components/home/FeaturedCarousel';
import PlatformIntro from '@/components/home/PlatformIntro';
import ExclusiveOffers from '@/components/home/ExclusiveOffers';
import HandPickedBrands from '@/components/home/HandPickedBrands';
import HotCakes from '@/components/home/HotCakes';
import ExclusiveBrownie from '@/components/home/ExclusiveBrownie';
import BestMachinery from '@/components/home/BestMachinery';
import CoffeeSelections from '@/components/home/CoffeeSelections';
import TeaSelections from '@/components/home/TeaSelections';
import BuyingGuidelines from '@/components/home/BuyingGuidelines';
import UnfilteredReviews from '@/components/home/UnfilteredReviews';
import BrandsSection from '@/components/home/BrandsSection';
import Footer from '@/components/layout/Footer';
import CoffeeShopBanner from '@/components/home/CoffeeShopBanner';
import WhatsNew from '@/components/home/WhatsNew';
import TopPicks from '@/components/home/TopPicks';
import CategoriesSection from '@/components/home/CategoriesSection';
import ProductSelections from '@/components/home/ProductSelections';
import SpecialOffer from '@/components/home/SpecialOffer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CategoryIcons />
      <FeaturedCarousel />
      <PlatformIntro />
      <TopPicks />
      <CategoriesSection/>
      <HandPickedBrands />
      <ExclusiveBrownie />
      <HotCakes />
      <BestMachinery />
      <SpecialOffer />
    <ProductSelections />
      <ExclusiveOffers />
      <BuyingGuidelines />
      <UnfilteredReviews />
      <CoffeeShopBanner />
      <WhatsNew/>
      <BrandsSection />
      <Footer />
    </main>
  );
}