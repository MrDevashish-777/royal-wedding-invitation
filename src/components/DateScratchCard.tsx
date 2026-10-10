import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';

interface DateScratchCardProps {
  currentLang: SupportedLanguage;
}

export const DateScratchCard: React.FC<DateScratchCardProps> = ({ currentLang }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawingRef = useRef(false);
  const t = weddingData.translations[currentLang];

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isRevealed) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Draw rich gold foil background
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#D4AF37');
    gradient.addColorStop(0.3, '#F3E5AB');
    gradient.addColorStop(0.5, '#C5A059');
    gradient.addColorStop(0.7, '#E6C687');
    gradient.addColorStop(1, '#AA771C');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Gold diagonal shimmer lines
    ctx.strokeStyle = '#FFE57F';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.35;
    for (let x = -rect.height; x < rect.width; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + rect.height, rect.height);
      ctx.stroke();
    }
    ctx.globalAlpha = 1.0;

    // Center Ornamental Badge on scratch foil
    ctx.save();
    ctx.fillStyle = '#4A0E17';
    ctx.beginPath();
    ctx.arc(rect.width / 2, rect.height / 2, 38, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#FFE57F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(rect.width / 2, rect.height / 2, 34, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#FFE57F';
    ctx.font = 'bold 12px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SCRATCH', rect.width / 2, rect.height / 2 - 6);
    ctx.font = '10px serif';
    ctx.fillText('HERE', rect.width / 2, rect.height / 2 + 10);
    ctx.restore();
  }, [isRevealed]);

  useEffect(() => {
    initCanvas();
    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  const celebrateReveal = () => {
    if (isRevealed) return;
    setIsRevealed(true);

    try {
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#FFD700', '#9B1E3A', '#FF9933', '#FFF'],
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;
      let transparentPixels = 0;
      const step = 64; // Sample every 64th pixel for speed

      for (let i = 3; i < pixels.length; i += step * 4) {
        if (pixels[i] < 45) {
          transparentPixels++;
        }
      }

      const totalSampled = pixels.length / (step * 4);
      if (transparentPixels / totalSampled > 0.28) {
        celebrateReveal();
      }
    } catch (e) {
      console.log('Scratch detection error:', e);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto w-full px-4">
      <div className="text-center mb-3">
        <h3 className="text-xl sm:text-2xl font-serif text-gold-200 font-bold tracking-wide">
          {t.scratchCardTitle}
        </h3>
        <p className="text-xs sm:text-sm text-ivory-300/80 font-cormorant italic mt-0.5">
          {t.scratchCardInstruction}
        </p>
      </div>

      {/* Card Outer Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-sm h-56 sm:h-64 rounded-3xl border-2 border-gold-400/80 shadow-[0_15px_45px_rgba(0,0,0,0.7)] overflow-hidden bg-gradient-to-br from-[#2E050D] via-[#1E0308] to-[#120104] select-none"
      >
        {/* Hidden Content Beneath Foil */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-ivory-100">
          <span className="text-gold-400 text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase font-semibold">
            {currentLang === 'ta' ? 'வெள்ளிக்கிழமை' : currentLang === 'hi' ? 'शुक्रवार' : 'FRIDAY'}
          </span>

          <div className="flex items-center justify-center space-x-3 my-1">
            <span className="font-serif text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]">
              27
            </span>
            <div className="flex flex-col text-left">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-ivory-50 tracking-wide">
                {currentLang === 'ta' ? 'நவம்பர்' : currentLang === 'hi' ? 'नवंबर' : 'NOVEMBER'}
              </span>
              <span className="font-cinzel text-sm sm:text-base text-gold-300/90 font-bold tracking-widest">
                2026
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gold-200/90 font-serif font-medium mt-1">
            {weddingData.muhurthamTimeFormatted[currentLang]}
          </p>
          <p className="text-[11px] text-ivory-300/70 font-tamil mt-1">
            {weddingData.auspiciousTithi[currentLang]}
          </p>

          {isRevealed && (
            <div className="flex items-center space-x-1.5 mt-2 text-xs font-serif text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-400/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>{t.scratchCardRevealed}</span>
            </div>
          )}
        </div>

        {/* Scratch Canvas Overlay */}
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            isDrawingRef.current = true;
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            handlePointerMove(e);
          }}
          onPointerMove={handlePointerMove}
          onPointerUp={() => {
            isDrawingRef.current = false;
          }}
          onPointerCancel={() => {
            isDrawingRef.current = false;
          }}
          className={`absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 touch-none ${
            isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Scratch to reveal the wedding date"
        />
      </div>

      {/* Manual Instant Reveal Fallback Button */}
      {!isRevealed && (
        <button
          onClick={celebrateReveal}
          className="mt-3.5 px-4 py-1.5 rounded-full text-xs font-serif text-gold-300/80 hover:text-gold-100 border border-gold-400/30 hover:border-gold-300 bg-maroon-950/40 transition-all flex items-center space-x-1.5 cursor-pointer"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
          <span>{t.scratchFallbackBtn}</span>
        </button>
      )}
    </div>
  );
};
