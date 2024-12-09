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

  // src/types/index.ts or src/types/general.ts
export type NavItem = {
  label: string;
  path: string;
};

export type Brand = {
  name: string;
  category: string;
  image_path: string;
  additional_info: string;
  tab_category: string;
};