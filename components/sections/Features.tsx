"use client";

import React from 'react';

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            AI-Powered Skincare Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Discover how our advanced technology transforms your skincare routine with personalized recommendations and insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 font-display text-gray-900">AI Skin Analysis</h3>
            <p className="text-gray-600 mb-6 font-body leading-relaxed">
              Our AI uses computer vision to analyze selfies, identifying specific skin concerns like hyperpigmentation, acne, fine lines, redness, and more.
            </p>
            <a href="#waitlist" className="inline-flex items-center font-medium text-primary font-body">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 font-display text-gray-900">Personalized Routines</h3>
            <p className="text-gray-600 mb-6 font-body leading-relaxed">
              Get custom multi-step skincare routines based on your skin profile, with morning and evening recommendations tailored to your needs.
            </p>
            <a href="#waitlist" className="inline-flex items-center font-medium text-primary font-body">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 font-display text-gray-900">Progress Tracking</h3>
            <p className="text-gray-600 mb-6 font-body leading-relaxed">
              Track your skin's improvement over time with before/after comparisons and receive routine adjustments based on your progress.
            </p>
            <a href="#waitlist" className="inline-flex items-center font-medium text-primary font-body">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 