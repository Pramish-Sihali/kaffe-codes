// src/components/profile/ProfileDropdown.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { User, Heart, Star, RotateCcw, Package } from 'lucide-react';

interface ProfileOption {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const profileOptions: ProfileOption[] = [
  { label: 'My Account', path: '/account', icon: <User className="w-4 h-4" /> },
  { label: 'My Wishlist', path: '/wishlist', icon: <Heart className="w-4 h-4" /> },
  { label: 'My Reviews', path: '/reviews', icon: <Star className="w-4 h-4" /> },
  { label: 'Returns & Cancellations', path: '/returns', icon: <RotateCcw className="w-4 h-4" /> },
  { label: 'My Orders', path: '/orders', icon: <Package className="w-4 h-4" /> },
];

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
      >
        <User className="h-6 w-6" />
        <span className="hidden md:block">My Profile</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
          {profileOptions.map((option) => (
            <Link
              key={option.path}
              href={option.path}
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {option.icon}
              <span>{option.label}</span>
            </Link>
          ))}
          <div className="border-t my-2"></div>
          <button
            onClick={() => {
              // Handle logout logic here
              setIsOpen(false);
            }}
            className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
          >
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;