
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onWatchVideo: () => void;
}

const Hero = ({ onWatchVideo }: HeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 md:px-8 py-12 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="animate-fade-in">
        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 animate-pulse">
          Limited Time Offer
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Transform Your Business With Our Revolutionary Product
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
          Join thousands of successful entrepreneurs who have increased their revenue by up to 300% using our proven system.
        </p>
        <Button 
          onClick={onWatchVideo} 
          size="lg" 
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-6 rounded-lg text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Watch Our Free Presentation <ArrowDown className="animate-bounce" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
