'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-green-600 to-green-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Image src="/store-logo.svg" alt="Ayush General Store Logo" width={32} height={32} />
                </div>
                <span className="text-white font-bold text-xl">Ayush General Store</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  About
                </Link>
                <Link href="/products" className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Products
                </Link>
                <Link href="/contact" className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Contact
                </Link>
                {/* <Link href="/admin" className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Admin
                </Link> */}
                <CartIcon onClick={() => setIsCartOpen(true)} />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <CartIcon onClick={() => setIsCartOpen(true)} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-200 focus:outline-none focus:text-green-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700 rounded-b-lg">
                <Link href="/" className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>
                <Link href="/products" className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium">
                  Products
                </Link>
                <Link href="/contact" className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </Link>
                <Link href="/admin" className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium">
                  Admin
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
