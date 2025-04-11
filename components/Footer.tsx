"use client";

import Contact from "./Contact";
import Members from "./Members";
import { useTheme } from "./ThemeContext";
import Link from "next/link";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`px-4 py-8 
      ${isDark 
        ? 'border-t border-[#fef6da] bg-[#292929] text-[#fef6da]' 
        : 'border-t border-[#292929] bg-[#fffdf4] text-[#292929]'} relative`}>
      
      {/* Mobile layout - stack everything vertically with proper spacing */}
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start">
        {/* Contact section */}
        <div className="w-full">
          <Contact />
        </div>
        
        {/* Members section - centered on mobile, left-aligned on desktop */}
        <div className="w-full">
          <Members />
        </div>
        
        {/* Copyright section - centered on mobile */}
        <div className="text-center lg:text-right w-full mt-6 lg:mt-0">
          <p className={isDark ? "text-[#fef6da]" : "text-gray-600"}>ETABLERT 2024</p>
          <p className={`mt-2 ${isDark ? "text-[#fef6da]" : "text-gray-700"} text-xs`}>
            © {new Date().getFullYear()} Rastløs. Alle rettigheter reservert.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center lg:justify-end">
            <Link href="/privacy" className={`${isDark ? "text-gray-300 bg-[#3a3a3a] border-gray-600" : "text-gray-700 bg-[#f0f0f0] border-gray-300"} text-xs hover:opacity-80 p-2 rounded border transition-opacity block text-center`}>
              Personvernerklæring
            </Link>
            <Link href="/guidelines" className={`${isDark ? "text-gray-300 bg-[#3a3a3a] border-gray-600" : "text-gray-700 bg-[#f0f0f0] border-gray-300"} text-xs hover:opacity-80 p-2 rounded border transition-opacity block text-center`}>
              IFI-RASTLØS Retningslinjer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}