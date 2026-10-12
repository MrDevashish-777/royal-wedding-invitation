import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SupportedLanguage } from '../types/wedding';

interface ThemeToggleProps {
  currentLang: SupportedLanguage;
  className?: string;
  showText?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  currentLang,
  className = '',
  showText = false,
}) => {
  const { toggleTheme, isDark } = useTheme();

  const labels = {
    en: { light: 'Light', dark: 'Dark' },
    ta: { light: 'பகல்', dark: 'இரவு' },
    hi: { light: 'उजाला', dark: 'रात' },
  };

  const currentLabel = isDark ? labels[currentLang].dark : labels[currentLang].light;

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center space-x-1.5 p-2 rounded-full border transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-md ${
        isDark
          ? 'bg-maroon-950/80 hover:bg-maroon-900 border-gold-400/50 text-gold-300 hover:text-gold-100 shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
          : 'bg-[#FFFDF9]/95 hover:bg-[#FDF6E5] border-gold-500/70 text-gold-800 hover:text-gold-950 shadow-[0_2px_12px_rgba(180,130,40,0.2)]'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-gold-300 transition-transform duration-500 rotate-0" />
        ) : (
          <Moon className="w-4 h-4 text-gold-700 transition-transform duration-500 -rotate-12" />
        )}
      </div>

      {showText && (
        <span
          className={`text-xs font-serif font-semibold pr-1.5 ${
            isDark ? 'text-gold-200' : 'text-maroon-900'
          }`}
        >
          {currentLabel}
        </span>
      )}
    </button>
  );
};
