import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';

interface DateScratchCardProps {
  currentLang: SupportedLanguage;
}

export const DateScratchCard: React.FC<DateScratchCardProps> = ({ currentLang }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawingRef = useRef(false);
  const t = weddingData.translations[currentLang];
  const { isDark } = useTheme();

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
        <h3
          className={`text-xl sm:text-2xl font-serif font-bold tracking-wide ${
            isDark ? 'text-gold-200' : 'text-[#5C0617]'
          }`}
        >
          {t.scratchCardTitle}
        </h3>
        <p
          className={`text-xs sm:text-sm font-cormorant italic mt-0.5 ${
            isDark ? 'text-ivory-300/80' : 'text-[#6B4E32]'
          }`}
        >
          {t.scratchCardInstruction}
        </p>
      </div>

      {/* Card Outer Container */}
      <div
        ref={containerRef}
        className={`relative w-full max-w-sm h-56 sm:h-64 rounded-3xl border-2 overflow-hidden select-none transition-all duration-500 ${
          isDark
            ? 'border-gold-400/80 shadow-[0_15px_45px_rgba(0,0,0,0.7)] bg-gradient-to-br from-[#2E050D] via-[#1E0308] to-[#120104]'
            : 'border-gold-500 shadow-[0_15px_45px_rgba(170,120,30,0.18)] bg-gradient-to-br from-[#FFFFFF] via-[#FFFDF8] to-[#FDF4DF]'
        }`}
      >
        {/* Hidden Content Beneath Foil */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${
            isDark ? 'text-ivory-100' : 'text-[#4A0E17]'
          }`}
        >
          <span
            className={`text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase font-semibold ${
              isDark ? 'text-gold-400' : 'text-gold-700'
            }`}
          >
            {currentLang === 'ta' ? 'வெள்ளிக்கிழமை' : currentLang === 'hi' ? 'शुक्रवार' : 'FRIDAY'}
          </span>

          <div className="flex items-center justify-center space-x-3 my-1">
            <span
              className={`font-serif text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)] ${
                isDark
                  ? 'bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500'
                  : 'bg-gradient-to-b from-[#660C1E] via-[#8C162E] to-[#AA223E]'
              }`}
            >
              27
            </span>
            <div className="flex flex-col text-left">
              <span
                className={`font-serif text-2xl sm:text-3xl font-semibold tracking-wide ${
                  isDark ? 'text-ivory-50' : 'text-[#5C0617]'
                }`}
              >
                {currentLang === 'ta' ? 'நவம்பர்' : currentLang === 'hi' ? 'नवंबर' : 'NOVEMBER'}
              </span>
              <span
                className={`font-cinzel text-sm sm:text-base font-bold tracking-widest ${
                  isDark ? 'text-gold-300/90' : 'text-gold-700'
                }`}
              >
                2026
              </span>
            </div>
          </div>

          <p
            className={`text-xs sm:text-sm font-serif font-medium mt-1 ${
              isDark ? 'text-gold-200/90' : 'text-[#660C1E]'
            }`}
          >
            {weddingData.muhurthamTimeFormatted[currentLang]}
          </p>
          <p
            className={`text-[11px] font-tamil mt-1 ${
              isDark ? 'text-ivory-300/70' : 'text-[#7A4B1A]'
            }`}
          >
            {weddingData.auspiciousTithi[currentLang]}
          </p>

          {isRevealed && (
            <div
              className={`flex items-center space-x-1.5 mt-2 text-xs font-serif px-3 py-1 rounded-full border ${
                isDark
                  ? 'text-gold-400 bg-gold-500/10 border-gold-400/30'
                  : 'text-gold-800 bg-gold-500/20 border-gold-500/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
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
          className={`mt-3.5 px-4 py-1.5 rounded-full text-xs font-serif border transition-all flex items-center space-x-1.5 cursor-pointer ${
            isDark
              ? 'text-gold-300/80 hover:text-gold-100 border-gold-400/30 hover:border-gold-300 bg-maroon-950/40'
              : 'text-gold-800 hover:text-maroon-950 border-gold-500/50 hover:border-gold-600 bg-[#FFFDF8] shadow-sm font-semibold'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
          <span>{t.scratchFallbackBtn}</span>
        </button>
      )}
    </div>
  );
};
