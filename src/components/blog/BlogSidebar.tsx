// components/blog/BlogSidebar.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, Search } from 'lucide-react';
import { BlogPost, BlogCategory } from '@/types/blog';

interface BlogSidebarProps {
  categories: BlogCategory[];
  recentPosts: BlogPost[];
  tags: string[];
  onSelectCategory: (category: string | null) => void;
  onSelectTag: (tag: string | null) => void;
  onSearch: (query: string) => void;
  onRecentPostClick: (post: BlogPost) => void;
  selectedCategory: string | null;
  selectedTag: string | null;
  searchQuery: string;
  onBack?: () => void;
}

export default function BlogSidebar({
  categories,
  recentPosts,
  tags,
  onSelectCategory,
  onSelectTag,
  onSearch,
  onRecentPostClick,
  selectedCategory,
  selectedTag,
  searchQuery,
  onBack
}: BlogSidebarProps) {
  const [searchInput, setSearchInput] = useState(searchQuery);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchInput);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchInput, onSearch]);

  return (
    <div className="space-y-8">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center text-brown-600 hover:text-brown-700 mb-4 gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Blogs</span>
        </button>
      )}

      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search our articles"
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-brown-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onSelectCategory(
                selectedCategory === category.slug ? null : category.slug
              )}
              className={`flex items-center justify-between w-full group px-2 py-1.5 rounded transition-colors ${
                selectedCategory === category.slug 
                  ? 'bg-brown-50 text-brown-600' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-gray-400 text-sm">{category.count} posts</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Recent posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => onRecentPostClick(post)}
              className="flex gap-3 group w-full text-left"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium group-hover:text-brown-600 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === tag
                  ? 'bg-brown-100 text-brown-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-brown-50 hover:text-brown-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}