"use client";

import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { useTheme } from '@/components/ThemeContext';

export default function SiIfra() {
    const { isDark } = useTheme();
    
    return (
        <PageTemplate
            title="SI IFRA"
            subtitle="Anonymt tilbakemeldingsskjema"
        >
            <div className="flex flex-col items-center justify-center py-16">
                <div className={`text-center max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg 
                        className="mx-auto h-16 w-16 mb-6 text-buldreoransj" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" 
                        />
                    </svg>
                    
                    <p className="text-lg mb-8">
                        Bruk dette skjemaet for å gi anonym tilbakemelding om noe du har opplevd eller observert. All informasjon behandles konfidensielt.
                    </p>
                    
                    <a 
                        href="https://nettskjema.no/a/si-ifra" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block px-8 py-4 bg-buldreoransj text-white font-bold rounded-lg hover:bg-[#d35400] transition-colors duration-300 shadow-md text-lg`}
                    >
                        Gå til skjemaet
                    </a>
                </div>
            </div>
        </PageTemplate>
    );
}