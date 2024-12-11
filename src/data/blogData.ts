// data/blogData.ts
import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'coffee-grinder-1',
    title: 'How A Coffee Grinder Can Seriously Upgrade Your Coffee Routine',
    excerpt: 'Discover the essential role of a quality coffee grinder in elevating your daily coffee experience.',
    content: `
      <p>A great cup of coffee starts with freshly ground beans. The importance of a good grinder cannot be overstated in the pursuit of coffee perfection.</p>
      <h2>Why Grind Size Matters</h2>
      <p>Different brewing methods require different grind sizes. Espresso needs a fine grind, while French press requires coarse grounds. A quality grinder gives you the consistency and control needed for each method.</p>
      <h2>Types of Grinders</h2>
      <p>1. Blade Grinders: Entry-level option, but less consistent</p>
      <p>2. Burr Grinders: Professional choice, offering superior consistency</p>
      <p>3. Manual Grinders: Perfect for travel and small batches</p>
      <h2>Investment in Quality</h2>
      <p>While quality grinders might seem expensive, they're an investment in better coffee. A good grinder can last years and significantly improve your daily brew.</p>
    `,
    category: 'COFFEE',
    image: '/images/machinery/machine1.svg',
    author: 'Admin',
    date: '24 Aug 2024',
    tags: ['Coffee', 'Machinery', 'Tips']
  },
  {
    id: 'cortado-guide',
    title: 'Breaking Down The Hype Around Cortado Artiata',
    excerpt: 'Explore the perfect balance of espresso and steamed milk in this Spanish-inspired coffee drink.',
    content: `
      <p>The cortado has become increasingly popular in specialty coffee shops, offering a perfect balance between espresso and steamed milk.</p>
      <h2>What is a Cortado?</h2>
      <p>A cortado is an espresso cut with a small amount of warm milk to reduce the acidity. The word 'cortado' comes from the Spanish 'cortar' (to cut).</p>
      <h2>Perfect Proportions</h2>
      <p>The ideal cortado ratio is 1:1 - equal parts espresso and steamed milk. This creates a harmonious blend of coffee and milk flavors.</p>
      <h2>Milk Texture</h2>
      <p>Unlike a cappuccino or latte, the milk in a cortado is steamed with minimal foam, creating a smooth, velvety texture.</p>
    `,
    category: 'DRINKS',
    image: '/images/coffee/coffee2.png',
    author: 'Admin',
    date: '24 Aug 2024',
    tags: ['Coffee', 'Drinks', 'Recipes']
  },
  {
    id: 'tea-ceremony',
    title: 'The Art of Traditional Tea Ceremony',
    excerpt: 'Dive into the rich cultural heritage and meticulous practice of traditional tea ceremonies.',
    content: `
      <p>Tea ceremonies are more than just drinking tea - they're a celebration of mindfulness, respect, and tradition.</p>
      <h2>Origins and History</h2>
      <p>The practice of tea ceremonies has roots in various Asian cultures, each with its unique rituals and meanings.</p>
      <h2>Essential Elements</h2>
      <p>1. Proper Tea Selection</p>
      <p>2. Precise Water Temperature</p>
      <p>3. Specific Utensils</p>
      <p>4. Mindful Movements</p>
    `,
    category: 'TEA',
    image: '/images/tea/tea1.png',
    author: 'Tea Master',
    date: '22 Aug 2024',
    tags: ['Tea', 'Culture', 'Traditions']
  },
  {
    id: 'bakery-tips',
    title: 'Essential Tips for Home Baking Success',
    excerpt: 'Master the fundamentals of baking with these professional tips and tricks.',
    content: `
      <p>Successful baking is a blend of science and art. Understanding the basics can help you achieve consistent results.</p>
      <h2>Temperature Matters</h2>
      <p>Room temperature ingredients mix better and create better textures in your final products.</p>
      <h2>Measuring Techniques</h2>
      <p>Precise measurements are crucial in baking. Learn the difference between volume and weight measurements.</p>
    `,
    category: 'BAKERY',
    image: "/images/cakes/image5.png",
    author: 'Chef Sarah',
    date: '20 Aug 2024',
    tags: ['Bakery', 'Tips', 'Recipes']
  },
  {
    id: 'coffee-beans',
    title: 'Understanding Coffee Bean Origins',
    excerpt: 'Learn how different growing regions affect coffee flavor profiles.',
    content: `
      <p>Coffee beans from different regions have distinct characteristics that influence the final cup.</p>
      <h2>Major Growing Regions</h2>
      <p>1. Latin America: Clean, bright flavors</p>
      <p>2. Africa: Fruity, floral notes</p>
      <p>3. Asia Pacific: Earthy, full-bodied</p>
    `,
    category: 'COFFEE',
    image: '/images/coffee/coffee1.png',
    author: 'Coffee Expert',
    date: '18 Aug 2024',
    tags: ['Coffee', 'Education', 'Origins']
  }
];

export const categories = [
  { name: 'Bakery', count: 4, slug: 'bakery' },
  { name: 'Machinery', count: 5, slug: 'machinery' },
  { name: 'Coffee', count: 8, slug: 'coffee' },
  { name: 'Buying Guide', count: 3, slug: 'buying-guide' },
  { name: 'Tea', count: 7, slug: 'tea' }
];

export const tags = [
  'Tea', 'Coffee', 'Machinery', 
  'Bakery', 'Buying Guides', 'Recipes',
  'Culture', 'Tips', 'Education',
  'Origins', 'Drinks', 'Traditions'
];