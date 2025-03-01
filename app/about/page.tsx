"use client";

import React from 'react';
import Image from 'next/image';
import PageTemplate from '@/components/PageTemplate';
import { useTheme } from '@/components/ThemeContext';

const AboutPage = () => {
  const { isDark, isLight } = useTheme();
  
  return (
    <PageTemplate
      title="OM RASTLÖS"
      subtitle="Her kan du bli kjent med oss"
    >
      <section className={`about ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image 
              src="/omoss.png" 
              alt="About Us" 
              width={600} 
              height={400} 
              className={`rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-md`}
              style={{ 
                filter: isLight ? "contrast(1.05) brightness(1.05)" : "none"
              }} 
            />
          </div>
          
          <div className="md:w-1/2">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              IFI Rastløs er lavterskel og for alle studenter som tilhører Instituttet for Informatikk ved UiO. Foreningens formål er å arrangere forskjellige fysiske og sosiale aktiviteter.
            </p>
          </div>
        </div>

        <div className={`mt-12 p-8 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'}`}>
          <h2 className="text-3xl font-bold mb-4 font-anton text-buldreoransj">Vår Historie</h2>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            IFI Rastløs ble grunnlagt i 2024 av en gruppe informatikkstudenter som ønsket å skape et fellesskap utenfor de tradisjonelle faglige rammene. Vi så et behov for å bringe studenter sammen gjennom aktiviteter som fremmer både fysisk og mental helse, samtidig som det bygger sterke sosiale bånd. Fra våre første klatreturer og fjellturer har vi vokst til å tilby et bredt spekter av aktiviteter som passer alle interesser og ferdighetsnivåer. Vår historie er kort, men vi er i rask vekst og ser frem til å skape mange flere minner sammen i årene som kommer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'}`}>
            <h3 className="text-xl font-bold mb-3 font-anton">Vårt Mål</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Vårt hovedmål er å bringe studenter ut av campus og inn i naturen og bylivet. Vi tror at balanse mellom akademisk arbeid og fritidsaktiviteter er nøkkelen til suksess og trivsel. Gjennom våre arrangementer ønsker vi å inspirere til en aktiv livsstil, utforskning av nye hobbyer, og skape en pause fra studiepress. Vi jobber for å gjøre aktiviteter tilgjengelige for alle, uavhengig av tidligere erfaring eller ferdighetsnivå.
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'}`}>
            <h3 className="text-xl font-bold mb-3 font-anton">Våre Verdier</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Inkludering står i sentrum av alt vi gjør. Vi verdsetter mangfold i både mennesker og aktiviteter, og jobber for å skape et miljø der alle føler seg velkomne. Vi tror på bærekraftig friluftsliv og respekt for naturen. Entusiasme og nysgjerrighet driver oss fremover, og vi oppmuntrer til å prøve nye ting og utfordre seg selv i trygge omgivelser. Vennskap og fellesskap er fundamentet i vår forening.
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${isDark ? 'bg-[#333333]' : 'bg-[#f7f3e8]'}`}>
            <h3 className="text-xl font-bold mb-3 font-anton">Vårt Fellesskap</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              IFI Rastløs er mer enn bare en studentforening – vi er et fellesskap av eventyrere, utforskere og venner. Våre medlemmer kommer fra alle studieretninger innen informatikk, med ulike bakgrunner og interesser. Det som binder oss sammen er gleden ved å være aktive sammen og skape minner utenfor forelesningssalene. Vi er stolte av å ha skapt et miljø der nye vennskap blomstrer og der studenter kan finne sin plass i det større IFI-miljøet.
            </p>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default AboutPage;