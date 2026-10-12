import React, { useState } from 'react';
import { SupportedLanguage } from './types/wedding';
import { OpeningEntrance } from './components/OpeningEntrance';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DateScratchCard } from './components/DateScratchCard';
import { CountdownTimer } from './components/CountdownTimer';
import { CeremoniesList } from './components/CeremoniesList';
import { CoupleStory } from './components/CoupleStory';
import { PhotoGallery } from './components/PhotoGallery';
import { VenueSection } from './components/VenueSection';
import { FamilyBlessings } from './components/FamilyBlessings';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();
  // Default language: English ('en') with immediate toggle to Tamil ('ta') or Hindi ('hi')
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('en');
  const [hasOpened, setHasOpened] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen font-serif transition-colors duration-500 ${
        isDark
          ? 'bg-[#2A040B] text-ivory-100 selection:bg-gold-500 selection:text-maroon-950'
          : 'bg-[#FAF6EE] text-[#3D252A] selection:bg-[#8A1528] selection:text-ivory-50'
      }`}
    >
      {/* 1. Animated Full-Screen Opening Entrance */}
      <OpeningEntrance
        currentLang={currentLang}
        onOpened={() => setHasOpened(true)}
      />

      {/* 2. Main Wedding Website (reveals as entrance unfolds) */}
      <div
        className={`transition-opacity duration-1000 ${
          hasOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Fixed Header with Navigation, Theme Toggle & Language Switcher */}
        <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />

        {/* Hero Section */}
        <HeroSection currentLang={currentLang} />

        {/* Save The Date & Live Countdown Section */}
        <section
          id="date"
          className={`relative py-16 px-4 transition-colors duration-500 ${
            isDark
              ? 'bg-gradient-to-b from-[#1F0407] via-[#2A040B] to-[#1F0407]'
              : 'bg-gradient-to-b from-[#F5EFE3] via-[#FAF6EE] to-[#F5EFE3]'
          }`}
        >
          <DateScratchCard currentLang={currentLang} />
          <CountdownTimer currentLang={currentLang} />
        </section>

        {/* Wedding Ceremonies & Events */}
        <CeremoniesList currentLang={currentLang} />

        {/* The Couple & Love Story */}
        <CoupleStory currentLang={currentLang} />

        {/* Photo Gallery & Lightbox */}
        <PhotoGallery currentLang={currentLang} />

        {/* Venue Location & Navigation */}
        <VenueSection currentLang={currentLang} />

        {/* Family Blessings & WhatsApp Sharing */}
        <FamilyBlessings currentLang={currentLang} />

        {/* Royal Closing Footer */}
        <Footer currentLang={currentLang} />

        {/* Floating Background Music Control */}
        <MusicPlayer currentLang={currentLang} />
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
