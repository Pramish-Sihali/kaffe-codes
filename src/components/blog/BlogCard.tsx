// components/blog/BlogCard.tsx
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <div 
      onClick={() => onClick(post)} 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-gray-500 uppercase tracking-wider">
          {post.category}
        </span>
        <h3 className="mt-2 text-lg font-medium group-hover:text-brown-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
          <span>by {post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
}