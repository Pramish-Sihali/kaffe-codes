import { Product } from '@/types/products';

export const machines: Product[] = [
  {
    id: "machine-1",
    brand: "NINJA",
    name: "Ninja Professional Coffee Maker",
    rating: 4.5,
    reviews: 128,
    price: 29999,
    image: "/images/machinery/machine4.svg",
    category: "Machineries", // Updated category
    inStock: true
  },
  {
    id: "machine-2",
    brand: "BREVILLE",
    name: "Breville Barista Express Espresso Machine",
    rating: 4.8,
    reviews: 256,
    price: 69999,
    image: "/images/machinery/machine1.svg",
    category: "Machineries", // Updated category 
    inStock: true
  },
  {
    id: "machine-3",
    brand: "DELONGHI",
    name: "DeLonghi Magnifica Super-Automatic",
    rating: 4.6,
    reviews: 189,
    price: 79999,
    image: "/images/machinery/machine2.svg",
    category: "Machineries", // Updated category
    inStock: true
  },
  {
    id: "machine-4",
    brand: "GAGGIA",
    name: "Gaggia Classic Pro Espresso Machine",
    rating: 4.7,
    reviews: 167,
    price: 54999,
    image: "/images/machinery/machine3.svg",
    category: "Machineries", // Updated category
    inStock: true
  },
  {
    id: "machine-5",
    brand: "RANCILIO",
    name: "Rancilio Silvia Espresso Machine",
    rating: 4.9,
    reviews: 145,
    price: 84999,
    image: "/images/machinery/machine4.svg",
    category: "Machineries", // Updated category
    inStock: true
  }
];