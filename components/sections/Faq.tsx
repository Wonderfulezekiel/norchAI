"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white opacity-60 pointer-events-none"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <span className="mr-1">🤔</span> Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
            Everything you need to know about how NorchAI works and how it can transform your skincare routine.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium font-display py-6">
                How accurate is the AI skin analysis?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body pb-6 leading-relaxed">
                Our AI has been trained on thousands of dermatological images and can identify common skin concerns with high accuracy. It continues to learn and improve with each analysis, becoming more precise over time. However, for serious skin conditions, we always recommend consulting a dermatologist.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium font-display py-6">
                How personalized are the skincare recommendations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body pb-6 leading-relaxed">
                Extremely personalized. NorchAI considers your skin analysis results, questionnaire responses, lifestyle factors, budget preferences, and specific goals to create a routine that's uniquely yours. The system also adapts based on your progress and feedback over time.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium font-display py-6">
                Do I need to take photos regularly?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body pb-6 leading-relaxed">
                For optimal tracking and personalization, we recommend uploading new photos every 2-4 weeks. This timeframe allows sufficient time to see changes while ensuring your recommendations stay current with your skin's evolving needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium font-display py-6">
                Can NorchAI replace my dermatologist?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body pb-6 leading-relaxed">
                No, NorchAI is designed to complement, not replace, professional dermatological care. While our AI can provide personalized recommendations for common skincare concerns, it's not a substitute for medical diagnosis or treatment of serious skin conditions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b-0">
              <AccordionTrigger className="text-lg font-medium font-display py-6">
                How much will NorchAI cost when it launches?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body pb-6 leading-relaxed">
                We're still finalizing our pricing structure, but we're committed to making NorchAI accessible and affordable. Waitlist members will receive special early access pricing and discounts as a thank you for your early support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 font-body">
            Still have questions? We're here to help.
          </p>
          <a 
            href="mailto:support@norchai.com" 
            className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors font-body"
          >
            Contact our support team
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
} 