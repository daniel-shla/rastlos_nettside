"use client";

import React from 'react';
import Image from 'next/image';
import PageTemplate from '@/components/PageTemplate';
import { useTheme } from '@/components/ThemeContext';

export default function Events() {
  const { isDark, isLight } = useTheme();
  
  const events = [
    {
      title: "BULDRING MED RASTLOS",
      date: "TIRSDAG 4. FEBRUAR KL. 09.00",
      location: "HOS OSLO KLATRESENTER",
      signupLink: "https://www.example.com/signup1",
      image: "./buldring.png", 
      description: "En ny sjanse til å buldre med oss! Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Kom og bli med!", // Example description
    },
    {
      title: "RASTLOS GENERALFORSAMLING",
      date: "TIRSDAG 11. FEBRUAR KL. 16.15",
      location: "PÅ SEMINARROM C",
      signupLink: "https://www.example.com/signup2",
      image: "./genfors.png", 
      description: "En ny sjanse til å buldre med oss! Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Kom og bli med!", // Example description
    },
    {
      title: "BULDRING MED RASTLOS (2)", 
      date: "ONSDAG 19. FEBRUAR KL. 14.00", 
      location: "DRAMMEN KLATRESENTER", 
      signupLink: "https://www.example.com/signup3",
      image: "./buldring.png", 
      description: "En ny sjanse til å buldre med oss! Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Kom og bli med!", // Example description
    },
    {
      title: "RASTLOS JULEBORD", 
      date: "FREDAG 14. DESEMBER KL. 19.00", 
      location: "RESTAURANT RASTLOS", 
      signupLink: "https://www.example.com/signup4",
      image: "./genfors.png",
      description: "En ny sjanse til å buldre med oss! Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Kom og bli med!", // Example description
    },
  ];

  return (
    <PageTemplate
      title="KOMMENDE ARRANGEMENTER"
      subtitle="Meld deg på våre spennende aktiviteter"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-24">
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`rounded-lg p-6 flex flex-col h-full transition-all duration-300
              ${isDark 
                ? 'bg-[#333333] border border-gray-700 shadow-md' 
                : 'bg-[#f7f3e8] border border-[#e9e5d9] shadow-sm'}`}
          >
            <div className="relative h-[26rem] mb-4 overflow-hidden rounded-t-lg">
              <Image 
                src={event.image} 
                alt={event.title} 
                fill 
                style={{ 
                  objectFit: "cover",
                  filter: isLight ? "contrast(1.05) brightness(1.05)" : "none"
                }} 
                quality={100} 
              />
            </div>
            <h3 className={`text-2xl font-bold mb-2 font-anton ${isDark ? 'text-[#fef6da]' : 'text-[#292929]'}`}>
              {event.title}
            </h3>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {event.description}
            </p>
  
            <div className="flex justify-between items-center py-2 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}">
              <div className={`text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {event.location}
              </div>
              <div className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {event.date}
              </div>
              <div className="text-right">
                <a 
                  href={event.signupLink} 
                  className="bg-buldreoransj hover:bg-[#ff9a5a] text-[#fef6da] font-bold py-2 px-6 rounded transition-colors inline-block text-center"
                >
                  PÅMELDING HER
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}