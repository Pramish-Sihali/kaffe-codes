// types/review.ts
export interface Review {
    id?: string;
    author: string;
    date: string;
    rating: number;
    text: string;
    verified?: boolean;
    authorImage?: string;
  }
  
  export interface ReviewFormData {
    rating: number;
    review: string;
  }
  
  export interface ProductInfo {
    name: string;
    brand: string;
    image: string;
  }
  