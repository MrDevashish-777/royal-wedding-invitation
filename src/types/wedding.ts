export type SupportedLanguage = 'en' | 'ta' | 'hi';

export interface CeremonyEvent {
  id: string;
  name: {
    en: string;
    ta: string;
    hi: string;
  };
  subtitle?: {
    en: string;
    ta: string;
    hi: string;
  };
  date: string; // ISO date string or formatted date
  dayName: {
    en: string;
    ta: string;
    hi: string;
  };
  time: {
    en: string;
    ta: string;
    hi: string;
  };
  calendarStart: string; // YYYYMMDDTHHMMSS
  calendarEnd: string;   // YYYYMMDDTHHMMSS
  venueName: {
    en: string;
    ta: string;
    hi: string;
  };
  venueAddress: {
    en: string;
    ta: string;
    hi: string;
  };
  mapUrl: string;
  dressCode?: {
    en: string;
    ta: string;
    hi: string;
  };
  description: {
    en: string;
    ta: string;
    hi: string;
  };
  motif: 'ring' | 'turmeric' | 'thali' | 'feast' | 'fire' | 'music';
}

export interface GalleryPhoto {
  id: string;
  url: string;
  thumbnail?: string;
  title: {
    en: string;
    ta: string;
    hi: string;
  };
  category: 'portrait' | 'traditional' | 'candid' | 'prewedding';
}

export interface StoryMilestone {
  year: string;
  title: {
    en: string;
    ta: string;
    hi: string;
  };
  description: {
    en: string;
    ta: string;
    hi: string;
  };
  iconName: string;
}

export interface WeddingData {
  couple: {
    bride: {
      name: {
        en: string;
        ta: string;
        hi: string;
      };
      fullName: {
        en: string;
        ta: string;
        hi: string;
      };
      title: {
        en: string;
        ta: string;
        hi: string;
      };
      parents: {
        en: string;
        ta: string;
        hi: string;
      };
      photo: string;
      bio: {
        en: string;
        ta: string;
        hi: string;
      };
    };
    groom: {
      name: {
        en: string;
        ta: string;
        hi: string;
      };
      fullName: {
        en: string;
        ta: string;
        hi: string;
      };
      title: {
        en: string;
        ta: string;
        hi: string;
      };
      parents: {
        en: string;
        ta: string;
        hi: string;
      };
      photo: string;
      bio: {
        en: string;
        ta: string;
        hi: string;
      };
    };
  };
  muhurthamDate: string; // ISO string e.g. "2026-11-27T09:15:00+05:30"
  muhurthamTimeFormatted: {
    en: string;
    ta: string;
    hi: string;
  };
  auspiciousTithi: {
    en: string;
    ta: string;
    hi: string;
  };
  primaryVenue: {
    name: {
      en: string;
      ta: string;
      hi: string;
    };
    address: {
      en: string;
      ta: string;
      hi: string;
    };
    city: {
      en: string;
      ta: string;
      hi: string;
    };
    mapUrl: string;
    embedMapUrl?: string;
  };
  websiteUrl: string;
  contactNumber: string;
  events: CeremonyEvent[];
  gallery: GalleryPhoto[];
  story: StoryMilestone[];
  translations: Record<SupportedLanguage, Record<string, string>>;
}
