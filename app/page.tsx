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
      <div className="bg-background h-16"></div>

      <main className="container mx-auto px-4 sm:px-10 py-8 sm:py-15 flex-grow">
        {/* Top Section - Side by side layout even on mobile */}
        <div className="flex flex-row gap-4 mb-8">
          {/* News Image - Left side */}
          <div className="w-1/2 rounded-lg overflow-hidden border border-transparent shadow-md hover:shadow-lg transition-all duration-200">
            <Image
              src="/nyheter.png"
              alt="Nyheter"
              width={800}
              height={300}
              style={{ 
                objectFit: "cover", 
                width: "100%", 
                height: "100%",
                filter: isLight ? "contrast(1.05) brightness(1.05)" : "none"
              }}
              quality={100}
              priority
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* BlimedOss Section - Right side */}
          <div className={`w-1/2 rounded-lg p-2 sm:p-4 md:p-6 flex flex-col justify-center 
            ${isDark 
              ? 'bg-[#292929] text-white border border-gray-800' 
              : 'bg-[#f7f3e8] text-[#292929] border-2 border-[#292929]'} 
            shadow-md hover:shadow-lg transition-all duration-300`}>
            <div className="flex flex-col items-center mb-2 sm:mb-4">
              <h2 className="text-buldreoransj text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 font-anton">
                BLI MED OSS Å BULDRE!
              </h2>
              <Link 
                href="/events" 
                className={`rounded border-2 p-1 sm:p-2 mb-2 sm:mb-4 transition-colors duration-200
                  ${isDark 
                    ? 'border-white bg-[#292929] hover:bg-[#3a3a3a]' 
                    : 'border-[#292929] bg-[#f7f3e8] hover:bg-[#efe9d9]'}`}
              >
                <p className={`text-center font-anton text-xs sm:text-sm md:text-base
                  ${isDark ? 'text-white' : 'text-[#292929]'}`}>
                  PÅMELDING HER
                </p>
              </Link>
            </div>
            <p className={`font-anton text-xs sm:text-sm md:text-base text-center sm:text-left
              ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien non risus fermentum venenatis.
              Vivamus nec mi ut tortor malesuada venenatis sed auctor.
            </p>
          </div>
        </div>

        {/* Adventure Images Section */}
        <div className={`mt-8 p-4 sm:p-6 rounded-lg shadow-md
          ${isDark 
            ? 'bg-buldreoransj' 
            : 'bg-[#ffb078] border-2 border-[#292929]'}`}>
          <h2 className={`font-anton text-xl md:text-2xl mb-4 ${isLight ? 'text-[#292929]' : 'text-white'}`}>
            NYLIGE ARRANGEMENTER
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {adventureImages.map((imageName) => (
              <div 
                key={imageName} 
                className={`relative rounded-lg overflow-hidden aspect-square 
                  ${isDark 
                    ? 'border border-transparent hover:border-white' 
                    : 'border-2 border-[#292929]'} 
                  transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]`}
              >
                <Image
                  src={`/adventures/${imageName}`}
                  alt={`Adventure - ${imageName}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  style={{ 
                    objectFit: "cover",
                    transition: "filter 0.3s ease"
                  }}
                  className={isLight ? "hover:filter hover:brightness-105" : "hover:filter hover:brightness-110"}
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Spacer Div */}
        <div className="bg-background h-16"></div>
      </main>
    </ThemedContainer>
  );
}