"use client";

import React from 'react';
import Image from 'next/image';
import PageTemplate from '@/components/PageTemplate';
import { useTheme } from '@/components/ThemeContext';

export default function Merch() {
  const { isDark, isLight } = useTheme();
  
  return (
    <PageTemplate title="Merch" subtitle="Snart tilgjengelig">
      <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#f7f3e8] shadow-md">
        <p className="text-2xl font-bold text-gray-700 mb-4">
          Coming Soon
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Vi jobber hardt med å få vår merch klar. Følg med for oppdateringer!
        </p>
      </div>
    </PageTemplate>
  );
}