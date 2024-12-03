"use client";
import Image from 'next/image';
import Link from 'next/link';

const offers = [
  {
    id: 1,
    title: "A bright spot: Budge-proof concealers",
    image: "/images/offer1.png",
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
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded-full">
                  {offer.discount}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-medium">{offer.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Gift Pack Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Make Your Own</h3>
              <h2 className="text-2xl font-bold text-green-600 mb-6">Gift Pack</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">1</div>
                  <span>FILL A BOX</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">2</div>
                  <span>PICK A CARD</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">3</div>
                  <span>SEND IT OFF</span>
                </div>
                <button className="mt-4 text-green-600 font-medium flex items-center gap-2">
                  Build a Box →
                </button>
              </div>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Kaffe Codes Gift Box",
                  description: "Get the perfect Gift for your love",
                  image: "/images/coffee1.png"


                },
                {
                  title: "Gift Card",
                  description: "Get the perfect Gift for your love",
                  image: "/images/Voucher1.png"
                },
                {
                  title: "Corporate Vouchers",
                  description: "Get the perfect Gift for your love",
                  image: "/images/Voucher2.png"
                }
              ].map((gift, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={gift.image}
                    alt={gift.title}
                    width={200}
                    height={120}
                    className="mx-auto mb-4"
                  />
                  <h4 className="font-medium text-center">{gift.title}</h4>
                  <p className="text-sm text-gray-600 text-center">{gift.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}