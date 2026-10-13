import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { GoldFiligreeDivider } from './Motifs';

interface CountdownTimerProps {
  currentLang: SupportedLanguage;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { isDark } = useTheme();
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.muhurthamDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (isNaN(difference) || difference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % 1000) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDigits = (val: number, pad = 2) => String(Math.max(0, val)).padStart(pad, '0');

  const timeUnits = [
    { label: t.days, value: formatDigits(timeRemaining.days, 2) },
    { label: t.hours, value: formatDigits(timeRemaining.hours, 2) },
    { label: t.minutes, value: formatDigits(timeRemaining.minutes, 2) },
    { label: t.seconds, value: formatDigits(timeRemaining.seconds, 2) },
  ];

  const dateLabels = {
    en: {
      badge: 'SAVE THE DATE',
      datesHighlight: '29 & 30 November 2026',
      subtext: 'Reception on Sunday Evening & Subha Muhurtham on Monday Morning',
    },
    ta: {
      badge: 'சுப நன்னாள்',
      datesHighlight: '29 & 30 நவம்பர் 2026',
      subtext: 'ஞாயிறு மாலை வரவேற்பு & திங்கள் காலை சுப முகூர்த்தம்',
    },
    hi: {
      badge: 'शुभ वैवाहिक तिथियाँ',
      datesHighlight: '29 व 30 नवंबर 2026',
      subtext: 'रविवार सायं स्वागत समारोह एवं सोमवार प्रातः शुभ लग्न मुहूर्त',
    },
  }[currentLang];

  return (
    <div className="w-full max-w-xl mx-auto py-2 px-4 text-center">
      {/* Save The Date Eyebrow Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-cinzel font-bold tracking-[0.2em] uppercase border mb-3 backdrop-blur-sm transition-colors border-gold-500/50 bg-gold-500/10 text-gold-700 dark:text-gold-300">
        <Sparkles className="w-3 h-3 text-gold-500" />
        <span>{dateLabels.badge}</span>
      </div>

      <h2
        className={`font-serif text-2xl sm:text-4xl font-bold tracking-tight drop-shadow-sm mb-1 text-transparent bg-clip-text ${
          isDark
            ? 'bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
            : 'bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
        }`}
      >
        {dateLabels.datesHighlight}
      </h2>

      <p
        className={`text-xs sm:text-sm font-serif italic mb-6 font-medium ${
          isDark ? 'text-ivory-300/80' : 'text-[#7A4B1A]'
        }`}
      >
        {dateLabels.subtext}
      </p>

      {/* Countdown Title */}
      <h3
        className={`font-serif text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 ${
          isDark ? 'text-gold-300' : 'text-[#5C0617]'
        }`}
      >
        {timeRemaining.isCompleted ? t.countdownCompleted : t.countdownTitle}
      </h3>

      {/* 4 Cards for Countdown */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3.5 max-w-md mx-auto">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
              isDark
                ? 'border-gold-400/40 bg-gradient-to-b from-[#35070E]/85 via-[#220409]/90 to-[#150205]/95 shadow-[0_8px_20px_rgba(0,0,0,0.6)]'
                : 'border-gold-400/60 bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FDF8EE] shadow-[0_8px_25px_rgba(170,120,30,0.12)]'
            }`}
          >
            <span
              className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-sm tabular-nums text-transparent bg-clip-text leading-tight ${
                isDark
                  ? 'bg-gradient-to-b from-gold-100 via-gold-300 to-gold-400'
                  : 'bg-gradient-to-b from-[#660C1E] via-[#8C162E] to-[#AA223E]'
              }`}
            >
              {unit.value}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-cinzel tracking-widest uppercase mt-0.5 ${
                isDark ? 'text-gold-200/90' : 'text-gold-800 font-bold'
              }`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      <GoldFiligreeDivider className="my-5 max-w-xs mx-auto" />
    </div>
  );
};
