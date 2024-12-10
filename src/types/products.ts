// types/products.ts
export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    rating: number;
    image: string;
    category: string;
    inStock: boolean;
  }
  
  export interface FilterState {
    brands: string[];
    priceRange: [number, number];
    inStock: boolean;
  }