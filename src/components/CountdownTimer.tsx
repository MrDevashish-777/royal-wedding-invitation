import React, { useState, useEffect } from 'react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
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
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

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
    { label: t.days, value: formatDigits(timeRemaining.days, 3) },
    { label: t.hours, value: formatDigits(timeRemaining.hours, 2) },
    { label: t.minutes, value: formatDigits(timeRemaining.minutes, 2) },
    { label: t.seconds, value: formatDigits(timeRemaining.seconds, 2) },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-8 px-4 text-center">
      <h3 className="font-serif text-lg sm:text-2xl text-gold-300 font-semibold tracking-wide mb-1">
        {timeRemaining.isCompleted ? t.countdownCompleted : t.countdownTitle}
      </h3>
      <p className="text-xs sm:text-sm text-ivory-300/70 font-cormorant italic mb-5">
        {weddingData.muhurthamTimeFormatted[currentLang]}
      </p>

      {/* 4 Gold Cards for Countdown */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border border-gold-400/40 bg-gradient-to-b from-[#35070E]/80 via-[#220409]/90 to-[#150205]/95 shadow-[0_8px_20px_rgba(0,0,0,0.6)] backdrop-blur-sm"
          >
            <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-400 drop-shadow-sm tabular-nums">
              {unit.value}
            </span>
            <span className="text-[10px] sm:text-xs font-cinzel text-gold-200/90 tracking-widest uppercase mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      <GoldFiligreeDivider className="my-6 max-w-xs mx-auto" />
    </div>
  );
};
