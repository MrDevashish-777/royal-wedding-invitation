import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: currentLang === 'ta' ? 'முகப்பு' : currentLang === 'hi' ? 'मुखपृष्ठ' : 'Home' },
    { href: '#date', label: currentLang === 'ta' ? 'சுப நாள்' : currentLang === 'hi' ? 'शुभ तिथि' : 'Date' },
    { href: '#ceremonies', label: currentLang === 'ta' ? 'வைபவங்கள்' : currentLang === 'hi' ? 'कार्यक्रम' : 'Ceremonies' },
    { href: '#venue', label: currentLang === 'ta' ? 'மண்டபம்' : currentLang === 'hi' ? 'स्थल' : 'Venue' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#2A040B]/90 backdrop-blur-md border-b border-gold-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-2.5'
            : 'bg-[#FFFDF8]/95 backdrop-blur-md border-b border-gold-400/50 shadow-[0_4px_25px_rgba(180,130,40,0.12)] py-2.5'
          : isDark
          ? 'bg-gradient-to-b from-maroon-950/80 to-transparent py-4'
          : 'bg-gradient-to-b from-[#FFFDF8]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#home"
          className="flex items-center space-x-2 transition-colors group"
        >
          <span
            className={`w-8 h-8 rounded-full border flex items-center justify-center font-serif text-sm font-bold transition-all ${
              isDark
                ? 'border-gold-400/60 bg-maroon-900/80 text-gold-300 group-hover:border-gold-300'
                : 'border-gold-500 bg-[#F5ECD5] text-[#7A4B0A] group-hover:border-gold-600 shadow-sm'
            }`}
          >
            Y&K
          </span>
          <span
            className={`font-serif text-lg tracking-wider hidden sm:inline transition-colors ${
              isDark ? 'text-ivory-100 group-hover:text-gold-200' : 'text-[#4A0E17] group-hover:text-gold-700 font-semibold'
            }`}
          >
            Yogesh &amp; Kavya
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-serif">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`transition-colors tracking-wide hover:underline underline-offset-4 decoration-gold-400/60 cursor-pointer ${
                isDark
                  ? 'text-ivory-200/80 hover:text-gold-300'
                  : 'text-[#4A1E25] hover:text-gold-700 font-medium'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side: Language Switcher, Theme Toggle & Mobile Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />

          <ThemeToggle currentLang={currentLang} showText={false} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full border transition-colors ${
              isDark
                ? 'border-gold-400/40 bg-maroon-950/80 text-gold-300 hover:text-gold-100'
                : 'border-gold-400/60 bg-[#FFFDF8] text-gold-800 hover:text-gold-950 shadow-sm'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b backdrop-blur-lg px-6 py-4 animate-in slide-in-from-top duration-300 ${
            isDark
              ? 'bg-maroon-950/95 border-gold-400/40'
              : 'bg-[#FFFDF8]/98 border-gold-400/50 shadow-xl'
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left font-serif text-base py-1.5 border-b cursor-pointer ${
                  isDark
                    ? 'text-ivory-100/90 hover:text-gold-300 border-gold-500/10'
                    : 'text-[#4A1E25] hover:text-gold-700 border-gold-500/20 font-medium'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 flex items-center justify-between">
              <span className={`text-xs font-serif ${isDark ? 'text-gold-300' : 'text-gold-800'}`}>
                Theme / வடிவம் / थीम:
              </span>
              <ThemeToggle currentLang={currentLang} showText={true} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
