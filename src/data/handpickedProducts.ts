// data/handpickedProducts.ts
import { Product } from '@/types/products';

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
  // ... rest of the handpicked products
];

// Categories data
export const categories = [
    { icon: '/images/icons/beans.svg', label: 'Coffee' },
    { icon: '/images/icons/bakery.svg', label: 'Bakery' },
    { icon: '/images/icons/tea.svg', label: 'Tea' },
    { icon: '/images/icons/utensils.svg', label: 'Utensils' },
    { icon: '/images/icons/machineries.svg', label: 'Machineries' },
    { icon: '/images/icons/cake.svg', label: 'Cakes' }
  ] as const;