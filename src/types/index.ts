// src/types/index.ts

export interface Category {
    name: string;
    icon: string;
    path: string;
  }
  
  export interface CarouselSlide {
    id: number;
    title: string;
    discount: string;
    image: string;
    link: string;
  }
  
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
  }
  
  export interface SearchInputProps {
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  }