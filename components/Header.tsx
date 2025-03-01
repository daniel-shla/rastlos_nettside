"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme, getThemedImage, isDark } = useTheme();

  // Handle window resize to determine if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`p-4 flex flex-col lg:flex-row justify-between items-center 
      ${isDark 
        ? 'border-b border-[#fef6da] bg-[#292929] text-[#fef6da]' 
        : 'border-b border-[#292929] bg-[#fffdf4] text-[#292929]'} relative`}>
      <div className="w-full lg:w-auto flex justify-between items-center">
        <Link href="/" className="mr-4">
          <Image 
            src={isDark ? "./logo.png" : "./lightlogo.png"} 
            alt="Rastlos Logo" 
            width={275} 
            height={200} 
          />
        </Link>
        
        {/* Hamburger menu button for mobile */}
        <button 
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // X icon when menu is open
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation for desktop and mobile */}
      <div className={`${isMenuOpen || !isMobile ? 'flex' : 'hidden'} flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0 lg:items-center`}>
        <nav className="flex flex-col lg:flex-row gap-4 mb-4 lg:mb-0">
          <Link href="/siifra" className={`hover:text-buldreoransj font-anton ${isDark ? 'text-[#fef6da]' : 'text-[#292929]'} text-xl py-2 lg:py-0 transition-colors`}>SI IFRA</Link>
          <Link href="/tilbakemelding" className={`hover:text-buldreoransj font-anton ${isDark ? 'text-[#fef6da]' : 'text-[#292929]'} text-xl py-2 lg:py-0 transition-colors`}>TILBAKEMELDING</Link>
          <Link href="/merch" className={`hover:text-buldreoransj font-anton ${isDark ? 'text-[#fef6da]' : 'text-[#292929]'} text-xl py-2 lg:py-0 transition-colors`}>MERCH</Link>
        </nav>
        
        <div className="flex items-center ml-4">
          {/* Theme toggle button - Enhanced version */}
          <button 
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full focus:outline-none 
              ${isDark 
                ? 'border border-[#444] hover:bg-[#3a3a3a]' 
                : 'border border-[#292929] hover:bg-[#f7f5e9]'} 
              transition-all duration-200`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              // Sun icon for dark mode (switch to light)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for light mode (switch to dark)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#292929]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
