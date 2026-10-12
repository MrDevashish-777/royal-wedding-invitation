import React from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { VinayagarMotif, GoldFiligreeDivider, CornerOrnament, KuthuvilakkuLamp } from './Motifs';

interface HeroSectionProps {
  currentLang: SupportedLanguage;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { bride, groom } = weddingData.couple;
  const { isDark } = useTheme();

  const scrollToEvents = () => {
    document.querySelector('#ceremonies')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDate = () => {
    document.querySelector('#date')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden transition-colors duration-500"
    >
      {/* Rich Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${isDark ? '/assets/art/first-section-bg.png' : '/assets/art/first-section-bg.png'}')`,
          filter: isDark ? 'brightness(0.35) contrast(1.1)' : 'brightness(0.9) contrast(0.95)',
        }}
      />
      {/* Dynamic Veils */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isDark
            ? 'bg-gradient-to-b from-[#2A040B]/90 via-[#3B0810]/75 to-[#1F0407]/95'
            : 'bg-gradient-to-b from-[#FAF6EE]/92 via-[#F6EEDB]/85 to-[#EFE3C8]/95'
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_0%,#1F0407_80%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_0%,#FAF6EE_80%)]'
        }`}
      />

      {/* Flanking Kuthuvilakku Brass Diya Lamps */}
      <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 lg:opacity-75 hidden md:block">
        <KuthuvilakkuLamp
          className={`w-12 h-36 lg:w-16 lg:h-48 ${
            isDark
              ? 'text-gold-400 drop-shadow-[0_0_20px_rgba(212,175,55,0.7)]'
              : 'text-gold-600 drop-shadow-[0_0_15px_rgba(180,130,40,0.5)]'
          }`}
        />
      </div>
      <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 lg:opacity-75 hidden md:block">
        <KuthuvilakkuLamp
          className={`w-12 h-36 lg:w-16 lg:h-48 ${
            isDark
              ? 'text-gold-400 drop-shadow-[0_0_20px_rgba(212,175,55,0.7)]'
              : 'text-gold-600 drop-shadow-[0_0_15px_rgba(180,130,40,0.5)]'
          }`}
        />
      </div>

      {/* Central Royal Hero Card */}
      <div
        className={`relative z-10 w-full max-w-3xl mx-auto p-6 sm:p-12 rounded-3xl border backdrop-blur-md text-center transition-all duration-500 ${
          isDark
            ? 'border-gold-400/40 bg-gradient-to-b from-[#35070E]/85 via-[#250409]/90 to-[#190206]/95 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.15)]'
            : 'border-gold-500/60 bg-gradient-to-b from-[#FFFFFF]/95 via-[#FFFDF8]/95 to-[#FBF6EC]/98 shadow-[0_20px_50px_rgba(170,120,30,0.15),inset_0_1px_3px_rgba(255,255,255,0.8)]'
        }`}
      >
        {/* Ornaments in corners */}
        <CornerOrnament
          position="top-left"
          className={`absolute top-2.5 left-2.5 w-10 h-10 ${isDark ? 'text-gold-400/70' : 'text-gold-600/80'}`}
        />
        <CornerOrnament
          position="top-right"
          className={`absolute top-2.5 right-2.5 w-10 h-10 ${isDark ? 'text-gold-400/70' : 'text-gold-600/80'}`}
        />
        <CornerOrnament
          position="bottom-left"
          className={`absolute bottom-2.5 left-2.5 w-10 h-10 ${isDark ? 'text-gold-400/70' : 'text-gold-600/80'}`}
        />
        <CornerOrnament
          position="bottom-right"
          className={`absolute bottom-2.5 right-2.5 w-10 h-10 ${isDark ? 'text-gold-400/70' : 'text-gold-600/80'}`}
        />

        {/* Auspicious Vinayagar Invocation */}
        <div className="flex flex-col items-center mb-3">
          <VinayagarMotif
            className={`w-12 h-12 mb-1 ${
              isDark
                ? 'text-gold-300 drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]'
                : 'text-gold-600 drop-shadow-[0_0_12px_rgba(180,130,40,0.4)]'
            }`}
          />
          <p
            className={`text-xs sm:text-sm tracking-[0.25em] font-cinzel uppercase font-semibold ${
              isDark ? 'text-gold-300' : 'text-gold-700'
            }`}
          >
            {t.auspiciousInvocation}
          </p>
          <p
            className={`text-xs font-tamil tracking-wider mt-0.5 ${
              isDark ? 'text-gold-200/90' : 'text-gold-800'
            }`}
          >
            {t.tamilInvocation}
          </p>
        </div>

        {/* Sacred Shloka Box */}
        <div
          className={`max-w-xl mx-auto my-3 px-4 py-2.5 rounded-xl border transition-colors ${
            isDark
              ? 'bg-maroon-950/60 border-gold-500/20'
              : 'bg-[#FDF7E7] border-gold-400/50 shadow-inner'
          }`}
        >
          <p
            className={`text-xs sm:text-sm font-tamil tracking-wide leading-relaxed italic ${
              isDark ? 'text-gold-200/90' : 'text-[#6B1124]'
            }`}
          >
            "{t.sacredShloka}"
          </p>
          <p
            className={`text-[11px] sm:text-xs font-serif mt-1 font-light italic ${
              isDark ? 'text-ivory-300/70' : 'text-[#6B4E32]'
            }`}
          >
            {t.sacredShlokaMeaning}
          </p>
        </div>

        <GoldFiligreeDivider className="my-3" />

        {/* Real Couple Portrait Medallion of Kavya & Yogesh */}
        <div className="relative my-3 inline-block">
          <div
            className={`w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1.5 border-2 shadow-lg ${
              isDark
                ? 'border-gold-400 bg-gradient-to-tr from-gold-300 via-maroon-900 to-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.4)]'
                : 'border-gold-500 bg-gradient-to-tr from-gold-200 via-[#FFFDF8] to-gold-400 shadow-[0_0_25px_rgba(180,130,40,0.25)]'
            }`}
          >
            <img
              src="/assets/images/couple-together.jpg"
              alt="V. Yogesh Mudaliar and Kanagalakshmi Natarajan"
              className="w-full h-full object-cover object-[center_35%] rounded-full filter brightness-100 contrast-105"
            />
          </div>
          <span
            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-cinzel font-bold tracking-widest uppercase border shadow-md ${
              isDark
                ? 'text-gold-200 bg-maroon-950 border-gold-400/50'
                : 'text-maroon-950 bg-[#FBF3DC] border-gold-500/70'
            }`}
          >
            Y & K
          </span>
        </div>

        {/* Invitation lead text */}
        <p
          className={`text-xs sm:text-sm font-cinzel tracking-[0.2em] uppercase mb-3 mt-3 ${
            isDark ? 'text-ivory-200/90' : 'text-[#5A2C35]'
          }`}
        >
          {t.togetherWithFamilies}
        </p>

        {/* Main Focus: Couple Names - Groom on Top */}
        <div className="my-3 sm:my-5">
          <h2
            className={`font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-md leading-tight ${
              isDark
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
            }`}
          >
            {groom.name[currentLang]}
          </h2>
          {groom.education && (
            <p
              className={`text-xs sm:text-sm font-cinzel tracking-wider uppercase font-semibold mt-1 ${
                isDark ? 'text-gold-300/90' : 'text-[#8C162E]'
              }`}
            >
              {groom.education[currentLang]} &bull; {groom.profession?.[currentLang]}
            </p>
          )}
          <p
            className={`text-xs sm:text-sm font-serif italic mt-1 mb-2 font-medium ${
              isDark ? 'text-gold-200/90' : 'text-[#7A4B1A]'
            }`}
          >
            {groom.parents[currentLang]}
          </p>

          {/* Ornamental Ampersand */}
          <div className="flex items-center justify-center my-2">
            <span
              className={`h-[1px] w-16 bg-gradient-to-r from-transparent ${
                isDark ? 'to-gold-400/80' : 'to-gold-600/80'
              }`}
            />
            <span
              className={`font-script text-4xl sm:text-5xl px-4 select-none ${
                isDark ? 'text-gold-300' : 'text-gold-600'
              }`}
            >
              &
            </span>
            <span
              className={`h-[1px] w-16 bg-gradient-to-l from-transparent ${
                isDark ? 'to-gold-400/80' : 'to-gold-600/80'
              }`}
            />
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-md leading-tight ${
              isDark
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
            }`}
          >
            {bride.name[currentLang]}
          </h2>
          {bride.education && (
            <p
              className={`text-xs sm:text-sm font-cinzel tracking-wider uppercase font-semibold mt-1 ${
                isDark ? 'text-gold-300/90' : 'text-[#8C162E]'
              }`}
            >
              {bride.education[currentLang]}
            </p>
          )}
          <p
            className={`text-xs sm:text-sm font-serif italic mt-1 font-medium ${
              isDark ? 'text-gold-200/90' : 'text-[#7A4B1A]'
            }`}
          >
            {bride.parents[currentLang]}
          </p>
        </div>

        <GoldFiligreeDivider className="my-3" />

        {/* Auspicious Muhurtham Date & Venue Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-5 font-serif">
          <div
            className={`flex items-center space-x-2 ${
              isDark ? 'text-gold-200' : 'text-[#660C1E]'
            }`}
          >
            <Calendar className={`w-5 h-5 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
            <span className="text-sm sm:text-base font-semibold tracking-wide">
              {weddingData.muhurthamTimeFormatted[currentLang]}
            </span>
          </div>

          <div
            className={`hidden sm:block w-1.5 h-1.5 rounded-full ${
              isDark ? 'bg-gold-400' : 'bg-gold-600'
            }`}
          />

          <div
            className={`flex items-center space-x-2 ${
              isDark ? 'text-gold-200' : 'text-[#660C1E]'
            }`}
          >
            <MapPin className={`w-5 h-5 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
            <span className="text-sm sm:text-base font-semibold tracking-wide">
              {weddingData.primaryVenue.city[currentLang]}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollToEvents}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-maroon-950 font-serif font-bold text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            {t.exploreEventsBtn}
          </button>

          <button
            onClick={scrollToDate}
            className={`px-6 py-3 rounded-full border font-serif text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              isDark
                ? 'border-gold-400/80 bg-maroon-950/60 text-gold-200 hover:bg-gold-500/15 hover:text-gold-100'
                : 'border-gold-500 bg-[#FFFDF8] text-[#5C0617] hover:bg-[#FDF6E2] shadow-sm font-semibold'
            }`}
          >
            {t.saveTheDateBtn}
          </button>
        </div>
      </div>

      {/* Gentle Scroll Down Indicator */}
      <button
        onClick={scrollToDate}
        className={`mt-8 z-10 flex flex-col items-center transition-colors cursor-pointer group ${
          isDark ? 'text-gold-300/80 hover:text-gold-200' : 'text-gold-700/80 hover:text-gold-900'
        }`}
        aria-label="Scroll to wedding date"
      >
        <span className="text-[11px] font-cinzel tracking-widest uppercase mb-1">
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-gold-600" />
      </button>
    </section>
  );
};
