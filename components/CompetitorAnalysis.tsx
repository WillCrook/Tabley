import React from 'react';
import { Check, X } from 'lucide-react';

const CompetitorAnalysis: React.FC = () => {
  const competitors = [
    { name: 'OpenTable', fee: '£1.00+/cover', data: 'They Keep It', vibe: 'Corporate' },
    { name: 'ResDiary', fee: 'Complex Tier', data: 'Shared', vibe: 'Clunky IT' },
    { name: 'Quandoo', fee: 'Commission', data: 'They Keep It', vibe: 'Discount Yellow' },
  ];

  return (
    <section id="how-we-win" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900">Why change? <br/>Because you're being underserved.</h2>
            <p className="text-zinc-600">
              Competitors focus on major chains and big cities. They charge per cover and hoard your data. Tabley is built for the independent hero.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <Check className="w-3 h-3 text-emerald-700" />
                </div>
                <p className="text-sm text-zinc-700"><span className="font-bold">Zero Cover Fees:</span> Keep your margins.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <Check className="w-3 h-3 text-emerald-700" />
                </div>
                <p className="text-sm text-zinc-700"><span className="font-bold">Apple-like Interface:</span> Staff actually like using it.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <Check className="w-3 h-3 text-emerald-700" />
                </div>
                <p className="text-sm text-zinc-700"><span className="font-bold">Premium Minimalist Aesthetic:</span> Not discount yellow.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-zinc-100">
              <div className="grid grid-cols-4 bg-zinc-900 text-white p-4 text-sm font-medium">
                <div className="col-span-1">Platform</div>
                <div className="col-span-1 text-center">Fees</div>
                <div className="col-span-1 text-center">Customer Data</div>
                <div className="col-span-1 text-center">Vibe</div>
              </div>
              
              {/* Competitors */}
              {competitors.map((comp, idx) => (
                <div key={idx} className="grid grid-cols-4 p-4 border-b border-zinc-100 text-sm text-zinc-500 hover:bg-zinc-50 transition-colors">
                  <div className="col-span-1 font-medium text-zinc-700">{comp.name}</div>
                  <div className="col-span-1 text-center flex items-center justify-center gap-1 text-red-500">
                    <X size={14} /> {comp.fee}
                  </div>
                  <div className="col-span-1 text-center">{comp.data}</div>
                  <div className="col-span-1 text-center">{comp.vibe}</div>
                </div>
              ))}

              {/* Us */}
              <div className="grid grid-cols-4 p-5 bg-emerald-50/30 text-sm border-t-2 border-emerald-500 relative">
                <div className="absolute top-0 left-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-br">YOU ARE HERE</div>
                <div className="col-span-1 font-bold text-zinc-900 flex items-center pt-2">Tabley</div>
                <div className="col-span-1 text-center flex items-center justify-center gap-1 text-emerald-600 font-bold pt-2">
                  <Check size={14} /> Flat Fee
                </div>
                <div className="col-span-1 text-center text-emerald-600 font-bold pt-2">You Own It</div>
                <div className="col-span-1 text-center text-emerald-600 font-bold pt-2">Premium</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompetitorAnalysis;