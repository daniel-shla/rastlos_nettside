import React from 'react';

import Image from 'next/image';

const AboutPage = () => {  // Renamed to AboutPage
  return (
    <div>
      <main className="container mx-auto p-4"> {/* Added container and padding */}
        <section className="about">
          <h1 className="text-4xl font-bold mb-6">Om Rastlös</h1> {/* Added heading */}

          <div className="flex flex-col md:flex-row gap-8"> {/* Flexbox for image and text */}
            <div className="md:w-1/2"> {/* Image container */}
              <Image src="/omoss.png" alt="About Us" width={600} height={400} className="rounded-lg" /> {/* Replace with your image path */}
            </div>
            <div className="md:w-1/2"> {/* Text container */}
              <p className="text-lg leading-relaxed">
                Rastløs er en..  {/* Your about us text goes here */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="mt-8"> {/* Additional sections (optional) */}
            <h2 className="text-3xl font-bold mb-4">Vår Historie</h2>
            <p className="text-lg leading-relaxed">
              {/* Your history text goes here */}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>

          {/* You can add more sections as needed */}
        </section>
      </main>
    </div>
  );
};

export default AboutPage;