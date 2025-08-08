import React, { useEffect } from 'react';

interface VTurbPlayerProps {
  videoId: string;
  className?: string;
}

const VTurbPlayer: React.FC<VTurbPlayerProps> = ({ videoId, className = '' }) => {
  useEffect(() => {
    // Load VTurb script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://scripts.converteai.net/2f600de4-eae0-4b71-970c-c15524f2b6e5/players/${videoId}/v4/player.js`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(`script[src*="${videoId}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [videoId]);

  return (
    <div className={`w-full h-full ${className}`}>
      <vturb-smartplayer 
        id={`vid-${videoId}`}
        style={{ display: 'block', margin: '0 auto', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default VTurbPlayer;