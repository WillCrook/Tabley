import React, { useState } from 'react';
import Button from './Button';
import { Check, X, Minus, ChevronDown, CheckCircle2, Plus } from 'lucide-react';

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

const PricingFAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-base font-medium transition-colors ${isOpen ? 'text-emerald-600' : 'text-zinc-900 group-hover:text-zinc-700'}`}>
          {question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-emerald-600" />
          ) : (
            <Plus className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 mb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-zinc-600 text-sm leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const PricingPage: React.FC<PricingPageProps> = ({ onBookDemo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  const comparisonData = [
    { feature: "Commission Fees", free: "0%", pro: "0%", premium: "0%" },
    { feature: "Bookings per month", free: "50", pro: "Unlimited", premium: "Unlimited" },
    { feature: "Booking Widget", free: true, pro: true, premium: true },
    { feature: "SMS Reminders", free: false, pro: true, premium: true },
    { feature: "Guest Data Export", free: false, pro: true, premium: true },
    { feature: "Table Management", free: "Basic", pro: "Advanced", premium: "Advanced" },
    { feature: "Support", free: "Community", pro: "Priority Chat", premium: "Dedicated Mgr" },
    { feature: "Multi-Venue View", free: false, pro: false, premium: true },
    { feature: "API Access", free: false, pro: false, premium: true },
  ];

  const pricingFaqs = [
    {
      question: "Is the monthly fee really all I pay?",
      answer: "Yes. For the Independent Hero (£29) and Full House (£49) plans, that is your total cost. There are zero per-cover fees for bookings made via your website."
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer: "No. All our plans are rolling monthly agreements. You can upgrade, downgrade, or cancel at any time with 30 days notice."
    },
    {
      question: "Are SMS costs included?",
      answer: "Yes. We include a generous allowance of SMS credits for booking confirmations and reminders in the Pro and Premium plans, covering normal usage for busy venues."
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely. You can start on the Free plan to test it out, then upgrade to Pro when you need SMS reminders or unlimited bookings."
    }
  ];

  const renderCheck = (value: boolean | string) => {
    if (value === true) return <Check size={20} className="text-emerald-600 mx-auto" />;
    if (value === false) return <Minus size={20} className="text-zinc-300 mx-auto" />;
    return <span className="font-medium text-zinc-900">{value}</span>;
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-48 bg-zinc-900 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop" 
            alt="Waiter serving food in a restaurant" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-zinc-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
             Invest in growth. <br/>
             <span className="text-emerald-500">Not cover fees.</span>
           </h1>
           <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-12 leading-relaxed">
             The operating system for independent restaurants. 
             Transparent pricing that stays flat, no matter how busy you get.
           </p>
           
           <div className="animate-bounce">
             <ChevronDown className="w-8 h-8 text-white/50 mx-auto" />
           </div>
        </div>
      </section>

      {/* 2. PRICING CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Tier 1 - Kickstarter */}
            <PricingCard 
              tier="Kickstarter"
              price="£0"
              period="/mo"
              description="For pop-ups and cafes avoiding monthly overheads."
              features={[
                "Pay as you go (20p/booking)",
                "Standard Widget",
                "Email Notifications",
                "Community Support"
              ]}
              cta="Request Free Access"
              onAction={() => document.getElementById('request-access')?.scrollIntoView({ behavior: 'smooth' })}
            />

            {/* Tier 2 - Independent Hero */}
            <PricingCard 
              tier="Independent Hero"
              price="£30"
              period="/mo"
              description="The complete operating system for busy venues."
              highlight={true}
              features={[
                "Unlimited Bookings",
                "Zero Cover Fees",
                "SMS Reminders Included",
                "Guest Mode & Data Vault",
                "Priority Chat Support"
              ]}
              cta="Request Pro Access"
              onAction={() => document.getElementById('request-access')?.scrollIntoView({ behavior: 'smooth' })}
            />

            {/* Tier 3 - Full House */}
            <PricingCard 
              tier="Full House"
              price="£50"
              period="/mo"
              description="For high-volume venues and multi-site groups."
              features={[
                "Everything in Hero",
                "Multi-Venue Management",
                "Student Logic (Auto-Verify)",
                "Dedicated Manager",
                "API Access"
              ]}
              cta="Contact Sales"
              onAction={() => document.getElementById('request-access')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-zinc-900 mb-4">Compare Plans</h2>
               <p className="text-zinc-600">Detailed breakdown of features.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden mb-24">
               {/* Header */}
               <div className="grid grid-cols-4 p-6 bg-zinc-50 border-b border-zinc-200 font-bold text-zinc-900 text-sm md:text-base">
                  <div className="col-span-1">Feature</div>
                  <div className="col-span-1 text-center">Kickstarter</div>
                  <div className="col-span-1 text-center text-emerald-600">Hero</div>
                  <div className="col-span-1 text-center">Full House</div>
               </div>
               
               {/* Rows */}
               {comparisonData.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-4 p-5 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors items-center text-sm">
                     <div className="col-span-1 font-medium text-zinc-700">{row.feature}</div>
                     <div className="col-span-1 text-center">{renderCheck(row.free)}</div>
                     <div className="col-span-1 text-center bg-emerald-50/50 -my-5 py-5 border-x border-emerald-100/50">{renderCheck(row.pro)}</div>
                     <div className="col-span-1 text-center">{renderCheck(row.premium)}</div>
                  </div>
               ))}
            </div>

            {/* 4. PRICING FAQs */}
            <div className="max-w-3xl mx-auto">
               <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-zinc-900">Pricing FAQs</h3>
               </div>
               <div className="bg-white rounded-2xl p-6 border border-zinc-200">
                  {pricingFaqs.map((faq, idx) => (
                     <PricingFAQItem key={idx} question={faq.question} answer={faq.answer} />
                  ))}
               </div>
            </div>

         </div>
      </section>

      {/* 5. REQUEST ACCESS FORM */}
      <section id="request-access" className="py-24 bg-white">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
               </div>

               <div className="relative z-10">
                 {!submitted ? (
                   <>
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in Tabley?</h2>
                     <p className="text-zinc-400 mb-10 text-lg">
                       We're currently onboarding select independent restaurants. Request access below and we'll be in touch with a demo and setup guide.
                     </p>

                     <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                           <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1 mb-1 block">Full Name</label>
                           <input 
                             required
                             value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})}
                             className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                             placeholder="John Doe"
                           />
                        </div>
                        <div>
                           <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1 mb-1 block">Work Email</label>
                           <input 
                             required
                             type="email"
                             value={formData.email}
                             onChange={(e) => setFormData({...formData, email: e.target.value})}
                             className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                             placeholder="john@restaurant.com"
                           />
                        </div>
                        <div>
                           <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1 mb-1 block">Restaurant Name</label>
                           <input 
                             required
                             value={formData.restaurant}
                             onChange={(e) => setFormData({...formData, restaurant: e.target.value})}
                             className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                             placeholder="The Burger Joint"
                           />
                        </div>
                        <div>
                           <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1 mb-1 block">Phone Number (Optional)</label>
                           <input 
                             type="tel"
                             value={formData.phone}
                             onChange={(e) => setFormData({...formData, phone: e.target.value})}
                             className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                             placeholder="07700 900 000"
                           />
                        </div>

                        <div className="pt-4">
                           <Button fullWidth size="lg" type="submit" className="h-12 shadow-lg shadow-emerald-500/20">
                             Request Access
                           </Button>
                        </div>
                     </form>
                   </>
                 ) : (
                   <div className="py-12 animate-fade-in">
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                      <p className="text-zinc-400">We've received your details and will be in touch shortly.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-8 text-emerald-400 hover:text-emerald-300 text-sm font-bold">
                        Send another
                      </button>
                   </div>
                 )}
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PricingPage;