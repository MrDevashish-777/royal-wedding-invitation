import React from 'react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { GoldFiligreeDivider, CornerOrnament, ThaliMotif } from './Motifs';

interface SacredBondProps {
  currentLang: SupportedLanguage;
}

export const SacredBond: React.FC<SacredBondProps> = ({ currentLang }) => {
  const { isDark } = useTheme();
  const { bride, groom } = weddingData.couple;

  const content = {
    en: {
      eyebrow: '|| PANIGRAHANA ||',
      title: 'Two Hands, One Sacred Promise',
      subtitle:
        'The eternal moment of Panigrahana — taking each other’s hand in sacred trust, stepping together into a lifetime of love, devotion, and companionship.',
      shloka: 'गृभ्णामि ते सौभगत्वाय हस्तम् मया पत्या जरदष्टिर्यथासः |',
      shlokaMeaning:
        '"I take thy hand in mine for boundless blessings and enduring companionship; may we walk life together in harmony and devotion."',
      caption: 'Sacred Hand in Hand (Panigrahana)',
    },
    ta: {
      eyebrow: '|| பாணிகிரகணம் ||',
      title: 'இரு கரங்கள் இணையும் புனித பந்தம்',
      subtitle:
        'அன்போடும் நம்பிக்கையோடும் கரம் பிடித்து, இல்லற வாழ்க்கையை இனிதே தொடங்கும் மங்களகரமான பாணிகிரகணத் திருநாள்.',
      shloka: 'கரம் பிடித்து இணைந்தோம், காலம் முழுவதும் அன்போடு இணைந்திருக்க...',
      shlokaMeaning:
        '"என் வாழ்வின் நல்வழியாக உன் திருக்கரம் பற்றுகிறேன்; இருவரும் இணைந்தே வாழ்வின் வசந்தத்தைக் காண்போம்."',
      caption: 'பாணிகிரகணம் — கை பிடிக்கும் பந்தம்',
    },
    hi: {
      eyebrow: '|| पाणिग्रहण संस्कार ||',
      title: 'दो हाथों का संगम, जन्मों का पावन बंधन',
      subtitle:
        'वैदिक मंत्रोच्चार और अग्नि को साक्षी मानकर एक-दूसरे का हाथ थामने का वह दिव्य क्षण, जहाँ से आरंभ होता है सात जन्मों का साथ।',
      shloka: 'गृभ्णामि ते सौभगत्वाय हस्तम् मया पत्या जरदष्टिर्यथासः |',
      shlokaMeaning:
        '"हे कल्याणी! सौभाग्य और शुभता के लिए मैं तुम्हारा हाथ थामता हूँ; हम जीवनपर्यंत प्रेम और विश्वास के साथ रहें।"',
      caption: 'पाणिग्रहण — जन्मों का पवित्र बंधन',
    },
  }[currentLang];

  return (
    <section id="sacred-bond" className="relative py-20 px-4 max-w-5xl mx-auto transition-colors duration-500">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="flex justify-center mb-2">
          <ThaliMotif
            className={`w-12 h-12 ${
              isDark
                ? 'text-gold-300 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]'
                : 'text-gold-600 drop-shadow-[0_0_10px_rgba(180,130,40,0.3)]'
            }`}
          />
        </div>

        <p
          className={`text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase font-bold mb-1 ${
            isDark ? 'text-gold-400' : 'text-gold-700'
          }`}
        >
          {content.eyebrow}
        </p>
        <h2
          className={`font-serif text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-md text-transparent bg-clip-text mb-3 ${
            isDark
              ? 'bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
              : 'bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
          }`}
        >
          {content.title}
        </h2>
        <p
          className={`text-xs sm:text-sm font-cormorant italic max-w-xl mx-auto leading-relaxed ${
            isDark ? 'text-ivory-200/80' : 'text-[#5C3A40]'
          }`}
        >
          {content.subtitle}
        </p>

        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />
      </div>

      {/* CREATIVE CENTERPIECE: Royal Arched Photo Presentation */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Soft Golden & Rose Ambient Halo in background */}
        <div
          className={`absolute -inset-6 rounded-[3rem] blur-3xl pointer-events-none ${
            isDark
              ? 'bg-gradient-to-b from-gold-500/15 via-rose-500/10 to-transparent'
              : 'bg-gradient-to-b from-amber-400/20 via-pink-300/25 to-transparent'
          }`}
        />

        {/* Outer Palace Arch Frame */}
        <div
          className={`relative z-10 w-full max-w-md sm:max-w-lg rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl p-3 sm:p-4 border-2 transition-all duration-700 transform hover:scale-[1.01] ${
            isDark
              ? 'border-gold-400/60 bg-gradient-to-b from-[#3E0913]/90 via-[#28050D]/95 to-[#160205]/98 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_3px_rgba(255,255,255,0.15)] ring-2 ring-gold-400/20'
              : 'border-gold-500/70 bg-gradient-to-b from-[#FFFFFF]/98 via-[#FFFDF8]/98 to-[#FBF4E6]/98 shadow-[0_25px_60px_rgba(180,130,40,0.2),inset_0_1px_3px_rgba(255,255,255,0.8)] ring-2 ring-gold-500/30'
          }`}
        >
          {/* Corner Ornaments */}
          <CornerOrnament
            position="top-left"
            className={`absolute top-4 left-4 w-9 h-9 ${isDark ? 'text-gold-400/70' : 'text-gold-600/80'}`}
          />
          <CornerOrnament
            position="top-right"
            className={`absolute top-4 right-4 w-9 h-9 ${isDark ? 'text-gold-400/70' : 'text-gold-600/80'}`}
          />
          <CornerOrnament
            position="bottom-left"
            className={`absolute bottom-3 left-3 w-8 h-8 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />
          <CornerOrnament
            position="bottom-right"
            className={`absolute bottom-3 right-3 w-8 h-8 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
          />

          {/* Inner Arch with Image */}
          <div className="relative rounded-t-[130px] sm:rounded-t-[170px] rounded-b-2xl overflow-hidden border border-gold-400/50 shadow-inner group">
            <img
              src="/assets/art/south-indian-panigrahana.jpg"
              alt="Sacred Hand in Hand (Panigrahana) - V. Yogesh Mudaliar (Yash) & Kanagalakshmi Natarajan (Kavya)"
              className="w-full h-[460px] sm:h-[560px] object-cover object-center filter brightness-[1.02] contrast-[1.05] transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Subtle Vignette & Gradient for poetic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-center flex flex-col items-center">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold-300 to-transparent mb-2" />

              <p className="font-serif text-lg sm:text-2xl font-bold text-ivory-50 drop-shadow-md tracking-wide">
                {content.caption}
              </p>

              <p className="font-cinzel text-xs sm:text-sm font-semibold text-gold-300 tracking-widest uppercase mt-1 drop-shadow-sm">
                {groom.name[currentLang]} &amp; {bride.name[currentLang]}
              </p>

              <span className="inline-block mt-3 px-3 py-1 rounded-full text-[10px] sm:text-xs font-cinzel tracking-wider uppercase border border-gold-400/40 bg-black/40 text-ivory-200 backdrop-blur-sm shadow-sm">
                {weddingData.muhurthamTimeFormatted[currentLang]}
              </span>
            </div>
          </div>
        </div>

        {/* Auspicious Vedic Shloka Plaque Below Image */}
        <div
          className={`relative z-10 max-w-xl mx-auto -mt-6 p-5 sm:p-6 rounded-2xl border text-center transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-b from-[#2E050D] to-[#1A0206] border-gold-400/50 shadow-[0_15px_35px_rgba(0,0,0,0.7)]'
              : 'bg-gradient-to-b from-[#FFFDF8] to-[#FAF3E2] border-gold-500/60 shadow-[0_15px_35px_rgba(180,130,40,0.18)]'
          }`}
        >
          <p
            className={`font-serif text-sm sm:text-base font-semibold leading-relaxed tracking-wide ${
              isDark ? 'text-gold-200' : 'text-[#6B1124]'
            }`}
          >
            "{content.shloka}"
          </p>
          <p
            className={`text-xs sm:text-sm font-cormorant italic mt-1.5 ${
              isDark ? 'text-ivory-300/80' : 'text-[#5E3840]'
            }`}
          >
            {content.shlokaMeaning}
          </p>
        </div>
      </div>
    </section>
  );
};
