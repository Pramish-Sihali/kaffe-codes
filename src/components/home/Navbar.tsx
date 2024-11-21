"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Kaffe Codes"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/brands" className="text-gray-600 hover:text-gray-900">
              Brands
            </Link>
            <Link href="/offers" className="text-gray-600 hover:text-gray-900">
              Offers
            </Link>
            <Link href="/buying-guide" className="text-gray-600 hover:text-gray-900">
              Buying Guide
            </Link>
            <Link href="/gifts" className="text-gray-600 hover:text-gray-900">
              Gifts
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs ml-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search on Kaffe Codes"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Sign in
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-2 space-y-1">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search on Kaffe Codes"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <Link href="/brands" className="block py-2 text-gray-600">
              Brands
            </Link>
            <Link href="/offers" className="block py-2 text-gray-600">
              Offers
            </Link>
            <Link href="/buying-guide" className="block py-2 text-gray-600">
              Buying Guide
            </Link>
            <Link href="/gifts" className="block py-2 text-gray-600">
              Gifts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}