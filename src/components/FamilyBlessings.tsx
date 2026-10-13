import React, { useState } from 'react';
import { Copy, Check, MessageCircle } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { GoldFiligreeDivider, CornerOrnament, PoornakumbhamKalash } from './Motifs';

interface FamilyBlessingsProps {
  currentLang: SupportedLanguage;
}

export const FamilyBlessings: React.FC<FamilyBlessingsProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const t = weddingData.translations[currentLang];
  const { bride, groom } = weddingData.couple;
  const { isDark } = useTheme();

  const currentUrl = typeof window !== 'undefined' ? window.location.href : weddingData.websiteUrl;

  const getWhatsAppShareUrl = () => {
    const brideName = bride.name[currentLang];
    const groomName = groom.name[currentLang];
    const dateFormatted = weddingData.muhurthamTimeFormatted[currentLang];
    const venue = weddingData.primaryVenue.name[currentLang];

    let message = '';
    if (currentLang === 'ta') {
      message = `🙏 சுப முகூர்த்த திருமண அழைப்பிதழ் 🙏\n\n${groomName} & ${brideName} அவர்களின் திருமண மங்கள விழாவிற்கு தங்களை அன்போடு அழைக்கிறோம்!\n\n📅 நாள்: ${dateFormatted}\n📍 இடம்: ${venue}\n\nஎங்களின் திருமண அழைப்பிதழைக் காண:\n${currentUrl}`;
    } else if (currentLang === 'hi') {
      message = `🙏 शुभ विवाह निमंत्रण 🙏\n\nआप सपरिवार ${groomName} एवं ${brideName} के पावन विवाह उत्सव में सादर आमंत्रित हैं!\n\n📅 तिथि: ${dateFormatted}\n📍 स्थल: ${venue}\n\nहमारा डिजिटल विवाह निमंत्रण पत्र देखें:\n${currentUrl}`;
    } else {
      message = `✨ Royal Wedding Invitation ✨\n\nYou are warmly invited to celebrate the wedding of ${groomName} & ${brideName}!\n\n📅 Date: ${dateFormatted}\n📍 Venue: ${venue}\n\nView our wedding invitation:\n${currentUrl}`;
    }

    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.siteTitle,
          text: `${groom.name[currentLang]} & ${bride.name[currentLang]} Wedding Invitation`,
          url: currentUrl,
        });
      } catch (err) {
        console.log('Share canceled or failed:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section id="blessings" className="relative py-12 sm:py-16 px-4 max-w-4xl mx-auto transition-colors duration-500">
      {/* Central Blessing Card */}
      <div
        className={`relative p-6 sm:p-10 rounded-3xl border backdrop-blur-md text-center transition-all duration-300 ${
          isDark
            ? 'border-gold-400/50 bg-gradient-to-b from-[#35070E]/90 via-[#240409]/95 to-[#160205]/98 shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
            : 'border-gold-400/70 bg-gradient-to-b from-[#FFFFFF]/98 via-[#FFFDF8]/98 to-[#FDF8ED]/98 shadow-[0_20px_50px_rgba(170,120,30,0.12)]'
        }`}
      >
        <CornerOrnament
          position="top-left"
          className={`absolute top-2.5 left-2.5 w-10 h-10 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
        />
        <CornerOrnament
          position="top-right"
          className={`absolute top-2.5 right-2.5 w-10 h-10 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
        />
        <CornerOrnament
          position="bottom-left"
          className={`absolute bottom-2.5 left-2.5 w-10 h-10 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
        />
        <CornerOrnament
          position="bottom-right"
          className={`absolute bottom-2.5 right-2.5 w-10 h-10 ${isDark ? 'text-gold-400/60' : 'text-gold-600/70'}`}
        />

        {/* Sacred Kalash at top */}
        <div className="flex justify-center mb-3">
          <PoornakumbhamKalash
            className={`w-14 h-16 ${
              isDark
                ? 'text-gold-300 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                : 'text-gold-600 drop-shadow-[0_0_12px_rgba(180,130,40,0.3)]'
            }`}
          />
        </div>

        <p
          className={`text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase mb-1 ${
            isDark ? 'text-gold-400' : 'text-gold-700'
          }`}
        >
          {t.familyBlessingsTitle}
        </p>
        <h2
          className={`font-serif text-2xl sm:text-4xl font-bold mb-3 ${
            isDark ? 'text-ivory-50' : 'text-[#4A0E17]'
          }`}
        >
          {t.familyBlessingsSubtitle}
        </h2>

        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />

        {/* Auspicious Shloka */}
        <div
          className={`max-w-xl mx-auto my-4 p-4 rounded-2xl border transition-colors ${
            isDark
              ? 'bg-maroon-950/70 border-gold-500/20'
              : 'bg-[#FAF2DF] border-gold-400/50 shadow-inner'
          }`}
        >
          <p
            className={`font-tamil text-sm sm:text-base leading-relaxed italic ${
              isDark ? 'text-gold-200' : 'text-[#6B1124]'
            }`}
          >
            "{t.sacredShloka}"
          </p>
          <p
            className={`font-serif text-xs mt-2 italic ${
              isDark ? 'text-ivory-300/70' : 'text-[#6B4E32]'
            }`}
          >
            {t.sacredShlokaMeaning}
          </p>
        </div>

        {/* Heartfelt family message */}
        <p
          className={`text-sm sm:text-base font-cormorant leading-relaxed max-w-2xl mx-auto my-6 ${
            isDark ? 'text-ivory-200/90' : 'text-[#472E33]'
          }`}
        >
          {t.familyBlessingText}
        </p>

        {/* Family Names - Groom Family First */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto py-4 border-y my-6 ${
            isDark ? 'border-gold-500/20' : 'border-gold-500/30'
          }`}
        >
          <div className="text-center sm:text-right pr-0 sm:pr-4">
            <p
              className={`text-xs font-cinzel uppercase font-semibold ${
                isDark ? 'text-gold-300' : 'text-gold-800'
              }`}
            >
              {currentLang === 'ta' ? 'மணமகன் குடும்பத்தார்' : currentLang === 'hi' ? 'वर पक्ष' : "Groom's Family"}
            </p>
            <p className={`font-serif text-base font-bold mt-1 ${isDark ? 'text-ivory-100' : 'text-[#4A0E17]'}`}>
              Mr. S. Venkatesh
            </p>
            <p className={`font-serif text-sm ${isDark ? 'text-ivory-300' : 'text-[#6B4E32]'}`}>
              &amp; Mrs. V. Rashmi
            </p>
            <p className={`text-xs font-cinzel tracking-wider mt-0.5 ${isDark ? 'text-gold-400/90' : 'text-gold-700'}`}>
              (Perumpalai)
            </p>
          </div>

          <div
            className={`text-center sm:text-left pl-0 sm:pl-4 border-t sm:border-t-0 sm:border-l pt-4 sm:pt-0 ${
              isDark ? 'border-gold-500/20' : 'border-gold-500/30'
            }`}
          >
            <p
              className={`text-xs font-cinzel uppercase font-semibold ${
                isDark ? 'text-gold-300' : 'text-gold-800'
              }`}
            >
              {currentLang === 'ta' ? 'மணமகள் குடும்பத்தார்' : currentLang === 'hi' ? 'वधु पक्ष' : "Bride's Family"}
            </p>
            <p className={`font-serif text-base font-bold mt-1 ${isDark ? 'text-ivory-100' : 'text-[#4A0E17]'}`}>
              Mr. Natarajan Rathinasabapathy
            </p>
            <p className={`font-serif text-sm ${isDark ? 'text-ivory-300' : 'text-[#6B4E32]'}`}>
              &amp; Mrs. Shanthi Natarajan
            </p>
            <p className={`text-xs font-cinzel tracking-wider mt-0.5 ${isDark ? 'text-gold-400/90' : 'text-gold-700'}`}>
              (Chennai)
            </p>
          </div>
        </div>

        {/* WhatsApp Sharing & Link Copy Buttons */}
        <div className="pt-2">
          <p
            className={`text-xs font-cinzel tracking-widest uppercase mb-4 ${
              isDark ? 'text-gold-300/90' : 'text-gold-800'
            }`}
          >
            {t.shareInvitationTitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* WhatsApp Direct Share Button */}
            <a
              href={getWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.shareWhatsAppBtn}</span>
            </a>

            {/* Native Share or Copy Link */}
            <button
              onClick={handleNativeShare}
              className={`inline-flex items-center space-x-2 py-3 px-5 rounded-full border font-serif text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer ${
                isDark
                  ? 'border-gold-400/70 bg-maroon-900/80 text-gold-200 hover:text-gold-100 hover:bg-gold-500/20'
                  : 'border-gold-500 bg-[#FFFDF8] text-[#5C0617] hover:bg-[#FDF6E5] shadow-sm font-semibold'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.linkCopiedText : t.copyLinkBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
