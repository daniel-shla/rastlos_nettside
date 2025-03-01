"use client";

import Shortcuts from "@/components/Shortcuts";
import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";
import ThemedContainer from "@/components/ThemedContainer";
import Link from "next/link";

export default function Home() {
  const { isDark, isLight, getThemedImage } = useTheme();
  const adventureImages = [
    "random1.jpg", // Replace with your image filenames in public/adventures
    "random2.jpg",
    "random3.jpg",
    "random4.jpg",
    "random5.jpg",
    "random6.jpg",
    "random7.jpg",
    "random8.jpg",
    "random9.jpg",
    "random10.jpg",
    "random11.jpg",
    "random12.jpg",
  ];

  return (
    <ThemedContainer className="flex flex-col min-h-screen">
      {/* Spacer Div */}
      <div className="bg-background h-8"></div>

      <main className="container mx-auto px-4 sm:px-10 py-8 sm:py-15 flex-grow">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Left side - About IFI Rastløs */}
          <div className={`md:w-1/2 rounded-lg p-6 flex flex-col justify-center 
            ${isDark 
              ? 'bg-[#333333] text-white border border-gray-700' 
              : 'bg-[#f7f3e8] text-[#292929] border border-[#292929]'} 
            shadow-lg hover:shadow-xl transition-all duration-300`}>
            <div className="flex items-center mb-4">
              <div className="mr-3 text-buldreoransj">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-buldreoransj text-2xl md:text-3xl font-bold font-anton">
                OM IFI RASTLØS
              </h2>
            </div>
            <p className={`text-base md:text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              IFI Rastløs er lavterskel og for alle studenter som tilhører Instituttet for Informatikk ved UiO. Foreningens formål er å arrangere forskjellige fysiske og sosiale aktiviteter.
            </p>
            <div className="flex justify-between items-center">
              <Link 
                href="/about" 
                className={`inline-block px-5 py-2 bg-buldreoransj text-white font-bold rounded-lg hover:bg-[#d35400] transition-colors duration-300 shadow-md font-anton`}
              >
                LES MER OM OSS
              </Link>
              <div className={`h-1 w-20 bg-buldreoransj rounded-full`}></div>
            </div>
          </div>

          {/* Right side - Activity Highlight */}
          <div className={`md:w-1/2 rounded-lg overflow-hidden border ${isDark ? 'border-gray-700' : 'border-[#292929]'} shadow-lg relative group`}>
            <Image
              src="/omoss.png"
              alt="IFI Rastløs Aktiviteter"
              width={800}
              height={500}
              style={{ 
                objectFit: "cover", 
                width: "100%", 
                height: "100%",
                filter: isLight ? "contrast(1.05) brightness(1.05)" : "none"
              }}
              quality={100}
              priority
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold font-anton mb-2">UTFORSK VÅRE AKTIVITETER</h3>
              <p className="text-white mb-4">Fra klatring og ski til sosiale sammenkomster - vi har noe for alle!</p>
              <Link 
                href="/events" 
                className="inline-block px-5 py-2 bg-buldreoransj text-white font-bold rounded-lg hover:bg-[#d35400] transition-colors duration-300 shadow-md w-fit font-anton"
              >
                SE ARRANGEMENTER
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex justify-center my-8">
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
                  <p className="text-white p-3 font-bold font-anton">Aktivitet {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link 
              href="/events" 
              className={`inline-block px-6 py-3 bg-buldreoransj text-white font-bold rounded-lg hover:bg-[#d35400] transition-colors duration-300 shadow-md font-anton`}
            >
              SE ALLE ARRANGEMENTER
            </Link>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 mb-8">
          <div className={`p-8 rounded-lg ${isDark ? 'bg-[#3a3a3a]' : 'bg-[#f0ece0]'} shadow-lg text-center border ${isDark ? 'border-gray-700' : 'border-[#292929]'}`}>
            <h2 className="text-2xl font-bold mb-4 font-anton text-buldreoransj">BLI MED I FELLESSKAPET!</h2>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Har du lyst til å bli med på en av våre aktiviteter eller bli en del av IFI Rastløs? Vi har plass til alle!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/events" className={`inline-block px-6 py-3 bg-buldreoransj text-white font-bold rounded-lg hover:bg-[#d35400] transition-colors duration-300 shadow-md font-anton`}>
                SE ARRANGEMENTER
              </Link>
              <Link href="/intern" className={`inline-block px-6 py-3 ${isDark ? 'bg-[#292929]' : 'bg-white'} ${isDark ? 'text-white' : 'text-[#292929]'} font-bold rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-md border ${isDark ? 'border-gray-700' : 'border-[#292929]'} font-anton`}>
                BLI INTERN
              </Link>
            </div>
          </div>
        </div>
      </main>
    </ThemedContainer>
  );
}