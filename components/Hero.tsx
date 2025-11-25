import React from 'react';
import Button from './Button';
import { CheckCircle2, MessageSquare } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  return (
    <section className="relative pt-32 pb-20 bg-zinc-50 overflow-hidden min-h-screen flex flex-col justify-center items-center">
      
      {/* 1. SOFTWARE BACKGROUND LAYER (The Floor Plan) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-[0.6]" 
            style={{ 
                backgroundImage: 'linear-gradient(#e4e4e7 1px, transparent 1px), linear-gradient(90deg, #e4e4e7 1px, transparent 1px)', 
                backgroundSize: '60px 60px' 
            }}
        ></div>

        {/* BACKGROUND UI ELEMENTS (Floating Tables) */}
        {/* These simulate the software interface expanding beyond the viewport */}
        
        {/* Top Left - Large Round Table */}
        <div className="absolute top-20 -left-16 opacity-30 transform rotate-12">
            <div className="w-48 h-48 rounded-full border-4 border-zinc-200 bg-white shadow-sm flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-zinc-200"></div>
            </div>
            {/* Chairs */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-zinc-100 rounded-xl border border-zinc-200"></div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-zinc-100 rounded-xl border border-zinc-200"></div>
        </div>

        {/* Top Right - Booth Seating */}
        <div className="absolute top-32 -right-12 opacity-30 transform -rotate-6">
            <div className="flex gap-1">
                <div className="w-12 h-32 bg-zinc-200 rounded-l-xl"></div>
                <div className="w-32 h-32 bg-white border-4 border-zinc-200 rounded-lg flex items-center justify-center text-zinc-300 font-bold text-2xl">
                    B-04
                </div>
                <div className="w-12 h-32 bg-zinc-200 rounded-r-xl"></div>
            </div>
        </div>

        {/* Bottom Left - Active Table (Green) */}
        <div className="absolute bottom-40 left-10 opacity-40">
             <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-emerald-200 bg-emerald-50 flex items-center justify-center shadow-lg shadow-emerald-100">
                    <span className="text-emerald-300 font-bold">T-12</span>
                </div>
                {/* Status Dot */}
                <div className="absolute -top-2 right-0 w-8 h-8 bg-emerald-400 rounded-full border-4 border-white shadow-sm"></div>
             </div>
        </div>

        {/* Middle Right - Small Tables */}
        <div className="absolute top-1/2 right-20 opacity-20 grid grid-cols-2 gap-8">
            <div className="w-20 h-20 bg-white border-2 border-zinc-200 rounded-lg"></div>
            <div className="w-20 h-20 bg-white border-2 border-zinc-200 rounded-lg"></div>
            <div className="w-20 h-20 bg-white border-2 border-zinc-200 rounded-lg"></div>
            <div className="w-20 h-20 bg-white border-2 border-zinc-200 rounded-lg"></div>
        </div>
        
        {/* AI Assistant Overlay (Floating in background) */}
         <div className="absolute bottom-32 right-32 w-64 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-zinc-100 flex items-start gap-3 animate-float hidden lg:flex">
             <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare size={16} className="text-emerald-600" />
             </div>
             <div>
                 <div className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Tabley AI</div>
                 <p className="text-xs leading-snug font-medium text-zinc-600">
                    "Optimizing floor plan. Moved 4-top to window to increase walk-in conversion."
                 </p>
             </div>
         </div>

        {/* Fade Gradient to focus center */}
        <div className="absolute inset-0 bg-radial-white-fade"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/80"></div>
      </div>

      {/* 2. CENTERED CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold mb-8 animate-fade-in-up shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live: Table Seater 2.0
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-zinc-900 mb-8 leading-[0.95] drop-shadow-sm">
          Stop renting <br/>
          <span className="text-zinc-400">your own customers.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
          The booking system for high-volume independents who refuse to pay per-cover fees. Own your data, protect your margins, and eliminate no-shows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-12">
          <Button onClick={onBookDemo} size="lg" variant="primary" className="h-14 px-8 text-lg shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 border-0 w-full sm:w-auto">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 w-full sm:w-auto">
            View Live Demo
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs font-bold text-zinc-400 uppercase tracking-wider">
            <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500"/> No credit card required
            </span>
            <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500"/> Setup in 5 mins
            </span>
            <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500"/> Cancel anytime
            </span>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;