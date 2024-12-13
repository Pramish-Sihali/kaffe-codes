// components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Heart, ShoppingBag, Menu, X, User, Star, RotateCcw, Package } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import BrandsModal from './BrandsModal';
import { SearchBar } from '@/components/search/SearchBar';

interface NavItem {
  label: string;
  path: string;
}

interface ProfileOption {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const profileOptions: ProfileOption[] = [
  { label: 'My Account', path: '/account', icon: <User className="w-5 h-5" /> },
  { label: 'My Wishlist', path: '/wishlist', icon: <Heart className="w-5 h-5" /> },
  { label: 'My Reviews', path: '/reviews', icon: <Star className="w-5 h-5" /> },
  { label: 'Returns & Cancellations', path: '/returns', icon: <RotateCcw className="w-5 h-5" /> },
  { label: 'My Orders', path: '/orders', icon: <Package className="w-5 h-5" /> },
];

const navItems: NavItem[] = [
  { label: 'Brands', path: '/brands' },
  { label: 'Offers', path: 'offers-section' },
  { label: 'Buying Guidelines', path: 'guidelines-section' },
  { label: 'Gifts', path: 'gifts-section' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsModalOpen, setIsBrandsModalOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { wishlistItems } = useWishlist();
  const { totalItems: cartItems } = useCart();
  const { profileData } = useUser();

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

  const handleClickOutside = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Kaffe Codes"
                width={0}
                height={0}
                className="h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item)}
                  className={`text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg ${
                    pathname === item.path ? 'text-green-600 font-medium' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-xs ml-8">
              <SearchBar />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              {/* Wishlist */}
              <Link 
                href="/wishlist" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative"
              >
                <Heart className="h-7 w-7" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link 
                href="/cart" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative"
              >
                <ShoppingBag className="h-7 w-7" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Link>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {profileData?.image ? (
                    <Image
                      src={profileData.image}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <User className="h-7 w-7 m-1.5" />
                  )}
                </button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                    {profileOptions.map((option) => (
                      <Link
                        key={option.path}
                        href={option.path}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-base"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        {option.icon}
                        <span>{option.label}</span>
                      </Link>
                    ))}
                    <div className="border-t my-2"></div>
                    <button
                      onClick={() => {
                        // Add logout logic here
                        setIsProfileDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-gray-100 w-full text-left text-base"
                    >
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
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
              <SearchBar />
            </div>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg ${
                  pathname === item.path ? 'text-green-600 font-medium' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Brands Modal */}
      <BrandsModal 
        isOpen={isBrandsModalOpen} 
        onClose={() => setIsBrandsModalOpen(false)} 
      />

      {/* Backdrop for Profile Dropdown */}
      {isProfileDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleClickOutside}
        />
      )}
    </>
  );
};

export default Navbar;