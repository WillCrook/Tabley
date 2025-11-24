import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

const PricingCard: React.FC<{
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}> = ({ tier, price, period, description, features, highlight = false, cta }) => (
  <div className={`relative p-8 rounded-2xl border flex flex-col h-full ${
    highlight 
      ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-100 scale-105 z-10' 
      : 'bg-white border-zinc-200 text-zinc-600'
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
      <p className="text-sm text-zinc-500 mt-4 h-10">{description}</p>
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
    >
      {cta}
    </Button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Designed to grow with you. No hidden per-cover fees on your own website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Tier 1 */}
          <PricingCard 
            tier="Kickstarter"
            price="£0"
            period="/mo"
            description="For small cafes and takeaways just getting started."
            features={[
              "Pay as you go: 20p per booking",
              "Standard Booking Widget",
              "Basic Email Notifications",
              "48hr Support Response"
            ]}
            cta="Start Free"
          />

          {/* Tier 2 - Core */}
          <PricingCard 
            tier="Independent Hero"
            price="£29"
            period="/mo"
            description="The Core Product. Everything a busy independent restaurant needs."
            highlight={true}
            features={[
              "Unlimited Bookings (0% commission)",
              "SMS Reminders Included",
              "Guest Mode & Data Vault",
              "Kitchen View Dashboard",
              "Priority Support"
            ]}
            cta="Start Free Trial"
          />

          {/* Tier 3 */}
          <PricingCard 
            tier="Full House"
            price="£49"
            period="/mo"
            description="For high-volume venues needing student marketing power."
            features={[
              "Everything in Independent Hero",
              "Marketplace Listing",
              "Student Logic (Auto-Verify)",
              "Advanced Analytics",
              "Dedicated Account Manager"
            ]}
            cta="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;