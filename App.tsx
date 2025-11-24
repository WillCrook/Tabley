import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import BookDemo from './components/BookDemo';

const App: React.FC = () => {
  
  const [currentPage, setCurrentPage] = useState<'home' | 'book-demo'>('home');

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleBookDemo = () => {
    setCurrentPage('book-demo');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'book-demo') {
    return <BookDemo onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white antialiased selection:bg-emerald-100 selection:text-emerald-900 relative">
      <MouseGlow />
      <Navbar onBookDemo={handleBookDemo} />
      <main>
        <Hero onBookDemo={handleBookDemo} />
        <SocialProof />
        <Features />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <CTA onBookDemo={handleBookDemo} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
