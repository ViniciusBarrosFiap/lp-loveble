
import React, { useState } from 'react';
import { useVideoProgress } from '@/lib/hooks/useVideoProgress';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Shield, Award, Clock } from 'lucide-react';

interface VSLPlayerProps {
  onComplete: () => void;
  isVisible: boolean;
}

const VSLPlayer = ({ onComplete, isVisible }: VSLPlayerProps) => {
  const { videoRef, progress, hasWatchedEnough, handleTimeUpdate } = useVideoProgress(0.8);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-black via-blue-900 to-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Elementos de confiança */}
      <div className="flex space-x-8 mb-6">
        <div className="flex flex-col items-center">
          <Shield size={24} className="text-blue-400 mb-1" />
          <span className="text-white text-xs">Conteúdo Seguro</span>
        </div>
        <div className="flex flex-col items-center">
          <Award size={24} className="text-yellow-400 mb-1" />
          <span className="text-white text-xs">Qualidade Premium</span>
        </div>
        <div className="flex flex-col items-center">
          <Clock size={24} className="text-green-400 mb-1" />
          <span className="text-white text-xs">Apenas 5 minutos</span>
        </div>
      </div>

      <div className="relative w-full max-w-3xl">
        {/* Efeito de brilho ao redor do player */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-lg blur-sm opacity-70 animate-pulse"></div>
        
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-blue-500/30 animate-fade-in">
          <video
            ref={videoRef}
            className="w-full"
            poster="/placeholder.svg"
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          
          {/* Progress bar */}
          <div className="h-2 bg-gray-700 w-full">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200" 
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between p-3 bg-black">
            <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:bg-blue-900/30">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-blue-900/30">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      {hasWatchedEnough && (
        <div className="mt-8 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur-sm opacity-70 animate-pulse"></div>
          <Button 
            onClick={onComplete} 
            size="lg" 
            className="relative bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-6 rounded-lg text-lg animate-pulse transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Continuar para Oferta Especial
          </Button>
        </div>
      )}
      
      <p className="text-white text-sm mt-4 opacity-70">
        {hasWatchedEnough ? 'Vídeo completo! Clique para continuar' : 'Por favor, assista ao vídeo para continuar'}
      </p>
    </div>
  );
};

export default VSLPlayer;
