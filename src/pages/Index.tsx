
import React, { useState, useRef } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CheckoutSection from '@/components/CheckoutSection';
import Footer from '@/components/Footer';
import VSLPlayer from '@/components/VSLPlayer';
import { toast } from 'sonner';

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);
  const checkoutRef = useRef<HTMLDivElement>(null);

  const handleWatchVideo = () => {
    setShowVideo(true);
    // Notify user that they need to watch the video
    toast.info('Please watch the video to access special offer');
  };

  const handleVideoComplete = () => {
    setShowVideo(false);
    setHasWatchedVideo(true);
    
    // Scroll to checkout section after a short delay
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
      toast.success('Special offer unlocked!');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onWatchVideo={handleWatchVideo} />
      <Benefits />
      <Testimonials />
      
      <div ref={checkoutRef}>
        <CheckoutSection isVisible={hasWatchedVideo} />
      </div>
      
      <Footer />
      
      <VSLPlayer 
        isVisible={showVideo} 
        onComplete={handleVideoComplete} 
      />
    </div>
  );
};

export default Index;
