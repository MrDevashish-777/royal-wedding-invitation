import React from 'react';
import { Heart, Music, Sparkles } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { CornerOrnament, GoldFiligreeDivider } from './Motifs';

interface CoupleStoryProps {
  currentLang: SupportedLanguage;
}

export const CoupleStory: React.FC<CoupleStoryProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { bride, groom } = weddingData.couple;

  return (
    <section id="couple" className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <p className="text-xs sm:text-sm font-cinzel text-gold-400 tracking-[0.25em] uppercase mb-1">
          {t.coupleTitle}
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400 drop-shadow-md">
          {t.coupleSubtitle}
        </h2>
        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />
      </div>

      {/* Bride & Groom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-20">
        {/* Bride Card */}
        <div className="relative group p-6 sm:p-8 rounded-3xl border border-gold-400/40 bg-gradient-to-b from-[#35070E]/80 via-[#240409]/90 to-[#180206]/95 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-center transition-all duration-300 hover:border-gold-300">
          <CornerOrnament position="top-left" className="absolute top-2 left-2 w-8 h-8 text-gold-400/60" />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 w-8 h-8 text-gold-400/60" />

          {/* Photo Frame with Royal Border */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto mb-6 rounded-full p-2 border-2 border-gold-400/80 bg-gradient-to-br from-gold-300 via-maroon-900 to-gold-500 shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            <img
              src={bride.photo}
              alt={bride.fullName[currentLang]}
              className="w-full h-full object-cover rounded-full filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-cinzel font-semibold tracking-widest text-gold-300 bg-gold-500/10 border border-gold-400/30 uppercase mb-2">
            {bride.title[currentLang]}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50 tracking-wide mb-1">
            {bride.fullName[currentLang]}
          </h3>
          <p className="text-xs sm:text-sm text-gold-200/80 font-serif italic mb-3">
            {bride.parents[currentLang]}
          </p>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-cormorant leading-relaxed px-2">
            "{bride.bio[currentLang]}"
          </p>
        </div>

        {/* Groom Card */}
        <div className="relative group p-6 sm:p-8 rounded-3xl border border-gold-400/40 bg-gradient-to-b from-[#35070E]/80 via-[#240409]/90 to-[#180206]/95 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-center transition-all duration-300 hover:border-gold-300">
          <CornerOrnament position="top-left" className="absolute top-2 left-2 w-8 h-8 text-gold-400/60" />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 w-8 h-8 text-gold-400/60" />

          {/* Photo Frame with Royal Border */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto mb-6 rounded-full p-2 border-2 border-gold-400/80 bg-gradient-to-br from-gold-300 via-maroon-900 to-gold-500 shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            <img
              src={groom.photo}
              alt={groom.fullName[currentLang]}
              className="w-full h-full object-cover rounded-full filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-cinzel font-semibold tracking-widest text-gold-300 bg-gold-500/10 border border-gold-400/30 uppercase mb-2">
            {groom.title[currentLang]}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50 tracking-wide mb-1">
            {groom.fullName[currentLang]}
          </h3>
          <p className="text-xs sm:text-sm text-gold-200/80 font-serif italic mb-3">
            {groom.parents[currentLang]}
          </p>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-cormorant leading-relaxed px-2">
            "{groom.bio[currentLang]}"
          </p>
        </div>
      </div>

      {/* Love Story Timeline */}
      <div id="story" className="max-w-3xl mx-auto pt-6">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-cinzel text-gold-400 tracking-[0.25em] uppercase mb-1">
            {t.ourStoryTitle}
          </p>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-ivory-100">
            {t.ourStorySubtitle}
          </h3>
          <GoldFiligreeDivider className="max-w-xs mx-auto my-3" />
        </div>

        <div className="relative border-l-2 border-gold-500/40 ml-4 sm:ml-32 space-y-10 py-4">
          {weddingData.story.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Year badge on the left for desktop */}
              <div className="sm:absolute sm:-left-32 sm:top-0 sm:w-24 sm:text-right hidden sm:block">
                <span className="font-cinzel text-base font-bold text-gold-300">
                  {item.year}
                </span>
              </div>

              {/* Glowing Node on Timeline */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 border-gold-400 bg-maroon-900 flex items-center justify-center text-gold-300 shadow-md group-hover:scale-110 transition-transform">
                {idx === 0 ? (
                  <Music className="w-3.5 h-3.5 text-gold-300" />
                ) : idx === 1 ? (
                  <Heart className="w-3.5 h-3.5 text-gold-300" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                )}
              </div>

              {/* Content Box */}
              <div className="p-5 rounded-2xl border border-gold-400/30 bg-maroon-950/70 backdrop-blur-sm shadow-md transition-all group-hover:border-gold-300">
                <span className="sm:hidden inline-block text-xs font-cinzel font-bold text-gold-400 mb-1">
                  {item.year}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-gold-200 mb-1.5">
                  {item.title[currentLang]}
                </h4>
                <p className="text-xs sm:text-sm text-ivory-200/85 font-cormorant leading-relaxed">
                  {item.description[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
