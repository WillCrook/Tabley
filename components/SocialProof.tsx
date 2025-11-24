import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  // Fictional brands with distinct typography to simulate logos
  const brands = [
    { name: "The Royal Bistro", style: "font-serif font-bold tracking-tight" },
    { name: "Salt & Stone", style: "font-sans font-black tracking-tighter uppercase" },
    { name: "MINERVA", style: "font-mono font-semibold tracking-[0.3em]" },
    { name: "River Flow", style: "font-serif italic font-medium" },
    { name: "The Corner Kitchen", style: "font-sans font-bold text-zinc-700" },
  ];

  // Duplicate the brands list to ensure we have enough content to loop smoothly
  const scrollingBrands = [...brands, ...brands];

  return (
    <section className="border-y border-zinc-100 bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline & Subhead */}
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
          Trusted by the finest independent venues
        </h2>
        <p className="text-zinc-600 mb-10 max-w-2xl mx-auto text-lg">
          Join leading restaurateurs and head chefs who rely on Tabley to control their service every day.
        </p>

        {/* Ratings mimicking the G2 section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-zinc-900">
              5/5 Rating from owners
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300"></div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">#1</span>
            <span className="text-sm font-medium text-zinc-600">in Independent Hospitality Tech</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full group">
          
          {/* Left Fade Gradient */}
          <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          
          {/* Right Fade Gradient */}
          <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="flex overflow-hidden">
            {/* First Loop */}
            <div className="flex shrink-0 animate-scroll gap-16 min-w-full items-center justify-around px-8 group-hover:[animation-play-state:paused]">
              {scrollingBrands.map((brand, idx) => (
                <div key={`a-${idx}`} className={`text-xl md:text-2xl text-zinc-800 select-none cursor-default hover:text-zinc-900 transition-colors whitespace-nowrap ${brand.style}`}>
                  {brand.name}
                </div>
              ))}
            </div>
            
            {/* Second Loop (Duplicate for seamless effect) */}
            <div className="flex shrink-0 animate-scroll gap-16 min-w-full items-center justify-around px-8 group-hover:[animation-play-state:paused]" aria-hidden="true">
              {scrollingBrands.map((brand, idx) => (
                <div key={`b-${idx}`} className={`text-xl md:text-2xl text-zinc-800 select-none cursor-default hover:text-zinc-900 transition-colors whitespace-nowrap ${brand.style}`}>
                  {brand.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SocialProof;