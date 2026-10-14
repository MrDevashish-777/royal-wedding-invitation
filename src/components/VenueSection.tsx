import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { GoldFiligreeDivider, CornerOrnament } from './Motifs';

interface VenueSectionProps {
  currentLang: SupportedLanguage;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { primaryVenue } = weddingData;
  const { isDark } = useTheme();

  return (
    <section id="venue" className="relative py-20 px-4 max-w-6xl mx-auto transition-colors duration-500">
      {/* Header */}
      <div className="text-center mb-12">
        <p
          className={`text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase mb-1 ${
            isDark ? 'text-gold-400' : 'text-gold-700'
          }`}
        >
          {t.venueTitle}
        </p>
        <h2
          className={`font-serif text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-md text-transparent bg-clip-text ${
            isDark
              ? 'bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
              : 'bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
          }`}
        >
          {primaryVenue.name[currentLang]}
        </h2>
        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Venue Information Card */}
        <div
          className={`relative p-8 sm:p-10 rounded-3xl border backdrop-blur-md text-center transition-all duration-300 ${
            isDark
              ? 'border-gold-400/40 bg-gradient-to-b from-[#35070E]/85 via-[#240409]/90 to-[#180206]/95 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
              : 'border-gold-400/60 bg-gradient-to-b from-[#FFFFFF]/98 via-[#FFFDF8]/98 to-[#FDF8EE]/98 shadow-[0_15px_40px_rgba(170,120,30,0.12)]'
          }`}
        >
          <CornerOrnament
            position="top-left"
            className={`absolute top-2.5 left-2.5 w-9 h-9 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />
          <CornerOrnament
            position="top-right"
            className={`absolute top-2.5 right-2.5 w-9 h-9 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />
          <CornerOrnament
            position="bottom-left"
            className={`absolute bottom-2.5 left-2.5 w-8 h-8 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />
          <CornerOrnament
            position="bottom-right"
            className={`absolute bottom-2.5 right-2.5 w-8 h-8 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />

          <span
            className={`inline-block px-3.5 py-1 rounded-full text-xs font-cinzel font-semibold tracking-widest uppercase mb-3 border ${
              isDark
                ? 'text-gold-300 bg-gold-500/10 border-gold-400/30'
                : 'text-[#7A4B1A] bg-[#FDF6E5] border-gold-500/50'
            }`}
          >
            {primaryVenue.city[currentLang]}
          </span>

          <h3
            className={`font-serif text-2xl sm:text-4xl font-bold mb-3 ${
              isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
            }`}
          >
            {primaryVenue.name[currentLang]}
          </h3>

          <div
            className={`flex items-center justify-center space-x-2.5 text-sm sm:text-base font-serif mb-4 max-w-lg mx-auto ${
              isDark ? 'text-ivory-200/90' : 'text-[#472E33]'
            }`}
          >
            <MapPin className={`w-5 h-5 shrink-0 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
            <p className="leading-relaxed">{primaryVenue.address[currentLang]}</p>
          </div>

          <p
            className={`text-xs sm:text-sm font-cormorant italic leading-relaxed mb-6 border-t pt-4 max-w-md mx-auto ${
              isDark
                ? 'text-ivory-300/80 border-gold-500/15'
                : 'text-[#6B4E32] border-gold-500/25'
            }`}
          >
            {t.venueDirectionsInfo}
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            <a
              href={primaryVenue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-8 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-maroon-950 font-serif text-sm font-bold tracking-wider uppercase hover:shadow-[0_6px_25px_rgba(212,175,55,0.4)] transition-all cursor-pointer transform hover:scale-[1.02] active:scale-95"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.openMapBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
