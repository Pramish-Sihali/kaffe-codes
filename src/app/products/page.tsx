// app/products/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/home/Navbar';
import CategoryIcons from '@/components/home/CategoryIcons';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/home/ProductCard';
import FilterSection from '@/components/filters/FilterSection';
import coffeeProducts from '@/data/coffeeProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FilterState {
  brands: string[];
  priceRange: [number, number];
  category: string[];
  discount: string[];
  inStock: boolean;
}

// Sample banner data - replace with your actual banners
const banners = [
  {
    id: 1,
    image: '/images/banners/banner1.jpg',
    alt: 'Coffee Collection'
  },
  {
    id: 2,
    image: '/images/banners/banner2.jpg',
    alt: 'Special Offers'
  }
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(coffeeProducts);
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    priceRange: [0, 2500],
    category: [],
    discount: [],
    inStock: false
  });
  const [sortBy, setSortBy] = useState('popularity');

  // Get unique brands from products
  const availableBrands = Array.from(
    new Set(coffeeProducts.map(product => product.brand))
  );

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleReset = () => {
    setFilters({
      brands: [],
      priceRange: [0, 2500],
      category: [],
      discount: [],
      inStock: false
    });
  };

  useEffect(() => {
    let filtered = coffeeProducts;

    // Apply brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(p => filters.brands.includes(p.brand));
    }

    // Apply price filter
    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && 
      p.price <= filters.priceRange[1]
    );

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryIcons />

      {/* Banner Carousel */}
      <div className="w-full bg-gray-100">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters */}
            <div className="md:w-64 flex-shrink-0">
              <FilterSection
                availableBrands={availableBrands}
                onFiltersChange={handleFiltersChange}
                onReset={handleReset}
              />
            </div>

            {/* Products Section */}
            <div className="flex-1">
              {/* Sort Bar */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold text-gray-800">
                  {filteredProducts.length} Products Found
                </h1>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brown-600"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}