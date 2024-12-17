// src/types/index.ts

// Your existing interfaces
export interface Category {
  name: string;
  icon: string;
  path: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  discount: string;
  image: string;
  link: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export interface SearchInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export type NavItem = {
  label: string;
  path: string;
};

export type Brand = {
  name: string;
  category: string;
  image_path: string;
  additional_info: string;
  tab_category: string;
};

// New interfaces for the product page
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  original_price?: number;
  discount_percentage?: number;
  brand: string;
  category: string;
  image: string;
  inStock: boolean;
  rating: number;
  reviews_count: number;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
}

export interface FilterState {
  brands: string[];
  priceRange: [number, number];
  category: string[];
  discount: string[];
  inStock: boolean;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface ProductCardProps {
  product: Product;
  section?: string;
}

export interface FilterSectionProps {
  availableBrands: string[];
  availableCategories: string[];
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
  initialFilters: FilterState;
}

export interface ViewAllResultsProps {
  products: Product[];
  searchQuery: string;
  onClearSearch: () => void;
}

export interface SortOption {
  label: string;
  value: 'popularity' | 'price-low' | 'price-high' | 'rating';
}

// Utility types
export type Maybe<T> = T | null | undefined;

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}