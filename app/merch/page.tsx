import React from 'react';
import Image from 'next/image';

export default function Intern() {
  const merchItems = [
    {
      name: "FLEECEVEST SVART",
      price: "200KR",
      images: [
        "/merchbg1.png", 
        "/merchbg2.png",
        "/merch1.png",
      ],
    },
    {
      name: "FLEECEVEST HVIT",
      price: "200KR",
      images: [
        "/merchbg1.png", 
        "/merchbg2.png",
        "/path/to/layer3_image2.jpg",
      ],
    },
    {
      name: "T-SKJORTE LOGO",
      price: "150KR",
      images: [
        "/merchbg1.png", 
        "/merchbg2.png",
        "/path/to/layer3_image3.jpg",
      ],
    },
    {
      name: "CAPS RASTLOS",
      price: "100KR",
      images: [
        "/merchbg1.png", 
        "/merchbg2.png",
        "/path/to/layer3_image4.jpg",
      ],
    },
    {
      name: "FLEECEVEST SVART",
      price: "200KR",
      images: [
        "/merchbg1.png", 
        "/merchbg2.png",
        "/path/to/layer3_image5.jpg",
      ],
    },
    {
      name: "FLEECEVEST HVIT",
      price: "200KR",
      images: [
        "/merchbg1.png", 
        "/merchbg2.png",
        "/path/to/layer3_image6.jpg",
      ],
    },
    {
      name: "T-SKJORTE LOGO",
      price: "150KR",
      images: [
        "/merchbg1.png", 
        "/merchbg2.png",
        "/path/to/layer3_image7.jpg",
      ],
    },
    {
      name: "CAPS RASTLOS",
      price: "100KR",
      images: [
        "/merchbg1.png", 
        "/merchbg2.png",
        "/path/to/layer3_image8.jpg",
      ],
    },
  ];

  return (
    <div className="bg-[#292929] text-white py-12 px-6 font-anton">
      <h2 className="text-5xl text-rastrød font-bold text-center mb-8">MERCH</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {merchItems.map((item, index) => (
          <div key={index} className="relative rounded-lg p-6 flex flex-col h-full border border-white">
            <div className="relative h-[34rem] mb-4 overflow-hidden rounded-t-lg">
              {item.images.map((imagePath, imageIndex) => {
                let width = "100%";
                let height = "100%";
                let left = "0";
                let top = "0";

                if (imageIndex === 1) {
                  width = "80%";
                  height = "80%";
                  left = "10%";
                  top = "10%";
                } else if (imageIndex === 2) {
                  width = "60%";
                  height = "60%";
                  left = "20%";
                  top = "20%";
                }

                return (
                  <div key={imageIndex} className={`absolute inset-0 overflow-hidden ${imageIndex === 1 ? 'opacity-70' : ''} ${imageIndex === 2 ? 'z-10' : ''}`} style={{ width, height, left, top }}>
                    <Image
                      src={imagePath}
                      alt={`${item.name} - Layer ${imageIndex + 1}`}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                );
              })}
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
            <p className="mb-4">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}