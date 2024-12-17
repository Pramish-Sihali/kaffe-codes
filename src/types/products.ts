// types/products.ts
export interface Product {
  id: string;
  brand: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  description?: string;
}

export interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
}

export interface FilterState {
  brands: string[];
  priceRange: [number, number];
  inStock: boolean;
}

export interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}


export interface Brand {
  name: string;
  category: string;
  image_path: string;
  additional_info: string;
  tab_category: string;
}