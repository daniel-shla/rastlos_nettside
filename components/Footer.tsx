"use client";

import Contact from "./Contact";
import Members from "./Members";
import { useTheme } from "./ThemeContext";
import Link from "next/link";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`p-4 flex flex-col lg:flex-row justify-between items-center 
      ${isDark 
        ? 'border-t border-[#fef6da] bg-[#292929] text-[#fef6da]' 
        : 'border-t border-[#292929] bg-[#fffdf4] text-[#292929]'} relative`}>
      <div className="w-full lg:w-auto flex justify-between items-center">
        <Contact />
      </div>
      <div className="text-center md:text-left">
        <Members />
      </div>
      <div className="text-center text-sm">
        <p className={isDark ? "text-[#fef6da]" : "text-gray-600"}>ETABLERT 2024</p>
        <p className={`mt-2 ${isDark ? "text-[#fef6da]" : "text-gray-700"} text-xs`}>
          © {new Date().getFullYear()} Rastløs. Alle rettigheter reservert.
        </p>
        <Link href="/privacy" className={`mt-2 ${isDark ? "text-gray-500" : "text-gray-700"} text-xs hover:underline bg-[#f0f0f0] p-1 rounded border border-gray-300 block`}>
          Personvernerklæring
        </Link>
        <Link href="/guidelines" className={`mt-2 ${isDark ? "text-gray-500" : "text-gray-700"} text-xs hover:underline bg-[#f0f0f0] p-1 rounded border border-gray-300 block`}>
          IFI-RASTLØS Retningslinjer
        </Link>
      </div>
    </footer>
  );
}