
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhoWeAre from './components/WhoWeAre';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import BookDemo from './components/BookDemo';
import PricingPage from './components/PricingPage';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  // Simple state-based routing
  const [currentPage, setCurrentPage] = useState<'home' | 'book-demo' | 'pricing' | 'privacy'>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleBookDemo = () => {
    setCurrentPage('book-demo');
  };

  const handlePricing = () => {
    setCurrentPage('pricing');
  };

  const handlePrivacy = () => {
    setCurrentPage('privacy');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'book-demo') {
    return <BookDemo onBack={handleBackToHome} />;
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white antialiased selection:bg-emerald-100 selection:text-emerald-900 relative">
        <MouseGlow />
        <Navbar onBookDemo={handleBookDemo} onPricing={handlePricing} onHome={handleBackToHome} />
        <PrivacyPolicy onBack={handleBackToHome} />
        <Footer onPrivacy={handlePrivacy} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white antialiased selection:bg-emerald-100 selection:text-emerald-900 relative">
      <MouseGlow />
      <Navbar onBookDemo={handleBookDemo} onPricing={handlePricing} onHome={handleBackToHome} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onBookDemo={handleBookDemo} />
            <SocialProof />
            <WhoWeAre />
            <Features />
            <WhyChooseUs />
            <Reviews />
            <FAQ />
            <CTA onBookDemo={handleBookDemo} />
          </>
        ) : (
          <PricingPage onBookDemo={handleBookDemo} />
        )}
      </main>
      <Footer onPrivacy={handlePrivacy} />
    </div>
  );
};

export default App;
