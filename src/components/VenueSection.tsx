import React from 'react';
import { MapPin, Navigation, Car, Phone } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { GoldFiligreeDivider, CornerOrnament } from './Motifs';

interface VenueSectionProps {
  currentLang: SupportedLanguage;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ currentLang }) => {
  const t = weddingData.translations[currentLang];
  const { primaryVenue, contactNumber } = weddingData;

  return (
    <section id="venue" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs sm:text-sm font-cinzel text-gold-400 tracking-[0.25em] uppercase mb-1">
          {t.venueTitle}
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400 drop-shadow-md">
          {primaryVenue.name[currentLang]}
        </h2>
        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Venue Information Card */}
        <div className="lg:col-span-5 relative p-6 sm:p-8 rounded-3xl border border-gold-400/40 bg-gradient-to-b from-[#35070E]/85 via-[#240409]/90 to-[#180206]/95 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <CornerOrnament position="top-left" className="absolute top-2 left-2 w-8 h-8 text-gold-400/60" />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 w-8 h-8 text-gold-400/60" />

          <span className="inline-block px-3 py-1 rounded-full text-xs font-cinzel font-semibold tracking-widest text-gold-300 bg-gold-500/10 border border-gold-400/30 uppercase mb-3">
            {primaryVenue.city[currentLang]}
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50 mb-3">
            {primaryVenue.name[currentLang]}
          </h3>

          <div className="flex items-start space-x-3 text-sm text-ivory-200/90 font-serif mb-4">
            <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{primaryVenue.address[currentLang]}</p>
          </div>

          <p className="text-xs sm:text-sm text-ivory-300/80 font-cormorant italic leading-relaxed mb-6 border-t border-gold-500/15 pt-3">
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

            <div className="flex items-center justify-between text-xs text-gold-300/80 pt-2 px-1">
              <span className="flex items-center space-x-1.5">
                <Car className="w-3.5 h-3.5 text-gold-400" />
                <span>Valet Parking Available</span>
              </span>
              <a
                href={`tel:${contactNumber}`}
                className="flex items-center space-x-1.5 hover:text-gold-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Helpdesk: {contactNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Google Maps / Visual Map Window */}
        <div className="lg:col-span-7 h-80 sm:h-96 rounded-3xl border-2 border-gold-400/60 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.7)] relative bg-maroon-950">
          {primaryVenue.embedMapUrl ? (
            <iframe
              src={primaryVenue.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Google Maps Location"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-maroon-900 to-maroon-950">
              <MapPin className="w-12 h-12 text-gold-400 mb-2 animate-bounce" />
              <p className="font-serif text-lg text-ivory-100 font-bold">
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
