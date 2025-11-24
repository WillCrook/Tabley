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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-zinc-100 py-3' : 'bg-white border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onHome(); }} 
              className="text-2xl font-bold tracking-tighter text-zinc-900"
            >
              Tabley<span className="text-emerald-600">.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={onHome} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Features</button>
            <button onClick={onPricing} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Pricing</button>
            <Button size="sm" variant="primary" onClick={onBookDemo}>Book Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-600 hover:text-zinc-900 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <button 
              className="block w-full text-left px-3 py-2 text-base font-medium text-zinc-900 hover:bg-zinc-50 rounded-md"
              onClick={() => { setMobileMenuOpen(false); onHome(); }}
            >
              Features
            </button>
            <button 
              className="block w-full text-left px-3 py-2 text-base font-medium text-zinc-900 hover:bg-zinc-50 rounded-md"
              onClick={() => { setMobileMenuOpen(false); onPricing(); }}
            >
              Pricing
            </button>
            <div className="px-3 pt-2">
              <Button fullWidth variant="primary" onClick={() => { setMobileMenuOpen(false); onBookDemo(); }}>Book Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;