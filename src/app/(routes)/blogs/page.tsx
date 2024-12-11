// app/(routes)/blogs/page.tsx
"use client";

import { useState, useMemo } from 'react';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogDisplay from '@/components/blog/BlogDisplay';
import { blogPosts, categories, tags } from '@/data/blogData';
import { BlogPost } from '@/types/blog';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const filteredBlogs = useMemo(() => {
    return blogPosts.filter(blog => {
      const matchesCategory = !selectedCategory || 
        blog.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesTag = !selectedTag || 
        blog.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase());
      const matchesSearch = !searchQuery || 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  const relatedBlogs = useMemo(() => {
    if (!selectedBlog) return [];
    return blogPosts
      .filter(blog => 
        blog.id !== selectedBlog.id && 
        (blog.category === selectedBlog.category || 
         blog.tags.some(tag => selectedBlog.tags.includes(tag)))
      )
      .slice(0, 3);
  }, [selectedBlog]);

  const handleBlogSelect = (blog: BlogPost) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-brown-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blogs</h1>
          <p className="text-brown-100">Platform to run successful online business in Nepal</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {selectedBlog ? (
              <BlogDisplay 
                blog={selectedBlog} 
                relatedBlogs={relatedBlogs}
                onSelectBlog={handleBlogSelect}
              />
            ) : (
              <>
                {filteredBlogs.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {filteredBlogs.map((post) => (
                      <BlogCard 
                        key={post.id} 
                        post={post}
                        onClick={handleBlogSelect}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-500">No blogs found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedTag(null);
                        setSearchQuery('');
                      }}
                      className="mt-4 text-brown-600 hover:text-brown-700 font-medium"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}

                {/* Featured Blogs */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {blogPosts.slice(0, 3).map((blog) => (
                      <BlogCard 
                        key={blog.id}
                        post={blog}
                        onClick={handleBlogSelect}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <BlogSidebar
              categories={categories}
              recentPosts={blogPosts.slice(0, 3)}
              tags={tags}
              onSelectCategory={setSelectedCategory}
              onSelectTag={setSelectedTag}
              onSearch={setSearchQuery}
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
              searchQuery={searchQuery}
              onBack={selectedBlog ? () => setSelectedBlog(null) : undefined}
              onRecentPostClick={handleBlogSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}