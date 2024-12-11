import { Product } from '@/types/products';

export const coffeeProducts: Product[] = [
  {
    id: "coffee-1",
    brand: "LAUVAZZA",
    name: "Lavazza Super Crema Espresso",
    rating: 4,
    reviews: 23,
    price: 999,
    image: "/images/coffee/coffee1.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-2",
    brand: "HIGH VOLTAGE",
    name: "High Voltage Bones Cups - 12 Count",
    rating: 4,
    reviews: 150,
    price: 733,
    image: "/images/coffee/coffee2.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-3",
    brand: "COFFEE MATE",
    name: "Coffee Mate Original Powdered Creamer",
    rating: 5,
    reviews: 542,
    price: 500,
    image: "/images/coffee/coffee3.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-4",
    brand: "STUMPTOWN",
    name: "Stumptown Coffee Roasters Hair Bender",
    rating: 4.5,
    reviews: 312,
    price: 1200,
    image: "/images/coffee/coffee4.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-5",
    brand: "NESPRESSO",
    name: "Nespresso VertuoPlus Coffee Machine",
    rating: 4.7,
    reviews: 875,
    price: 799,
    image: "/images/coffee/coffee2.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-6",
    brand: "PEETS COFFEE",
    name: "Peet's Coffee Major Dickason's Blend",
    rating: 4.3,
    reviews: 400,
    price: 950,
    image: "/images/coffee/coffee1.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-7",
    brand: "DUNKIN'",
    name: "Dunkin' Original Blend Coffee",
    rating: 4.2,
    reviews: 550,
    price: 450,
    image: "/images/coffee/coffee4.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-8",
    brand: "STARBUCKS",
    name: "Starbucks Pike Place Roast Coffee",
    rating: 4.6,
    reviews: 680,
    price: 800,
    image: "/images/coffee/coffee3.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-9",
    brand: "ILLY",
    name: "Illy Classico Espresso",
    rating: 4.8,
    reviews: 350,
    price: 1200,
    image: "/images/coffee/coffee1.png",
    category: "Coffee",
    inStock: true
  },
  {
    id: "coffee-10",
    brand: "CARIBOU COFFEE",
    name: "Caribou Coffee Daybreak Morning Blend",
    rating: 4.3,
    reviews: 200,
    price: 850,
    image: "/images/coffee/coffee2.png",
    category: "Coffee",
    inStock: true
  }
] as const;