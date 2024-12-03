import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';

const coffeeProducts = [
  {
    id: 1,
    brand: "LAUVAZZA",
    name: "Lavazza Super Crema Espresso",
    rating: 4,
    reviews: 23,
    price: 999,
    image: "/images/coffee/coffee1.png"
  },
  {
    id: 2,
    brand: "HIGH VOLTAGE",
    name: "High Voltage Bones Cups - 12 Count",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/coffee/coffee2.png"
  },
  {
    id: 3,
    brand: "DEATH WISH COFFEE",
    name: "Organic and Fair Trade Dark Roast Whole Bean",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/coffee/coffee3.png"
  },
  {
    id: 4,
    brand: "KICKING HORSE COFFEE",
    name: "Kicking Horse Coffee Kick Ass Whole Bean",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/coffee/coffee4.png"
  }
];

const CoffeeSelection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Coffee Beans Image */}
          <div className="w-full lg:w-[35%] relative">
            <div className="relative h-[400px] lg:sticky lg:top-8">
              <div className="coffee-beans-wrapper">
                <Image
                  src="/images/coffee/beans.svg"
                  alt="Coffee Beans"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Products Grid */}
          <div className="w-full lg:w-[65%] pl-0 lg:pl-8">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">Coffee Selections</h1>
              <p className="text-sm text-gray-600">From Harvest to Happiness</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {coffeeProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} backgroundColor="bg-gray-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;