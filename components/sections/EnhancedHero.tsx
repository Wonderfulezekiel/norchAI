"use client";

import React from 'react';

export function EnhancedHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-gray-100">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
              <span className="mr-2 bg-accent text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">✓</span>
              AI-powered skincare just got personal
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
              Transform Your <span className="text-primary inline-block relative">
                Skincare
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span>
              </span> Routine
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-lg">
              Get personalized recommendations powered by advanced AI that analyzes <span className="font-semibold">your unique skin needs</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#waitlist" 
                className="btn btn-primary shadow-lg shadow-primary/20 text-center text-lg font-semibold py-4 px-8 rounded-xl transition-transform hover:translate-y-[-2px]"
              >
                Join the Waitlist
                <span className="ml-2">→</span>
              </a>
              <a 
                href="#how-it-works" 
                className="btn btn-outline text-center font-medium hover:bg-gray-50"
              >
                See How It Works
              </a>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-xs text-white font-medium">+5</div>
              </div>
              <p className="ml-3 text-sm text-gray-600"><span className="font-semibold">230+ people</span> already joined the waitlist</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl opacity-60"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                      </div>
                      <p className="font-semibold text-xl text-white">AI Skin Analysis</p>
                      <p className="text-white/80 text-sm mt-2">Visualizing your personalized assessment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -right-4 -bottom-4 bg-white rounded-lg shadow-lg p-3 flex items-center">
              <div className="bg-accent/20 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M20 7.5v9l-4-2-4 2-4-2-4 2v-9l4-2 4 2 4-2 4 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm font-medium">Track Progress</p>
                <p className="text-xs text-gray-500">Data-driven results</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -left-4 top-10 bg-white rounded-lg shadow-lg p-3 flex items-center">
              <div className="bg-primary/20 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7 0-3.8-.7-.7-1.8-1-2.8-.8a4 4 0 0 0-7.8 0c-1 0-2.1.3-2.8.8-1 1.1-1 2.7 0 3.8a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z"></path></svg>
              </div>
              <div>
                <p className="text-sm font-medium">Custom Routines</p>
                <p className="text-xs text-gray-500">Personalized for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 