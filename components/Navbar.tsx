import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookDemo: () => void;
  onPricing: () => void;
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookDemo, onPricing, onHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Blur Mask at the top */}
      <div 
        className={`fixed top-0 left-0 right-0 h-32 z-40 pointer-events-none transition-opacity duration-500 ease-in-out ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)'
        }}
      />

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <nav 
          className={`
            pointer-events-auto
            w-full max-w-5xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            flex items-center justify-between
            px-5 sm:px-6 
            ${scrolled 
              ? 'py-2.5 bg-white/85 backdrop-blur-xl border border-zinc-200/60 shadow-lg shadow-zinc-900/5' 
              : 'py-3.5 bg-white border border-zinc-100 shadow-md shadow-zinc-200/50'}
            rounded-full
          `}
        >
            {/* Logo */}
            <div className="flex items-center pl-1">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onHome(); }} 
                className="text-xl font-bold tracking-tighter text-zinc-900 flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                Tabley<span className="text-emerald-600">.</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <button 
                onClick={onHome} 
                className="px-5 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-50"
              >
                Features
              </button>
              <button 
                onClick={onPricing} 
                className="px-5 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-50"
              >
                Pricing
              </button>
              <div className="pl-2">
                  <Button 
                    size="sm" 
                    variant="primary" 
                    onClick={onBookDemo} 
                    className="rounded-full px-6 shadow-none hover:shadow-md"
                  >
                    Book Demo
                  </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden pr-1">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-zinc-600 hover:text-zinc-900 p-2 rounded-full hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-100"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown - Floating Card */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-4 right-4 z-40 md:hidden animate-fade-in-up origin-top">
            <div className="bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-3xl shadow-2xl p-2 flex flex-col gap-1">
              <button 
                className="w-full text-left px-5 py-3.5 text-base font-medium text-zinc-900 hover:bg-zinc-50 rounded-2xl transition-colors"
                onClick={() => { setMobileMenuOpen(false); onHome(); }}
              >
                Features
              </button>
              <button 
                className="w-full text-left px-5 py-3.5 text-base font-medium text-zinc-900 hover:bg-zinc-50 rounded-2xl transition-colors"
                onClick={() => { setMobileMenuOpen(false); onPricing(); }}
              >
                Pricing
              </button>
              <div className="p-2 pt-2">
                <Button fullWidth variant="primary" onClick={() => { setMobileMenuOpen(false); onBookDemo(); }} className="rounded-2xl h-12 text-base">Book Demo</Button>
              </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;