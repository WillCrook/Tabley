
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { 
  Zap, Shield, Database, ChefHat, 
  Users, Smartphone, ArrowRight, 
  Activity, Lock, CheckCircle2, X,
  Bell, Mail, Palette, Box, Calendar, Star,
  Globe, WifiOff, Monitor, ConciergeBell, UserCheck, Phone,
  BarChart3, PieChart, TrendingUp, Filter
} from 'lucide-react';

interface FeatureData {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  stat: string;
  statLabel: string;
  graphType: 'bar' | 'line' | 'funnel' | 'pie';
}

const featuresData: FeatureData[] = [
  {
    id: 'guest-mode',
    icon: <Zap className="w-6 h-6" />,
    title: "Guest Mode Booking",
    shortDesc: "12-second reservation flow",
    longDesc: "Competitors force users to create accounts, remember passwords, and download apps just to book dinner. We removed the barrier. Guest Mode captures the booking immediately using just a name and phone number, creating a seamless path to conversion.",
    stat: "+22%",
    statLabel: "Increase in Booking Conversion",
    graphType: 'funnel'
  },
  {
    id: 'no-shows',
    icon: <Shield className="w-6 h-6" />,
    title: "No-Show Protection",
    shortDesc: "Automated SMS chasing",
    longDesc: "Manual confirmation calls are a waste of labour. Tabley automates the entire confirmation workflow via SMS and WhatsApp. For larger groups or peak times, our Variable Deposit system kicks in automatically to secure commitment.",
    stat: "-85%",
    statLabel: "Reduction in Empty Tables",
    graphType: 'bar'
  },
  {
    id: 'data-vault',
    icon: <Database className="w-6 h-6" />,
    title: "The Data Vault",
    shortDesc: "Your customer data, encrypted",
    longDesc: "When a guest books on an aggregator app, they become *their* customer. When they book on Tabley, they are *yours*. We provide a secure, exportable CRM where you own 100% of the data rights. We never market to your list.",
    stat: "100%",
    statLabel: "Data Ownership Guarantee",
    graphType: 'pie'
  },
  {
    id: 'kitchen-pacing',
    icon: <ChefHat className="w-6 h-6" />,
    title: "Kitchen Flow Control",
    shortDesc: "Regulate covers per 15-min",
    longDesc: "Prevent the kitchen from crashing. Set hard limits on covers per 15-minute interval. Even if you have empty tables, the system will pause online bookings to protect service quality during a slam.",
    stat: "4.8/5",
    statLabel: "Avg Service Smoothness Score",
    graphType: 'line'
  },
  {
    id: 'guest-memory',
    icon: <Users className="w-6 h-6" />,
    title: "Automated Guest Memory",
    shortDesc: "Auto-tag VIPs & Allergies",
    longDesc: "The system remembers what your staff forget. It automatically tags guests who have visited >5 times as 'Regulars', flags 'No-Show' history, and highlights allergies from previous visits.",
    stat: "3x",
    statLabel: "Improvement in Guest Retention",
    graphType: 'bar'
  },
  {
    id: 'mobile-admin',
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Command Center",
    shortDesc: "Run service from your pocket",
    longDesc: "Full admin power on your phone. Close sections, refund deposits, or message guests directly from the iPhone app. You don't need to be stuck in the back office.",
    stat: "15m",
    statLabel: "Saved per Manager Shift",
    graphType: 'line'
  },
  // NEW FEATURES A-F
  {
    id: 'notify-me',
    icon: <Bell className="w-6 h-6" />,
    title: "'Notify Me' Button",
    shortDesc: "Waitlist for busy nights",
    longDesc: "Don't lose a guest just because Friday at 7pm is full. The 'Notify Me' button captures demand. If a table cancels, the system automatically emails the waitlist to re-fill the slot instantly.",
    stat: "92%",
    statLabel: "Re-booking Rate on Cancellations",
    graphType: 'line'
  },
  {
    id: 'private-dining',
    icon: <Mail className="w-6 h-6" />,
    title: "Private Dining Leads",
    shortDesc: "Capture large group enquiries",
    longDesc: "Separate regular bookings from high-value events. Large groups (12+) are funneled into a specialized enquiry form that goes straight to your events manager, keeping your main book clean.",
    stat: "£2.5k",
    statLabel: "Avg Additional Monthly Event Revenue",
    graphType: 'bar'
  },
  {
    id: 'white-label',
    icon: <Palette className="w-6 h-6" />,
    title: "White-Label Widget",
    shortDesc: "Matches your brand perfectly",
    longDesc: "A chameleon booking interface. Customise fonts, colors, and button styles to match your website exactly. Guests shouldn't know they've left your site to make a booking.",
    stat: "0%",
    statLabel: "Commission on Direct Bookings",
    graphType: 'pie'
  },
  {
    id: 'smart-inventory',
    icon: <Box className="w-6 h-6" />,
    title: "Smart Inventory",
    shortDesc: "Pre-sell lobster & specials",
    longDesc: "Allow guests to pre-order limited items (like Sunday Roast or Lobster) at the point of booking. This reduces waste and increases spend-per-head before they even arrive.",
    stat: "+£8",
    statLabel: "Increase in Spend Head",
    graphType: 'bar'
  },
  {
    id: 'staff-scheduler',
    icon: <Calendar className="w-6 h-6" />,
    title: "AI Staff Scheduler",
    shortDesc: "Rota based on bookings",
    longDesc: "The system predicts how busy you will be based on bookings + historical walk-in data, and suggests exactly how many servers and chefs you need for the shift.",
    stat: "12%",
    statLabel: "Reduction in Labour Costs",
    graphType: 'line'
  },
  {
    id: 'auto-feedback',
    icon: <Star className="w-6 h-6" />,
    title: "Auto-Feedback Loop",
    shortDesc: "Catch bad reviews privately",
    longDesc: "Send an automated SMS 1 hour after the meal. If they rate 5 stars, we prompt for Google Review. If they rate 1-3 stars, we open a private feedback chat so you can fix it before they go public.",
    stat: "4.9",
    statLabel: "Avg Google Rating for Partners",
    graphType: 'funnel'
  }
];

