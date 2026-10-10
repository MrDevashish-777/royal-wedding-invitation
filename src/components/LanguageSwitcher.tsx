import React from 'react';
import { Languages } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';

interface LanguageSwitcherProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onLanguageChange,
  className = '',
}) => {
  const languages: Array<{ code: SupportedLanguage; label: string; native: string }> = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  ];

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-maroon-950/80 border border-gold-400/40 shadow-lg backdrop-blur-md ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="flex items-center pl-2 pr-1.5 text-gold-400">
        <Languages className="w-3.5 h-3.5 mr-1" />
      </div>

      <div className="flex items-center space-x-1">
        {languages.map((item) => {
          const isActive = currentLang === item.code;
          return (
            <button
              key={item.code}
              onClick={() => onLanguageChange(item.code)}
              className={`px-3 py-1 rounded-full text-xs font-serif transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 font-bold shadow-md transform scale-105'
                  : 'text-ivory-200/80 hover:text-gold-200 hover:bg-gold-500/10'
              }`}
              aria-pressed={isActive}
            >
              {item.native}
            </button>
          );
        })}
      </div>
    </div>
  );
};
