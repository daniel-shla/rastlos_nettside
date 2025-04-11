"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  getThemedImage: (darkImage: string, lightImage?: string) => string;
  isDark: boolean;
  isLight: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  // Initialize theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      applyThemeToDocument(savedTheme);
    }
  }, []);

  const applyThemeToDocument = (newTheme: 'dark' | 'light') => {
    document.documentElement.classList.toggle('light-mode', newTheme === 'light');
    document.documentElement.style.backgroundColor = newTheme === 'light' ? '#fffdf4' : '#292929';
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme === 'light' ? '#fffdf4' : '#292929');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = newTheme === 'light' ? '#fffdf4' : '#292929';
      document.head.appendChild(meta);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyThemeToDocument(newTheme);
  };

  // Helper function to get the appropriate image based on theme
  const getThemedImage = (darkImage: string, lightImage?: string): string => {
    if (theme === 'light' && lightImage) {
      return lightImage;
    }
    return darkImage;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getThemedImage, isDark, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 