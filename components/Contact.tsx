"use client";

import { useTheme } from "./ThemeContext";

export default function Contact() {
    const { isDark } = useTheme();
    
    return (
        <div className={`${isDark ? 'text-gray-300' : 'text-[#292929]'} text-center lg:text-left`}>
            <h3 className="font-bold text-lg mb-3 font-anton">KONTAKT OSS</h3>
            <a 
                href="mailto:ifirastlos@gmail.com" 
                className={`block mb-2 hover:text-buldreoransj transition-colors ${isDark ? 'text-gray-200' : 'text-[#292929] font-medium'}`}
            >
                ifirastlos@gmail.com
            </a>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-3">
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                    <span className="inline-block w-5 mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                    Ole Johan Dahls Hus
                </p>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                    <span className="inline-block w-5 mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </span>
                    Universitetet i Oslo
                </p>
            </div>
        </div>
    );
}