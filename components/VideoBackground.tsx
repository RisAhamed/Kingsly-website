'use client';

import { useState, useRef, useCallback } from 'react';

interface VideoBackgroundProps {
  src: string;
  overlay?: boolean;
  className?: string;
}

export default function VideoBackground({
  src,
  overlay = true,
  className = '',
}: VideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCanPlay = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Fallback gradient — always rendered behind the video, guaranteed dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #02141a 0%, #0a3341 100%)',
        }}
      />

      {/* Video element */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={handleCanPlay}
          onError={handleError}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: isLoaded ? 1 : 0 }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Gradient overlay */}
      {overlay && <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 to-black/20" />}
    </div>
  );
}
