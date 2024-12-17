// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import { coffeeProducts } from '@/data/coffeeProducts';
import { teaProducts } from '@/data/teaProducts';
import { cakeProducts } from '@/data/cakeProducts';
import { machines } from '@/data/machineProduct';
import { topPicksData } from '@/data/topPicks';
import { handpickedProducts } from '@/data/handpickedProducts';
import { brownieProducts } from '@/data/brownieProducts';

const allProducts = [
  ...coffeeProducts,
  ...teaProducts,
  ...cakeProducts,
  ...machines,
  ...topPicksData,
  ...handpickedProducts,
  ...brownieProducts,
];

interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
  verified?: boolean;
  authorImage?: string;
}

interface ProductReviews {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

// Function to get product reviews - replace with actual API call in production
async function getProductReviews(productId: string): Promise<ProductReviews> {
  // Simulate API call
  return {
    reviews: [
      {
        author: "John Doe",
        date: "2024-03-15",
        rating: 5,
        text: "Excellent product, exactly what I was looking for!",
        verified: true,
        authorImage: "/default-avatar.png"
      },
      {
        author: "Jane Smith",
        date: "2024-03-14",
        rating: 4,
        text: "Good quality, fast delivery.",
        verified: true,
        authorImage: "/default-avatar.png"
      }
    ],
    averageRating: 4.5,
    totalReviews: 2
  };
}

interface PageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: PageProps) {
  const baseId = params.id.split('-').pop() || params.id;
  
  const product = allProducts.find(p => 
    p.id === params.id || p.id === baseId
  );

  if (!product) {
    notFound();
  }

  const similarProducts = allProducts
    .filter(p => 
      p.category === product.category && 
      p.id !== product.id
    )
    .slice(0, 6);

  // Get product reviews
  const productReviews = await getProductReviews(product.id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ProductDetailClient 
        product={product}
        similarProducts={similarProducts}
        initialReviews={productReviews.reviews}
        initialTotalReviews={productReviews.totalReviews}
        initialAverageRating={productReviews.averageRating}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

