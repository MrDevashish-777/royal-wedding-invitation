import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { audioManager } from '../utils/audioPlayer';
import { VinayagarMotif, KuthuvilakkuLamp, CornerOrnament } from './Motifs';

interface OpeningEntranceProps {
  currentLang: SupportedLanguage;
  onOpened: () => void;
}

export const OpeningEntrance: React.FC<OpeningEntranceProps> = ({ currentLang, onOpened }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const t = weddingData.translations[currentLang];
  const { bride, groom } = weddingData.couple;

  // Gentle floating petals / golden sparkles
  useEffect(() => {
    // Initial entrance setup
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

    // Play auspicious wedding background music
    audioManager.play();

    // Trigger celebratory golden petals and rose confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#9B1E3A', '#FF9933', '#FFFDF7'],
        shapes: ['circle'],
        scalar: 1.2,
      });

      setTimeout(() => {
        confetti({
          particleCount: 35,
          angle: 60,
          spread: 60,
          origin: { x: 0.1, y: 0.7 },
          colors: ['#D4AF37', '#9B1E3A', '#F9A825'],
        });
        confetti({
          particleCount: 35,
          angle: 120,
          spread: 60,
          origin: { x: 0.9, y: 0.7 },
          colors: ['#D4AF37', '#9B1E3A', '#F9A825'],
        });
      }, 350);
    } catch (e) {
      console.log('Confetti effect skipped:', e);
    }

    // After animation finishes, notify parent to reveal main site smoothly
    setTimeout(() => {
      setIsExited(true);
      document.documentElement.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');
      onOpened();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1600);
  };

  if (isExited) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1F0407] transition-all duration-1000 ${
        isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      style={{
        perspective: '1500px',
      }}
    >
      {/* 3D Envelope Flaps for Opening Effect */}
      <div
        className={`absolute inset-0 pointer-events-none z-20 transition-transform duration-1000 origin-top ease-out ${
          isOpening ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{
          background: 'linear-gradient(180deg, #4A0E17 0%, #2A040B 100%)',
          clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
        }}
      />
      <div
        className={`absolute inset-0 pointer-events-none z-20 transition-transform duration-1000 origin-bottom ease-out ${
          isOpening ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{
          background: 'linear-gradient(0deg, #4A0E17 0%, #2A040B 100%)',
          clipPath: 'polygon(0 100%, 0 65%, 50% 55%, 100% 65%, 100% 100%)',
          boxShadow: '0 -20px 40px rgba(0,0,0,0.8)',
        }}
      />

      {/* Royal Background Pattern & Texture */}
      <div className="absolute inset-0 bg-[#2A040B] bg-[radial-gradient(#AA771C_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0307]/80 via-transparent to-[#1A0307]/90" />

      {/* Royal Golden Card Frame */}
      <div
        className={`relative z-10 w-[92vw] max-w-[580px] min-h-[580px] p-6 sm:p-10 my-auto rounded-3xl border-2 border-gold-400/60 bg-gradient-to-b from-[#3E0913]/95 via-[#2E050D]/95 to-[#1E0308]/98 shadow-[0_0_80px_rgba(212,175,55,0.25)] backdrop-blur-md flex flex-col items-center justify-between text-center transition-all duration-700 ${
          isOpening ? 'scale-95 blur-sm opacity-20' : 'scale-100 opacity-100'
        }`}
      >
        {/* Corner Ornaments */}
        <CornerOrnament position="top-left" className="absolute top-2 left-2 w-12 h-12 text-gold-400/80" />
        <CornerOrnament position="top-right" className="absolute top-2 right-2 w-12 h-12 text-gold-400/80" />
        <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 w-12 h-12 text-gold-400/80" />
        <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 w-12 h-12 text-gold-400/80" />

        {/* Top Auspicious Invocation & Kuthuvilakku Accents */}
        <div className="w-full pt-2 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-6 text-gold-400 mb-2">
            <KuthuvilakkuLamp className="w-6 h-14 text-gold-400 animate-pulse-glow hidden sm:block" />
            <div className="flex flex-col items-center">
              <VinayagarMotif className="w-12 h-12 text-gold-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
              <p className="text-gold-200/90 text-xs tracking-[0.25em] font-cinzel uppercase mt-1">
                {t.auspiciousInvocation}
              </p>
              <p className="text-gold-400/80 text-[11px] tracking-widest font-tamil">
                {t.tamilInvocation}
              </p>
            </div>
            <KuthuvilakkuLamp className="w-6 h-14 text-gold-400 animate-pulse-glow hidden sm:block" />
          </div>

          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-2" />
        </div>

        {/* Center: Couple Names & Royal Seal Monogram */}
        <div className="my-auto py-4 flex flex-col items-center">
          <p className="text-gold-300/80 text-xs sm:text-sm tracking-[0.2em] uppercase font-cinzel mb-2">
            ROYAL WEDDING INVITATION
          </p>

          <h1 className="flex flex-col items-center space-y-1">
            <span className="font-serif text-3xl sm:text-5xl text-ivory-50 tracking-wide font-semibold drop-shadow-md">
              {bride.name[currentLang]}
            </span>
            <span className="font-script text-3xl sm:text-4xl text-gold-300 my-1 font-normal select-none">
              &
            </span>
            <span className="font-serif text-3xl sm:text-5xl text-ivory-50 tracking-wide font-semibold drop-shadow-md">
              {groom.name[currentLang]}
            </span>
          </h1>

          <p className="text-ivory-200/80 text-xs sm:text-sm max-w-sm mt-4 font-cormorant italic leading-relaxed">
            "{weddingData.auspiciousTithi[currentLang]}"
          </p>

          {/* Interactive Royal Golden Wax Seal Button */}
          <div className="relative mt-7 group">
            {/* Glowing Golden Ring Effect */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-gold-500 via-yellow-200 to-gold-600 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

            <button
              onClick={triggerOpen}
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#E6C687] via-[#AA771C] to-[#5C3A0A] border-4 border-[#FFE57F] shadow-[inset_0_4px_10px_rgba(255,255,255,0.6),0_10px_25px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center transform group-hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label={t.envelopeSealText}
            >
              {/* Inner Seal Texture */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-[#5C3A0A]/50 flex flex-col items-center justify-center p-2 text-center">
                <span className="text-maroon-950 font-serif font-black text-xl sm:text-2xl tracking-tighter drop-shadow-sm">
                  K & A
                </span>
                <span className="text-maroon-950 font-cinzel font-bold text-[9px] sm:text-[10px] tracking-wider uppercase mt-1 leading-tight">
                  {currentLang === 'ta' ? 'திறக்கவும்' : currentLang === 'hi' ? 'खोलें' : 'OPEN'}
                </span>
              </div>
            </button>
          </div>

          <p className="text-gold-200 text-xs sm:text-sm font-cinzel tracking-widest uppercase mt-4 animate-bounce">
            ▼ {t.envelopeSealText} ▼
          </p>
        </div>

        {/* Bottom Direct Entrance for Accessibility */}
        <div className="w-full pb-2">
          <div className="h-[1px] w-48 mx-auto bg-gradient-to-r from-transparent via-gold-400/50 to-transparent mb-3" />
          <button
            onClick={triggerOpen}
            className="text-ivory-300/70 hover:text-gold-300 text-xs font-serif underline tracking-wider transition-colors py-1 px-3 rounded hover:bg-gold-500/10"
          >
            {t.openDirectly}
          </button>
        </div>
      </div>
    </div>
  );
};
