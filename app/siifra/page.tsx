"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageTemplate from '@/components/PageTemplate';
import { useTheme } from '@/components/ThemeContext';

export default function SiIfra() {
    const router = useRouter();
    const { isDark } = useTheme();
    
    useEffect(() => {
        // Redirect to the external form
        window.location.href = "https://nettskjema.no/a/si-ifra";
    }, []);
    
    return (
        <PageTemplate
            title="SI IFRA"
            subtitle="Du blir omdirigert til skjemaet..."
        >
            <div className="flex flex-col items-center justify-center py-16">
                <div className={`animate-pulse text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg 
                        className="mx-auto h-12 w-12 mb-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                        />
                    </svg>
                    <p className="text-lg">Omdirigerer til Si-ifra skjemaet...</p>
                    <p className="mt-4">
                        Hvis du ikke blir omdirigert,{' '}
                        <a 
                            href="https://nettskjema.no/a/si-ifra" 
                            className="text-buldreoransj hover:underline"
                        >
                            klikk her for å gå til skjemaet manuelt
                        </a>
                    </p>
                </div>
            </div>
        </PageTemplate>
    );
}