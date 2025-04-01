
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
    // Notifica o usuário que eles precisam assistir ao vídeo
    toast.info('Por favor, assista ao vídeo para acessar o produto exclusivo');
  };

  const handleVideoComplete = () => {
    setShowVideo(false);
    setHasWatchedVideo(true);
    
    // Rola para a seção de checkout após um pequeno atraso
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
      toast.success('Produto exclusivo desbloqueado! Aproveite a oferta por tempo limitado.');
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
