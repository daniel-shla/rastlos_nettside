"use client";

import React from 'react';
import Image from 'next/image';
import PageTemplate from '@/components/PageTemplate';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';
import ImageWithLazyLoading from '@/components/ImageWithLazyLoading';

const AboutPage = () => {
  const { isDark, isLight } = useTheme();
  
  // Sample activity images - replace with actual images
  const activityImages = [
    { src: "./omoss.png", alt: "Klatring", caption: "Klatring" },
    { src: "./omoss.png", alt: "Fjelltur", caption: "Fjelltur" },
    { src: "./omoss.png", alt: "Buldring", caption: "Buldring" },
    { src: "./omoss.png", alt: "Sosial samling", caption: "Sosial samling" },
  ];

  const adventureImages = [
    "./random1.jpg", 
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

  return (
    <PageTemplate
      title="OM RASTLØS"
      subtitle="Her kan du bli kjent med oss"
    >
      <section className={`about ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
        {/* Main intro section with improved styling */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <ImageWithLazyLoading 
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
        <div className="mt-12">
          <div className="text-center mb-6">
            <h2 className={`text-2xl font-anton text-buldreoransj inline-block border-b-2 border-buldreoransj pb-1`}>
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
                <ImageWithLazyLoading
                  src={imageName}
                  alt={`Adventure - ${imageName}`}
                  fill
                  width={300}  
                  height={300}
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

        {/* Instagram Feed Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 font-anton text-buldreoransj">FØLG OSS PÅ INSTAGRAM</h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              @ifirastlos
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <div className="mr-3 text-buldreoransj">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Følg oss for å se bilder og oppdateringer fra våre nyeste arrangementer!
              </p>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-2xl overflow-hidden rounded-lg bg-white">
                <iframe 
                  src="https://www.instagram.com/ifirastlos/embed" 
                  width="100%" 
                  height="550" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency={true}
                  className="mx-auto"
                  style={{ margin: '-8px' }}
                ></iframe>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <a 
                href="https://www.instagram.com/ifirastlos/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#405DE6] via-[#833AB4] to-[#C13584] text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-md`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Følg oss på Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Strava Run Club Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 font-anton text-buldreoransj">BLI MED LØPEKLUBBEN VÅR</h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Vi er på Strava!
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'} shadow-lg mb-8`}>
            <div className="flex items-center mb-4">
              <div className="mr-3 text-buldreoransj">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Liker du å løpe? Bli med i Rastløs løpeklubb på Strava!
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
              <div className="md:w-1/2">
                <div className={`p-5 rounded-lg ${isDark ? 'bg-[#222222]' : 'bg-[#f0ece0]'}`}>
                  <h3 className="text-xl font-bold mb-3 font-anton text-buldreoransj">Hvorfor bli med i løpeklubben?</h3>
                  <ul className={`list-disc pl-5 space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Følg med på aktivitetene til andre medlemmer</li>
                    <li>Bli motivert av fellesskapet</li>
                    <li>Delta på felles løpeturer og utfordringer</li>
                    <li>Del dine løpeopplevelser med andre studenter</li>
                    <li>Finn løpepartnere på ditt nivå</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 flex flex-col items-center">
                <div className="relative w-full max-w-xs aspect-square mb-4">
                  <ImageWithLazyLoading
                    src="./random3.jpg" 
                    alt="Løpegruppe" 
                    fill
                    width={300}
                    height={300}
                    sizes="(max-width: 640px) 80vw, 300px"
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`p-3 rounded-full bg-white bg-opacity-90`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16" fill="#FC4C02">
                        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h3.064" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://www.strava.com/clubs/1396828" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`inline-flex items-center px-6 py-3 bg-[#FC4C02] text-white font-bold rounded-lg hover:bg-[#E34402] transition-colors duration-300 shadow-md w-full max-w-xs justify-center`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h3.064" />
                  </svg>
                  Bli medlem av løpeklubben
                </a>
              </div>
            </div>
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