// app/products/page.tsx
"use client";

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/home/ProductCard';
import FilterSection from '@/components/filters/FilterSection';
import Pagination from '@/components/ui/Pagination';
import ViewAllResults from '@/components/search/ViewAllResults';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination as SwiperPagination } from 'swiper/modules';
import useProducts from '@/hooks/useProducts';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const availableCategories = ['Coffee', 'Tea', 'Cakes', 'Machines', 'Utensils'];
const PRODUCTS_PER_PAGE = 16;

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

export default function ProductsPage() {
  const { allProducts } = useProducts();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get('search');
  const initialCategory = searchParams.get('category');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    priceRange: [0, 2500],
    category: initialCategory ? [initialCategory] : [],
    discount: [],
    inStock: false
  });
  const [sortBy, setSortBy] = useState('popularity');

  const availableBrands = useMemo(() => 
    Array.from(new Set(allProducts.map(product => product.brand))),
    [allProducts]
  );

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

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

    return filtered.sort((a, b) => {
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
  }, [allProducts, filters, sortBy, searchQuery]);

  const { currentProducts, totalPages } = useMemo(() => {
    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    
    return {
      currentProducts: filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct),
      totalPages: Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
    };
  }, [filteredProducts, currentPage]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
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

    if (searchQuery) {
      router.push('/products');
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearSearch = () => {
    router.push('/products');
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen flex flex-col">
      {!searchQuery && (
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
      )}

      <div className="flex-grow bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <FilterSection
                  availableBrands={availableBrands}
                  availableCategories={availableCategories}
                  onFiltersChange={handleFiltersChange}
                  onReset={handleReset}
                  initialFilters={filters}
                />
              </div>
            </div>

            <div className="flex-1">
              {searchQuery ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="ml-auto border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brown-600"
                    >
                      <option value="popularity">Sort by Popularity</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Customer Rating</option>
                    </select>
                  </div>
                  <ViewAllResults 
                    products={currentProducts}
                    searchQuery={searchQuery}
                    onClearSearch={handleClearSearch}
                  />
                </>
              ) : (
                <>
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
                </>
              )}

              {filteredProducts.length > 0 && (
                <div className="mt-8 mb-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}

              {filteredProducts.length === 0 && !searchQuery && (
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