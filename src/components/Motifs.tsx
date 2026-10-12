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

/**
 * Majestic South Indian Dravidian Temple Gopuram (ராஜகோபுரம்)
 */
export const SouthIndianTempleGopuram: React.FC<{ className?: string; colorMode?: 'gold' | 'crimson' }> = ({
  className = 'w-48 h-60',
}) => (
  <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 7 Golden Kalasams at the summit */}
    <g fill="#F59E0B" stroke="#D97706" strokeWidth="0.8">
      {/* Central Highest Kalasam */}
      <path d="M100 6 L100 16 M98 12 Q100 8 102 12 Q100 16 98 12 Z" />
      <circle cx="100" cy="18" r="3.5" fill="#FBBF24" />
      <rect x="97.5" y="21" width="5" height="4" rx="1" fill="#D97706" />

      {/* Inner Pair */}
      <path d="M90 9 L90 17 M88.5 13 Q90 10 91.5 13 Q90 16 88.5 13 Z" />
      <circle cx="90" cy="19" r="2.8" fill="#FBBF24" />
      <rect x="88" y="21.5" width="4" height="3.5" rx="1" fill="#D97706" />

      <path d="M110 9 L110 17 M108.5 13 Q110 10 111.5 13 Q110 16 108.5 13 Z" />
      <circle cx="110" cy="19" r="2.8" fill="#FBBF24" />
      <rect x="108" y="21.5" width="4" height="3.5" rx="1" fill="#D97706" />

      {/* Middle Pair */}
      <path d="M80 12 L80 18 M78.5 15 Q80 12 81.5 15 Q80 18 78.5 15 Z" />
      <circle cx="80" cy="20" r="2.5" fill="#FBBF24" />
      <rect x="78.5" y="22" width="3" height="3" rx="1" fill="#D97706" />

      <path d="M120 12 L120 18 M118.5 15 Q120 12 121.5 15 Q120 18 118.5 15 Z" />
      <circle cx="120" cy="20" r="2.5" fill="#FBBF24" />
      <rect x="118.5" y="22" width="3" height="3" rx="1" fill="#D97706" />

      {/* Outer Pair */}
      <circle cx="71" cy="21" r="2.2" fill="#FBBF24" />
      <circle cx="129" cy="21" r="2.2" fill="#FBBF24" />
    </g>

    {/* Barrel-vaulted Shikhara / Sala Roof (Crown Dome) */}
    <path
      d="M66 32 C68 25 78 24 100 24 C122 24 132 25 134 32 L138 38 L62 38 Z"
      fill="currentColor"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    {/* Decorative floral crests at shikhara ends */}
    <circle cx="64" cy="35" r="3.5" fill="#D4AF37" />
    <circle cx="136" cy="35" r="3.5" fill="#D4AF37" />
    <path d="M96 28 Q100 25 104 28" stroke="#FFE57F" strokeWidth="1.5" />

    {/* Tier 5 (Top Tier) */}
    <rect x="68" y="38" width="64" height="6" fill="#B45309" stroke="#D4AF37" strokeWidth="1" />
    <path d="M72 44 L70 66 L130 66 L128 44 Z" fill="currentColor" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Niches and pilasters */}
    <rect x="85" y="47" width="30" height="15" rx="3" fill="#92400E" stroke="#FDE68A" strokeWidth="1" />
    <circle cx="100" cy="54" r="3" fill="#FDE68A" />
    <line x1="78" y1="44" x2="78" y2="66" stroke="#D4AF37" strokeWidth="1" />
    <line x1="122" y1="44" x2="122" y2="66" stroke="#D4AF37" strokeWidth="1" />

    {/* Cornice 4 */}
    <path d="M60 66 L140 66 L136 73 L64 73 Z" fill="#D4AF37" stroke="#B45309" strokeWidth="1" />

    {/* Tier 4 */}
    <path d="M66 73 L62 98 L138 98 L134 73 Z" fill="currentColor" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Pavilion Kudus */}
    <rect x="80" y="76" width="40" height="18" rx="3" fill="#92400E" stroke="#FDE68A" strokeWidth="1" />
    <circle cx="100" cy="85" r="4" fill="#FBBF24" />
    <circle cx="88" cy="85" r="2.5" fill="#FDE68A" />
    <circle cx="112" cy="85" r="2.5" fill="#FDE68A" />
    <line x1="72" y1="73" x2="70" y2="98" stroke="#D4AF37" strokeWidth="1" />
    <line x1="128" y1="73" x2="130" y2="98" stroke="#D4AF37" strokeWidth="1" />

    {/* Cornice 3 */}
    <path d="M52 98 L148 98 L144 106 L56 106 Z" fill="#D4AF37" stroke="#B45309" strokeWidth="1" />

    {/* Tier 3 */}
    <path d="M58 106 L52 134 L148 134 L142 106 Z" fill="currentColor" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Architectural niches */}
    <rect x="74" y="110" width="52" height="20" rx="3" fill="#92400E" stroke="#FDE68A" strokeWidth="1" />
    <circle cx="100" cy="120" r="4.5" fill="#FBBF24" />
    <rect x="82" y="114" width="8" height="12" rx="1.5" fill="#FFE57F" />
    <rect x="110" y="114" width="8" height="12" rx="1.5" fill="#FFE57F" />
    <line x1="66" y1="106" x2="62" y2="134" stroke="#D4AF37" strokeWidth="1" />
    <line x1="134" y1="106" x2="138" y2="134" stroke="#D4AF37" strokeWidth="1" />

    {/* Cornice 2 */}
    <path d="M42 134 L158 134 L154 143 L46 143 Z" fill="#D4AF37" stroke="#B45309" strokeWidth="1" />

    {/* Tier 2 */}
    <path d="M48 143 L42 174 L158 174 L152 143 Z" fill="currentColor" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Niches with carved deities silhouettes */}
    <rect x="68" y="148" width="64" height="22" rx="4" fill="#92400E" stroke="#FDE68A" strokeWidth="1" />
    <circle cx="100" cy="158" r="5" fill="#F59E0B" />
    <path d="M78 152 L86 152 L86 166 L78 166 Z" fill="#FFE57F" />
    <path d="M114 152 L122 152 L122 166 L114 166 Z" fill="#FFE57F" />
    <line x1="56" y1="143" x2="52" y2="174" stroke="#D4AF37" strokeWidth="1" />
    <line x1="144" y1="143" x2="148" y2="174" stroke="#D4AF37" strokeWidth="1" />

    {/* Cornice 1 (Major projecting cornice / Kapota) */}
    <path d="M30 174 L170 174 L164 184 L36 184 Z" fill="#D4AF37" stroke="#B45309" strokeWidth="1" />

    {/* Ground Base Tier / Adhisthana Gateway */}
    <rect x="34" y="184" width="132" height="54" fill="currentColor" stroke="#D4AF37" strokeWidth="1.5" />

    {/* Carved Pilasters on base */}
    <rect x="42" y="184" width="8" height="54" fill="#D4AF37" />
    <rect x="56" y="184" width="6" height="54" fill="#D4AF37" opacity="0.6" />
    <rect x="138" y="184" width="6" height="54" fill="#D4AF37" opacity="0.6" />
    <rect x="150" y="184" width="8" height="54" fill="#D4AF37" />

    {/* Grand Sacred Entrance Archway (Thiruvaasal) */}
    <path
      d="M74 238 L74 204 C74 190 126 190 126 204 L126 238 Z"
      fill="#450A0A"
      stroke="#D4AF37"
      strokeWidth="2"
    />
    {/* Inner Sanctum Golden Lamp Glow */}
    <path
      d="M80 238 L80 208 C80 197 120 197 120 208 L120 238 Z"
      fill="#1C0207"
    />
    {/* Glowing Temple Deepam / Kuthuvilakku inside sanctum */}
    <circle cx="100" cy="216" r="3" fill="#FDE047" />
    <path d="M100 208 Q102 214 100 216 Q98 214 100 208 Z" fill="#F59E0B" />
    <rect x="98.5" y="217" width="3" height="15" fill="#D4AF37" />
    <ellipse cx="100" cy="232" rx="7" ry="2" fill="#D4AF37" />

    {/* Temple Base Steps */}
    <rect x="20" y="234" width="160" height="4" fill="#AA771C" />
    <rect x="10" y="238" width="180" height="2" fill="#D4AF37" />

    {/* Flanking Temple Bells hanging from cornices */}
    <path d="M38 184 L38 194 M36 194 Q38 198 40 194 Z" stroke="#D4AF37" strokeWidth="1.2" />
    <circle cx="38" cy="198" r="1.5" fill="#FBBF24" />
    <path d="M162 184 L162 194 M160 194 Q162 198 164 194 Z" stroke="#D4AF37" strokeWidth="1.2" />
    <circle cx="162" cy="198" r="1.5" fill="#FBBF24" />
  </svg>
);

