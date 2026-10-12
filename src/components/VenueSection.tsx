import React from 'react';
import { MapPin, Navigation, Car, Phone } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { GoldFiligreeDivider, CornerOrnament } from './Motifs';

interface VenueSectionProps {
  currentLang: SupportedLanguage;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { primaryVenue, contactNumber } = weddingData;
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Venue Information Card */}
        <div
          className={`lg:col-span-5 relative p-6 sm:p-8 rounded-3xl border backdrop-blur-md transition-all duration-300 ${
            isDark
              ? 'border-gold-400/40 bg-gradient-to-b from-[#35070E]/85 via-[#240409]/90 to-[#180206]/95 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
              : 'border-gold-400/60 bg-gradient-to-b from-[#FFFFFF]/98 via-[#FFFDF8]/98 to-[#FDF8EE]/98 shadow-[0_15px_40px_rgba(170,120,30,0.12)]'
          }`}
        >
          <CornerOrnament
            position="top-left"
            className={`absolute top-2 left-2 w-8 h-8 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />
          <CornerOrnament
            position="top-right"
            className={`absolute top-2 right-2 w-8 h-8 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />

          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-cinzel font-semibold tracking-widest uppercase mb-3 border ${
              isDark
                ? 'text-gold-300 bg-gold-500/10 border-gold-400/30'
                : 'text-[#7A4B1A] bg-[#FDF6E5] border-gold-500/50'
            }`}
          >
            {primaryVenue.city[currentLang]}
          </span>

          <h3
            className={`font-serif text-2xl sm:text-3xl font-bold mb-3 ${
              isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
            }`}
          >
            {primaryVenue.name[currentLang]}
          </h3>

          <div
            className={`flex items-start space-x-3 text-sm font-serif mb-4 ${
              isDark ? 'text-ivory-200/90' : 'text-[#472E33]'
            }`}
          >
            <MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
            <p className="leading-relaxed">{primaryVenue.address[currentLang]}</p>
          </div>

          <p
            className={`text-xs sm:text-sm font-cormorant italic leading-relaxed mb-6 border-t pt-3 ${
              isDark
                ? 'text-ivory-300/80 border-gold-500/15'
                : 'text-[#6B4E32] border-gold-500/25'
            }`}
          >
            {t.venueDirectionsInfo}
          </p>

          <div className="space-y-3">
            <a
              href={primaryVenue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-maroon-950 font-serif text-sm font-bold tracking-wider uppercase hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.openMapBtn}</span>
            </a>

            <div
              className={`flex items-center justify-between text-xs pt-2 px-1 ${
                isDark ? 'text-gold-300/80' : 'text-gold-800'
              }`}
            >
              <span className="flex items-center space-x-1.5">
                <Car className={`w-3.5 h-3.5 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
                <span>Valet Parking Available</span>
              </span>
              <a
                href={`tel:${contactNumber}`}
                className={`flex items-center space-x-1.5 transition-colors ${
                  isDark ? 'hover:text-gold-100' : 'hover:text-maroon-900 font-medium'
                }`}
              >
                <Phone className={`w-3.5 h-3.5 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
                <span>Helpdesk: {contactNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Google Maps / Visual Map Window */}
        <div
          className={`lg:col-span-7 h-80 sm:h-96 rounded-3xl border-2 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)] relative ${
            isDark ? 'border-gold-400/60 bg-maroon-950' : 'border-gold-500/70 bg-[#FFFDF8]'
          }`}
        >
          {primaryVenue.embedMapUrl ? (
            <iframe
              src={primaryVenue.embedMapUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: isDark ? 'contrast(1.05) brightness(0.95)' : 'contrast(1.0) brightness(1.0)',
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Google Maps Location"
            />
          ) : (
            <div
              className={`w-full h-full flex flex-col items-center justify-center p-6 text-center ${
                isDark
                  ? 'bg-gradient-to-br from-maroon-900 to-maroon-950'
                  : 'bg-gradient-to-br from-[#FFFDF8] to-[#FDF3D8]'
              }`}
            >
              <MapPin className="w-12 h-12 text-gold-500 mb-2 animate-bounce" />
              <p
                className={`font-serif text-lg font-bold ${
                  isDark ? 'text-ivory-100' : 'text-[#4A0E17]'
                }`}
              >
                {primaryVenue.name[currentLang]}
              </p>
              <a
                href={primaryVenue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2.5 rounded-full bg-gold-400 text-maroon-950 text-xs font-serif font-bold uppercase tracking-wider"
              >
                {t.openMapBtn}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
