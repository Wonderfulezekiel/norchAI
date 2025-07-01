"use client";

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container relative">
        {/* Main footer content */}
        <div className="pt-16 pb-12">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand column */}
            <div>
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    NorchAI
                  </span>
                </Link>
              </div>
              <p className="text-gray-300 mb-6 font-body">
                Revolutionizing skincare with AI-powered analysis and personalized recommendations tailored to your unique needs.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation columns */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 font-display">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 font-display">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-body">Contact</a></li>
                </ul>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-display">Stay Updated</h3>
              <p className="text-gray-400 mb-4 font-body">
                Subscribe to our newsletter for the latest updates, skincare tips, and special offers.
              </p>
              <form className="mb-2">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-500 font-body">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from NorchAI.
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-body">
              &copy; {new Date().getFullYear()} NorchAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-body">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-body">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-body">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 