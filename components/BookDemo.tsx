import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ArrowLeft, CheckCircle2, Calendar, Shield, Star } from 'lucide-react';

interface BookDemoProps {
  onBack: () => void;
}

const BookDemo: React.FC<BookDemoProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    email: '',
    phone: '',
  });

  const reviews = [
    {
      text: "I was skeptical about the '10 minute' claim, but setup was incredibly fast. We were live for dinner service the same day.",
      author: "Jamie Lewis",
      role: "Owner, The Yard",
      initials: "JL"
    },
    {
      text: "Finally, a system that doesn't feel like it was built in the 90s. It's fast, beautiful, and my staff actually enjoy using it.",
      author: "James C.",
      role: "Owner, The Salt Room",
      initials: "JC"
    },
    {
      text: "The no-show protection is magic. We used to have 3-4 empty tables a night, now it's zero. It pays for itself.",
      author: "David K.",
      role: "Head Chef, OAK",
      initials: "DK"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send data to backend here
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 animate-fade-in">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900">Request Received!</h2>
          <p className="text-zinc-600 text-lg">
            Thanks, <span className="font-semibold text-zinc-900">{formData.name}</span>. We've received your details.
          </p>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 text-sm text-zinc-600">
            <p>One of our founders will email you shortly to arrange a 10-minute walkthrough that fits your schedule.</p>
          </div>
          <Button onClick={onBack} variant="outline">
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Side - Content & Value */}
      <div className="lg:w-5/12 bg-zinc-900 p-8 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
           <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-1.5 mb-12">
             <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
             <span className="text-xl font-bold tracking-tighter">Tabley.</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            The new standard for modern hospitality.
          </h1>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Join the fastest-growing network of independent restaurants. See how we replace your clunky legacy system in minutes.
          </p>
          
          <div className="space-y-5">
             <div className="flex items-center gap-3 text-zinc-300">
                <div className="bg-emerald-500/10 p-1 rounded-full">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4" />
                </div>
                <span className="font-medium">Increase profit margins by ~20%</span>
             </div>
             <div className="flex items-center gap-3 text-zinc-300">
                <div className="bg-emerald-500/10 p-1 rounded-full">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4" />
                </div>
                <span className="font-medium">Eliminate 99% of no-shows</span>
             </div>
             <div className="flex items-center gap-3 text-zinc-300">
                <div className="bg-emerald-500/10 p-1 rounded-full">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4" />
                </div>
                <span className="font-medium">Premium, Apple-like interface</span>
             </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 lg:mt-0 h-48">
          {/* Rotating Review Card */}
          <div key={currentReviewIndex} className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700 animate-fade-in">
            <div className="flex gap-1 mb-3">
               {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-orange-500 text-orange-500"/>)}
            </div>
            <p className="text-zinc-300 text-sm italic mb-4 min-h-[60px]">
              "{currentReview.text}"
            </p>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-emerald-900/50 rounded-full flex items-center justify-center text-xs font-bold text-emerald-400">
                 {currentReview.initials}
               </div>
               <div>
                 <div className="text-xs font-bold text-white">{currentReview.author}</div>
                 <div className="text-[10px] text-zinc-500">{currentReview.role}</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-7/12 bg-white p-8 lg:p-16 overflow-y-auto flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <button 
            onClick={onBack} 
            className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to site
          </button>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">Book your demo</h2>
            <p className="text-zinc-600">Fill in the details below and we'll be in touch.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-700">First Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="restaurantName" className="text-sm font-medium text-zinc-700">Restaurant Name</label>
                <input
                  required
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white"
                  placeholder="The Burger Joint"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700">Work Email</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white"
                placeholder="jane@restaurant.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-zinc-700">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white"
                placeholder="07700 900000"
              />
            </div>

            <div className="pt-4">
              <Button fullWidth size="lg" type="submit">
                Request Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6">
               <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>No credit card required</span>
               </div>
               <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Setup in 5 mins</span>
               </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;