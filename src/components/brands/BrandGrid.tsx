"use client";
import Image from 'next/image';
import { Brand } from '@/types/brand';

const BrandGrid = ({ 
  brands,
  selectedLetter,
  selectedCategory 
}: {
  brands: Brand[];
  selectedLetter: string;
  selectedCategory: string;
}) => {
  const filteredBrands = brands.filter(brand => {
    const letterMatch = !selectedLetter || brand.name.toUpperCase().startsWith(selectedLetter);
    const categoryMatch = !selectedCategory || brand.category.includes(selectedCategory);
    return letterMatch && categoryMatch;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {filteredBrands.map((brand) => (
        <div
          key={brand.id}
          className="border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow"
        >
          <div className="relative w-24 h-24">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandGrid;
