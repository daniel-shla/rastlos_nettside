"use client";

import React from 'react';
import { useTheme } from './ThemeContext';

interface ThemedContainerProps {
  children: React.ReactNode;
  className?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
}

export default function ThemedContainer({ 
  children, 
  className = '',
  borderTop = false,
  borderBottom = false 
}: ThemedContainerProps) {
  const { isDark, isLight } = useTheme();
  
  return (
    <div 
      className={`
        ${isDark ? 'bg-[#292929] text-white' : 'bg-[#fffdf4] text-[#292929]'} 
        ${borderTop ? (isDark ? 'border-t border-[#fef6da]' : 'border-t border-[#292929]') : ''}
        ${borderBottom ? (isDark ? 'border-b border-[#fef6da]' : 'border-b border-[#292929]') : ''}
        transition-all duration-300 ${className}
      `}
    >
      {children}
    </div>
  );
} 