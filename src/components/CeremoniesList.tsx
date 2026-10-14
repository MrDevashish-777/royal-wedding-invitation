import React from 'react';
import { Clock, MapPin, Navigation, CalendarPlus } from 'lucide-react';
import { SupportedLanguage, CeremonyEvent } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { downloadIcsFile } from '../utils/calendar';
import { GoldFiligreeDivider, ThaliMotif, KuthuvilakkuLamp } from './Motifs';

interface CeremoniesListProps {
  currentLang: SupportedLanguage;
}

export const CeremoniesList: React.FC<CeremoniesListProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { isDark } = useTheme();
  const coupleNames = `${weddingData.couple.groom.name[currentLang]} & ${weddingData.couple.bride.name[currentLang]}`;

  return (
    <section id="ceremonies" className="relative py-20 px-4 max-w-6xl mx-auto transition-colors duration-500">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p
          className={`text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase mb-1 ${
            isDark ? 'text-gold-400' : 'text-gold-700'
          }`}
        >
          {t.ceremoniesTitle}
        </p>
        <h2
          className={`font-serif text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-md text-transparent bg-clip-text ${
            isDark
              ? 'bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
              : 'bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
          }`}
        >
          {t.ceremoniesSubtitle}
        </h2>
        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />
      </div>

      {/* Grid of Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {weddingData.events.map((event: CeremonyEvent) => {
          const parts = event.date.split('-');
          const dayNumber = parts[2] || '30';
          const monthShort = 'NOV';
          const isMuhurtham = event.id === 'muhurtham';

          return (
            <article
              key={event.id}
              className={`relative rounded-3xl p-6 sm:p-8 pt-10 border transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? isMuhurtham
                    ? 'border-gold-300 bg-gradient-to-b from-[#4A0E17]/95 via-[#2E050D]/95 to-[#1E0308]/98 ring-2 ring-gold-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
                    : 'border-gold-400/40 bg-gradient-to-b from-[#35070E]/85 via-[#240409]/90 to-[#180206]/95 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
                  : isMuhurtham
                  ? 'border-gold-500 bg-gradient-to-b from-[#FFFDF6] via-[#FDF5E2] to-[#FBF0D2] ring-2 ring-gold-500/40 shadow-[0_20px_50px_rgba(180,130,40,0.18)]'
                  : 'border-gold-400/60 bg-gradient-to-b from-[#FFFFFF]/98 via-[#FFFDF8]/98 to-[#FDF8ED]/98 shadow-[0_15px_40px_rgba(170,120,30,0.12)]'
              }`}
            >
              {/* Metallic Calendar Spiral Rings at Top */}
              <div className="absolute -top-4 left-0 right-0 flex justify-center space-x-12 pointer-events-none">
                <span
                  className={`w-4 h-9 rounded-md border shadow-md transform -rotate-3 ${
                    isDark
                      ? 'bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 border-gray-600'
                      : 'bg-gradient-to-r from-amber-400 via-yellow-100 to-amber-600 border-amber-600/70'
                  }`}
                />
                <span
                  className={`w-4 h-9 rounded-md border shadow-md transform rotate-3 ${
                    isDark
                      ? 'bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 border-gray-600'
                      : 'bg-gradient-to-r from-amber-400 via-yellow-100 to-amber-600 border-amber-600/70'
                  }`}
                />
              </div>

              {/* Card Top: Date & Ceremony Badge */}
              <div>
                <div
                  className={`flex items-center justify-between border-b pb-4 mb-5 ${
                    isDark ? 'border-gold-500/20' : 'border-gold-500/30'
                  }`}
                >
                  {/* Calendar Date Block */}
                  <div className="flex items-center space-x-3.5 sm:space-x-4">
                    <div
                      className={`flex flex-col items-center justify-center w-16 h-20 sm:w-20 sm:h-22 rounded-2xl border shadow-inner shrink-0 ${
                        isDark
                          ? 'border-gold-400/60 bg-maroon-900/90'
                          : 'border-gold-400/80 bg-[#FDF3D8]'
                      }`}
                    >
                      <span
                        className={`font-serif text-3xl sm:text-4xl font-extrabold leading-none ${
                          isDark ? 'text-gold-300' : 'text-[#6B1124]'
                        }`}
                      >
                        {dayNumber}
                      </span>
                      <span
                        className={`text-xs font-cinzel font-bold tracking-wider mt-1.5 ${
                          isDark ? 'text-ivory-200' : 'text-gold-800'
                        }`}
                      >
                        {monthShort}
                      </span>
                    </div>

                    <div>
                      <p
                        className={`text-base sm:text-lg md:text-xl font-serif font-bold leading-snug ${
                          isDark ? 'text-gold-200' : 'text-[#660C1E]'
                        }`}
                      >
                        {event.dayName[currentLang]}
                      </p>
                      <div
                        className={`flex items-center space-x-2 text-sm sm:text-base font-serif font-semibold mt-1.5 ${
                          isDark ? 'text-ivory-100' : 'text-[#4A0814]'
                        }`}
                      >
                        <Clock className={`w-4 h-4 shrink-0 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
                        <span>{event.time[currentLang]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Motif Icon on Top Right */}
                  <div>
                    {isMuhurtham ? (
                      <ThaliMotif
                        className={`w-10 h-10 ${
                          isDark
                            ? 'drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] text-gold-300'
                            : 'drop-shadow-[0_0_8px_rgba(180,130,40,0.3)] text-gold-600'
                        }`}
                      />
                    ) : (
                      <KuthuvilakkuLamp
                        className={`w-6 h-12 ${isDark ? 'text-gold-400' : 'text-gold-600'}`}
                      />
                    )}
                  </div>
                </div>

                {/* Event Name & Subtitle */}
                <h3
                  className={`font-serif text-2xl sm:text-3xl font-bold mb-1 ${
                    isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
                  }`}
                >
                  {event.name[currentLang]}
                </h3>
                {event.subtitle && (
                  <p
                    className={`text-xs sm:text-sm font-cormorant italic mb-3 ${
                      isDark ? 'text-gold-300/90' : 'text-gold-700'
                    }`}
                  >
                    {event.subtitle[currentLang]}
                  </p>
                )}

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm font-cormorant leading-relaxed mb-5 ${
                    isDark ? 'text-ivory-200/85' : 'text-[#472E33]'
                  }`}
                >
                  {event.description[currentLang]}
                </p>

                {/* Venue Details */}
                <div
                  className={`space-y-1 text-xs sm:text-sm font-serif border-t pt-4 mb-6 ${
                    isDark
                      ? 'text-ivory-200/90 border-gold-500/15'
                      : 'text-[#3B1F24] border-gold-500/25'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
                    <div>
                      <p className={`font-bold ${isDark ? 'text-ivory-100' : 'text-[#4A0E17]'}`}>
                        {event.venueName[currentLang]}
                      </p>
                      <p className={isDark ? 'text-ivory-300/70' : 'text-[#5E4247]'}>
                        {event.venueAddress[currentLang]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Get Directions & Add to Calendar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border font-serif text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-gold-500/15 hover:bg-gold-500/25 border-gold-400/50 text-gold-200 hover:text-gold-100'
                      : 'bg-[#FFFDF8] hover:bg-[#FDF6E5] border-gold-500 text-[#5C0617] hover:text-[#4A0E17] shadow-sm'
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.openMapBtn}</span>
                </a>

                <button
                  onClick={() => downloadIcsFile(event, currentLang, coupleNames)}
                  className="inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 font-serif text-xs font-bold tracking-wider hover:brightness-110 shadow-md transition-all cursor-pointer"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>{t.addToCalendarBtn}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
