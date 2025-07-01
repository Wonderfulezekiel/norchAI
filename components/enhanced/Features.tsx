"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function EnhancedFeatures() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <span className="mr-2 bg-primary text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">★</span>
            Powered by advanced AI
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Transform Your Skincare Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NorchAI combines cutting-edge AI technology with dermatological expertise to deliver a truly personalized skincare experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">AI Skin Analysis</h3>
            <p className="text-gray-600 mb-6">
              Advanced computer vision identifies specific skin concerns like hyperpigmentation, acne, fine lines, and texture issues with remarkable accuracy.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-primary">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7 0-3.8-.7-.7-1.8-1-2.8-.8a4 4 0 0 0-7.8 0c-1 0-2.1.3-2.8.8-1 1.1-1 2.7 0 3.8a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z"></path><path d="M12 19v3"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Personalized Routines</h3>
            <p className="text-gray-600 mb-6">
              Get custom skincare routines tailored to your unique skin profile, concerns, lifestyle factors, and specific goals.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-primary">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M9 18h6"></path><path d="M20 7.5v9l-4-2-4 2-4-2-4 2v-9l4-2 4 2 4-2 4 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Progress Tracking</h3>
            <p className="text-gray-600 mb-6">
              Visualize your skin's improvement over time with precise before/after comparisons and data-driven insights to optimize your routine.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-primary">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Common Questions About Our Features</h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">How accurate is the AI skin analysis?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our AI has been trained on thousands of dermatological images and can identify common skin concerns with high accuracy. The system continues to learn and improve with each analysis. However, it's not a replacement for professional medical advice for serious skin conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">How personalized are the skincare recommendations?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Extremely personalized. We consider your skin analysis results, questionnaire responses, lifestyle factors, budget preferences, and specific goals to create a routine that's uniquely yours. The system also adapts based on your progress and feedback.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">How often should I update my progress photos?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  For optimal tracking, we recommend uploading new photos every 2-4 weeks. This timeframe allows sufficient time to see changes while ensuring your recommendations stay current with your skin's evolving needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
} 