// src/components/ui/Button.tsx
import { ButtonProps } from '@/types';

export default function Button({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = "px-6 py-2 rounded-lg font-medium transition-colors duration-200";
  const variantClasses = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-white text-gray-900 hover:bg-gray-100"
  };
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

