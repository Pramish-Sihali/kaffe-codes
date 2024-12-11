// app/products/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/home/ProductCard';
import FilterSection from '@/components/filters/FilterSection';
import Pagination from '@/components/ui/Pagination';
import { Product } from '@/types/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination as SwiperPagination } from 'swiper/modules';
import { coffeeProducts } from '@/data/coffeeProducts';
import { teaProducts } from '@/data/teaProducts';
import { cakeProducts } from '@/data/cakeProducts';
import { machines } from '@/data/machineProduct';
import { topPicksData } from '@/data/topPicks';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const allProducts: Product[] = [
  ...coffeeProducts,
  ...teaProducts,
  ...cakeProducts,
  ...machines,
  ...topPicksData
];

const availableCategories = ['Coffee', 'Tea', 'Cakes', 'Machines', 'Utensils'];

interface FilterState {
  brands: string[];
  priceRange: [number, number];
  category: string[];
  discount: string[];
  inStock: boolean;
}

const banners = [
  {
    id: 1,
    image: '/images/categories/bakery.jpg',
    alt: 'Coffee Collection'
  },
  {
    id: 2,
    image: '/images/categories/coffee.jpg',
    alt: 'Special Offers'
  }
];

const PRODUCTS_PER_PAGE = 16;

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  const [currentPage, setCurrentPage] = useState(1);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    priceRange: [0, 2500],
    category: initialCategory ? [initialCategory] : [],
    discount: [],
    inStock: false
  });
  const [sortBy, setSortBy] = useState('popularity');

  const availableBrands = Array.from(
    new Set(allProducts.map(product => product.brand))
  );

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleReset = () => {
    setFilters({
      brands: [],
      priceRange: [0, 2500],
      category: [],
      discount: [],
      inStock: false
    });
    setCurrentPage(1);
  };

  useEffect(() => {
    let filtered = allProducts;

    if (filters.category.length > 0) {
      filtered = filtered.filter(p => filters.category.includes(p.category));
    }

    if (filters.brands.length > 0) {
      filtered = filtered.filter(p => filters.brands.includes(p.brand));
    }

    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && 
      p.price <= filters.priceRange[1]
    );

    if (filters.inStock) {
      filtered = filtered.filter(p => p.inStock);
    }

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

  // Pagination calculations
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Carousel */}
      <div className="w-full bg-gray-100">
        <Swiper
          modules={[Autoplay, Navigation, SwiperPagination]}
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
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="md:w-72 flex-shrink-0">
              <div className="sticky top-4">
                <FilterSection
                  availableBrands={availableBrands}
                  availableCategories={availableCategories}
                  onFiltersChange={handleFiltersChange}
                  onReset={handleReset}
                  initialFilters={filters}
                />
              </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {currentProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow">
                    <ProductCard 
                      product={product}
                      section={product.category.toLowerCase()}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <div className="mt-8 mb-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found matching your criteria.</p>
                  <button
                    onClick={handleReset}
                    className="mt-4 text-brown-600 hover:text-brown-700 font-medium"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}