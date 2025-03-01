import React from 'react';
import Image from 'next/image';

export default function Members() {
    const members = [
        {
            id: 1,
            name: "MINA WILLIAMS",
            position: "LEDER",
            email: "MINA@RASTLOS.NO",
            image: "/leder.png" // Replace with actual image paths
        },
        {
            id: 2,
            name: "DANIEL SHAHZAD-LANDSVERK",
            position: "NESTLEDER",
            email: "DANIEL@RASTLOS.NO",
            image: "/nestleder.png" // Replace with actual image paths
        },
        {
            id: 3,
            name: "ELINE VEDELER",
            position: "ØKONOMIANSVARLIG",
            email: "ELINE@RASTLOS.NO",
            image: "/okonomi.png" // Replace with actual image paths
        },
        {
            id: 4,
            name: "KRISTINE B. BRAATHEN",
            position: "PROMOANSLARLIG",
            email: "KRISTINE@RASTLOS.NO",
            image: "/promo.png" // Replace with actual image paths
        },
        {
            id: 5,
            name: "LAN ANH TRAN",
            position: "STYREMEDLEM",
            email: "LAN@RASTLOS.NO",
            image: "/styremedlem.png" // Replace with actual image paths
        }
    ];

    return (
        <div className="flex gap-4 font-anton">
          {members.map((m) => (
            <div key={m.id} className="text-center flex flex-col items-center">
              <div className="rounded-full w-20 h-20 bg-gray-300 mb-2 overflow-hidden relative">
                <Image
                  src={m.image || "/path/to/placeholder.png"}
                  alt={`${m.name} profile`}
                  layout="fill" // Use fill to make the image fill its parent
                  objectFit="cover" // Use cover to make the image cover the entire circle
                  // Remove width and height here!
                  quality={100} // Add quality prop
                />
              </div>
              <p>{m.position}</p>
              <p>{m.name}</p>
              <p>{m.email}</p>
            </div>
          ))}
        </div>
      );
}