interface FeatureCardProps {
  feature: FeatureData;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl border border-zinc-200 p-6 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
          {feature.icon}
        </div>
        <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight size={16} className="text-zinc-400" />
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-emerald-700 transition-colors">
        {feature.title}
      </h3>
      <p className="text-sm text-zinc-500 mb-4 flex-grow">
        {feature.shortDesc}
      </p>
      
      <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center gap-2">
         <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Impact</div>
         <div className="text-sm font-bold text-emerald-600">{feature.stat}</div>
      </div>
    </div>
  );
};

const FeatureModal: React.FC<{ feature: FeatureData; onClose: () => void }> = ({ feature, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-fade-in-up flex flex-col md:flex-row overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left Side: Visuals */}
        <div className="w-full md:w-5/12 bg-zinc-50 p-8 flex items-center justify-center border-r border-zinc-100 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           
           <div className="relative z-10 w-full">
              {/* Dynamic Graph Visualization based on type */}
              <div className="bg-white rounded-2xl shadow-lg border border-zinc-200 p-6 aspect-square flex flex-col items-center justify-center text-center">
                 {feature.graphType === 'bar' && (
                    <div className="w-full h-full flex items-end justify-center gap-2 p-4">
                       <div className="w-1/4 h-[40%] bg-zinc-200 rounded-t-sm"></div>
                       <div className="w-1/4 h-[60%] bg-zinc-300 rounded-t-sm"></div>
                       <div className="w-1/4 h-[100%] bg-emerald-500 rounded-t-sm shadow-lg shadow-emerald-200 relative group">
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                             {feature.stat}
                          </div>
                       </div>
                    </div>
                 )}
                 {feature.graphType === 'line' && (
                    <div className="w-full h-full relative p-4 flex items-center justify-center">
                       <Activity className="w-full h-full text-emerald-500" strokeWidth={1} />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-zinc-900 bg-white/80 px-2 rounded">
                          {feature.stat}
                       </div>
                    </div>
                 )}
                 {feature.graphType === 'pie' && (
                    <div className="relative w-32 h-32 rounded-full border-8 border-emerald-100 border-t-emerald-500 transform -rotate-45 flex items-center justify-center">
                       <div className="text-xl font-bold text-zinc-900">{feature.stat}</div>
                    </div>
                 )}
                 {feature.graphType === 'funnel' && (
                    <div className="flex flex-col gap-2 w-full px-4 items-center">
                       <div className="w-full h-8 bg-zinc-200 rounded"></div>
                       <div className="w-3/4 h-8 bg-zinc-300 rounded"></div>
                       <div className="w-1/2 h-8 bg-emerald-500 rounded shadow-md text-white flex items-center justify-center text-xs font-bold">
                          {feature.stat}
                       </div>
                    </div>
                 )}
                 
                 <div className="mt-6">
                    <div className="text-3xl font-bold text-zinc-900 tracking-tight">{feature.stat}</div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide mt-1">{feature.statLabel}</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                 {feature.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">{feature.title}</h2>
           </div>
           
           <div className="h-1 w-20 bg-emerald-500 rounded-full mb-8"></div>
           
           <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              {feature.longDesc}
           </p>

           <div className="mt-auto pt-8 border-t border-zinc-100">
              <h4 className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-wider">Includes</h4>
              <div className="grid grid-cols-2 gap-3">
                 <div className="flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Instant Setup</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Mobile App Access</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Unlimited Usage</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>24/7 Support</span>
                 </div>
              </div>
           </div>
           
           <div className="mt-8">
              <Button size="lg" fullWidth onClick={onClose}>
                 Got it
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
};

