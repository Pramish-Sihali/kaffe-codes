import Image from 'next/image';
import ProductCard from './ProductCard';

const coffeeProducts = [
  {
    id: 1,
    brand: "LAVAZZA",
    name: "Lavazza Super Crema Espresso",
    rating: 4,
    reviews: 299,
    price: 999,
    image: "/images/coffee1.png"
  },
  {
    id: 2,
    brand: "HIGH VOLTAGE",
    name: "High Voltage Bones Cups",
    rating: 4,
    reviews: 733,
    price: 733,
    image: "/images/coffee2.png"
  },
  {
    id: 3,
    brand: "DEATH WISH COFFEE",
    name: "Organic and Fair Trade Dark Roast Whole Bean",
    rating: 4,
    reviews: 733,
    price: 733,
    image: "/images/coffee3.png"
  },
  {
    id: 4,
    brand: "KICKING HORSE COFFEE",
    name: "Kicking Horse Coffee Kick Ass Whole Bean",
    rating: 4,
    reviews: 733,
    price: 733,
    image: "/images/coffee4.png"
  }
];

const CoffeeSection = () => {
  return (
    <section className="container mx-auto px-4 mb-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Coffee Selections</h2>
        <p className="text-sm text-gray-600 mt-1">From Harvest to Happiness</p>
      </div>

      {/* Content Container */}
      <div className="flex gap-8 items-stretch">
        {/* Background Image */}
        <div className="w-1/2">
          <div className="h-[480px] rounded-lg overflow-hidden">
            <Image
              src="/images/beans.png"
              alt="Coffee Beans"
              width={500}
              height={480}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-4 h-[480px] overflow-y-auto pr-2">
            {coffeeProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;