/**
 * Panoramic South Indian Temple Skyline Silhouette with Gopuram, Vimanams & Sacred Palms
 */
export const SouthIndianTempleSkyline: React.FC<{ className?: string }> = ({
  className = 'w-full h-28',
}) => (
  <svg viewBox="0 0 1000 120" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Base line */}
    <rect x="0" y="112" width="1000" height="8" opacity="0.9" />

    {/* Left side palms and wall */}
    <path d="M20 112 Q24 75 18 45 C35 55 45 40 25 35 C42 35 48 20 22 18 C35 15 28 5 18 10 C16 12 10 35 14 112 Z" opacity="0.5" />
    <path d="M60 112 Q64 85 58 60 C75 70 82 58 65 52 C80 50 85 38 62 36 C72 32 66 22 58 28 C56 30 52 50 55 112 Z" opacity="0.4" />

    {/* Left Outer Gopuram / Mandapam */}
    <path d="M90 112 L90 85 L140 85 L140 112 Z" opacity="0.7" />
    <path d="M96 85 L102 65 L128 65 L134 85 Z" opacity="0.7" />
    <path d="M104 65 L108 50 L122 50 L126 65 Z" opacity="0.75" />
    <polygon points="115,40 112,50 118,50" opacity="0.9" />
    <circle cx="115" cy="38" r="2" opacity="0.95" />

    {/* Temple Wall with Battlement Teeth */}
    <path d="M140 112 L140 92 L220 92 L220 112 Z" opacity="0.6" />
    <path d="M145 88 L155 88 L155 92 L145 92 Z M165 88 L175 88 L175 92 L165 92 Z M185 88 L195 88 L195 92 L185 92 Z M205 88 L215 88 L215 92 L205 92 Z" opacity="0.7" />

    {/* Left Vimanam (Sanctum Tower) */}
    <path d="M240 112 L240 80 L310 80 L310 112 Z" opacity="0.8" />
    <path d="M246 80 L254 60 L296 60 L304 80 Z" opacity="0.8" />
    <path d="M256 60 L264 42 L286 42 L294 60 Z" opacity="0.85" />
    <path d="M266 42 Q275 28 284 42 Z" opacity="0.9" />
    <circle cx="275" cy="24" r="3" opacity="0.95" />

    {/* Connecting Cloister Mandapam */}
    <path d="M310 112 L310 90 L400 90 L400 112 Z" opacity="0.7" />
    <line x1="330" y1="90" x2="330" y2="112" stroke="white" strokeWidth="1" opacity="0.2" />
    <line x1="360" y1="90" x2="360" y2="112" stroke="white" strokeWidth="1" opacity="0.2" />
    <line x1="380" y1="90" x2="380" y2="112" stroke="white" strokeWidth="1" opacity="0.2" />

    {/* CENTRAL RAJAGOPURAM (The Grand South Indian Temple Tower) */}
    <path d="M420 112 L430 82 L440 58 L450 38 L460 22 C470 14 530 14 540 22 L550 38 L560 58 L570 82 L580 112 Z" opacity="0.95" />
    {/* Gopuram Entrance Archway */}
    <path d="M485 112 L485 90 C485 78 515 78 515 90 L515 112 Z" fill="#FFE57F" opacity="0.9" />
    {/* Kalasams atop central Gopuram */}
    <circle cx="500" cy="8" r="3.5" fill="#F59E0B" />
    <circle cx="488" cy="11" r="2.5" fill="#F59E0B" />
    <circle cx="512" cy="11" r="2.5" fill="#F59E0B" />
    <circle cx="478" cy="14" r="2" fill="#F59E0B" />
    <circle cx="522" cy="14" r="2" fill="#F59E0B" />

    {/* Dhwajastambha (Golden Flagstaff) next to Gopuram */}
    <rect x="408" y="40" width="3" height="72" opacity="0.9" />
    <polygon points="405,40 411,40 409.5,30" opacity="0.9" />
    <path d="M411 34 Q422 36 411 40 Z" fill="#F59E0B" opacity="0.8" />

    {/* Right Connecting Mandapam */}
    <path d="M600 112 L600 90 L690 90 L690 112 Z" opacity="0.7" />
    <line x1="620" y1="90" x2="620" y2="112" stroke="white" strokeWidth="1" opacity="0.2" />
    <line x1="650" y1="90" x2="650" y2="112" stroke="white" strokeWidth="1" opacity="0.2" />
    <line x1="670" y1="90" x2="670" y2="112" stroke="white" strokeWidth="1" opacity="0.2" />

    {/* Right Vimanam */}
    <path d="M690 112 L690 80 L760 80 L760 112 Z" opacity="0.8" />
    <path d="M696 80 L704 60 L746 60 L754 80 Z" opacity="0.8" />
    <path d="M706 60 L714 42 L736 42 L744 60 Z" opacity="0.85" />
    <path d="M716 42 Q725 28 734 42 Z" opacity="0.9" />
    <circle cx="725" cy="24" r="3" opacity="0.95" />

    {/* Right Temple Wall with teeth */}
    <path d="M780 112 L780 92 L860 92 L860 112 Z" opacity="0.6" />
    <path d="M785 88 L795 88 L795 92 L785 92 Z M805 88 L815 88 L815 92 L805 92 Z M825 88 L835 88 L835 92 L825 92 Z M845 88 L855 88 L855 92 L845 92 Z" opacity="0.7" />

    {/* Right Outer Tower */}
    <path d="M860 112 L860 85 L910 85 L910 112 Z" opacity="0.7" />
    <path d="M866 85 L872 65 L898 65 L904 85 Z" opacity="0.7" />
    <polygon points="885,45 882,55 888,55" opacity="0.9" />
    <circle cx="885" cy="43" r="2" opacity="0.95" />

    {/* Right Palms */}
    <path d="M940 112 Q944 75 938 45 C955 55 965 40 945 35 C962 35 968 20 942 18 C955 15 948 5 938 10 C936 12 930 35 934 112 Z" opacity="0.5" />
    <path d="M975 112 Q979 85 973 60 C990 70 997 58 980 52 C995 50 1000 38 977 36 C987 32 981 22 973 28 C971 30 967 50 970 112 Z" opacity="0.4" />
  </svg>
);

