import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { VinayagarMotif } from './Motifs';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  currentLang: SupportedLanguage;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const { isDark } = useTheme();
  const t = weddingData.translations[currentLang];
  const { bride, groom } = weddingData.couple;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative pt-16 pb-12 px-4 text-center overflow-hidden border-t transition-colors duration-500 ${
        isDark
          ? 'bg-[#170205] border-gold-500/30'
          : 'bg-[#EFE5D5] border-gold-600/40 shadow-inner'
      }`}
    >
      {/* Decorative Gold Glow in background */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-3xl pointer-events-none ${
          isDark ? 'bg-gold-500/10' : 'bg-gold-500/20'
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Lord Vinayagar motif */}
        <VinayagarMotif
          className={`w-10 h-10 mb-3 transition-colors ${
            isDark ? 'text-gold-400 opacity-80' : 'text-[#8A1528] opacity-90'
          }`}
        />

        <p
          className={`font-script text-4xl sm:text-5xl my-1 ${
            isDark ? 'text-gold-300' : 'text-[#8A1528]'
          }`}
        >
          {t.seeYouThere}
        </p>

        <h3
          className={`font-serif text-2xl sm:text-3xl font-bold mt-2 mb-1 ${
            isDark ? 'text-ivory-50' : 'text-[#4A0814]'
          }`}
        >
          {groom.name[currentLang]} &amp; {bride.name[currentLang]}
        </h3>

        <p
          className={`text-xs sm:text-sm font-cinzel tracking-widest uppercase mb-4 ${
            isDark ? 'text-gold-400' : 'text-[#966E22] font-semibold'
          }`}
        >
          {weddingData.muhurthamTimeFormatted[currentLang]}
        </p>

        <p
          className={`text-xs sm:text-sm font-cormorant italic max-w-md mx-auto mb-8 ${
            isDark ? 'text-ivory-300/80' : 'text-[#5C3A40]'
          }`}
        >
          "{t.footerThankYou}"
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className={`p-3 rounded-full border shadow-md transition-all mb-8 group cursor-pointer ${
            isDark
              ? 'border-gold-400/50 bg-maroon-950/80 text-gold-300 hover:text-gold-100 hover:bg-gold-500/20'
              : 'border-gold-500/60 bg-[#FAF4E8] text-[#8A1528] hover:bg-[#E4D8C4] hover:text-[#5C0617]'
          }`}
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <div
          className={`w-24 h-[1px] mb-6 ${
            isDark ? 'bg-gold-400/30' : 'bg-gold-500/40'
          }`}
        />

        <div
          className={`flex items-center space-x-1.5 text-xs font-serif ${
            isDark ? 'text-ivory-300/60' : 'text-[#6A4E55]'
          }`}
        >
          <span>{t.madeWithLove}</span>
          <Heart
            className={`w-3.5 h-3.5 ${
              isDark ? 'text-gold-400 fill-gold-400' : 'text-[#8A1528] fill-[#8A1528]'
            }`}
          />
        </div>
      </div>
    </footer>
  );
};
