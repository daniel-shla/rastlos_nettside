"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeContext";

export default function Shortcuts() {
  const pathname = usePathname();
  const { isDark } = useTheme();
  
  // Use the same color variable for both lines
  const lineColor = isDark ? "bg-[#fef6da]" : "bg-[#292929]";

  return (
    <div className={isDark ? "bg-[#292929]" : "bg-[#fffdf4]"}>
      {/* Top line - consistent 2px height div */}
      <div className={`h-[2px] w-full ${lineColor}`}></div>
      
      <div className="flex justify-evenly p-4">
        {[
          { href: "/about", label: "OM OSS" },
          { href: "/events", label: "ARRANGEMENTER" },
          { href: "/intern", label: "BLI INTERN" },
        ].map(({ href, label }) => (
          <Link 
            key={href} 
            href={href} 
            className="px-4 py-2 rounded font-anton text-2xl transition-colors duration-200"
          >
            <span className={`
              ${pathname === href ? "text-buldreoransj" : 
                isDark 
                  ? "text-shortcut-text hover:text-gray-200" 
                  : "text-[#292929] hover:text-buldreoransj"
              }
            `}>
              {label}
            </span>
          </Link>
        ))}
      </div>
      
      {/* Bottom line - identical to top line */}
      <div className={`h-[2px] w-full ${lineColor}`}></div>
    </div>
  );
}
