import React from 'react';

/**
 * Traditional South Indian Tamil Hindu Wedding Royal Motifs & SVGs
 */

export const VinayagarMotif: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Auspicious Ganesha / Vinayagar Line Art */}
    <path
      d="M50 15 C42 15 36 22 36 30 C36 38 42 42 46 45 C40 48 30 54 30 68 C30 82 46 88 56 88 C70 88 78 78 78 64 C78 54 70 48 64 45 C70 42 74 36 74 28 C74 18 64 15 50 15 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Trunk curl */}
    <path
      d="M48 45 Q44 62 52 74 Q56 80 62 76 Q66 72 62 66 Q58 60 52 64"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Modak in hand */}
    <circle cx="68" cy="62" r="3" fill="currentColor" />
    {/* Tilak / Namam on forehead */}
    <path d="M48 24 L52 24 M50 20 L50 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="50" cy="32" r="1.5" fill="currentColor" />
    {/* Ears */}
    <path d="M36 28 C28 26 24 35 32 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M68 28 C76 26 80 35 72 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const KuthuvilakkuLamp: React.FC<{ className?: string }> = ({ className = 'w-12 h-28' }) => (
  <svg viewBox="0 0 60 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Traditional South Indian Brass Diya (Kuthuvilakku) */}
    {/* Annam / Bird crest at top */}
    <path d="M30 6 C28 12 32 15 30 20 C28 16 26 12 30 6 Z" fill="currentColor" />
    <circle cx="30" cy="10" r="2" fill="#FFE57F" />
    
    {/* Flame glows */}
    <path d="M22 28 Q30 18 38 28 Q30 34 22 28 Z" fill="#FFA000" />
    <path d="M25 28 Q30 21 35 28 Q30 32 25 28 Z" fill="#FFEE58" />

    {/* Top bowl / Thattu */}
    <ellipse cx="30" cy="36" rx="22" ry="5" fill="currentColor" />
    <ellipse cx="30" cy="34" rx="18" ry="3" fill="#D4AF37" />

    {/* Five wick points */}
    <circle cx="10" cy="35" r="1.5" fill="#FFE57F" />
    <circle cx="20" cy="37" r="1.5" fill="#FFE57F" />
    <circle cx="30" cy="38" r="1.5" fill="#FFE57F" />
    <circle cx="40" cy="37" r="1.5" fill="#FFE57F" />
    <circle cx="50" cy="35" r="1.5" fill="#FFE57F" />

    {/* Upper stem */}
    <path d="M27 40 L33 40 L32 65 L28 65 Z" fill="currentColor" />
    <ellipse cx="30" cy="65" rx="7" ry="2.5" fill="currentColor" />

    {/* Central ornamental bulb / Kumba */}
    <ellipse cx="30" cy="78" rx="10" ry="8" fill="currentColor" />
    <ellipse cx="30" cy="78" rx="8" ry="6" fill="#C5A059" />

    {/* Lower stem */}
    <path d="M27 86 L33 86 L34 112 L26 112 Z" fill="currentColor" />
    <ellipse cx="30" cy="112" rx="11" ry="3" fill="currentColor" />

    {/* Base plate (Aadaikkal) */}
    <path d="M12 130 C12 120 22 118 30 118 C38 118 48 120 48 130 L52 136 L8 136 Z" fill="currentColor" />
    <rect x="6" y="136" width="48" height="4" rx="2" fill="#AA771C" />
  </svg>
);

export const PoornakumbhamKalash: React.FC<{ className?: string }> = ({ className = 'w-16 h-20' }) => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Coconut */}
    <path d="M40 10 C34 22 30 30 40 40 C50 30 46 22 40 10 Z" fill="#8D6E63" stroke="currentColor" strokeWidth="1.5" />
    <path d="M38 10 Q40 5 42 10" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" />

    {/* Mango Leaves (Maavilai) */}
    <path d="M40 38 C28 32 18 22 14 16 C24 24 34 32 40 38 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
    <path d="M40 38 C52 32 62 22 66 16 C56 24 46 32 40 38 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
    <path d="M40 38 C32 26 28 14 30 6 C36 16 38 28 40 38 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="1" />
    <path d="M40 38 C48 26 52 14 50 6 C44 16 42 28 40 38 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="1" />

    {/* Brass Pot (Kumbham) */}
    <ellipse cx="40" cy="42" rx="18" ry="4" fill="currentColor" />
    <path
      d="M26 44 C16 52 14 74 24 84 C32 90 48 90 56 84 C66 74 64 52 54 44 Z"
      fill="currentColor"
      stroke="#FFE57F"
      strokeWidth="1.5"
    />
    {/* Base rim */}
    <ellipse cx="40" cy="88" rx="14" ry="4" fill="#AA771C" />

    {/* Sacred Swastika / Om symbol on Kalash */}
    <circle cx="40" cy="64" r="5" fill="#4A0E17" />
    <circle cx="40" cy="64" r="3" fill="#FFE57F" />
  </svg>
);

export const GoldFiligreeDivider: React.FC<{ className?: string }> = ({ className = 'w-full my-6' }) => (
  <div className={`flex items-center justify-center space-x-3 text-gold-400 opacity-90 ${className}`}>
    <div className="h-[1px] flex-1 max-w-[140px] bg-gradient-to-r from-transparent via-gold-400 to-gold-300" />
    <svg className="w-5 h-5 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
    <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-maroon-900" />
    <svg className="w-5 h-5 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
    <div className="h-[1px] flex-1 max-w-[140px] bg-gradient-to-l from-transparent via-gold-400 to-gold-300" />
  </div>
);

export const CornerOrnament: React.FC<{ className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  className = 'w-16 h-16 text-gold-400',
  position = 'top-left',
}) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} ${rotationClass}`}>
      <path d="M4 76 L4 18 C4 10 10 4 18 4 L76 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 70 L12 24 C12 17 17 12 24 12 L70 12" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
      {/* Inner floral scroll */}
      <path
        d="M20 20 C28 20 34 26 34 34 C34 42 26 46 20 40 C16 36 16 28 24 24 C32 20 44 26 48 38 C52 50 44 62 30 64"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="8" cy="8" r="2.5" fill="currentColor" />
    </svg>
  );
};

export const ThaliMotif: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Sacred Yellow Cord */}
    <path d="M10 20 Q50 45 90 20" stroke="#FFD54F" strokeWidth="4" strokeLinecap="round" />
    <path d="M10 24 Q50 49 90 24" stroke="#FFA000" strokeWidth="2" strokeLinecap="round" />
    {/* Center Sacred Pendant (Thali / Thirumangalyam) */}
    <path
      d="M50 42 C40 42 34 50 34 62 C34 78 50 88 50 88 C50 88 66 78 66 62 C66 50 60 42 50 42 Z"
      fill="currentColor"
      stroke="#FFE57F"
      strokeWidth="2"
    />
    <circle cx="50" cy="60" r="5" fill="#881337" />
    <circle cx="50" cy="60" r="2.5" fill="#FFE57F" />
  </svg>
);
