
import React, { useState } from 'react';
import Button from './Button';
import { Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Button variant="outline" size="sm" onClick={onBack} className="mb-8 border-zinc-200 text-zinc-500 hover:text-zinc-900">
            ← Back to Home
          </Button>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter mb-6">
            Get in touch.
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
            Whether you're curious about features, pricing, or looking for a partnership, we're ready to answer any and all questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info Column */}
          <div className="space-y-12">
            
            {/* Sales */}
            <div className="border-t border-zinc-100 pt-8">
              <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Mail className="text-emerald-600" size={20} /> Sales & Demos
              </h3>
              <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
                For independent restaurants looking to switch systems.
              </p>
              <a href="mailto:sales@tabley.co" className="text-lg font-medium text-zinc-900 hover:text-emerald-600 transition-colors">
                [INSERT SALES EMAIL]
              </a>
            </div>

            {/* Support */}
            <div className="border-t border-zinc-100 pt-8">
              <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <MessageSquare className="text-emerald-600" size={20} /> Customer Support
              </h3>
              <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
                Current partners needing technical assistance.
              </p>
              <a href="mailto:support@tabley.co" className="text-lg font-medium text-zinc-900 hover:text-emerald-600 transition-colors">
                 [INSERT SUPPORT EMAIL]
              </a>
            </div>

            {/* General / Office */}
            <div className="border-t border-zinc-100 pt-8">
              <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <MapPin className="text-emerald-600" size={20} /> Office
              </h3>
              <div className="text-zinc-600 space-y-1">
                <p>[INSERT STREET ADDRESS]</p>
                <p>[INSERT CITY, POSTCODE]</p>
                <p>[INSERT COUNTRY]</p>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="bg-zinc-50 rounded-[2rem] p-8 md:p-12 border border-zinc-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Send us a message</h3>
                
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    rows={5}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <Button fullWidth size="lg" type="submit" className="h-14">
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Message Sent</h3>
                <p className="text-zinc-600 mb-8">
                  Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
