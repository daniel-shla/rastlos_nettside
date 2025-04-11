"use client";

import React from 'react';
import ThemedContainer from './ThemedContainer';
import { useTheme } from './ThemeContext';

interface PageTemplateProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function PageTemplate({ 
  children, 
  title, 
  subtitle,
  className = '' 
}: PageTemplateProps) {
  const { isDark } = useTheme();
  
  return (
    <ThemedContainer className="flex flex-col min-h-screen">
      {/* Spacer Div */}
      <div className="bg-background h-16"></div>
      
      <main className={`container mx-auto px-4 sm:px-10 py-8 sm:py-15 flex-grow ${className}`}>
        {title && (
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-anton text-buldreoransj mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {subtitle}
              </p>
            )}
            <div className={`mt-4 h-1 w-24 ${isDark ? 'bg-buldreoransj' : 'bg-buldreoransj'}`}></div>
          </header>
        )}
        
        {children}
      </main>
      
      {/* Spacer Div */}
      <div className="bg-background h-16"></div>
    </ThemedContainer>
  );
} 