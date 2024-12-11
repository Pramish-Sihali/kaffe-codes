// types/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    image: string;
    author: string;
    date: string;
    readTime?: string;
    tags: string[];
  }
  
  export interface BlogCategory {
    name: string;
    count: number;
    slug: string;
  }