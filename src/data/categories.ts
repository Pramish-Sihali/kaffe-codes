// src/data/categories.ts
import { Category } from '@/types';

export const categories: Category[] = [
  {
    name: 'Bakery',
    icon: '/images/icons/bakery.png',
    path: '/category/bakery'
  },
  {
    name: 'Coffee',
    icon: '/images/icons/coffee.png',
    path: '/category/coffee'
  },
  {
    name: 'Tea',
    icon: '/images/icons/tea.png',
    path: '/category/tea'
  },
  {
    name: 'Utensils',
    icon: '/images/icons/utensils.png',
    path: '/category/utensils'
  },
  {
    name: 'Machineries',
    icon: '/images/icons/machineries.png',
    path: '/category/machineries'
  },
  {
    name: 'Cakes',
    icon: '/images/icons/cakes.png',
    path: '/category/cakes'
  },
  {
    name: 'Brownies',
    icon: '/images/icons/brownies.png',
    path: '/category/brownies'
  }
];

export const carouselSlides = [
  {
    id: 1,
    title: "Bakery Products",
    discount: "Up to 15% OFF",
    image: "/images/carousel/bakery.jpg",
    link: "/category/bakery"
  },
  {
    id: 2,
    title: "Tea",
    discount: "Up to 10% OFF",
    image: "/images/carousel/tea.jpg",
    link: "/category/tea"
  },
  {
    id: 3,
    title: "Utensils/ Equipment and Machinery",
    discount: "Up to 10% OFF",
    image: "/images/carousel/equipment.jpg",
    link: "/category/equipment"
  }
];