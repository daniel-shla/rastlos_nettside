import React from 'react';
import Image from 'next/image';

export default function Events() {
  const events = [
    {
      title: "BULDRING MED RASTLOS",
      date: "TIRSDAG 4. FEBRUAR KL. 09.00",
      location: "HOS OSLO KLATRESENTER",
      signupLink: "https://www.example.com/signup1",
      image: "/buldring.png", // **REPLACE WITH YOUR ACTUAL IMAGE PATH**
      description: "En ny sjanse til å buldre med oss! Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Kom og bli med!", // Example description
    },
    {
      title: "RASTLOS GENERALFORSAMLING",
      date: "TIRSDAG 11. FEBRUAR KL. 16.15",
      location: "PÅ SEMINARROM C",
      signupLink: "https://www.example.com/signup2",
      image: "/genfors.png", // **REPLACE WITH YOUR ACTUAL IMAGE PATH**
      description: "En ny sjanse til å buldre med oss! Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Kom og bli med!", // Example description
    },
    {
      title: "BULDRING MED RASTLOS (2)", // Added (2) to distinguish
      date: "ONSDAG 19. FEBRUAR KL. 14.00", // Example date
      location: "DRAMMEN KLATRESENTER", // Example location
      signupLink: "https://www.example.com/signup3",
      image: "/buldring.png", // **REPLACE WITH YOUR ACTUAL IMAGE PATH**
      description: "En ny sjanse til å buldre med oss! Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Kom og bli med!", // Example description
    },
    {
      title: "RASTLOS JULEBORD", // New event
      date: "FREDAG 14. DESEMBER KL. 19.00", // Example date
      location: "RESTAURANT RASTLOS", // Example location
      signupLink: "https://www.example.com/signup4",
      image: "/genfors.png", // **REPLACE WITH YOUR ACTUAL IMAGE PATH**
      description: "En ny sjanse til å buldre med oss! Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Kom og bli med!", // Example description
    },
  ];

  return (
    <div className="bg-[#292929] text-white py-12 px-6 font-anton">
      <h2 className="text-5xl text-rastrød font-bold text-center mb-8">KOMMENDE ARRANGEMENTER</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-24">
        {events.map((event, index) => (
          <div key={index} className="bg-[#292929] rounded-lg p-6 flex flex-col h-full border border-white">
            <div className="relative h-[26rem] mb-4 overflow-hidden rounded-t-lg">
              <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" quality={100} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
            <p className="mb-6">{event.description}</p>
  
            <div className="mt-auto">
              <div className="grid grid-cols-3 gap-0 py-2"> {/* Removed border and pt here */}
                <div className="text-left border-t border-white pt-4">{event.location}</div> {/* Added border-t and pt-4 here */}
                <div className="text-center border-t border-white pt-4">{event.date}</div> {/* Added border-t and pt-4 here */}
                <div className="text-right pr-4 border-t border-white pt-4"> {/* Added border-t and pt-4 here */}
                  <a href={event.signupLink} className="bg-rastrød hover:bg-rastrød text-darkgrey font-bold py-2 px-4 rounded">
                    PÅMELDING HER
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}