
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
import TermsOfService from './components/TermsOfService';
import ContactPage from './components/ContactPage';
import FeaturesPage from './components/FeaturesPage';

const App: React.FC = () => {
  // Simple state-based routing
  const [currentPage, setCurrentPage] = useState<'home' | 'book-demo' | 'pricing' | 'privacy' | 'terms' | 'contact' | 'features'>('home');

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

  const handleFeatures = () => {
    setCurrentPage('features');
  };

  const handlePrivacy = () => {
    setCurrentPage('privacy');
  };

  const handleTerms = () => {
    setCurrentPage('terms');
  };

  const handleContact = () => {
    setCurrentPage('contact');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'book-demo') {
    return <BookDemo onBack={handleBackToHome} />;
  }

  // Wrapper for pages that share the standard layout structure (Navbar + Content + Footer)
  const renderStandardLayout = (content: React.ReactNode) => (
    <div className="min-h-screen bg-white antialiased selection:bg-emerald-100 selection:text-emerald-900 relative">
      <MouseGlow />
      <Navbar onBookDemo={handleBookDemo} onPricing={handlePricing} onFeatures={handleFeatures} onHome={handleBackToHome} />
      {content}
      <Footer onPrivacy={handlePrivacy} onTerms={handleTerms} onContact={handleContact} />
    </div>
  );

  if (currentPage === 'privacy') {
    return renderStandardLayout(<PrivacyPolicy onBack={handleBackToHome} />);
  }

  if (currentPage === 'terms') {
    return renderStandardLayout(<TermsOfService onBack={handleBackToHome} />);
  }

  if (currentPage === 'contact') {
    return renderStandardLayout(<ContactPage onBack={handleBackToHome} />);
  }

  if (currentPage === 'features') {
    return renderStandardLayout(<FeaturesPage onBack={handleBackToHome} onBookDemo={handleBookDemo} />);
  }

  if (currentPage === 'pricing') {
    return (
      <div className="min-h-screen bg-white antialiased selection:bg-emerald-100 selection:text-emerald-900 relative">
        <MouseGlow />
        <Navbar onBookDemo={handleBookDemo} onPricing={handlePricing} onFeatures={handleFeatures} onHome={handleBackToHome} />
        <PricingPage onBookDemo={handleBookDemo} />
        <Footer onPrivacy={handlePrivacy} onTerms={handleTerms} onContact={handleContact} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white antialiased selection:bg-emerald-100 selection:text-emerald-900 relative">
      <MouseGlow />
      <Navbar onBookDemo={handleBookDemo} onPricing={handlePricing} onFeatures={handleFeatures} onHome={handleBackToHome} />
      <main>
        <Hero onBookDemo={handleBookDemo} />
        <SocialProof />
        <WhoWeAre />
        <Features />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <CTA onBookDemo={handleBookDemo} />
      </main>
      <Footer onPrivacy={handlePrivacy} onTerms={handleTerms} onContact={handleContact} />
    </div>
  );
};

export default App;
