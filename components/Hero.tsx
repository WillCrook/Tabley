import React from 'react';
import Button from './Button';
import { Search, Bell, LayoutGrid, Calendar, Users, Filter, CheckCircle2, MessageSquare } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zinc-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              The Operating System for Independents
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 mb-6 leading-[0.95]">
              Turn Chaos <br/> <span className="text-zinc-400">into</span> Control.
            </h1>

            <p className="text-lg text-zinc-600 mb-8 leading-relaxed font-medium max-w-lg">
              The invisible booking system built for independent hospitality. <br className="hidden sm:block"/> No cover fees. No data hoarding. Just surgical precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button onClick={onBookDemo} size="lg" variant="primary" className="h-12 px-8 text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30">
                Book a 10-Min Demo
              </Button>
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base shadow-lg shadow-zinc-200/50">
                See Live Example
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-xs font-medium text-zinc-500">
               <div className="flex items-center gap-1">
                 <CheckCircle2 size={14} className="text-emerald-500" />
                 <span>No credit card required</span>
               </div>
               <div className="flex items-center gap-1">
                 <CheckCircle2 size={14} className="text-emerald-500" />
                 <span>Setup in 5 mins</span>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Overlapping Devices Visual */}
          <div className="relative mt-12 lg:mt-0 perspective-1000 group">
            
            {/* 1. The Tablet (Back Layer) */}
            <div className="relative z-10 bg-zinc-900 rounded-2xl p-3 shadow-2xl shadow-zinc-900/20 transform transition-transform duration-700 hover:scale-[1.02] rotate-y-[-5deg] rotate-x-[5deg]">
              {/* Screen Frame */}
              <div className="bg-zinc-50 rounded-xl overflow-hidden aspect-[4/3] border-4 border-zinc-900 flex flex-col">
                {/* Header */}
                <div className="h-10 bg-white border-b border-zinc-100 flex items-center justify-between px-4">
                   <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-bold text-zinc-900">Tabley.</span>
                   </div>
                   <div className="flex gap-3">
                      <Search size={14} className="text-zinc-300" />
                      <Bell size={14} className="text-zinc-300" />
                   </div>
                </div>
                {/* Body */}
                <div className="flex flex-1 overflow-hidden">
                   {/* Sidebar */}
                   <div className="w-14 border-r border-zinc-100 bg-white hidden sm:flex flex-col items-center py-4 gap-4">
                      <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><LayoutGrid size={16}/></div>
                      <div className="p-2 text-zinc-400"><Calendar size={16}/></div>
                      <div className="p-2 text-zinc-400"><Users size={16}/></div>
                   </div>
                   {/* Main Content */}
                   <div className="flex-1 p-4 bg-zinc-50/50">
                      <div className="flex justify-between items-center mb-4">
                         <h3 className="text-sm font-bold text-zinc-900">Tonight's Service</h3>
                         <button className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 bg-white border border-zinc-200 rounded shadow-sm">
                            <Filter size={10}/> Filter
                         </button>
                      </div>
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                         <div className="bg-white p-3 rounded-lg border border-zinc-100 shadow-sm">
                            <div className="text-[10px] text-zinc-500 uppercase font-bold">Covers</div>
                            <div className="text-lg font-bold text-zinc-900">142</div>
                         </div>
                         <div className="bg-white p-3 rounded-lg border border-zinc-100 shadow-sm">
                            <div className="text-[10px] text-zinc-500 uppercase font-bold">Revenue</div>
                            <div className="text-lg font-bold text-zinc-900">£4.2k</div>
                         </div>
                         <div className="bg-white p-3 rounded-lg border border-zinc-100 shadow-sm">
                            <div className="text-[10px] text-zinc-500 uppercase font-bold">Cap.</div>
                            <div className="text-lg font-bold text-emerald-600">92%</div>
                         </div>
                      </div>
                      {/* List */}
                      <div className="bg-white rounded-lg border border-zinc-100 shadow-sm overflow-hidden">
                         {[1,2,3,4].map((i) => (
                           <div key={i} className="flex items-center justify-between p-3 border-b border-zinc-50 last:border-0">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-600">
                                    {['JD', 'AS', 'MR', 'KL'][i-1]}
                                 </div>
                                 <div>
                                    <div className="text-xs font-bold text-zinc-900">Reservation #{100+i}</div>
                                    <div className="text-[10px] text-zinc-500">Table {i+2} • 19:00</div>
                                 </div>
                              </div>
                              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full">Confirmed</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* 2. The Phone (Front Layer - Overlapping) */}
            <div className="absolute -bottom-6 -right-4 sm:-right-12 z-20 w-[200px] sm:w-[240px] bg-zinc-900 rounded-[2.5rem] p-3 shadow-2xl shadow-zinc-900/30 transform rotate-3 translate-y-4 border-4 border-zinc-800">
               <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] border-2 border-zinc-900 flex flex-col relative">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-900 rounded-full z-30"></div>
                  
                  {/* Phone Header */}
                  <div className="h-14 bg-zinc-50 border-b border-zinc-100 flex items-end justify-center pb-2">
                     <span className="text-xs font-bold text-zinc-900">Tabley Assist</span>
                  </div>

                  {/* Chat Content */}
                  <div className="flex-1 p-3 space-y-3 bg-white">
                     <div className="text-[10px] text-center text-zinc-400 my-2">Today 14:32</div>
                     
                     {/* Message 1 (Left) */}
                     <div className="flex items-end gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                           <MessageSquare size={12} className="text-emerald-600" />
                        </div>
                        <div className="bg-zinc-100 p-2 rounded-2xl rounded-bl-none max-w-[80%]">
                           <p className="text-[10px] text-zinc-700 leading-snug">
                              New booking request: Sarah M. for 6 people at 19:30.
                           </p>
                        </div>
                     </div>

                     {/* Message 2 (Right) */}
                     <div className="flex items-end gap-2 justify-end">
                        <div className="bg-emerald-500 p-2 rounded-2xl rounded-br-none max-w-[80%]">
                           <p className="text-[10px] text-white leading-snug">
                              Auto-confirmed based on availability rules. Confirmation sent.
                           </p>
                        </div>
                     </div>

                     {/* Notification Card */}
                     <div className="mt-4 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                           <span className="text-[10px] font-bold text-zinc-900">Deposit Secured</span>
                        </div>
                        <div className="text-lg font-bold text-zinc-900">£60.00</div>
                        <div className="text-[10px] text-zinc-500">via Stripe • Just now</div>
                     </div>
                  </div>

                  {/* Phone Footer */}
                  <div className="h-12 bg-zinc-50 border-t border-zinc-100 flex justify-around items-center text-zinc-400">
                     <div className="w-8 h-1 bg-zinc-300 rounded-full"></div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
