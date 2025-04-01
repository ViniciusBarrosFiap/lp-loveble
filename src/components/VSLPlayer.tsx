
import React, { useState } from 'react';
import { useVideoProgress } from '@/lib/hooks/useVideoProgress';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

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
      <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-2xl border border-blue-500/30 animate-fade-in">
        <video
          ref={videoRef}
          className="w-full"
          poster="/placeholder.svg"
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
      
      {hasWatchedEnough && (
        <Button 
          onClick={onComplete} 
          size="lg" 
          className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 rounded-lg text-lg animate-pulse transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Continue to Special Offer
        </Button>
      )}
      
      <p className="text-white text-sm mt-4 opacity-70">
        {hasWatchedEnough ? 'Video complete! Click to continue' : 'Please watch the video to continue'}
      </p>
    </div>
  );
};

export default VSLPlayer;
