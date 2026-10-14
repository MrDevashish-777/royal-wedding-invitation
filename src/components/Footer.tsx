import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { VinayagarMotif, SouthIndianTempleGopuram, SouthIndianTempleSkyline, GoldFiligreeDivider, KuthuvilakkuLamp } from './Motifs';
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

  const templeBlessingText = {
    ta: '|| திருக்கோவில் அருள் ஆசியுடன் சுபமங்களம் ||',
    hi: '|| पावन मंदिर एवं प्रभु कृपा से मंगलमय आशीर्वाद ||',
    en: '|| With Divine Temple Blessings & Eternal Grace ||',
  }[currentLang];

  return (
    <footer
      className={`relative pt-20 pb-12 px-4 text-center overflow-hidden border-t transition-colors duration-500 ${
        isDark
          ? 'bg-[#150205] border-gold-500/30'
          : 'bg-[#F5EDE0] border-gold-600/40 shadow-inner'
      }`}
    >
      {/* Decorative Gold & Amber Glow in background */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 blur-3xl pointer-events-none ${
          isDark ? 'bg-gold-500/10' : 'bg-gold-500/20'
        }`}
      />

      {/* Flanking Kuthuvilakku Brass Diya Lamps */}
      <div className="absolute left-6 lg:left-24 top-24 pointer-events-none opacity-40 lg:opacity-75 hidden sm:block">
        <KuthuvilakkuLamp
          className={`w-10 h-28 lg:w-12 lg:h-36 ${
            isDark ? 'text-gold-400 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'text-gold-600'
          }`}
        />
      </div>
      <div className="absolute right-6 lg:right-24 top-24 pointer-events-none opacity-40 lg:opacity-75 hidden sm:block">
        <KuthuvilakkuLamp
          className={`w-10 h-28 lg:w-12 lg:h-36 ${
            isDark ? 'text-gold-400 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'text-gold-600'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Lord Vinayagar motif */}
        <VinayagarMotif
          className={`w-10 h-10 mb-2 transition-colors ${
            isDark ? 'text-gold-400 opacity-80' : 'text-[#8A1528] opacity-90'
          }`}
        />

        {/* South Indian Temple Blessing Invocation */}
        <p
          className={`text-xs sm:text-sm font-cinzel font-bold tracking-[0.25em] uppercase mb-4 ${
            isDark ? 'text-gold-300' : 'text-[#8A1528]'
          }`}
        >
          {templeBlessingText}
        </p>

        {/* MAJESTIC SOUTH INDIAN TEMPLE GOPURAM (ராஜகோபுரம்) */}
        <div className="relative my-3 flex flex-col items-center group">
          {/* Subtle golden halo behind the Gopuram */}
          <div
            className={`absolute -inset-4 rounded-full blur-2xl pointer-events-none ${
              isDark ? 'bg-gold-500/20' : 'bg-gold-400/25'
            }`}
          />
          <SouthIndianTempleGopuram
            className={`relative w-44 h-56 sm:w-56 sm:h-72 transition-all duration-500 transform group-hover:scale-105 drop-shadow-md ${
              isDark ? 'text-[#8A1528]' : 'text-[#660C1E]'
            }`}
          />
          <p
            className={`text-[11px] sm:text-xs font-cinzel tracking-widest uppercase mt-2 font-semibold ${
              isDark ? 'text-gold-300/80' : 'text-[#8A1528]'
            }`}
          >
            {weddingData.primaryVenue.name[currentLang]}
          </p>
        </div>

        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />

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
          className={`text-sm sm:text-base md:text-lg font-serif font-bold tracking-wide mb-4 ${
            isDark ? 'text-gold-400' : 'text-[#966E22]'
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

        <a
          href="mailto:devashishpillay777@gmail.com?subject=Royal%20Wedding%20Invitation%20Website%20Inquiry"
          className={`group inline-flex items-center space-x-1.5 text-xs sm:text-sm font-serif transition-all duration-300 py-1.5 px-4 rounded-full border border-gold-400/20 hover:border-gold-400/50 shadow-xs cursor-pointer relative z-10 ${
            isDark
              ? 'text-ivory-300/80 hover:text-gold-200 bg-maroon-950/40 hover:bg-gold-500/10'
              : 'text-[#6A4E55] hover:text-[#7A1224] bg-[#FAF5EC]/80 hover:bg-[#F5EDDE]'
          }`}
          title="Contact T. Devashish Pillay (devashishpillay777@gmail.com)"
        >
          <span>Made with</span>
          <Heart
            className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-125 ${
              isDark ? 'text-gold-400 fill-gold-400' : 'text-[#8A1528] fill-[#8A1528]'
            }`}
          />
          <span>by</span>
          <span className="font-semibold underline underline-offset-4 decoration-gold-400/70 group-hover:decoration-current">
            T. Devashish Pillay
          </span>
        </a>
      </div>

      {/* PANORAMIC SOUTH INDIAN TEMPLE SKYLINE BANNER (Bottom Backdrop) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-20 sm:opacity-30 overflow-hidden">
        <SouthIndianTempleSkyline
          className={`w-full h-24 sm:h-28 transition-colors ${
            isDark ? 'text-gold-400' : 'text-[#8A1528]'
          }`}
        />
      </div>
    </footer>
  );
};
