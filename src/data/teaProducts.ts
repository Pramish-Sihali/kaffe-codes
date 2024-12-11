// data/teaProducts.ts
import { Product } from '@/types/products';

export const teaProducts: Product[] = [
  {
    id: "tea-1",
    brand: "GREEN LEAF",
    name: "Premium Green Tea Leaves",
    rating: 4,
    reviews: 23,
    price: 999,
    image: "/images/tea/tea1.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-2",
    brand: "TWININGS",
    name: "Twinings English Breakfast Tea",
    rating: 4.5,
    reviews: 345,
    price: 500,
    image: "/images/tea/tea2.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-3",
    brand: "STASH",
    name: "Stash Premium Chamomile Tea",
    rating: 4.8,
    reviews: 432,
    price: 350,
    image: "/images/tea/tea3.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-4",
    brand: "BIGELOW",
    name: "Bigelow Constant Comment Tea",
    rating: 4.2,
    reviews: 178,
    price: 400,
    image: "/images/tea/tea4.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-5",
    brand: "YOGI",
    name: "Yogi Tea Ginger Tea",
    rating: 4.7,
    reviews: 220,
    price: 420,
    image: "/images/tea/tea5.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-6",
    brand: "SIMPLE LIFE",
    name: "Simple Life Herbal Tea",
    rating: 5,
    reviews: 100,
    price: 650,
    image: "/images/tea/tea6.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-7",
    brand: "TETLEY",
    name: "Tetley Black Tea",
    rating: 4.3,
    reviews: 512,
    price: 299,
    image: "/images/tea/tea7.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-8",
    brand: "TEA VIVE",
    name: "Tea Vive Organic Green Tea",
    rating: 4.4,
    reviews: 310,
    price: 550,
    image: "/images/tea/tea8.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-9",
    brand: "DAVIDs TEA",
    name: "David's Tea Forever Fragrance",
    rating: 4.6,
    reviews: 650,
    price: 800,
    image: "/images/tea/tea9.png",
    category: "Tea",
    inStock: true
  },
  {
    id: "tea-10",
    brand: "HARNN",
    name: "Harnn Oolong Tea",
    rating: 4.5,
    reviews: 270,
    price: 700,
    image: "/images/tea/tea10.png",
    category: "Tea",
    inStock: true
  }
]as const;