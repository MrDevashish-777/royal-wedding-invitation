import React from 'react';
import { Navigation, CalendarPlus, Clock, Sparkles, Utensils, Car, Phone } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { downloadIcsFile } from '../utils/calendar';
import { GoldFiligreeDivider, ThaliMotif } from './Motifs';

interface CeremoniesListProps {
  currentLang: SupportedLanguage;
}

export const CeremoniesList: React.FC<CeremoniesListProps> = ({ currentLang }) => {
  const { isDark } = useTheme();
  const { primaryVenue, contactNumber } = weddingData;
  const coupleNames = `${weddingData.couple.groom.name[currentLang]} & ${weddingData.couple.bride.name[currentLang]}`;

  const headerText = {
    en: {
      eyebrow: 'THE WEDDING',
      title: 'Join us as the celebrations begin and two hearts become one',
      location: 'Cheyyar, Tamil Nadu',
      venueTag: 'WEDDING VENUE',
      receptionName: 'Reception',
      receptionTime: '6:00 PM onwards',
      muhurthamName: 'Subha Muhurtham',
      muhurthamTime: '6:00 AM - 7:30 AM',
      muhurthamTag: 'Auspicious Muhurtham',
      feastName: 'Kalyana Virundhu',
      feastTime: '8:00 AM onwards',
      feastSub: 'Traditional Banana Leaf Feast',
      getDirections: 'Get Directions',
      addToCalendar: 'Add to Calendar',
      valet: 'Valet Parking Available',
      helpdesk: 'Helpdesk',
    },
    ta: {
      eyebrow: 'சுப திருமண வைபவங்கள்',
      title: 'மங்கல இசை முழங்க இரு உள்ளங்கள் இணையும் இனிய மணவிழா',
      location: 'செய்யாறு, தமிழ்நாடு',
      venueTag: 'திருமண மண்டபம்',
      receptionName: 'வரவேற்பு நன்னாள்',
      receptionTime: 'மாலை 6:00 மணி முதல்',
      muhurthamName: 'சுப முகூர்த்தம்',
      muhurthamTime: 'காலை 6:00 - 7:30 மணி',
      muhurthamTag: 'மாங்கல்ய தாரணம்',
      feastName: 'கல்யாண விருந்து',
      feastTime: 'காலை 8:00 மணி முதல்',
      feastSub: 'தலைவாழை இலை விருந்து',
      getDirections: 'வழித்தடம் அறிய',
      addToCalendar: 'நாட்காட்டியில் சேர்க்க',
      valet: 'வாகன நிறுத்துமிடம் வசதி உண்டு',
      helpdesk: 'தகவல் உதவி',
    },
    hi: {
      eyebrow: 'शुभ विवाह कार्यक्रम',
      title: 'संस्कृति एवं मंगल भाव से परिपूर्ण पावन वैवाहिक अनुष्ठान',
      location: 'चेय्यार, तमिलनाडु',
      venueTag: 'विवाह स्थल',
      receptionName: 'शुभ स्वागत समारोह (रिसेप्शन)',
      receptionTime: 'सायं 6:00 बजे से',
      muhurthamName: 'शुभ लग्न मुहूर्त',
      muhurthamTime: 'प्रातः 6:00 - 7:30 बजे',
      muhurthamTag: 'मंगलसूत्र धारण',
      feastName: 'कल्याण विरुन्दु (महाभोज)',
      feastTime: 'प्रातः 8:00 बजे से',
      feastSub: 'पारंपरिक केले के पत्ते पर भोज',
      getDirections: 'दिशा-निर्देश देखें',
      addToCalendar: 'कैलेंडर में जोड़ें',
      valet: 'पार्किंग सुविधा उपलब्ध',
      helpdesk: 'सहायता',
    },
  }[currentLang];

  return (
    <section id="ceremonies" className="relative py-14 px-4 max-w-4xl mx-auto transition-colors duration-500">
      {/* Concise Section Header */}
      <div className="text-center mb-8 max-w-xl mx-auto">
        <p
          className={`text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase font-bold mb-1.5 ${
            isDark ? 'text-gold-400' : 'text-gold-700'
          }`}
        >
          {headerText.eyebrow}
        </p>
        <h2
          className={`font-serif text-2xl sm:text-4xl font-bold tracking-tight drop-shadow-sm text-transparent bg-clip-text mb-2 ${
            isDark
              ? 'bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
              : 'bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
          }`}
        >
          {headerText.title}
        </h2>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-cinzel font-semibold tracking-wider uppercase border my-2 backdrop-blur-sm transition-colors border-gold-400/40 bg-gold-500/10 text-gold-700 dark:text-gold-300">
          <span>📍 {headerText.location}</span>
        </div>

        <GoldFiligreeDivider className="max-w-xs mx-auto my-3" />
      </div>

      {/* CONCISE EVENT SCHEDULE CARD (Mobile & Web Optimized) */}
      <div
        className={`w-full max-w-xl mx-auto rounded-3xl border p-4 sm:p-7 backdrop-blur-md shadow-xl transition-all duration-300 ${
          isDark
            ? 'border-gold-400/40 bg-gradient-to-b from-[#35070E]/90 via-[#220409]/95 to-[#160205]/98 shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
            : 'border-gold-400/60 bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FBF4E6] shadow-[0_20px_50px_rgba(180,130,40,0.14)]'
        }`}
      >
        {/* DAY 1: 29 NOV (SUNDAY) */}
        <div className="flex items-start gap-4 sm:gap-6 py-2">
          {/* Left Date Block */}
          <div className="flex flex-col items-center justify-center min-w-[70px] sm:min-w-[85px] pt-1 text-center">
            <span
              className={`font-serif text-3xl sm:text-4xl font-bold leading-none ${
                isDark ? 'text-gold-200' : 'text-[#660C1E]'
              }`}
            >
              29
            </span>
            <span
              className={`font-cinzel text-xs font-bold tracking-widest uppercase mt-0.5 ${
                isDark ? 'text-gold-400' : 'text-gold-700'
              }`}
            >
              NOV
            </span>
            <span
              className={`text-[10px] font-cinzel font-semibold tracking-wider uppercase mt-0.5 ${
                isDark ? 'text-ivory-300/70' : 'text-[#7A4B1A]'
              }`}
            >
              {currentLang === 'ta' ? 'ஞாயிறு' : currentLang === 'hi' ? 'रविवार' : 'SUNDAY'}
            </span>
          </div>

          {/* Vertical Divider */}
          <div className={`w-[1px] self-stretch my-1 ${isDark ? 'bg-gold-500/25' : 'bg-gold-400/35'}`} />

          {/* Right Events Column */}
          <div className="flex-1 min-w-0 space-y-2">
            <div
              className={`p-3 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'bg-maroon-950/60 border-gold-400/20 hover:border-gold-400/40'
                  : 'bg-white/90 border-gold-300/50 hover:border-gold-400 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1 rounded-full bg-gold-400/15 text-gold-600 dark:text-gold-300">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <h4
                  className={`font-serif text-base sm:text-lg font-bold truncate ${
                    isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
                  }`}
                >
                  {headerText.receptionName}
                </h4>
              </div>
              <p
                className={`flex items-center gap-1.5 text-xs font-medium pl-6 ${
                  isDark ? 'text-gold-300/90' : 'text-[#7A4B1A]'
                }`}
              >
                <Clock className="w-3 h-3 text-gold-500" />
                <span>{headerText.receptionTime}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className={`my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-gold-400/40 to-transparent`} />

        {/* DAY 2: 30 NOV (MONDAY) */}
        <div className="flex items-start gap-4 sm:gap-6 py-2">
          {/* Left Date Block */}
          <div className="flex flex-col items-center justify-center min-w-[70px] sm:min-w-[85px] pt-1 text-center">
            <span
              className={`font-serif text-3xl sm:text-4xl font-bold leading-none ${
                isDark ? 'text-gold-200' : 'text-[#660C1E]'
              }`}
            >
              30
            </span>
            <span
              className={`font-cinzel text-xs font-bold tracking-widest uppercase mt-0.5 ${
                isDark ? 'text-gold-400' : 'text-gold-700'
              }`}
            >
              NOV
            </span>
            <span
              className={`text-[10px] font-cinzel font-semibold tracking-wider uppercase mt-0.5 ${
                isDark ? 'text-ivory-300/70' : 'text-[#7A4B1A]'
              }`}
            >
              {currentLang === 'ta' ? 'திங்கள்' : currentLang === 'hi' ? 'सोमवार' : 'MONDAY'}
            </span>
          </div>

          {/* Vertical Divider */}
          <div className={`w-[1px] self-stretch my-1 ${isDark ? 'bg-gold-500/25' : 'bg-gold-400/35'}`} />

          {/* Right Events Column */}
          <div className="flex-1 min-w-0 space-y-2.5">
            {/* Muhurtham (Highlight Card) */}
            <div
              className={`p-3 rounded-2xl border transition-all duration-300 relative ${
                isDark
                  ? 'bg-gradient-to-r from-[#4E0E18]/80 to-[#32070E]/90 border-gold-400/60 shadow-md ring-1 ring-gold-400/20'
                  : 'bg-gradient-to-r from-[#FFFBF0] to-[#FDF4DF] border-gold-500/70 shadow-sm ring-1 ring-gold-500/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-full bg-gold-400/20 text-gold-600 dark:text-gold-300">
                    <ThaliMotif className="w-3.5 h-3.5" />
                  </span>
                  <h4
                    className={`font-serif text-base sm:text-lg font-bold truncate ${
                      isDark ? 'text-gold-100' : 'text-[#5C0A19]'
                    }`}
                  >
                    {headerText.muhurthamName}
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-cinzel font-bold tracking-wider uppercase bg-gold-400/20 border border-gold-400/40 text-gold-700 dark:text-gold-300">
                  {headerText.muhurthamTag}
                </span>
              </div>
              <p
                className={`flex items-center gap-1.5 text-xs font-semibold pl-6 ${
                  isDark ? 'text-gold-200' : 'text-[#7A4B1A]'
                }`}
              >
                <Clock className="w-3 h-3 text-gold-500" />
                <span>{headerText.muhurthamTime}</span>
              </p>
            </div>

            {/* Kalyana Virundhu */}
            <div
              className={`p-3 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'bg-maroon-950/60 border-gold-400/20 hover:border-gold-400/40'
                  : 'bg-white/90 border-gold-300/50 hover:border-gold-400 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1 rounded-full bg-gold-400/15 text-gold-600 dark:text-gold-300">
                  <Utensils className="w-3.5 h-3.5" />
                </span>
                <h4
                  className={`font-serif text-base sm:text-lg font-bold truncate ${
                    isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
                  }`}
                >
                  {headerText.feastName}
                </h4>
              </div>
              <p
                className={`flex items-center gap-1.5 text-xs font-medium pl-6 ${
                  isDark ? 'text-gold-300/90' : 'text-[#7A4B1A]'
                }`}
              >
                <Clock className="w-3 h-3 text-gold-500" />
                <span>{headerText.feastTime}</span>
                <span className="opacity-60">• {headerText.feastSub}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTEGRATED WEDDING VENUE CARD (Directly below schedule, no heavy map iframe!) */}
      <div
        id="venue"
        className={`w-full max-w-xl mx-auto mt-5 rounded-3xl border p-5 sm:p-7 backdrop-blur-md shadow-xl text-center transition-all duration-300 ${
          isDark
            ? 'border-gold-400/50 bg-gradient-to-b from-[#35070E]/90 via-[#220409]/95 to-[#160205]/98 shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
            : 'border-gold-500/60 bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FBF4E6] shadow-[0_20px_50px_rgba(180,130,40,0.16)]'
        }`}
      >
        <span
          className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-cinzel font-bold tracking-widest uppercase mb-2 border ${
            isDark
              ? 'text-gold-300 bg-gold-500/10 border-gold-400/30'
              : 'text-[#7A4B1A] bg-[#FDF6E5] border-gold-500/50'
          }`}
        >
          {headerText.venueTag}
        </span>

        <h3
          className={`font-serif text-xl sm:text-2xl font-bold tracking-wide mb-1.5 ${
            isDark ? 'text-ivory-50' : 'text-[#5C0A19]'
          }`}
        >
          {primaryVenue.name[currentLang]}
        </h3>

        <p
          className={`text-xs sm:text-sm font-serif italic max-w-md mx-auto mb-5 ${
            isDark ? 'text-ivory-300/80' : 'text-[#6B4E32]'
          }`}
        >
          {primaryVenue.address[currentLang]}
        </p>

        {/* Action Buttons: Get Directions & Add to Calendar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          {/* Primary: Get Directions directly opens Google Maps */}
          <a
            href={primaryVenue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-maroon-950 font-serif text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.02] active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>{headerText.getDirections}</span>
          </a>

          {/* Secondary: Add to Calendar */}
          <button
            onClick={() => downloadIcsFile(weddingData.events[1], currentLang, coupleNames)}
            className={`w-full sm:flex-1 py-3 px-5 rounded-full border text-xs sm:text-sm font-serif font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.02] active:scale-95 ${
              isDark
                ? 'border-gold-400/50 bg-maroon-950/70 text-gold-200 hover:bg-gold-500/15'
                : 'border-gold-500/70 bg-[#FFFDF8] text-[#660C1E] hover:bg-[#FAF2DF] shadow-xs'
            }`}
          >
            <CalendarPlus className="w-4 h-4 text-gold-600 dark:text-gold-300" />
            <span>{headerText.addToCalendar}</span>
          </button>
        </div>

        {/* Bottom Facility & Helpdesk Line */}
        <div
          className={`flex items-center justify-between text-[11px] pt-4 mt-4 border-t px-2 ${
            isDark ? 'border-gold-500/20 text-gold-300/80' : 'border-gold-400/30 text-gold-800'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5" />
            <span>{headerText.valet}</span>
          </span>
          <a
            href={`tel:${contactNumber}`}
            className="flex items-center gap-1.5 hover:underline font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{headerText.helpdesk}: {contactNumber}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
