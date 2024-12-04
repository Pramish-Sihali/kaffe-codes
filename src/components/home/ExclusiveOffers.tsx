"use client";
import Image from 'next/image';
import Link from 'next/link';

const offers = [
  {
    id: 1,
    title: "A bright spot: Budge-proof concealers",
    image: "/images/offer3.png",
    discount: "UP TO 25% Off",
  },
  {
    id: 2,
    title: "Jura ENA8 Metropolitian Black",
    image: "/images/offer2.png",
    discount: "UP TO 25% Off",
  },
  {
    id: 3,
    title: "Korean makeup picks for the face, eyes & lips",
    image: "/images/offer3.png",
    discount: "UP TO 25% Off",
  },
];

export default function ExclusiveOffers() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Exclusive Offers</h2>
        
        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Link 
              href="#" 
              key={offer.id}
              className="relative group overflow-hidden rounded-2xl h-[280px]"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white text-sm px-4 py-1 rounded-full">
                {offer.discount}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg font-medium leading-tight">{offer.title}</h3>
              </div>
            </Link>
          ))}
        </div>

       {/* Modified Gift Pack Section */}
       <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
            {/* Left side - Steps */}
            <div>
              <h3 className="text-xl font-medium">Make Your Own</h3>
              <h2 className="text-3xl font-bold text-[#00B207] mb-8">Gift Pack</h2>
              <div className="space-y-4">
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
                <Link href="#" className="inline-block mt-6 text-[#00B207] hover:underline">
                  Build a Box →
                </Link>
              </div>
            </div>

            {/* Right side - Gift Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Kaffe Codes Gift Box",
                  description: "Get the perfect Gift for your love",
                  image: "/images/coffee1.png",
                  bgColor: "bg-[#F2F8F2]"
                },
                {
                  title: "Gift Card",
                  description: "Get the perfect Gift for your love",
                  image: "/images/Voucher1.png",
                  bgColor: "bg-[#F2F8F2]"
                },
                {
                  title: "Corporate Vouchers",
                  description: "Get the perfect Gift for your love",
                  image: "/images/Voucher2.png",
                  bgColor: "bg-[#F2F8F2]"
                }
              ].map((gift, index) => (
                <div 
                  key={index}
                  className={`${gift.bgColor} rounded-lg overflow-hidden group cursor-pointer`}
                >
                  <div className="p-6">
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={gift.image}
                        alt={gift.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="font-medium text-center text-lg mb-1">{gift.title}</h4>
                    <p className="text-sm text-gray-600 text-center">{gift.description}</p>
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