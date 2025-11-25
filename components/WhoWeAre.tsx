import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern restaurant interior" 
            className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient fade to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-zinc-50/95 to-zinc-50/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
            
            {/* Headline */}
            <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-12 -left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tighter leading-[0.95] relative z-10">
                    We are the canvas. <br/>
                    <span className="text-emerald-600">You are the art.</span>
                </h2>
                <div className="h-1 w-20 bg-emerald-500 mt-8 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2 pt-2">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">
                    The "Digital Host" for Independents.
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-6 font-medium">
                    We believe the best technology is invisible. A booking system shouldn't be a billboard for its own brand; it should be a seamless extension of yours.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10 text-base">
                    We act as your Digital Host—greeting guests with the same warmth you offer at the door, then stepping aside. No data hoarding. No marketing to your competitors. Just pure hospitality.
                </p>
                
                <div className="grid grid-cols-2 gap-8 border-t border-zinc-200/50 pt-8">
                    <div>
                        <div className="text-4xl font-bold text-emerald-600 tracking-tight">100%</div>
                        <div className="text-sm font-medium text-zinc-500 mt-1 uppercase tracking-wide">Independent Focus</div>
                    </div>
                     <div>
                        <div className="text-4xl font-bold text-emerald-600 tracking-tight">0%</div>
                        <div className="text-sm font-medium text-zinc-500 mt-1 uppercase tracking-wide">Commission Fees</div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;