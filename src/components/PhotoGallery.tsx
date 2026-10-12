import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SupportedLanguage, GalleryPhoto } from '../types/wedding';
import { weddingData } from '../data/weddingData';
import { useTheme } from '../context/ThemeContext';
import { GoldFiligreeDivider } from './Motifs';

interface PhotoGalleryProps {
  currentLang: SupportedLanguage;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ currentLang }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const t = weddingData.translations[currentLang];
  const { isDark } = useTheme();

  const photos: GalleryPhoto[] = weddingData.gallery;
  const filteredPhotos = filter === 'all' ? photos : photos.filter((p) => p.category === filter);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.classList.add('overflow-hidden');
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
    document.body.classList.remove('overflow-hidden');
  }, []);

  const showNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % filteredPhotos.length : 0));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="relative py-20 px-4 max-w-6xl mx-auto transition-colors duration-500">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p
          className={`text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase mb-1 ${
            isDark ? 'text-gold-400' : 'text-gold-700'
          }`}
        >
          {t.galleryTitle}
        </p>
        <h2
          className={`font-serif text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-md text-transparent bg-clip-text ${
            isDark
              ? 'bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400'
              : 'bg-gradient-to-r from-[#660C1E] via-[#8C162E] to-[#660C1E]'
          }`}
        >
          {t.gallerySubtitle}
        </h2>
        <GoldFiligreeDivider className="max-w-xs mx-auto my-4" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: 'all', label: t.allPhotos },
          { id: 'portrait', label: t.portraitPhotos },
          { id: 'traditional', label: t.traditionalPhotos },
          { id: 'candid', label: t.candidPhotos },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-serif transition-all duration-300 cursor-pointer ${
              filter === tab.id
                ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 font-bold shadow-md'
                : isDark
                ? 'bg-maroon-950/60 text-ivory-200/80 hover:text-gold-200 hover:bg-gold-500/10 border border-gold-500/20'
                : 'bg-[#FFFDF8] text-[#5C232C] hover:text-gold-700 hover:bg-[#FDF6E5] border border-gold-400/50 shadow-sm font-medium'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry / Editorial Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className={`group relative h-80 rounded-2xl overflow-hidden border shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-500 ${
              isDark
                ? 'border-gold-400/40 bg-maroon-950/60'
                : 'border-gold-400/70 bg-[#FFFDF8] shadow-md'
            }`}
          >
            <img
              src={photo.url}
              alt={photo.title[currentLang]}
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 group-hover:brightness-105 transition-all duration-700"
              loading="lazy"
            />
            {/* Dark Gold Vignette overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

            {/* Bottom Caption and Zoom Icon */}
            <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between z-10">
              <div>
                <p className="text-ivory-50 font-serif text-base font-semibold drop-shadow-md">
                  {photo.title[currentLang]}
                </p>
                <p className="text-gold-300 text-xs font-cinzel tracking-wider uppercase drop-shadow-sm">
                  {weddingData.couple.bride.name[currentLang]} & {weddingData.couple.groom.name[currentLang]}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gold-400/30 border border-gold-300/50 flex items-center justify-center text-gold-200 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-maroon-950/80 border border-gold-400 text-gold-200 hover:text-white hover:bg-gold-500/20 transition-all cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-maroon-950/80 border border-gold-400 text-gold-200 hover:text-white hover:bg-gold-500/20 transition-all cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-maroon-950/80 border border-gold-400 text-gold-200 hover:text-white hover:bg-gold-500/20 transition-all cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[selectedPhotoIndex].url}
              alt={filteredPhotos[selectedPhotoIndex].title[currentLang]}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain border border-gold-400/40 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="text-ivory-50 font-serif text-lg sm:text-xl font-bold">
                {filteredPhotos[selectedPhotoIndex].title[currentLang]}
              </h4>
              <p className="text-gold-300 text-xs font-cinzel mt-1">
                {selectedPhotoIndex + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
