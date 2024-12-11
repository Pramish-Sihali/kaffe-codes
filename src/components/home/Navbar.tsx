// components/layout/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import BrandsModal from './BrandsModal';
import ProfileDropdown from '../profile/ProfileDropdown';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Brands', path: '/brands' },
  { label: 'Offers', path: 'offers-section' },
  { label: 'Buying Guidelines', path: 'guidelines-section' },
  { label: 'Gifts', path: 'gifts-section' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsModalOpen, setIsBrandsModalOpen] = useState(false);
  const pathname = usePathname();
  const { wishlistItems } = useWishlist();
  const { totalItems: cartItems } = useCart();

  // This would come from your auth context
  const userProfileImage = "/path/to/profile/image.jpg";

  const handleNavClick = (item: NavItem): void => {
    if (item.label === 'Brands') {
      setIsBrandsModalOpen(true);
    } else {
      if (typeof window !== 'undefined') {
        const element = document.getElementById(item.path);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b">
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
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item)}
                  className={`text-gray-600 hover:text-gray-900 transition-colors duration-200 ${
                    pathname === item.path ? 'text-green-600 font-medium' : ''
                  }`}
                >
                  {item.label}
                </button>
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
              <Link 
                href="/wishlist" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative"
              >
                <Heart className="h-6 w-6" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              <Link 
                href="/cart" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative"
              >
                <ShoppingBag className="h-6 w-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Link>

              <Link 
                href="/account" 
                className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200"
              >
                <Image
                  src={userProfileImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </Link>

              <ProfileDropdown />
              
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
              <button
                key={item.path}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 ${
                  pathname === item.path ? 'text-green-600 font-medium' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <BrandsModal 
        isOpen={isBrandsModalOpen} 
        onClose={() => setIsBrandsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;