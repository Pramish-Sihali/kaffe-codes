"use client";

import Image from 'next/image';
import Link from 'next/link';

const offers = [
  {
    id: 1,
    title: "A bright spot: Budge-proof concealers",
    image: "/images/offer1.jpg",
    discount: "UP TO 25% Off",
  },
  {
    id: 2,
    title: "Jura ENA8 Metropolitian Black",
    image: "/images/offer2.jpg",
    discount: "UP TO 25% Off",
  },
  {
    id: 3,
    title: "Korean makeup picks for the face, eyes & lips",
    image: "/images/offer3.jpg",
    discount: "UP TO 25% Off",
  },
];

export default function ExclusiveOffers() {
  return (
    <section className="py-6 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Exclusive Offers</h2>
        
        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {offers.map((offer) => (
            <Link 
              href="#" 
              key={offer.id}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl h-[180px] sm:h-[280px]"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full">
                {offer.discount}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-sm sm:text-lg font-medium leading-tight">{offer.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Modified Gift Pack Section */}
        <div className="mt-10 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-[300px_1fr]">
            {/* Left side - Steps */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-medium">Make Your Own</h3>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#00B207] mb-6">Gift Pack</h2>
              <div className="space-y-4 inline-flex flex-col items-start mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00B207] text-white flex items-center justify-center text-sm font-medium">1</div>
                  <span className="text-sm">FILL A BOX</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00B207] text-white flex items-center justify-center text-sm font-medium">2</div>
                  <span className="text-sm">PICK A CARD</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00B207] text-white flex items-center justify-center text-sm font-medium">3</div>
                  <span className="text-sm">SEND IT OFF</span>
                </div>
                <Link href="#" className="inline-block mt-4 sm:mt-6 text-[#00B207] hover:underline">
                  Build a Box →
                </Link>
              </div>
            </div>

            {/* Right side - Gift Options */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {[
                {
                  title: "Kaffe Codes Gift Box",
                  description: "Get the perfect Gift for your love",
                  image: "/images/Voucher2.png",
                },
                {
                  title: "Gift Card",
                  description: "Get the perfect Gift for your love",
                  image: "/images/Voucher1.png",
                },
                {
                  title: "Corporate Vouchers",
                  description: "Get the perfect Gift for your love",
                  image: "/images/Voucher2.png",
                }
              ].map((gift, index) => (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  {/* Image Container - Smaller for mobile */}
                  <div className="h-28 sm:h-48 relative bg-[#F2F8F2]">
                    <Image
                      src={gift.image}
                      alt={gift.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain p-2 sm:p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Text Container - Always green on mobile */}
                  <div className="p-2 sm:p-4 bg-[#00B207] sm:bg-[#F2F8F2] sm:group-hover:bg-[#00B207] transition-colors duration-300">
                    <h4 className="font-medium text-center text-sm sm:text-lg mb-1 text-white sm:text-gray-800 sm:group-hover:text-white transition-colors duration-300">
                      {gift.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/90 sm:text-gray-600 text-center sm:group-hover:text-white/90 transition-colors duration-300">
                      {gift.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}