"use client";
import { useState } from 'react';
import { 
  SiSlack, 
  SiMicrosoft, 
  SiNetflix, 
  SiAmazon, 
  SiMongodb,
  SiVisa, 
  SiMastercard, 
  SiPaypal, 
  SiStripe, 
  SiShopify,
  SiGoogle,
  SiApple,
  SiSamsung,
  SiNike,
  SiAdidas,
  SiCocacola,
  SiSpotify,
  SiUber,
  SiNintendo,
  SiPlaystation,
  SiXbox,
  SiTesla,
  SiBmw
} from 'react-icons/si';
import { Package2, Truck, HeadphonesIcon, RefreshCw } from 'lucide-react';

const brands = [
  { id: 1, name: 'Slack', Icon: SiSlack, color: '#4A154B' },
  { id: 2, name: 'Microsoft', Icon: SiMicrosoft, color: '#00A4EF' },
  { id: 3, name: 'Netflix', Icon: SiNetflix, color: '#E50914' },
  { id: 4, name: 'Amazon', Icon: SiAmazon, color: '#FF9900' },
  { id: 5, name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { id: 6, name: 'Visa', Icon: SiVisa, color: '#1A1F71' },
  { id: 7, name: 'Mastercard', Icon: SiMastercard, color: '#EB001B' },
  { id: 8, name: 'PayPal', Icon: SiPaypal, color: '#003087' },
  { id: 9, name: 'Stripe', Icon: SiStripe, color: '#008CDD' },
  { id: 10, name: 'Shopify', Icon: SiShopify, color: '#95BF47' },
  { id: 11, name: 'Google', Icon: SiGoogle, color: '#4285F4' },
  { id: 12, name: 'Apple', Icon: SiApple, color: '#000000' },
  { id: 13, name: 'Samsung', Icon: SiSamsung, color: '#1428A0' },
  { id: 14, name: 'Nike', Icon: SiNike, color: '#000000' },
  { id: 15, name: 'Adidas', Icon: SiAdidas, color: '#000000' },
  { id: 16, name: 'Coca-Cola', Icon: SiCocacola, color: '#E31837' },
  { id: 17, name: 'Spotify', Icon: SiSpotify, color: '#1DB954' },
  { id: 18, name: 'Uber', Icon: SiUber, color: '#000000' },
  { id: 20, name: 'Nintendo', Icon: SiNintendo, color: '#E60012' },
  { id: 21, name: 'PlayStation', Icon: SiPlaystation, color: '#003791' },
  { id: 22, name: 'Xbox', Icon: SiXbox, color: '#107C10' },
  { id: 23, name: 'Tesla', Icon: SiTesla, color: '#CC0000' },
  { id: 24, name: 'BMW', Icon: SiBmw, color: '#0066B1' }
];

const features = [
  {
    icon: <Package2 className="w-6 h-6" />,
    title: '100% authentic',
    description: 'Find a curated selection of 100% authentic products, ensuring trust and quality with every purchase'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Free Shipping',
    description: 'On all orders above Rs 5000'
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: 'Experts Tips & Advice',
    description: 'All products are quality free'
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Easy returns',
    description: 'Enjoy effortless pickups and hassle-free refunds with our service'
  }
];

export default function BrandSelection() {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const brandsPerPage = 12;

  const visibleBrands = brands.slice(
    currentPage * brandsPerPage,
    (currentPage + 1) * brandsPerPage
  );

  const totalPages = Math.ceil(brands.length / brandsPerPage);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Brands We Work With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with some of the world's most exciting brands across a vast range of categories to create 
            better brand positioning and brand conceived innovation.
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {visibleBrands.map((brand) => {
              const IconComponent = brand.Icon;
              return (
                <div 
                  key={brand.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredBrand(brand.id)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  <div className={`
                    flex flex-col items-center justify-center p-6 rounded-lg 
                    transition-all duration-300 border border-transparent
                    ${hoveredBrand === brand.id 
                      ? 'bg-white shadow-lg scale-105 border-gray-100' 
                      : 'bg-gray-50'
                    }
                  `}>
                    <IconComponent 
                      className={`text-4xl transition-all duration-300 ${
                        hoveredBrand === brand.id 
                          ? 'opacity-100 scale-110'
                          : 'opacity-60 scale-100'
                      }`}
                      style={{ 
                        color: hoveredBrand === brand.id ? brand.color : '#666'
                      }}
                    />
                    <span className={`
                      mt-2 text-sm font-medium transition-all duration-300
                      ${hoveredBrand === brand.id 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform -translate-y-2'
                      }
                    `}>
                      {brand.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${index === currentPage 
                      ? 'bg-gray-800 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-gray-200" />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="
                text-center group p-6 rounded-xl transition-all duration-300
                hover:bg-green-50 hover:shadow-md
              "
            >
              <div className="
                inline-flex items-center justify-center w-12 h-12 rounded-xl
                bg-green-100 text-green-600 mb-4 
                group-hover:scale-110 group-hover:bg-green-200
                transition-all duration-300
              ">
                {feature.icon}
              </div>
              <h3 className="
                font-medium text-lg mb-2 
                group-hover:text-green-600 
                transition-colors
              ">
                {feature.title}
              </h3>
              <p className="
                text-sm text-gray-600
                group-hover:text-gray-700
                transition-colors
              ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}