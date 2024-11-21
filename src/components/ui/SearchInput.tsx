// src/components/ui/SearchInput.tsx
import { Search } from 'lucide-react';
import { SearchInputProps } from '@/types';

export default function SearchInput({ 
  placeholder = "Search...", 
  onChange,
  className = ''
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <input 
        type="text" 
        placeholder={placeholder}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}