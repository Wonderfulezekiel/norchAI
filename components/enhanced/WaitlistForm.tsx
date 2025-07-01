"use client";

import React, { useState } from 'react';

export function EnhancedWaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData({ name: '', email: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <span className="mr-2 bg-primary text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">✓</span>
            Limited early access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Exclusive Waitlist</h2>
          <p className="text-xl mb-8">
            Be among the first to experience the future of AI-powered personalized skincare with NorchAI.
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden p-8">
          {isSuccess ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-gray-600">
                Thank you for joining our waitlist. We'll notify you when NorchAI is ready for you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input 
                  id="name"
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              {error && (
                <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              
              <button 
                type="submit" 
                className="w-full btn btn-primary text-lg py-4 rounded-lg font-semibold transition-transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
              </button>
              <p className="mt-4 text-sm text-gray-500 text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          )}
          
          <div className="mt-8 flex items-center justify-center">
            <div className="flex -space-x-2 mr-3">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
            <p className="text-sm text-gray-600"><span className="font-semibold">230+ people</span> already joined the waitlist</p>
          </div>
        </div>
      </div>
    </section>
  );
} 