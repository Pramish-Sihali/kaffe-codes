"use client";

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCarousel from '@/components/products/ProductCarousel';
import ProductCard from '@/components/home/ProductCard';
import FilterSection from '@/components/filters/FilterSection';
import Pagination from '@/components/ui/Pagination';
import type { Product, FilterState } from '@/types/products';
import useProducts from '@/hooks/useProducts';

interface ExtendedFilterState extends FilterState {
  category: string[];
  discount: string[];
}

const PRODUCTS_PER_PAGE = 16;
const availableCategories = ['Coffee', 'Tea', 'Cakes', 'Machines', 'Utensils'];

interface CarouselSlide {
  id: number;
  image: string;
}

export default function ProductsPage() {
  const router = useRouter();
  const { allProducts } = useProducts();
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get('search');
  const brandQuery = searchParams?.get('brand');
  const categoryQuery = searchParams?.get('category');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<ExtendedFilterState>({
    brands: brandQuery ? [brandQuery] : [],
    priceRange: [0, 2500],
    inStock: false,
    category: categoryQuery ? [categoryQuery] : [],
    discount: []
  });
  const [sortBy, setSortBy] = useState('popularity');

  const carouselSlides: CarouselSlide[] = [
    { id: 1, image: "/images/ad-banner.svg" },
    { id: 2, image: "/images/ad-banner.svg" },
    { id: 3, image: "/images/ad-banner.svg" }
  ];

  const availableBrands = useMemo(() => {
    const brands = allProducts.map(product => product.brand);
    return Array.from(new Set(brands));
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (brandQuery) {
      filtered = filtered.filter(product => 
        product.brand.toLowerCase() === brandQuery.toLowerCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.category.length > 0) {
      filtered = filtered.filter(p => filters.category.includes(p.category));
    }

    if (filters.brands.length > 0 && !brandQuery) {
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
  }, [allProducts, filters, sortBy, searchQuery, brandQuery]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handleFiltersChange = (newFilters: ExtendedFilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
    if (newFilters.category.length > 0) {
      router.push(`/products?category=${newFilters.category[0]}`);
    }
  };

  const handleReset = () => {
    setFilters({
      brands: [],
      priceRange: [0, 2500],
      inStock: false,
      category: [],
      discount: []
    });
    setCurrentPage(1);
    router.push('/products');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters, brandQuery]);

  useEffect(() => {
    if (categoryQuery) {
      setFilters(prev => ({
        ...prev,
        category: [categoryQuery]
      }));
    }
  }, [categoryQuery]);

  const getPageTitle = () => {
    if (brandQuery) return `${brandQuery} Products`;
    if (filters.category.length > 0) return `${filters.category[0]} Products`;
    return 'All Products';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full">
        <ProductCarousel slides={carouselSlides} />
      </div>

      <div className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
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
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold text-gray-800">
                  {getPageTitle()} ({filteredProducts.length})
                </h1>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-custom-brown"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {paginatedProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow">
                      <ProductCard 
                        product={product}
                        section={product.category.toLowerCase()}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found matching your criteria.</p>
                  <button
                    onClick={handleReset}
                    className="mt-4 text-custom-brown hover:text-custom-brown/80 font-medium"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {filteredProducts.length > PRODUCTS_PER_PAGE && (
                <div className="mt-8 mb-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}