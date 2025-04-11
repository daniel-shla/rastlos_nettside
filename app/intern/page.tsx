"use client";

import { useTheme } from '@/components/ThemeContext';

export default function Intern() {
    const { isDark } = useTheme();

    return <div className={`flex flex-col items-center justify-center h-screen text-center ${isDark ? 'bg-[#292929] text-[#fef6da]' : 'bg-[#f7f3e8] text-gray-700'}`}>
        <h1 className="text-4xl font-bold mb-4 text-buldreoransj">Coming Soon</h1>
        <p className="text-lg max-w-md">
            Vi jobber med å utvikle en spennende internside for våre medlemmer. Snart vil du kunne finne informasjon om hvordan du kan bli en del av vårt team og bidra til å forme fremtiden til IFI Rastløs.
        </p>
    </div>
}