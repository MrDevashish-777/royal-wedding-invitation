import React from 'react';
import { Clock, MapPin, Navigation, CalendarPlus, Sparkles } from 'lucide-react';
import { SupportedLanguage, CeremonyEvent } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { downloadIcsFile } from '../utils/calendar';
import { GoldFiligreeDivider, ThaliMotif, KuthuvilakkuLamp } from './Motifs';

interface CeremoniesListProps {
  currentLang: SupportedLanguage;
}

export const CeremoniesList: React.FC<CeremoniesListProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const coupleNames = `${weddingData.couple.bride.name[currentLang]} & ${weddingData.couple.groom.name[currentLang]}`;

  return (
    <section id="ceremonies" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-xs sm:text-sm font-cinzel text-gold-400 tracking-[0.25em] uppercase mb-1">
          {t.ceremoniesTitle}
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400 drop-shadow-md">
          {t.ceremoniesSubtitle}
        </h2>
        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />
      </div>

      {/* Grid of Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {weddingData.events.map((event: CeremonyEvent) => {
          // Parse date parts for calendar look
          const dateObj = new Date(event.date);
          const dayNumber = dateObj.getDate() || '27';
          const monthShort = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase() || 'NOV';
          const isMuhurtham = event.id === 'muhurtham';

          return (
            <article
              key={event.id}
              className={`relative rounded-3xl p-6 sm:p-8 pt-10 border transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between ${
                isMuhurtham
                  ? 'border-gold-300 bg-gradient-to-b from-[#4A0E17]/95 via-[#2E050D]/95 to-[#1E0308]/98 ring-2 ring-gold-400/30'
                  : 'border-gold-400/40 bg-gradient-to-b from-[#35070E]/85 via-[#240409]/90 to-[#180206]/95'
              }`}
            >
              {/* Metallic Calendar Spiral Rings at Top (inspired by reference website) */}
              <div className="absolute -top-4 left-0 right-0 flex justify-center space-x-12 pointer-events-none">
                <span className="w-4 h-9 rounded-md bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 border border-gray-600 shadow-md transform -rotate-3" />
                <span className="w-4 h-9 rounded-md bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 border border-gray-600 shadow-md transform rotate-3" />
              </div>

              {/* Card Top: Date & Ceremony Badge */}
              <div>
                <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-5">
                  {/* Calendar Date Block */}
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col items-center justify-center w-14 h-16 rounded-xl border border-gold-400/60 bg-maroon-900/90 shadow-inner">
                      <span className="font-serif text-2xl font-bold text-gold-300 leading-none">
                        {dayNumber}
                      </span>
                      <span className="text-[10px] font-cinzel font-semibold text-ivory-200 tracking-wider">
                        {monthShort}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-serif font-medium text-gold-300">
                        {event.dayName[currentLang]}
                      </p>
                      <div className="flex items-center space-x-1.5 text-xs text-ivory-200/80 font-serif mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        <span>{event.time[currentLang]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Motif Icon on Top Right */}
                  <div className="text-gold-400">
                    {isMuhurtham ? (
                      <ThaliMotif className="w-10 h-10 drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
                    ) : (
                      <KuthuvilakkuLamp className="w-6 h-12" />
                    )}
                  </div>
                </div>

                {/* Event Name & Subtitle */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50 mb-1">
                  {event.name[currentLang]}
                </h3>
                {event.subtitle && (
                  <p className="text-xs sm:text-sm text-gold-300/90 font-cormorant italic mb-3">
                    {event.subtitle[currentLang]}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-ivory-200/85 font-cormorant leading-relaxed mb-5">
                  {event.description[currentLang]}
                </p>

                {/* Dress Code suggestion if supplied */}
                {event.dressCode && (
                  <div className="flex items-start space-x-2 text-xs text-gold-200/90 bg-gold-500/10 p-2.5 rounded-xl border border-gold-400/20 mb-5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-gold-300">{t.dressCodeLabel}</strong>{' '}
                      {event.dressCode[currentLang]}
                    </span>
                  </div>
                )}

                {/* Venue Details */}
                <div className="space-y-1 text-xs sm:text-sm text-ivory-200/90 font-serif border-t border-gold-500/15 pt-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-ivory-100">{event.venueName[currentLang]}</p>
                      <p className="text-ivory-300/70">{event.venueAddress[currentLang]}</p>
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
                  className="inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/50 text-gold-200 hover:text-gold-100 font-serif text-xs font-semibold tracking-wider transition-colors cursor-pointer"
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
