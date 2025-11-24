import React from 'react';
import { Zap, Smartphone, Palette, Heart } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "Instant Setup",
      description: "Copy-paste one line of code. You're live in 5 minutes."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      title: "Any Device",
      description: "Works on your existing iPads, phones, or laptops."
    },
    {
      icon: <Palette className="w-6 h-6 text-emerald-600" />,
      title: "Your Brand",
      description: "Customizable UI that blends perfectly into your website."
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
      title: "No Contracts",
      description: "Monthly rolling. Cancel anytime. Total freedom."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-zinc-900">Why Choose Us</h2>
           <div className="h-1 w-12 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:border-emerald-100 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">{reason.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;