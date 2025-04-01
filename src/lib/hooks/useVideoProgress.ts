
import { useState, useEffect, useRef } from 'react';

export const useVideoProgress = (videoThreshold = 0.8) => {
  const [hasWatchedEnough, setHasWatchedEnough] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    const currentProgress = video.currentTime / video.duration;
    setProgress(currentProgress);
    
    if (currentProgress >= videoThreshold && !hasWatchedEnough) {
      setHasWatchedEnough(true);
    }
  };

  const resetProgress = () => {
    setProgress(0);
    setHasWatchedEnough(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return {
    videoRef,
    progress,
    hasWatchedEnough,
    handleTimeUpdate,
    resetProgress
  };
};
