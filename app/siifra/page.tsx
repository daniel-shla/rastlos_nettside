"use client";

import React from 'react';
import Image from 'next/image';
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
                    <div className="mx-auto h-28 w-28 mb-6 relative">
                        <Image 
                            src="/lightlogo.png" 
                            alt="Rastløs logo" 
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                
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