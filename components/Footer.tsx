"use client";

import Contact from "./Contact";
import Members from "./Members";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`p-4 flex flex-col md:flex-row gap-8 border-t transition-colors duration-300
      ${isDark 
        ? 'border-t border-[#fef6da] bg-[#292929] text-white' 
        : 'border-t border-[#292929] bg-[#fffdf4] text-[#292929]'} 
      justify-between items-center font-anton`}
    >
      <div className="text-center md:text-left">
        <Contact />
      </div>
      <div className="text-center">
        <Members />
      </div>
      <div className="text-center text-sm">
        <p className={isDark ? "text-gray-400" : "text-gray-600"}>ETABLERT 2024</p>
        <p className={`mt-2 ${isDark ? "text-gray-500" : "text-gray-700"} text-xs`}>
          © {new Date().getFullYear()} Rastløs. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  );
}