"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NorchAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features"
              className="text-gray-800 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works"
              className="text-gray-800 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
            >
              How It Works
            </Link>
            <Link 
              href="#faq"
              className="text-gray-800 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
            >
              FAQ
            </Link>
            <Link 
              href="#waitlist" 
              className="bg-primary text-white px-6 py-2.5 rounded-lg shadow-lg shadow-primary/20 font-medium transition-transform hover:-translate-y-0.5"
            >
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-4">
          <div className="container">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#features"
                className="text-gray-800 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works"
                className="text-gray-800 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#faq"
                className="text-gray-800 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#waitlist" 
                className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Waitlist
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 