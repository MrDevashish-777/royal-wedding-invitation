import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SupportedLanguage } from '../types/wedding';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { href: '#couple', label: currentLang === 'ta' ? 'மணமக்கள்' : currentLang === 'hi' ? 'वर-वधु' : 'Couple' },
    { href: '#story', label: currentLang === 'ta' ? 'கதை' : currentLang === 'hi' ? 'कहानी' : 'Our Story' },
    { href: '#gallery', label: currentLang === 'ta' ? 'படங்கள்' : currentLang === 'hi' ? 'चित्र दीर्घा' : 'Gallery' },
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
          ? 'bg-[#2A040B]/90 backdrop-blur-md border-b border-gold-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-2.5'
          : 'bg-gradient-to-b from-maroon-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#home"
          className="flex items-center space-x-2 text-gold-300 hover:text-gold-200 transition-colors group"
        >
          <span className="w-8 h-8 rounded-full border border-gold-400/60 bg-maroon-900/80 flex items-center justify-center font-serif text-sm font-bold text-gold-300 group-hover:border-gold-300">
            K&Y
          </span>
          <span className="font-serif text-lg tracking-wider text-ivory-100 hidden sm:inline">
            Kavya & Yogesh
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-serif">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-ivory-200/80 hover:text-gold-300 transition-colors tracking-wide hover:underline underline-offset-4 decoration-gold-400/60"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side: Language Switcher & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-gold-400/40 bg-maroon-950/80 text-gold-300 hover:text-gold-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-maroon-950/95 border-b border-gold-400/40 backdrop-blur-lg px-6 py-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-ivory-100/90 hover:text-gold-300 font-serif text-base py-1.5 border-b border-gold-500/10"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
