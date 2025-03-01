"use client";

import React from 'react';
import Image from 'next/image';
import PageTemplate from '@/components/PageTemplate';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';

const AboutPage = () => {
  const { isDark, isLight } = useTheme();
  
  // Sample activity images - replace with actual images
  const activityImages = [
    { src: "./omoss.png", alt: "Klatring", caption: "Klatring" },
    { src: "./omoss.png", alt: "Fjelltur", caption: "Fjelltur" },
    { src: "./omoss.png", alt: "Buldring", caption: "Buldring" },
    { src: "./omoss.png", alt: "Sosial samling", caption: "Sosial samling" },
  ];

  // Sample adventure images - replace with actual images
  const adventureImages = [
    "./random1.jpg", // Replace with your image filenames in public/adventures
    "./random2.jpg",
    "./random3.jpg",
    "./random4.jpg",
    "./random5.jpg",
    "./random6.jpg",
    "./random7.jpg",
    "./random8.jpg",
    "./random9.jpg",
    "./random10.jpg",
    "./random11.jpg",
    "./random12.jpg",
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "IFI Rastløs har gitt meg muligheten til å oppleve Oslo på en helt ny måte og møte fantastiske mennesker.",
      name: "Marte, 2. år Design"
    },
    {
      quote: "Jeg hadde aldri prøvd klatring før jeg ble med på en Rastløs-tur. Nå er jeg hekta!",
      name: "Jonas, 3. år PROSA"
    },
    {
      quote: "Det beste med Rastløs er det inkluderende miljøet. Her er det plass til alle.",
      name: "Sofie, 1. år Robotikk"
    }
  ];
  
  return (
    <PageTemplate
      title="OM RASTLØS"
      subtitle="Her kan du bli kjent med oss"
    >
      <section className={`about ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
        {/* Main intro section with improved styling */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image 
              src="./omoss.png" 
              alt="About Us" 
              width={600} 
              height={400} 
              className={`rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-md hover:scale-[1.02] transition-transform duration-300`}
              style={{ 
                filter: isLight ? "contrast(1.05) brightness(1.05)" : "none"
              }} 
            />
          </div>
          
          <div className="md:w-1/2">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'} shadow-md`}>
              <h3 className="text-xl font-bold mb-3 font-anton text-buldreoransj">Hvem er vi?</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                IFI Rastløs er lavterskel og for alle studenter som tilhører Instituttet for Informatikk ved UiO. Foreningens formål er å arrangere forskjellige fysiske og sosiale aktiviteter.
              </p>
              <div className="mt-4 flex justify-end">
                <div className={`h-1 w-20 bg-buldreoransj rounded-full`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex justify-center my-12">
          <div className="flex items-center gap-2">
            <div className={`h-[2px] w-16 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            <div className="text-buldreoransj">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className={`h-[2px] w-16 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
          </div>
        </div>

        {/* History section with icon */}
        <div className={`p-8 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'} shadow-lg`}>
          <div className="flex items-center mb-4">
            <div className="mr-3 text-buldreoransj">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold font-anton text-buldreoransj">Vår Historie</h2>
          </div>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            IFI Rastløs ble grunnlagt i 2024 av en gruppe informatikkstudenter som ønsket å skape et fellesskap utenfor de tradisjonelle faglige rammene. Vi så et behov for å bringe studenter sammen gjennom aktiviteter som fremmer både fysisk og mental helse, samtidig som det bygger sterke sosiale bånd. Fra våre første klatreturer og fjellturer har vi vokst til å tilby et bredt spekter av aktiviteter som passer alle interesser og ferdighetsnivåer. Vår historie er kort, men vi er i rask vekst og ser frem til å skape mange flere minner sammen i årene som kommer.
          </p>
        </div>

        {/* Adventure Images Section */}
        <div className={`mt-8 p-6 rounded-lg shadow-lg
          ${isDark 
            ? 'bg-[#333333] border border-gray-700' 
            : 'bg-[#f7f3e8] border border-[#292929]'}`}>
          <div className="flex items-center mb-6">
            <div className="mr-3 text-buldreoransj">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className={`font-anton text-2xl ${isDark ? 'text-buldreoransj' : 'text-buldreoransj'}`}>
              NYLIGE ARRANGEMENTER
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {adventureImages.map((imageName, index) => (
              <div 
                key={imageName} 
                className={`relative rounded-lg overflow-hidden aspect-square 
                  ${isDark 
                    ? 'border border-gray-700' 
                    : 'border border-[#292929]'} 
                  transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.03] group`}
              >
                <Image
                  src={`/adventures/${imageName}`}
                  alt={`Adventure - ${imageName}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  style={{ 
                    objectFit: "cover",
                    transition: "all 0.3s ease"
                  }}
                  className="group-hover:brightness-110"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-[#fef6da] p-3 font-bold font-anton"> </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link 
              href="/events" 
              className={`inline-block px-6 py-3 bg-buldreoransj text-[#fef6da] font-bold rounded-lg hover:bg-[#d35400] transition-colors duration-300 shadow-md font-anton`}
            >
              SE ALLE ARRANGEMENTER
            </Link>
          </div>
        </div>

        {/* Values section with icons */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center mb-3">
              <div className="mr-2 text-buldreoransj">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-anton">Vårt Mål</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Vårt hovedmål er å bringe studenter ut av campus og inn i naturen og bylivet. Vi tror at balanse mellom akademisk arbeid og fritidsaktiviteter er nøkkelen til suksess og trivsel. Gjennom våre arrangementer ønsker vi å inspirere til en aktiv livsstil, utforskning av nye hobbyer, og skape en pause fra studiepress. Vi jobber for å gjøre aktiviteter tilgjengelige for alle, uavhengig av tidligere erfaring eller ferdighetsnivå.
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center mb-3">
              <div className="mr-2 text-buldreoransj">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-anton">Våre Verdier</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Inkludering står i sentrum av alt vi gjør. Vi verdsetter mangfold i både mennesker og aktiviteter, og jobber for å skape et miljø der alle føler seg velkomne. Vi tror på bærekraftig friluftsliv og respekt for naturen. Entusiasme og nysgjerrighet driver oss fremover, og vi oppmuntrer til å prøve nye ting og utfordre seg selv i trygge omgivelser. Vennskap og fellesskap er fundamentet i vår forening.
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center mb-3">
              <div className="mr-2 text-buldreoransj">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-anton">Vårt Fellesskap</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              IFI Rastløs er mer enn bare en studentforening – vi er et fellesskap av eventyrere, utforskere og venner. Våre medlemmer kommer fra alle studieretninger innen informatikk, med ulike bakgrunner og interesser. Det som binder oss sammen er gleden ved å være aktive sammen og skape minner utenfor forelesningssalene. Vi er stolte av å ha skapt et miljø der nye vennskap blomstrer og der studenter kan finne sin plass i det større IFI-miljøet.
            </p>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 font-anton text-buldreoransj text-center">Hva sier studentene?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'} shadow-md relative`}>
                <div className="absolute -top-4 left-6 text-buldreoransj text-4xl">"</div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} italic mb-4 pt-3`}>
                  {testimonial.quote}
                </p>
                <p className="text-buldreoransj font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 mb-8">
          <div className={`p-8 rounded-lg ${isDark ? 'bg-[#3a3a3a]' : 'bg-[#f0ece0]'} shadow-lg text-center`}>
            <h2 className="text-2xl font-bold mb-4 font-anton text-buldreoransj">Bli med på neste arrangement!</h2>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Har du lyst til å bli med på en av våre aktiviteter? Sjekk ut kommende arrangementer og bli med på moroa!
            </p>
            <Link href="/events" className={`inline-block px-6 py-3 bg-buldreoransj text-[#fef6da] font-bold rounded-lg hover:bg-[#d35400] transition-colors duration-300 shadow-md`}>
              Se kommende arrangementer
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default AboutPage;