// data/brownieProducts.ts
import { Product } from '@/types/products';

export const brownieProducts: Product[] = [
  {
    id: "brownie-1",
    brand: 'KAFFE CODES',
    name: 'Chocolate Brownie With Mint Leaves Toppings',
    rating: 4,
    reviews: 23,
    price: 999,
    image: '/images/cakes/image6.png',
    category: "Brownies",
    inStock: true,
    description: 'Since opening our first shop in 2017 AD, Kaffe Codes goal has been straightforward.'
  },
  {
    id: "brownie-2",
    brand: 'BROWNIE DELIGHT',
    name: 'Dark Chocolate Fudge Brownie',
    rating: 4.5,
    reviews: 56,
    price: 850,
    image: '/images/cakes/image7.png',
    category: "Brownies",
    inStock: true,
    description: 'A rich, moist, and indulgent dark chocolate brownie topped with creamy fudge.'
  },
  {
    id: "brownie-3",
    brand: 'THE BROWNIE FACTORY',
    name: 'Peanut Butter Swirl Brownie',
    rating: 4.8,
    reviews: 125,
    price: 950,
    image: '/images/cakes/image8.png',
    category: "Brownies",
    inStock: true,
    description: 'A creamy peanut butter swirl mixed into a soft, chewy brownie.'
  },
  {
    id: "brownie-4",
    brand: 'DELISH BAKERY',
    name: 'Salted Caramel Brownie',
    rating: 4.7,
    reviews: 95,
    price: 1050,
    image: '/images/cakes/image9.png',
    category: "Brownies",
    inStock: true,
    description: 'A decadent brownie infused with salted caramel and topped with chocolate chips.'
  }
] as const;