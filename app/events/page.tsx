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
      date: "SØNDAG 3. MARS KL. 09.00",
      location: "OSLO KLATRESENTER",
      signupLink: "https://peoply.app/events/QWEHGQWP",
      image: "./buldring.png", 
      description: "Bli med på en spennende buldreøkt med IFI Rastløs! Alle nivåer er velkomne, og vi sørger for en morsom og inkluderende opplevelse. Utstyr kan lånes på stedet, bare møt opp med treningstøy og godt humør!", 
    },
    {
      title: "BULDRING MED RASTLOS",
      date: "TIRSDAG 2. APRIL KL. 09.00",
      location: "OSLO KLATRESENTER",
      signupLink: "https://peoply.app/events/OMNCOGCD",
      image: "./buldring.png", 
      description: "En ny sjanse til å buldre med oss! Vårens beste klatreøkt med fokus på teknikk og moro. Klatresenteret har nettopp satt opp nye ruter, så dette blir spennende for både nybegynnere og erfarne!", 
    },
    {
      title: "BULDRING MED RASTLOS", 
      date: "MANDAG 6. MAI KL. 09.00", 
      location: "OSLO KLATRESENTER", 
      signupLink: "https://peoply.app/events/QXZQMOFH",
      image: "./buldring.png", 
      description: "Mai-buldring med Rastløs! En perfekt pause fra eksamenslesingen. Vi har reservert en egen seksjon av senteret, så det blir god plass til alle. Etterpå samles vi for en hyggelig prat og forfriskninger.", 
    },
    {
      title: "BULDRING MED RASTLOS", 
      date: "TIRSDAG 4. JUNI KL. 09.00", 
      location: "OSLO KLATRESENTER", 
      signupLink: "https://peoply.app/events/UGVXUSEE",
      image: "./buldring.png",
      description: "Sommerens første buldreøkt! Avslutt semesteret med en fantastisk klatreopplevelse sammen med IFI Rastløs. Vi feirer at eksamenene er over med klatring, moro og kanskje noen forfriskninger etterpå.", 
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
              <div className={`text-left flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-buldreoransj" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
              <div className={`text-center flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-buldreoransj" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
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