/**
 * Romantic Cherry Blossom Floral Corner Branch (வசந்த மலர் கிளை)
 */
export const CherryBlossomBranch: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({
  className = 'w-48 h-48',
  position = 'top-left',
}) => {
  const transformClass = {
    'top-left': '',
    'top-right': '-scale-x-100',
    'bottom-left': '-scale-y-100',
    'bottom-right': '-scale-x-100 -scale-y-100',
  }[position];

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${transformClass} pointer-events-none select-none`}
    >
      <defs>
        {/* Soft pink petal gradient */}
        <linearGradient id="sakuraPetalGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="45%" stopColor="#FFB7C5" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
        <linearGradient id="sakuraDeepPetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE4E6" />
          <stop offset="60%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
        <linearGradient id="sakuraWoodGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
      </defs>

      {/* Graceful wooden branch */}
      <path
        d="M0 10 Q60 15 95 50 Q130 85 160 145 Q170 165 190 185"
        stroke="url(#sakuraWoodGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Side twig 1 */}
      <path
        d="M70 30 Q110 20 145 35"
        stroke="url(#sakuraWoodGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Side twig 2 */}
      <path
        d="M110 68 Q150 72 175 95"
        stroke="url(#sakuraWoodGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Side twig 3 */}
      <path
        d="M140 115 Q135 150 120 175"
        stroke="url(#sakuraWoodGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* FLOWER 1 (Center-left main bloom) */}
      <g transform="translate(80, 40)">
        {/* 5 Petals */}
        <path d="M0 0 C-10 -15 10 -15 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(0)" />
        <path d="M0 0 C-10 -15 10 -15 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(72)" />
        <path d="M0 0 C-10 -15 10 -15 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(144)" />
        <path d="M0 0 C-10 -15 10 -15 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(216)" />
        <path d="M0 0 C-10 -15 10 -15 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(288)" />
        {/* Flower Center & Gold Stamen */}
        <circle cx="0" cy="0" r="3.5" fill="#E11D48" />
        <circle cx="0" cy="0" r="1.5" fill="#FDE047" />
        {/* Delicate golden stamens */}
        <line x1="0" y1="0" x2="-3" y2="-5" stroke="#FBBF24" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="4" y2="-4" stroke="#FBBF24" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="5" y2="3" stroke="#FBBF24" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="-4" y2="4" stroke="#FBBF24" strokeWidth="0.8" />
      </g>

      {/* FLOWER 2 (Top right blossom) */}
      <g transform="translate(135, 32)">
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraDeepPetal)" transform="rotate(15)" />
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraDeepPetal)" transform="rotate(87)" />
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraDeepPetal)" transform="rotate(159)" />
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraDeepPetal)" transform="rotate(231)" />
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraDeepPetal)" transform="rotate(303)" />
        <circle cx="0" cy="0" r="2.5" fill="#BE123C" />
        <circle cx="0" cy="0" r="1.2" fill="#FDE047" />
      </g>

      {/* FLOWER 3 (Mid right large bloom) */}
      <g transform="translate(155, 85)">
        <path d="M0 0 C-11 -16 11 -16 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(30)" />
        <path d="M0 0 C-11 -16 11 -16 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(102)" />
        <path d="M0 0 C-11 -16 11 -16 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(174)" />
        <path d="M0 0 C-11 -16 11 -16 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(246)" />
        <path d="M0 0 C-11 -16 11 -16 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(318)" />
        <circle cx="0" cy="0" r="4" fill="#E11D48" />
        <circle cx="0" cy="0" r="2" fill="#FDE047" />
      </g>

      {/* FLOWER 4 (Bottom bloom) */}
      <g transform="translate(130, 150)">
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(45)" />
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(117)" />
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(189)" />
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(261)" />
        <path d="M0 0 C-8 -12 8 -12 0 0" fill="url(#sakuraPetalGrad)" transform="rotate(333)" />
        <circle cx="0" cy="0" r="3" fill="#BE123C" />
        <circle cx="0" cy="0" r="1.5" fill="#FDE047" />
      </g>

      {/* Tiny buds along branches */}
      <circle cx="50" cy="22" r="3" fill="#FB7185" />
      <circle cx="115" cy="55" r="2.8" fill="#F43F5E" />
      <circle cx="175" cy="120" r="3.2" fill="#FB7185" />
      <circle cx="180" cy="160" r="2.5" fill="#F43F5E" />

      {/* Floating gentle loose petals drifting */}
      <path d="M100 95 C95 88 105 85 108 92 C110 98 104 100 100 95 Z" fill="url(#sakuraPetalGrad)" opacity="0.9" />
      <path d="M70 120 C66 115 74 112 77 118 C78 122 73 124 70 120 Z" fill="url(#sakuraPetalGrad)" opacity="0.8" />
      <path d="M150 170 C146 165 154 162 157 168 C158 172 153 174 150 170 Z" fill="url(#sakuraPetalGrad)" opacity="0.85" />
    </svg>
  );
};
