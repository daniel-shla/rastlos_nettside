"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className={`visible ${isDark ? 'text-[#fef6da]' : 'text-[#292929]'}`}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop; 