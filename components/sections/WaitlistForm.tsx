"use client";

import React, { useState } from 'react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Using Formspree endpoint
      const endpoint = "https://formspree.io/f/mvgrlnwa";
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          source: 'NorchAI Waitlist'
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setName('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="waitlist" className="py-24 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              <span className="mr-1">🚀</span> Limited Early Access
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display leading-tight">
              Join the NorchAI Waitlist Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Be among the first to experience the future of AI-powered personalized skincare. Sign up below to secure your spot.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Thank You for Joining!</h3>
                <p className="text-gray-600 mb-6 font-body">
                  We've added you to our waitlist. We'll notify you as soon as NorchAI is ready for you to experience the future of skincare.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setEmail('');
                    setName('');
                  }} 
                  className="text-primary font-medium hover:text-primary/80 transition-colors font-body"
                >
                  Sign up another email
                </button>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 font-display">Benefits of Joining</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 bg-accent/20 rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-gray-700 font-body"><strong className="font-semibold">Priority access</strong> to the platform once launched</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 bg-accent/20 rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-gray-700 font-body"><strong className="font-semibold">30% discount</strong> on your first month subscription</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 bg-accent/20 rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-gray-700 font-body"><strong className="font-semibold">Exclusive content</strong> with skincare tips and insights</span>
                      </li>
                    </ul>
                    
                    <div className="mt-8 flex items-center">
                      <div className="flex -space-x-2 mr-3">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                      </div>
                      <p className="text-sm text-gray-600 font-body">Joined by <strong>230+ people</strong> this week</p>
                    </div>
                  </div>
                  
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                          {error}
                        </div>
                      )}
                      
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-body">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none font-body"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-body">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none font-body"
                          required
                        />
                      </div>
                      
                      {/* Hidden field for source tracking */}
                      <input type="hidden" name="source" value="NorchAI Waitlist" />
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-primary text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5 font-body ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center font-body">
                        By signing up, you agree to our <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>.
                      </p>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 