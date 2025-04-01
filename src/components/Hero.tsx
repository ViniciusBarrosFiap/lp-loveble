
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ShieldCheck, Download, Package } from 'lucide-react';

interface HeroProps {
  onWatchVideo: () => void;
}

const Hero = ({ onWatchVideo }: HeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 md:px-8 py-12 bg-gradient-to-b from-blue-100 via-purple-50 to-white relative overflow-hidden">
      {/* Animações de fundo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Círculos animados */}
        <div className="absolute w-64 h-64 rounded-full bg-blue-300 -top-10 -left-10 animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute w-96 h-96 rounded-full bg-purple-300 -bottom-20 -right-20 animate-pulse" style={{animationDuration: '10s'}}></div>
        
        {/* Bolhas flutuantes */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-70"
            style={{
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Grade digital */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzliYjZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-[0.04]"></div>
      </div>
      
      <div className="animate-fade-in relative z-10 bg-white/80 p-8 md:p-12 rounded-xl shadow-lg backdrop-blur-sm border border-blue-100 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4 gap-2">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium animate-pulse">
            Oferta por Tempo Limitado
          </span>
          <ShieldCheck className="text-blue-600" size={20} />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mx-auto leading-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Transforme Seu Negócio Com Nosso Produto Revolucionário
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 mx-auto max-w-2xl text-center">
          Acesse agora nosso produto digital exclusivo que já transformou a vida de mais de 10.000 empreendedores, aumentando suas receitas em até 300%.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center bg-green-50 p-3 rounded-lg">
            <Package className="text-green-500 mr-2" size={20} />
            <span className="text-green-700 font-medium">Entrega Imediata</span>
          </div>
          
          <div className="flex items-center bg-blue-50 p-3 rounded-lg">
            <Download className="text-blue-500 mr-2" size={20} />
            <span className="text-blue-700 font-medium">Acesso Vitalício</span>
          </div>
        </div>
        
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-sm opacity-70 animate-pulse"></div>
          <Button 
            onClick={onWatchVideo} 
            size="lg" 
            className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-6 rounded-lg text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Assista Nossa Apresentação Gratuita <ArrowDown className="animate-bounce" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
