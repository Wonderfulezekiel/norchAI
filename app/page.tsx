"use client";

import { Navigation } from '../components/Navigation';
import { EnhancedHero } from '../components/enhanced/Hero';
import { Features } from '../components/sections/Features';
import { Faq } from '../components/sections/Faq';
import { WaitlistForm } from '../components/sections/WaitlistForm';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Navigation />
      <EnhancedHero />
      <Features />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <span className="mr-1">🔍</span> Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">
              How NorchAI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Our advanced AI technology makes getting personalized skincare advice simple and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">1</div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Upload Selfies</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Take and upload selfies for our AI to analyze your skin's condition and identify areas of concern.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">2</div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Complete Profile</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Answer questions about your skin type, concerns, lifestyle factors, and skincare goals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">3</div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Get Recommendations</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Receive personalized skincare routines and product recommendations tailored to your needs.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">4</div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Track Progress</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Monitor your skin's improvement and receive routine adjustments as your skin evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <span className="mr-1">⚡</span> Technology
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">
                Advanced AI Technology
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 font-body">
                NorchAI uses state-of-the-art computer vision and machine learning to analyze your skin with incredible accuracy.
              </p>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-accent/20 rounded-full p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700 font-body">Advanced computer vision for detailed skin analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-accent/20 rounded-full p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700 font-body">Machine learning models trained on dermatological datasets</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-accent/20 rounded-full p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700 font-body">Natural language processing for personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-accent/20 rounded-full p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-gray-700 font-body">Continuous learning algorithm that improves with each user</span>
                </li>
              </ul>
              
              <div className="mt-10">
                <a href="#waitlist" className="inline-flex items-center bg-primary text-white px-8 py-3.5 rounded-xl shadow-lg shadow-primary/20 font-medium transition-transform hover:-translate-y-0.5 font-body">
                  Join the Waitlist
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl opacity-60"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15.5 9.5 12 6 8.5 9.5"></path><circle cx="12" cy="6" r="2"></circle><path d="m18 20-3-6-3 6"></path><circle cx="15" cy="14" r="2"></circle><path d="m6 20 3-6 3 6"></path><circle cx="9" cy="14" r="2"></circle></svg>
                        </div>
                        <p className="font-semibold text-2xl text-white font-display">AI Technology</p>
                        <p className="text-white/80 text-sm mt-2 max-w-xs mx-auto font-body">Our advanced AI analyzes thousands of data points to create personalized skincare routines</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Faq />
      <WaitlistForm />
      <Footer />
    </main>
  );
} 