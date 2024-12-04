
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Brands', path: '/brands' },
  { label: 'Offers', path: '/offers' },
  { label: 'Buying Guide', path: '/buying-guide' },
  { label: 'Gifts', path: '/gifts' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Kaffe Codes"
              width={0}
              height={0}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-gray-600 hover:text-gray-900 transition-colors duration-200 ${
                  pathname === item.path 
                    ? 'text-green-600 font-medium' 
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs ml-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search on Kaffe Codes"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Sign in
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search on Kaffe Codes"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 ${
                pathname === item.path 
                  ? 'text-green-600 font-medium' 
                  : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
