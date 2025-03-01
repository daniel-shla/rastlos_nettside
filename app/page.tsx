import Shortcuts from "@/components/Shortcuts";
import Image from "next/image";

export default function Home() {
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
    <div className="flex flex-col min-h-screen">
              {/* Spacer Div */}
              <div className="bg-background h-16"></div>

      <main className="container mx-auto px-10 py-15 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Box (News Image) */}
          <div className="md:w-2/3 w-full h-auto rounded-lg overflow-hidden flex justify-center">
            <Image
              src="/nyheter.png"
              alt="Nyheter"
              layout="intrinsic"
              width={800}
              height={300}
              objectFit="cover"
              quality={100}
            />
          </div>

          {/* Right Box (BlimedOss) */}
          <div className="md:w-1/2 rounded-lg p-6" style={{ backgroundColor: "#292929", color: "white" }}>
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-buldreoransj text-3xl font-bold text-center mb-2 font-anton">
                BLI MED OSS Å BULDRE!
              </h2>
              <div className="rounded border-2 border-white p-2" style={{ backgroundColor: "#292929" }}>
                <p className="text-center font-anton">PÅMELDING HER</p>
              </div>
            </div>
            <p className="font-anton">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien non risus fermentum venenatis.
              Vivamus nec mi ut tortor malesuada venenatis sed auctor. Nisius eget bibendum tempor, magna est. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Adventure Images Section */}
        <div className="mt-8 bg-buldreoransj p-6 rounded-lg overflow-y-auto h-[40vh] md:h-[100vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {adventureImages.map((imageName) => (
            <div key={imageName} className="relative overflow-hidden rounded-lg">
              <Image
                src={`/adventures/${imageName}`} // Images must be in public/adventures
                alt={`Adventure - ${imageName}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          ))}
        </div>

        {/* Spacer Div */}
        <div className="bg-background h-16"></div>

      </main>
    </div>
  );
}