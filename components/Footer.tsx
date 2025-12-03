
import React from 'react';

interface FooterProps {
  onPrivacy?: () => void;
  onTerms?: () => void;
  onContact?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacy, onTerms, onContact }) => {
  return (
    <footer className="bg-zinc-900 text-white py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter mb-2">Tabley<span className="text-emerald-500">.</span></h3>
            <p className="text-zinc-400 text-sm">
              The digital host for the finest independents.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm text-zinc-400">
            <button 
              onClick={(e) => { e.preventDefault(); if(onPrivacy) onPrivacy(); }} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); if(onTerms) onTerms(); }} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); if(onContact) onContact(); }} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Tabley Systems Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
