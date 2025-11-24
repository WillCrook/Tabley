import React from 'react';
import Button from './Button';
import { Calendar, Settings, Rocket, ArrowRight } from 'lucide-react';

interface CTAProps {
  onBookDemo: () => void;
}

const CTA: React.FC<CTAProps> = ({ onBookDemo }) => {
  const steps = [
    {
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      title: "1. Book a Demo",
      description: "Schedule a 10-minute chat. We'll show you how Tabley works and answer any questions."
    },
    {
      icon: <Settings className="w-6 h-6 text-emerald-600" />,
      title: "2. We Build It",
      description: "Send us your menu and floor plan. We configure your branded widget and dashboard for free."
    },
    {
      icon: <Rocket className="w-6 h-6 text-emerald-600" />,
      title: "3. Go Live",
      description: "Add the widget to your site. Start taking commission-free bookings immediately."
    }
  ];

  return (
    <section className="py-24 bg-emerald-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-100/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Ready to take back control?</h2>
          <p className="text-lg text-zinc-600">
            Join the movement of independent restaurants saying goodbye to cover fees.
            <br className="hidden md:block" /> Get set up in days, not weeks.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-emerald-200 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full border-2 border-emerald-100 flex items-center justify-center mb-6 shadow-sm relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final Action */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button onClick={onBookDemo} size="lg" variant="primary" className="h-14 px-8 text-lg shadow-xl shadow-emerald-600/20">
              Book a 10-Min Demo
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white border-emerald-200 text-emerald-800 hover:bg-emerald-50">
              View Live Example
            </Button>
          </div>
          <p className="text-sm text-zinc-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Current setup time: approx. 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
