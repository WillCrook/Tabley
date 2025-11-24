import React from 'react';
import { X, Check, Lock, Download, Shield, MessageSquare } from 'lucide-react';

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
                    <div className="border border-t-0 border-zinc-200 rounded-b-lg p-4 space-y-3 bg-white">
                      <div className="h-8 bg-zinc-100 border border-zinc-200 rounded w-full"></div>
                      <div className="h-8 bg-zinc-100 border border-zinc-200 rounded w-full"></div>
                      <div className="h-8 bg-zinc-800 rounded w-full flex items-center justify-center text-[10px] text-white">Sign In</div>
                      <div className="text-[8px] text-center text-zinc-400 underline">Forgot password?</div>
                    </div>
                  </div>

                  {/* Right: Tabley (Good) */}
                  <div className="flex-1 transform scale-105 shadow-lg rounded-lg z-10 bg-white">
                    <div className="bg-emerald-600 rounded-t-lg p-2 flex justify-between items-center">
                      <div className="w-12 h-3 bg-white/30 rounded"></div>
                      <div className="bg-white/20 rounded-full p-0.5">
                         <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="border border-t-0 border-zinc-100 rounded-b-lg p-4 space-y-3">
                      <div className="space-y-1">
                        <div className="h-2 w-8 bg-zinc-100 rounded"></div>
                        <div className="h-8 bg-zinc-50 border border-zinc-200 rounded w-full"></div>
                      </div>
                      <div className="h-8 bg-zinc-900 rounded w-full flex items-center justify-center text-[10px] font-bold text-white">Book Table</div>
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
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">Booking, not Bureaucracy.</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Stop losing diners to "Create Account" screens. Our widget lets guests book in 12 seconds without a password.
              </p>
            </div>
          </div>

          {/* ROW 2: Features 2 & 3 (Side-by-Side Compact Cards) */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* FEATURE 2: Smart No-Show Protection */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-soft flex flex-col overflow-hidden">
              <div className="order-1 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">Silence the Empty Table.</h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Automatic SMS reminders and flexible deposit rules reduce no-shows by 80%. We chase the guest so you don't have to.
                </p>
              </div>
              
              <div className="order-2 flex-1 bg-zinc-50 rounded-2xl relative flex items-end justify-center overflow-hidden pt-12 min-h-[280px]">
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-zinc-50 to-transparent z-10"></div>
                  {/* Visual: iPhone Notification (Scaled) */}
                  <div className="relative w-56 bg-zinc-900 rounded-[2rem] p-2 shadow-2xl border-4 border-zinc-800 transform translate-y-12 hover:translate-y-6 transition-transform duration-500">
                    <div className="bg-zinc-800 relative rounded-[1.7rem] overflow-hidden h-[280px] flex flex-col items-center pt-8">
                       {/* Wallpaper/Screen */}
                       <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-zinc-900"></div>
                       
                       {/* Time */}
                       <div className="relative z-10 text-zinc-100 text-4xl font-thin tracking-tighter mb-6">14:02</div>
                       
                       {/* Notification Card */}
                       <div className="relative z-10 w-[90%] bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg">
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center">
                                <MessageSquare size={10} className="text-white" />
                             </div>
                             <span className="text-[9px] font-bold text-zinc-900 uppercase">Tabley</span>
                             <span className="text-[9px] text-zinc-500 ml-auto">now</span>
                          </div>
                          <p className="text-[11px] text-zinc-800 font-medium leading-snug">
                             Hi John, confirming your table at The Bath Pizza Co. Reply YES.
                          </p>
                       </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* FEATURE 3: Data Vault */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-soft flex flex-col overflow-hidden">
              <div className="order-1 mb-6">
                 <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">Your Guests. Your Data.</h3>
                 <p className="text-base text-zinc-600 leading-relaxed">
                   Unlike the giants, we never market competitors to your diners. Export your customer list anytime. It belongs to you.
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