import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { audioManager } from '../utils/audioPlayer';
import { VinayagarMotif, CornerOrnament } from './Motifs';

interface OpeningEntranceProps {
  currentLang: SupportedLanguage;
  onOpened: () => void;
}

export const OpeningEntrance: React.FC<OpeningEntranceProps> = ({ currentLang, onOpened }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const t = weddingData.translations[currentLang];
  const { bride, groom } = weddingData.couple;

  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');

    return () => {
      document.documentElement.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const triggerOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play soft traditional background music
    audioManager.play();

    // Celebratory golden flower petals and confetti
    try {
      confetti({
        particleCount: 55,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#9B1E3A', '#FF9933', '#FFFDF7'],
        shapes: ['circle'],
        scalar: 1.1,
      });

      setTimeout(() => {
        confetti({
          particleCount: 30,
          angle: 60,
          spread: 60,
          origin: { x: 0.15, y: 0.7 },
          colors: ['#D4AF37', '#9B1E3A', '#F9A825'],
        });
        confetti({
          particleCount: 30,
          angle: 120,
          spread: 60,
          origin: { x: 0.85, y: 0.7 },
          colors: ['#D4AF37', '#9B1E3A', '#F9A825'],
        });
      }, 300);
    } catch (e) {
      console.log('Confetti effect skipped:', e);
    }

    setTimeout(() => {
      setIsExited(true);
      document.documentElement.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');
      onOpened();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1400);
  };

  if (isExited) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#150205] transition-opacity duration-1000 overflow-hidden ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background with luxury envelope texture & subtle dark maroon gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.4] contrast-[1.08] pointer-events-none transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/assets/art/opening-background.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A040B]/85 via-[#1E0308]/90 to-[#120104]/95" />

      {/* Sliding Top & Bottom Flap animations when opening */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#2D060E] border-b border-gold-400/40 pointer-events-none transition-transform duration-1000 ease-in-out z-20 ${
          isOpening ? '-translate-y-full' : 'translate-y-0 opacity-0'
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#2D060E] border-t border-gold-400/40 pointer-events-none transition-transform duration-1000 ease-in-out z-20 ${
          isOpening ? 'translate-y-full' : 'translate-y-0 opacity-0'
        }`}
      />

      {/* Royal Card Frame */}
      <div
        className={`relative z-30 w-[92vw] max-w-[560px] p-6 sm:p-10 rounded-3xl border-2 border-gold-400/70 bg-gradient-to-b from-[#3E0913]/95 via-[#2C050D]/95 to-[#1C0207]/98 shadow-[0_0_80px_rgba(212,175,55,0.3),inset_0_1px_3px_rgba(255,255,255,0.15)] backdrop-blur-md flex flex-col items-center justify-between text-center transition-all duration-700 ${
          isOpening ? 'scale-90 opacity-0 blur-sm' : 'scale-100 opacity-100'
        }`}
      >
        {/* Corner Ornaments */}
        <CornerOrnament position="top-left" className="absolute top-2.5 left-2.5 w-10 h-10 text-gold-400/80" />
        <CornerOrnament position="top-right" className="absolute top-2.5 right-2.5 w-10 h-10 text-gold-400/80" />
        <CornerOrnament position="bottom-left" className="absolute bottom-2.5 left-2.5 w-10 h-10 text-gold-400/80" />
        <CornerOrnament position="bottom-right" className="absolute bottom-2.5 right-2.5 w-10 h-10 text-gold-400/80" />

        {/* Auspicious Invocation Header */}
        <div className="w-full pt-1 flex flex-col items-center">
          <VinayagarMotif className="w-11 h-11 text-gold-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]" />
          <p className="text-gold-200/95 text-xs sm:text-sm tracking-[0.25em] font-cinzel uppercase font-semibold mt-1">
            {t.auspiciousInvocation}
          </p>
          <p className="text-gold-400/90 text-[11px] font-tamil tracking-wider">
            {t.tamilInvocation}
          </p>
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-3" />
        </div>

        {/* Center: Couple Names & Royal Monogram */}
        <div className="my-auto py-3 flex flex-col items-center w-full">
          <p className="text-gold-300/85 text-xs sm:text-sm tracking-[0.2em] uppercase font-cinzel mb-2">
            ROYAL WEDDING INVITATION
          </p>

          {/* Couple Names */}
          <h1 className="flex flex-col items-center space-y-0.5">
            <span className="font-serif text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400 tracking-wide font-bold drop-shadow-md">
              {bride.name[currentLang]}
            </span>
            <span className="font-script text-3xl sm:text-4xl text-gold-300 my-0.5 select-none">
              &
            </span>
            <span className="font-serif text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400 tracking-wide font-bold drop-shadow-md">
              {groom.name[currentLang]}
            </span>
          </h1>

          <p className="text-ivory-200/80 text-xs sm:text-sm max-w-sm mt-3 font-cormorant italic leading-relaxed">
            "{weddingData.auspiciousTithi[currentLang]}"
          </p>

          {/* Golden Wax Seal Tap Button */}
          <div className="relative mt-6 mb-2 group">
            {/* Glowing Golden Ring Effect */}
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-gold-500 via-yellow-200 to-gold-600 opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

            <button
              onClick={triggerOpen}
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#E6C687] via-[#AA771C] to-[#5C3A0A] border-4 border-[#FFE57F] shadow-[inset_0_4px_10px_rgba(255,255,255,0.6),0_10px_30px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center transform group-hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label={t.envelopeSealText}
            >
              <div className="absolute inset-1.5 rounded-full border border-dashed border-[#5C3A0A]/50 flex flex-col items-center justify-center p-2 text-center">
                <span className="text-maroon-950 font-serif font-black text-2xl sm:text-3xl tracking-tighter drop-shadow-sm leading-none">
                  K & Y
                </span>
                <span className="text-maroon-950 font-cinzel font-bold text-[9px] sm:text-[10px] tracking-wider uppercase mt-1 leading-tight">
                  {currentLang === 'ta' ? 'திறக்கவும்' : currentLang === 'hi' ? 'खोलें' : 'OPEN'}
                </span>
              </div>
            </button>
          </div>

          <p className="text-gold-200 text-xs sm:text-sm font-cinzel tracking-widest uppercase mt-3 animate-bounce">
            ▼ {t.envelopeSealText} ▼
          </p>
        </div>

        {/* Bottom Link for Accessibility */}
        <div className="w-full pt-1 pb-1">
          <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-gold-400/50 to-transparent mb-2" />
          <button
            onClick={triggerOpen}
            className="text-ivory-300/70 hover:text-gold-300 text-xs font-serif underline tracking-wider transition-colors py-1 px-3 rounded hover:bg-gold-500/10 cursor-pointer"
          >
            {t.openDirectly}
          </button>
        </div>
      </div>
    </div>
  );
};
