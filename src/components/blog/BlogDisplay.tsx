// components/blog/BlogDisplay.tsx
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { Carousel } from '@/components/home/Carousel';
import BlogCard from './BlogCard';

interface BlogDisplayProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
  onSelectBlog: (blog: BlogPost) => void;
}

export default function BlogDisplay({ blog, relatedBlogs, onSelectBlog }: BlogDisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="relative aspect-[21/9] w-full">
        <Image 
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="uppercase tracking-wider">{blog.category}</span>
          <span>by {blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>

        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="mt-8 pt-6 border-t">
          <div className="flex gap-2 flex-wrap">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {relatedBlogs.length > 0 && (
        <div className="mt-12 px-8 pb-8">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedBlogs.map((blog) => (
              <BlogCard 
                key={blog.id} 
                post={blog}
                onClick={onSelectBlog}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}