interface FeaturesPageProps {
  onBack: () => void;
  onBookDemo: () => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onBack, onBookDemo }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureData | null>(null);

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* HEADER */}
      <section className="pt-32 pb-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button variant="outline" size="sm" onClick={onBack} className="mb-8 border-zinc-200 text-zinc-500 hover:text-zinc-900">
             ← Back to Home
          </Button>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter mb-6">
            Everything you need. <br className="hidden md:block"/>
            <span className="text-emerald-600">Nothing you don't.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
             A complete operating system for the modern independent restaurant.
          </p>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuresData.map((feature) => (
                 <FeatureCard 
                    key={feature.id} 
                    feature={feature} 
                    onClick={() => setSelectedFeature(feature)} 
                 />
              ))}
           </div>
        </div>
      </section>

      {/* SUPPORT SECTION (Dark Theme) */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">A reliable platform with <br/> unparalleled support</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
                {/* 1 */}
                <div>
                    <Globe className="w-8 h-8 text-emerald-500 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold mb-2">Manage from anywhere</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Use your phone, iPad, or computer to stay on top of the restaurant wherever you are.
                    </p>
                </div>
                
                {/* 2 */}
                <div>
                    <WifiOff className="w-8 h-8 text-emerald-500 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold mb-2">Work Offline</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Even when the internet is down, you can operate without interruption. Syncs automatically when back online.
                    </p>
                </div>

                {/* 3 */}
                <div>
                    <Monitor className="w-8 h-8 text-emerald-500 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold mb-2">Use with ease</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Designed with a user-friendly interface that your team can learn fast. No complex training days needed.
                    </p>
                </div>

                {/* 4 */}
                <div>
                    <ConciergeBell className="w-8 h-8 text-emerald-500 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold mb-2">Hands-on Onboarding</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Get setup for success with help choosing the right plan and importing your data.
                    </p>
                </div>

                {/* 5 */}
                <div>
                    <UserCheck className="w-8 h-8 text-emerald-500 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold mb-2">Account Management</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Get ongoing support to optimise your business. We are partners, not just software providers.
                    </p>
                </div>

                {/* 6 */}
                <div>
                    <Phone className="w-8 h-8 text-emerald-500 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold mb-2">24/7 Service</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Talk to a real person in under 1.5 minutes, on average. No bots, no scripts.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-emerald-50 text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Ready to upgrade your service?</h2>
            <Button size="lg" onClick={onBookDemo}>Book a Demo</Button>
         </div>
      </section>

      {/* MODAL */}
      {selectedFeature && (
        <FeatureModal 
          feature={selectedFeature} 
          onClose={() => setSelectedFeature(null)} 
        />
      )}
    </div>
  );
};

export default FeaturesPage;
