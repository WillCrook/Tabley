
import React from 'react';
import { X, Check, Lock, Download, Shield, ChevronRight, User, Activity, Tags, AlertCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">The Difference</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Why we win against the giants.</h3>
          <p className="text-lg text-zinc-600">
            Three reasons why independent restaurants are switching to Tabley.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* FEATURE 1: Zero-Friction Widget (Full Width Hero Card) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-100 shadow-soft grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 w-full">
              {/* Visual Wrapper */}
              <div className="relative bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100">
                <div className="flex gap-4">
                  {/* Left: Competitor (Bad) */}
                  <div className="flex-1 opacity-50 blur-[0.5px] transition-all hover:opacity-100 hover:blur-0">
                    <div className="bg-zinc-100 rounded-t-lg p-2 flex justify-between items-center border-b border-zinc-200">
                      <div className="w-12 h-3 bg-zinc-300 rounded"></div>
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <div className="border border-t-0 border-zinc-200 rounded-b-lg p-4 space-y-3 bg-white h-full min-h-[220px]">
                      <div className="h-8 bg-zinc-100 border border-zinc-200 rounded w-full"></div>
                      <div className="h-8 bg-zinc-100 border border-zinc-200 rounded w-full"></div>
                      <div className="h-8 bg-zinc-800 rounded w-full flex items-center justify-center text-[10px] text-white">Sign In</div>
                      <div className="text-[8px] text-center text-zinc-400 underline">Forgot password?</div>
                    </div>
                  </div>

                  {/* Right: Tabley (Good - Realistic Widget UI) */}
                  <div className="flex-1 transform scale-105 shadow-xl rounded-lg z-10 bg-white ring-1 ring-zinc-100">
                    <div className="bg-white border-b border-zinc-100 rounded-t-lg p-3 flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                         <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                         <span className="text-[10px] font-bold text-zinc-900">Book Table</span>
                      </div>
                      <div className="bg-emerald-50 rounded-full p-1">
                         <Check className="w-2.5 h-2.5 text-emerald-600" />
                      </div>
                    </div>
                    
                    {/* Booking Flow UI */}
                    <div className="p-3 space-y-3">
                      {/* Date Selector */}
                      <div>
                        <div className="text-[9px] font-bold text-zinc-400 uppercase mb-1">Date</div>
                        <div className="flex gap-1 overflow-x-hidden">
                           <div className="bg-zinc-900 text-white rounded px-2 py-1 text-[9px] text-center min-w-[36px]">
                              <div className="font-bold">Today</div>
                           </div>
                           <div className="bg-zinc-50 border border-zinc-100 text-zinc-500 rounded px-2 py-1 text-[9px] text-center min-w-[36px]">
                              <div className="font-medium">Tomorrow</div>
                           </div>
                           <div className="bg-zinc-50 border border-zinc-100 text-zinc-500 rounded px-2 py-1 text-[9px] text-center min-w-[36px]">
                              <div className="font-medium">Fri</div>
                           </div>
                        </div>
                      </div>

                      {/* Time Selector */}
                      <div>
                         <div className="text-[9px] font-bold text-zinc-400 uppercase mb-1">Time</div>
                         <div className="grid grid-cols-3 gap-1.5">
                            <div className="border border-zinc-200 rounded py-1 text-center text-[9px] text-zinc-500">19:00</div>
                            <div className="bg-emerald-50 border border-emerald-200 rounded py-1 text-center text-[9px] text-emerald-700 font-bold">19:15</div>
                            <div className="border border-zinc-200 rounded py-1 text-center text-[9px] text-zinc-500">19:30</div>
                         </div>
                      </div>
                      
                      {/* Guest Count */}
                      <div className="flex justify-between items-center border border-zinc-100 rounded p-1.5">
                         <div className="flex items-center gap-1">
                            <User size={10} className="text-zinc-400"/>
                            <span className="text-[9px] font-medium text-zinc-700">2 Guests</span>
                         </div>
                         <ChevronRight size={10} className="text-zinc-300"/>
                      </div>

                      {/* CTA */}
                      <div className="bg-zinc-900 rounded-md py-2 w-full flex items-center justify-center text-[10px] font-bold text-white shadow-md shadow-zinc-200">
                         Confirm Booking
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white px-4 py-2 rounded-full shadow-md border border-zinc-100 text-xs font-medium whitespace-nowrap">
                    <span className="flex items-center gap-1 text-red-400"><X size={12}/> Bureaucracy</span>
                    <div className="h-3 w-px bg-zinc-200"></div>
                    <span className="flex items-center gap-1 text-emerald-600"><Check size={12}/> Speed</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">The 12-Second Reservation.</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Your guests are hungry, not patient. Our 'Guest Mode' removes the forced sign-ups and app downloads used by the giants. We get the booking confirmed before they click away.
              </p>
            </div>
          </div>

          {/* ROW 2: Guest Memory & Data Vault (Side-by-Side Compact Cards) */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* FEATURE 2: Guest Memory (Moved here) */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-soft flex flex-col overflow-hidden">
              <div className="order-1 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">Automated Guest Memory.</h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Tabley remembers what your staff forget. Auto-tag VIPs, allergies, and history. The system flags important guests before they even walk through the door.
                </p>
              </div>
              
              <div className="order-2 flex-1 bg-zinc-50 rounded-2xl relative flex items-center justify-center min-h-[280px] p-6">
                 {/* Card */}
                  <div className="bg-white rounded-xl shadow-lg border border-zinc-100 w-full max-w-[280px] p-5 relative overflow-hidden group">
                     {/* Decorative top strip */}
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-emerald-500"></div>
                     
                     <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 font-bold text-lg">
                            JD
                        </div>
                        <div>
                            <h4 className="font-bold text-zinc-900 text-sm">John Doe</h4>
                            <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                                <Activity size={10} /> 5th Visit · Avg Spend £45
                            </div>
                        </div>
                     </div>
                     
                     <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-purple-50 text-purple-600 border border-purple-100 text-[10px] font-bold uppercase tracking-wide transform group-hover:scale-110 transition-transform">
                            <Tags size={10} /> VIP
                        </span>
                         <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-orange-50 text-orange-600 border border-orange-100 text-[10px] font-bold uppercase tracking-wide transform group-hover:scale-110 transition-transform delay-75">
                            <AlertCircle size={10} /> Gluten Free
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-zinc-100 text-zinc-500 border border-zinc-200 text-[10px] font-bold uppercase tracking-wide">
                             Table 4 Pref
                        </span>
                     </div>
                  </div>
              </div>
            </div>

            {/* FEATURE 3: Data Vault */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-soft flex flex-col overflow-hidden">
              <div className="order-1 mb-6">
                 <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">Your Data. Exclusively Yours.</h3>
                 <p className="text-base text-zinc-600 leading-relaxed">
                   Marketplaces use your customer data to recommend other restaurants. We don't. Your guest list is your asset—encrypted, exportable, and never shared.
                 </p>
              </div>

              <div className="order-2 flex-1 bg-zinc-50 rounded-2xl relative flex items-center justify-center min-h-[280px] group">
                 {/* Visual: Data Vault */}
                 <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700 scale-150"></div>
                    <div className="relative bg-white rounded-2xl shadow-lg border border-zinc-100 p-6 w-48 h-48 flex flex-col items-center justify-center text-center z-10">
                       <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-zinc-100">
                          <Shield className="w-8 h-8 text-emerald-600" />
                       </div>
                       <h4 className="font-bold text-zinc-900 text-sm mb-2">Customer Data</h4>
                       <div className="flex items-center gap-1.5 text-[10px] font-medium text-zinc-500 bg-zinc-50 px-2 py-1 rounded-full border border-zinc-100">
                          <Lock size={10} /> Encrypted
                       </div>
                       
                       {/* Floating Download Button */}
                       <div className="absolute -right-4 bottom-6 bg-zinc-900 text-white p-2.5 rounded-xl shadow-lg flex items-center gap-2 hover:bg-zinc-800 cursor-pointer transition-colors hover:scale-105">
                          <div className="flex flex-col items-start">
                             <span className="text-[8px] text-zinc-400 font-bold uppercase">Export</span>
                             <span className="text-[10px] font-bold">CSV</span>
                          </div>
                          <Download size={14} />
                       </div>
                    </div>
                 </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
