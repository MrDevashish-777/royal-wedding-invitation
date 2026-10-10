import React from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { VinayagarMotif, GoldFiligreeDivider, CornerOrnament, KuthuvilakkuLamp } from './Motifs';

interface HeroSectionProps {
  currentLang: SupportedLanguage;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { bride, groom } = weddingData.couple;

  const scrollToEvents = () => {
    document.querySelector('#ceremonies')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDate = () => {
    document.querySelector('#date')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Rich Temple Background Overlay with Subtle Parallax & Warm Tone */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.38] contrast-[1.08] scale-105 pointer-events-none transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      {/* Royal Dark Maroon Gradient Veils */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A040B]/90 via-[#3B0810]/75 to-[#1F0407]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#1F0407_80%)]" />

      {/* Flanking Kuthuvilakku Brass Diya Lamps */}
      <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 lg:opacity-75 hidden md:block">
        <KuthuvilakkuLamp className="w-12 h-36 lg:w-16 lg:h-48 text-gold-400 drop-shadow-[0_0_20px_rgba(212,175,55,0.7)]" />
      </div>
      <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 lg:opacity-75 hidden md:block">
        <KuthuvilakkuLamp className="w-12 h-36 lg:w-16 lg:h-48 text-gold-400 drop-shadow-[0_0_20px_rgba(212,175,55,0.7)]" />
      </div>

      {/* Central Royal Hero Card */}
      <div className="relative z-10 w-full max-w-3xl mx-auto p-6 sm:p-12 rounded-3xl border border-gold-400/40 bg-gradient-to-b from-[#35070E]/85 via-[#250409]/90 to-[#190206]/95 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.15)] text-center">
        {/* Ornaments in corners */}
        <CornerOrnament position="top-left" className="absolute top-2.5 left-2.5 w-10 h-10 text-gold-400/70" />
        <CornerOrnament position="top-right" className="absolute top-2.5 right-2.5 w-10 h-10 text-gold-400/70" />
        <CornerOrnament position="bottom-left" className="absolute bottom-2.5 left-2.5 w-10 h-10 text-gold-400/70" />
        <CornerOrnament position="bottom-right" className="absolute bottom-2.5 right-2.5 w-10 h-10 text-gold-400/70" />

        {/* Auspicious Vinayagar Invocation */}
        <div className="flex flex-col items-center mb-4">
          <VinayagarMotif className="w-12 h-12 text-gold-300 drop-shadow-[0_0_15px_rgba(212,175,55,0.7)] mb-1" />
          <p className="text-gold-300 text-xs sm:text-sm tracking-[0.25em] font-cinzel uppercase font-semibold">
            {t.auspiciousInvocation}
          </p>
          <p className="text-gold-200/90 text-xs font-tamil tracking-wider mt-0.5">
            {t.tamilInvocation}
          </p>
        </div>

        {/* Sacred Shloka Box */}
        <div className="max-w-xl mx-auto my-3 px-4 py-2.5 rounded-xl bg-maroon-950/60 border border-gold-500/20">
          <p className="text-gold-200/90 text-xs sm:text-sm font-tamil tracking-wide leading-relaxed italic">
            "{t.sacredShloka}"
          </p>
          <p className="text-ivory-300/70 text-[11px] sm:text-xs font-serif mt-1 font-light italic">
            {t.sacredShlokaMeaning}
          </p>
        </div>

        <GoldFiligreeDivider className="my-4" />

        {/* Invitation lead text */}
        <p className="text-ivory-200/90 text-xs sm:text-sm font-cinzel tracking-[0.2em] uppercase mb-4">
          {t.togetherWithFamilies}
        </p>

        {/* Main Focus: Couple Names */}
        <div className="my-4 sm:my-6">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
            {bride.name[currentLang]}
          </h2>
          <p className="text-gold-200/80 text-xs sm:text-sm font-serif italic mt-1 mb-2">
            {bride.parents[currentLang]}
          </p>

          {/* Ornamental Ampersand */}
          <div className="flex items-center justify-center my-2">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400/80" />
            <span className="font-script text-4xl sm:text-5xl text-gold-300 px-4 select-none">
              &
            </span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400/80" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
            {groom.name[currentLang]}
          </h2>
          <p className="text-gold-200/80 text-xs sm:text-sm font-serif italic mt-1">
            {groom.parents[currentLang]}
          </p>
        </div>

        <GoldFiligreeDivider className="my-4" />

        {/* Auspicious Muhurtham Date & Venue Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-5 text-ivory-100 font-serif">
          <div className="flex items-center space-x-2 text-gold-200">
            <Calendar className="w-5 h-5 text-gold-400" />
            <span className="text-sm sm:text-base font-semibold tracking-wide">
              {weddingData.muhurthamTimeFormatted[currentLang]}
            </span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold-400" />

          <div className="flex items-center space-x-2 text-gold-200">
            <MapPin className="w-5 h-5 text-gold-400" />
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
            className="px-6 py-3 rounded-full border border-gold-400/80 bg-maroon-950/60 text-gold-200 font-serif text-sm tracking-wider uppercase hover:bg-gold-500/15 hover:text-gold-100 transition-all duration-300 cursor-pointer"
          >
            {t.saveTheDateBtn}
          </button>
        </div>
      </div>

      {/* Gentle Scroll Down Indicator */}
      <button
        onClick={scrollToDate}
        className="mt-8 z-10 flex flex-col items-center text-gold-300/80 hover:text-gold-200 transition-colors cursor-pointer group"
        aria-label="Scroll to wedding date"
      >
        <span className="text-[11px] font-cinzel tracking-widest uppercase mb-1">
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-gold-100" />
      </button>
    </section>
  );
};
