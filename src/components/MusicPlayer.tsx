import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { audioManager } from '../utils/audioPlayer';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';

interface MusicPlayerProps {
  currentLang: SupportedLanguage;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ currentLang }) => {
  const { isDark } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const t = weddingData.translations[currentLang];

  useEffect(() => {
    const unsubscribe = audioManager.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    const nextState = audioManager.toggle();
    setIsPlaying(nextState);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2500);
  };

  return (
    <aside aria-label="Audio controls" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip feedback */}
      <div
        className={`mr-3 px-3.5 py-1.5 rounded-full text-xs font-serif tracking-wide border shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none hidden sm:block ${
          isDark
            ? 'bg-maroon-950/90 text-gold-200 border-gold-400/40'
            : 'bg-[#FAF6EE]/95 text-[#6B0D1E] border-gold-500/50'
        } ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-90 group-hover:translate-x-0'
        }`}
      >
        {isPlaying ? t.audioPlaying : t.audioPaused}
      </div>

      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className={`relative w-14 h-14 rounded-full border-2 border-gold-400 flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer ${
          isPlaying
            ? isDark
              ? 'bg-gradient-to-br from-maroon-800 to-maroon-950 text-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
              : 'bg-gradient-to-br from-[#7A0D22] to-[#4A0814] text-gold-200 shadow-[0_6px_20px_rgba(122,13,34,0.35)]'
            : isDark
            ? 'bg-maroon-950/80 text-gold-400/70 hover:text-gold-200'
            : 'bg-[#FAF6EE]/90 text-[#7A0D22]/80 hover:text-[#7A0D22] border-gold-500/60'
        }`}
        aria-label={isPlaying ? t.audioPlaying : t.audioPaused}
        title={isPlaying ? t.audioPlaying : t.audioPaused}
      >
        {/* Pulsating Ring when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-gold-400 animate-ping opacity-40 pointer-events-none" />
        )}

        {/* Center Music Icon with equalizer bars */}
        <div className="flex items-center justify-center space-x-1">
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 text-gold-300" />
              {/* Micro Equalizer Animation */}
              <span className="flex space-x-0.5 items-end h-3 ml-0.5">
                <span className="w-0.5 h-3 bg-gold-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
                <span className="w-0.5 h-2 bg-gold-300 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.2s]" />
                <span className="w-0.5 h-3.5 bg-gold-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
              </span>
            </>
          ) : (
            <VolumeX className={`w-5 h-5 ${isDark ? 'text-gold-400/60' : 'text-[#7A0D22]/60'}`} />
          )}
        </div>
      </button>
    </aside>
  );
};
