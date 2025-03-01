"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Shortcuts() {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex justify-evenly p-4">
        {[
          { href: "/merch", label: "MERCH" },
          { href: "/events", label: "ARRANGEMENTER" },
          { href: "/intern", label: "BLI INTERN" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} className="px-4 py-2 rounded font-anton text-2xl">
            <span className={`${pathname === href ? "text-rastrød" : "text-shortcut-text hover:text-gray-200"}`}>
              {label}
            </span>
          </Link>
        ))}
      </div>
      <hr className="border-t border-gray-300 my-0.5" />
    </div>
  );
}
