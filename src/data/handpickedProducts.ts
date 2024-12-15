// data/handpickedProducts.ts
import { Product, Category } from '@/types/products';

export const categories: Category[] = [
  {
    id: 'all',
    label: 'All Products',
    icon: '/images/icons/all.svg'
  },
  {
    id: 'coffee',
    label: 'Coffee',
    icon: '/images/icons/beans.svg'
  },
  {
    id: 'bakery',
    label: 'Bakery',
    icon: '/images/icons/bakery.svg'
  },
  {
    id: 'tea',
    label: 'Tea',
    icon: '/images/icons/tea.svg'
  },
  {
    id: 'utensils',
    label: 'Utensils',
    icon: '/images/icons/utensils.svg'
  },
  {
    id: 'machines',
    label: 'Machineries',
    icon: '/images/icons/machineries.svg'
  },
  {
    id: 'cakes',
    label: 'Cakes',
    icon: '/images/icons/cake.svg'
  }
];

export const handpickedProducts: Product[] = [
  {
    id: "handpicked-1",
    brand: 'LAVAZZA',
    name: 'Lavazza Super Crema Espresso',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/handpicked/image1.png',
    category: 'Coffee',
    inStock: true
  },
  {
    id: "handpicked-2",
    brand: 'HIGH VOLTAGE',
    name: 'High Voltage Bones Cups - 12 Count',
    rating: 4,
    reviews: 150,
    price: 733,
    image: '/images/handpicked/image2.png',
    category: 'Coffee',
    inStock: true
  },
  {
    id: "handpicked-3",
    name: "Professional Coffee Machine XL2000",
    brand: "VALTRA MACHINES",
    price: 45000,
    rating: 4.5,
    image: "/images/Top-picks/image2.png",
    category: "Machines",
    inStock: true,
    reviews: 120
  },
  {
    id: "handpicked-4",
    name: "Ninja CFP307 Specialty Coffee System",
    brand: "NINJA TECH",
    price: 25999,
    rating: 4.8,
    image: "/images/Top-picks/image3.png",
    category: "Machines",
    inStock: true,
    reviews: 220
  },
  {
    id: "handpicked-5",
    name: "Organic and Fair Trade Dark Roast Whole Bean",
    brand: "DEATH WISH COFFEE",
    price: 1499,
    rating: 5,
    image: "/images/Top-picks/image4.png",
    category: "Coffee",
    inStock: true,
    reviews: 180
  },
  {
    id: "handpicked-6",
    name: "Organic Matcha Fresh Tea Powder",
    brand: "ORGANIC MATCHA",
    price: 899,
    rating: 4.7,
    image: "/images/Top-picks/image5.png",
    category: "Tea",
    inStock: true,
    reviews: 165
  },
  {
    id: "handpicked-7",
    name: "Premium Green Tea Selection Box",
    brand: "GREEN TEA",
    price: 1299,
    rating: 4.6,
    image: "/images/Top-picks/image4.png",
    category: "Tea",
    inStock: true,
    reviews: 140
  },
  {
    id: "handpicked-8",
    name: "Premium Coffee Beans Selection",
    brand: "COFFEE BEANS",
    price: 1899,
    rating: 4.9,
    image: "/images/Top-picks/image3.png",
    category: "Coffee",
    inStock: true,
    reviews: 190
  }
];