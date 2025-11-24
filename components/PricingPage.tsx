import React from 'react';
import Button from './Button';
import { Check, X } from 'lucide-react';

interface PricingPageProps {
  onBookDemo: () => void;
}

const PricingCard: React.FC<{
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
  onAction: () => void;
}> = ({ tier, price, period, description, features, highlight = false, cta, onAction }) => (
  <div className={`relative p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 ${
    highlight 
      ? 'bg-white border-emerald-500 shadow-2xl shadow-emerald-100 scale-105 z-10' 
      : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
  }`}>
    {highlight && (
      <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
        <span className="bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="mb-6">
      <h3 className={`text-lg font-bold mb-2 ${highlight ? 'text-emerald-700' : 'text-zinc-900'}`}>{tier}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-zinc-900">{price}</span>
        {period && <span className="text-zinc-500 text-sm">{period}</span>}
      </div>
      <p className="text-sm text-zinc-500 mt-4 h-10 leading-snug">{description}</p>
    </div>

    <div className="space-y-4 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <Check className={`w-5 h-5 flex-shrink-0 ${highlight ? 'text-emerald-500' : 'text-zinc-400'}`} />
          <span className="text-sm text-zinc-700">{feature}</span>
        </div>
      ))}
    </div>

    <Button 
      fullWidth 
      variant={highlight ? 'primary' : 'outline'}
      onClick={onAction}
    >
      {cta}
    </Button>
  </div>
);

const PricingPage: React.FC<PricingPageProps> = ({ onBookDemo }) => {
  return (
    <div className="pt-32 pb-24 bg-zinc-50 min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-xl text-zinc-600">
            Designed to grow with you. No hidden per-cover fees on your own website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Tier 1 */}
          <PricingCard 
            tier="Free"
            price="£0"
            period="/mo"
            description="For small cafes and pop-ups just getting started."
            features={[
              "Up to 50 bookings / mo",
              "Standard Booking Widget",
              "Basic Email Notifications",
              "Community Support",
              "1 User Account"
            ]}
            cta="Get Started Free"
            onAction={onBookDemo}
          />

          {/* Tier 2 - Core */}
          <PricingCard 
            tier="Pro"
            price="£30"
            period="/mo"
            description="The complete operating system for busy independent restaurants."
            highlight={true}
            features={[
              "Unlimited Bookings (0% commission)",
              "SMS Reminders Included",
              "Guest Mode & Data Vault",
              "Kitchen View Dashboard",
              "Priority Chat Support",
              "Unlimited Users"
            ]}
            cta="Start 14-Day Free Trial"
            onAction={onBookDemo}
          />

          {/* Tier 3 */}
          <PricingCard 
            tier="Premium"
            price="£50"
            period="/mo"
            description="For high-volume venues and multi-site groups needing maximum power."
            features={[
              "Everything in Pro",
              "Multi-Venue Management",
              "Advanced Analytics & Reporting",
              "Dedicated Account Manager",
              "API Access",
              "Custom Branding"
            ]}
            cta="Contact Sales"
            onAction={onBookDemo}
          />
        </div>

        <div className="mt-20 text-center">
           <p className="text-zinc-500 mb-4">Need a custom enterprise solution?</p>
           <button onClick={onBookDemo} className="text-emerald-600 font-bold hover:underline">
             Talk to our sales team &rarr;
           </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;