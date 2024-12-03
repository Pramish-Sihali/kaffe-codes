import Image from 'next/image';
import ProductCard from './ProductCard';

const teaProducts = [
  {
    id: 5,
    brand: "LAVAZZA",
    name: "Lavazza Super Crema Espresso",
    rating: 4,
    reviews: 999,
    price: 999,
    image: "/images/tea1.png"
  },
  {
    id: 6,
    brand: "HIGH VOLTAGE",
    name: "High Voltage Bones",
    rating: 4,
    reviews: 733,
    price: 733,
    image: "/images/tea2.png"
  },
  {
    id: 7,
    brand: "ORGANIC AND FAIR TRADE",
    name: "Organic and Fair Trade Dark Roast",
    rating: 4,
    reviews: 733,
    price: 733,
    image: "/images/tea3.png"
  },
  {
    id: 8,
    brand: "LAVAZZA",
    name: "Lavazza Super Crema",
    rating: 4,
    reviews: 999,
    price: 999,
    image: "/images/tea4.png"
  },
  {
    id: 9,
    brand: "LAVAZZA",
    name: "Lavazza Super Crema",
    rating: 4,
    reviews: 999,
    price: 999,
    image: "/images/tea5.png"
  },
  {
    id: 10,
    brand: "LAVAZZA",
    name: "Lavazza Super Crema",
    rating: 4,
    reviews: 999,
    price: 999,
    image: "/images/tea6.png"
  }
];

const TeaSection = () => {
  return (
    <section className="container mx-auto px-4 mb-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Tea Selections</h2>
        <p className="text-sm text-gray-600 mt-1">Time to Sip & Savor</p>
      </div>

      {/* Content Container */}
      <div className="flex gap-8 items-stretch">
        {/* Products Grid */}
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-4 h-[480px] overflow-y-auto pr-2">
            {teaProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Background Image */}
        <div className="w-1/2">
          <div className="h-[480px] rounded-lg overflow-hidden">
            <Image
              src="/images/beans2.png"
              alt="Tea Leaves"
              width={500}
              height={480}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaSection;
