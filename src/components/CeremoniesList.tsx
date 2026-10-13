import React, { useState } from 'react';
import { Clock, MapPin, Navigation, CalendarPlus, Check, Sparkles, Utensils, Phone, Car } from 'lucide-react';
import { SupportedLanguage, CeremonyEvent } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { downloadIcsFile } from '../utils/calendar';
import { GoldFiligreeDivider, ThaliMotif, CornerOrnament } from './Motifs';

interface CeremoniesListProps {
  currentLang: SupportedLanguage;
}

export const CeremoniesList: React.FC<CeremoniesListProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { isDark } = useTheme();
  const { primaryVenue, contactNumber } = weddingData;
  const coupleNames = `${weddingData.couple.groom.name[currentLang]} & ${weddingData.couple.bride.name[currentLang]}`;
  const [calendarAddedId, setCalendarAddedId] = useState<string | null>(null);

  const handleAddToCalendar = (e: React.MouseEvent, event: CeremonyEvent) => {
    e.stopPropagation();
    downloadIcsFile(event, currentLang, coupleNames);
    setCalendarAddedId(event.id);
    setTimeout(() => setCalendarAddedId(null), 2500);
  };

  const receptionEvent = weddingData.events.find((ev) => ev.id === 'reception');
  const muhurthamEvent = weddingData.events.find((ev) => ev.id === 'muhurtham');
  const feastEvent = weddingData.events.find((ev) => ev.id === 'kalyana-virundhu');

  const monthLabel = currentLang === 'ta' ? 'நவ' : currentLang === 'hi' ? 'नव' : 'NOV';
  const sundayLabel = currentLang === 'ta' ? 'ஞாயிறு' : currentLang === 'hi' ? 'रविवार' : 'SUNDAY';
  const mondayLabel = currentLang === 'ta' ? 'திங்கள்' : currentLang === 'hi' ? 'सोमवार' : 'MONDAY';

  return (
    <section id="ceremonies" className="relative py-14 sm:py-20 px-4 max-w-4xl mx-auto transition-colors duration-500">
      {/* Section Header: Clean & Concise matching reference design */}
      <div className="text-center mb-8 sm:mb-10 max-w-xl mx-auto">
        <div className="flex justify-center mb-2">
          <ThaliMotif
            className={`w-10 h-10 ${
              isDark
                ? 'text-gold-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                : 'text-gold-600 drop-shadow-[0_0_10px_rgba(180,130,40,0.3)]'
            }`}
          />
        </div>

        <p
          className={`text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase font-semibold mb-1 ${
            isDark ? 'text-gold-400' : 'text-gold-700'
          }`}
        >
          {currentLang === 'ta' ? 'சுப திருமண வைபவங்கள்' : currentLang === 'hi' ? 'शुभ वैवाहिक कार्यक्रम' : 'THE WEDDING'}
        </p>
        <h2
          className={`font-serif text-2xl sm:text-4xl font-bold tracking-tight drop-shadow-md text-transparent bg-clip-text mb-2 ${
            isDark
              ? 'bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
              : 'bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
          }`}
        >
          {t.ceremoniesTitle}
        </h2>
        <p
          className={`text-xs sm:text-sm font-cormorant italic max-w-md mx-auto leading-relaxed ${
            isDark ? 'text-ivory-200/80' : 'text-[#5C3A40]'
          }`}
        >
          {t.ceremoniesSubtitle}
        </p>

        {/* Location Eyebrow */}
        <div className="mt-3 flex items-center justify-center space-x-1.5">
          <span
            className={`text-[10px] font-cinzel uppercase tracking-[0.2em] ${
              isDark ? 'text-gold-400/80' : 'text-gold-800'
            }`}
          >
            {currentLang === 'ta' ? 'இடம்:' : currentLang === 'hi' ? 'स्थान:' : 'LOCATION:'}
          </span>
          <span
            className={`font-serif text-xs sm:text-sm font-bold ${
              isDark ? 'text-ivory-100' : 'text-[#660C1E]'
            }`}
          >
            {primaryVenue.city[currentLang]}
          </span>
        </div>

        <GoldFiligreeDivider className="max-w-xs mx-auto my-3" />
      </div>

      {/* MOBILE-FIRST COMPACT CALENDAR SCHEDULE (Inspired by reference photo) */}
      <div className="max-w-xl mx-auto space-y-4">
        {/* DATE BLOCK 1: Sunday, 29 NOV 2026 */}
        {receptionEvent && (
          <div
            className={`relative rounded-2xl border p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 flex items-stretch gap-3.5 sm:gap-4 shadow-sm hover:shadow-md ${
              isDark
                ? 'border-gold-500/30 bg-gradient-to-b from-[#3A0710]/85 to-[#240409]/90'
                : 'border-gold-400/60 bg-gradient-to-b from-[#FFFFFF]/98 via-[#FFFDF8]/98 to-[#FDF8EE]/98'
            }`}
          >
            {/* Left: Date Badge Box */}
            <div
              className={`w-16 sm:w-20 shrink-0 rounded-xl border flex flex-col items-center justify-center p-2 text-center select-none ${
                isDark
                  ? 'border-gold-400/40 bg-[#250308]/90 text-gold-300 shadow-inner'
                  : 'border-gold-500/50 bg-[#FDF5E2] text-[#6B1124] shadow-inner'
              }`}
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold leading-none">29</span>
              <span className="font-cinzel text-[10px] font-bold tracking-widest uppercase mt-0.5">
                {monthLabel}
              </span>
              <span
                className={`text-[9px] font-cinzel tracking-wider uppercase mt-0.5 opacity-80 ${
                  isDark ? 'text-gold-200' : 'text-[#8A1528]'
                }`}
              >
                {sundayLabel}
              </span>
            </div>

            {/* Right: Event Info */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`p-1.5 rounded-lg shrink-0 ${
                      isDark ? 'bg-gold-500/10 text-gold-300' : 'bg-[#FAF0D5] text-[#8A1528]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3
                      className={`font-serif text-sm sm:text-base font-bold tracking-wide leading-snug ${
                        isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
                      }`}
                    >
                      {receptionEvent.name[currentLang]}
                    </h3>
                    <p
                      className={`text-[11px] sm:text-xs font-cormorant italic ${
                        isDark ? 'text-gold-200/80' : 'text-[#7A4B1A]'
                      }`}
                    >
                      {receptionEvent.subtitle?.[currentLang]}
                    </p>
                  </div>
                </div>

                {/* Add to Calendar Icon Button */}
                <button
                  onClick={(e) => handleAddToCalendar(e, receptionEvent)}
                  className={`p-1.5 rounded-lg border transition-all text-xs shrink-0 cursor-pointer ${
                    calendarAddedId === receptionEvent.id
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : isDark
                      ? 'border-gold-500/30 text-gold-300 hover:bg-gold-500/15'
                      : 'border-gold-400/60 text-[#7A4B1A] hover:bg-[#FDF3D8]'
                  }`}
                  title={t.addToCalendarBtn}
                  aria-label={t.addToCalendarBtn}
                >
                  {calendarAddedId === receptionEvent.id ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <CalendarPlus className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Time */}
              <div
                className={`flex items-center space-x-1.5 text-xs font-serif font-semibold mt-2 ${
                  isDark ? 'text-gold-300' : 'text-[#7A1D2E]'
                }`}
              >
                <Clock className="w-3.5 h-3.5 shrink-0 opacity-80" />
                <span>{receptionEvent.time[currentLang]}</span>
              </div>
            </div>
          </div>
        )}

        {/* DATE BLOCK 2: Monday, 30 NOV 2026 */}
        {(muhurthamEvent || feastEvent) && (
          <div
            className={`relative rounded-2xl border p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 flex items-stretch gap-3.5 sm:gap-4 shadow-sm hover:shadow-md ${
              isDark
                ? 'border-gold-400/50 bg-gradient-to-b from-[#3F0812]/90 to-[#27050A]/95 ring-1 ring-gold-400/20'
                : 'border-gold-500/70 bg-gradient-to-b from-[#FFFFFF]/98 via-[#FFFDF8]/98 to-[#FDF7E7]/98 ring-1 ring-gold-500/30'
            }`}
          >
            {/* Left: Date Badge Box */}
            <div
              className={`w-16 sm:w-20 shrink-0 rounded-xl border flex flex-col items-center justify-center p-2 text-center select-none ${
                isDark
                  ? 'border-gold-400/60 bg-[#2C050D] text-gold-200 shadow-inner'
                  : 'border-gold-500/70 bg-[#FDF0D0] text-[#6B1124] shadow-inner'
              }`}
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold leading-none">30</span>
              <span className="font-cinzel text-[10px] font-bold tracking-widest uppercase mt-0.5">
                {monthLabel}
              </span>
              <span
                className={`text-[9px] font-cinzel tracking-wider uppercase mt-0.5 font-semibold ${
                  isDark ? 'text-gold-300' : 'text-[#8A1528]'
                }`}
              >
                {mondayLabel}
              </span>
            </div>

            {/* Right: Stack of Monday Events */}
            <div className="flex-1 min-w-0 flex flex-col justify-center space-y-3">
              {/* Event 1: Subha Muhurtham */}
              {muhurthamEvent && (
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-1.5 rounded-lg shrink-0 ${
                          isDark ? 'bg-gold-500/20 text-gold-200' : 'bg-[#F9E8BD] text-[#7A1D2E]'
                        }`}
                      >
                        <ThaliMotif className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3
                            className={`font-serif text-sm sm:text-base font-bold tracking-wide leading-snug ${
                              isDark ? 'text-gold-100' : 'text-[#4A0E17]'
                            }`}
                          >
                            {muhurthamEvent.name[currentLang]}
                          </h3>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-cinzel font-bold tracking-wider uppercase bg-gold-500/20 text-gold-700 dark:text-gold-300 border border-gold-400/30">
                            Lagnam
                          </span>
                        </div>
                        <p
                          className={`text-[11px] sm:text-xs font-cormorant italic ${
                            isDark ? 'text-gold-200/80' : 'text-[#7A4B1A]'
                          }`}
                        >
                          {muhurthamEvent.subtitle?.[currentLang]}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleAddToCalendar(e, muhurthamEvent)}
                      className={`p-1.5 rounded-lg border transition-all text-xs shrink-0 cursor-pointer ${
                        calendarAddedId === muhurthamEvent.id
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : isDark
                          ? 'border-gold-500/30 text-gold-300 hover:bg-gold-500/15'
                          : 'border-gold-400/60 text-[#7A4B1A] hover:bg-[#FDF3D8]'
                      }`}
                      title={t.addToCalendarBtn}
                      aria-label={t.addToCalendarBtn}
                    >
                      {calendarAddedId === muhurthamEvent.id ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <CalendarPlus className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div
                    className={`flex items-center space-x-1.5 text-xs font-serif font-bold mt-1.5 ${
                      isDark ? 'text-gold-300' : 'text-[#8A1528]'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{muhurthamEvent.time[currentLang]}</span>
                  </div>
                </div>
              )}

              {/* Sub-divider */}
              <div className={`border-t ${isDark ? 'border-gold-500/15' : 'border-gold-400/30'}`} />

              {/* Event 2: Kalyana Virundhu */}
              {feastEvent && (
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-1.5 rounded-lg shrink-0 ${
                          isDark ? 'bg-gold-500/10 text-gold-300' : 'bg-[#FAF0D5] text-[#8A1528]'
                        }`}
                      >
                        <Utensils className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h3
                          className={`font-serif text-sm sm:text-base font-bold tracking-wide leading-snug ${
                            isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
                          }`}
                        >
                          {feastEvent.name[currentLang]}
                        </h3>
                        <p
                          className={`text-[11px] sm:text-xs font-cormorant italic ${
                            isDark ? 'text-gold-200/80' : 'text-[#7A4B1A]'
                          }`}
                        >
                          {feastEvent.subtitle?.[currentLang]}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleAddToCalendar(e, feastEvent)}
                      className={`p-1.5 rounded-lg border transition-all text-xs shrink-0 cursor-pointer ${
                        calendarAddedId === feastEvent.id
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : isDark
                          ? 'border-gold-500/30 text-gold-300 hover:bg-gold-500/15'
                          : 'border-gold-400/60 text-[#7A4B1A] hover:bg-[#FDF3D8]'
                      }`}
                      title={t.addToCalendarBtn}
                      aria-label={t.addToCalendarBtn}
                    >
                      {calendarAddedId === feastEvent.id ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <CalendarPlus className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div
                    className={`flex items-center space-x-1.5 text-xs font-serif font-semibold mt-1.5 ${
                      isDark ? 'text-gold-300' : 'text-[#7A1D2E]'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 shrink-0 opacity-80" />
                    <span>{feastEvent.time[currentLang]}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* UNIFIED WEDDING VENUE CARD (Directly below schedule, matching reference photo) */}
        <div
          id="venue"
          className={`relative rounded-3xl border-2 p-5 sm:p-7 text-center transition-all duration-300 shadow-md ${
            isDark
              ? 'border-gold-400/60 bg-gradient-to-b from-[#3E0913]/95 via-[#29050C]/95 to-[#160205]/98 shadow-[0_15px_40px_rgba(0,0,0,0.7)] ring-1 ring-gold-400/20'
              : 'border-gold-500/70 bg-gradient-to-b from-[#FFFFFF]/98 via-[#FFFDF8]/98 to-[#FDF4E2]/98 shadow-[0_15px_35px_rgba(180,130,40,0.15)] ring-1 ring-gold-500/30'
          }`}
        >
          <CornerOrnament
            position="top-left"
            className={`absolute top-2 left-2 w-7 h-7 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />
          <CornerOrnament
            position="top-right"
            className={`absolute top-2 right-2 w-7 h-7 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />

          <span
            className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-cinzel font-bold tracking-[0.2em] uppercase mb-2 border ${
              isDark
                ? 'text-gold-300 bg-gold-500/10 border-gold-400/30'
                : 'text-[#7A4B1A] bg-[#FDF6E5] border-gold-500/50'
            }`}
          >
            {currentLang === 'ta' ? 'திருமண மண்டபம்' : currentLang === 'hi' ? 'विवाह स्थल' : 'WEDDING VENUE'}
          </span>

          <h3
            className={`font-serif text-xl sm:text-2xl font-bold tracking-wide mb-2 ${
              isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
            }`}
          >
            {primaryVenue.name[currentLang]}
          </h3>

          <div
            className={`flex items-center justify-center space-x-1.5 text-xs sm:text-sm font-serif mb-5 max-w-md mx-auto ${
              isDark ? 'text-ivory-200/90' : 'text-[#5C3840]'
            }`}
          >
            <MapPin className={`w-4 h-4 shrink-0 ${isDark ? 'text-gold-400' : 'text-[#8A1528]'}`} />
            <p className="leading-relaxed">{primaryVenue.address[currentLang]}</p>
          </div>

          {/* Prominent GET DIRECTIONS Button (As highlighted in the reference photo) */}
          <a
            href={primaryVenue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm mx-auto inline-flex items-center justify-center space-x-2.5 py-3.5 px-6 rounded-full font-serif font-bold text-sm sm:text-base tracking-wider uppercase transition-all shadow-md transform hover:scale-[1.02] active:scale-95 cursor-pointer bg-gradient-to-r from-[#7A0D22] via-[#94152D] to-[#7A0D22] text-[#FFFDF8] hover:shadow-[0_6px_25px_rgba(122,13,34,0.4)] border border-gold-400/60"
          >
            <Navigation className="w-4 h-4 text-gold-300" />
            <span>{t.openMapBtn || 'Get Directions'}</span>
          </a>

          {/* Quick info strip below button */}
          <div
            className={`flex items-center justify-center space-x-4 text-[11px] sm:text-xs pt-4 border-t mt-4 flex-wrap gap-y-2 ${
              isDark ? 'border-gold-500/15 text-gold-300/80' : 'border-gold-500/25 text-[#7A4B1A]'
            }`}
          >
            <span className="flex items-center space-x-1">
              <Car className="w-3.5 h-3.5 opacity-80" />
              <span>A/c &amp; Parking</span>
            </span>
            <span className="opacity-40">•</span>
            <a
              href={`tel:${contactNumber}`}
              className={`flex items-center space-x-1 transition-colors ${
                isDark ? 'hover:text-gold-100' : 'hover:text-[#660C1E]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 opacity-80" />
              <span>Helpdesk: {contactNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
