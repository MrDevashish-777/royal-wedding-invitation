import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { VinayagarMotif } from './Motifs';

interface FooterProps {
  currentLang: SupportedLanguage;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { bride, groom } = weddingData.couple;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#170205] border-t border-gold-500/30 pt-16 pb-12 px-4 text-center overflow-hidden">
      {/* Decorative Gold Glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Lord Vinayagar motif */}
        <VinayagarMotif className="w-10 h-10 text-gold-400 mb-3 opacity-80" />

        <p className="font-script text-4xl sm:text-5xl text-gold-300 my-1">
          {t.seeYouThere}
        </p>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50 mt-2 mb-1">
          {bride.name[currentLang]} &amp; {groom.name[currentLang]}
        </h3>

        <p className="text-xs sm:text-sm font-cinzel text-gold-400 tracking-widest uppercase mb-4">
          {weddingData.muhurthamTimeFormatted[currentLang]}
        </p>

        <p className="text-xs sm:text-sm text-ivory-300/80 font-cormorant italic max-w-md mx-auto mb-8">
          "{t.footerThankYou}"
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full border border-gold-400/50 bg-maroon-950/80 text-gold-300 hover:text-gold-100 hover:bg-gold-500/20 shadow-md transition-all mb-8 group cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <div className="w-24 h-[1px] bg-gold-400/30 mb-6" />

        <div className="flex items-center space-x-1.5 text-xs text-ivory-300/60 font-serif">
          <span>{t.madeWithLove}</span>
          <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
        </div>
      </div>
    </footer>
  );
};
