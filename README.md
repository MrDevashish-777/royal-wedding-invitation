# 🪔 Royal South Indian Tamil Hindu Wedding Invitation Website
### சுப முகூர்த்த திருமண அழைப்பிதழ் | शाही दक्षिण भारतीय विवाह निमंत्रण

A luxurious, traditional, and interactive digital wedding invitation website crafted specifically for a Royal South Indian Tamil Hindu Wedding. Inspired by Dravidian temple architecture, Kanchipuram gold zari borders, auspicious brass Kuthuvilakku lamps, Poornakumbham motifs, and traditional wedding rituals.

---

## ✨ Signature Features

1. **💌 3D Animated Envelope & Golden Wax Seal Entrance**
   - Full-screen royal invitation card with traditional Vinayagar invocation and flanking Kuthuvilakku lamps.
   - Interactive 3D Golden Wax Seal (`K & A` monogram) with pulsating gold glow.
   - On tap: envelope opens with 3D folding flaps, audio starts automatically, and celebratory golden petals & rose confetti burst forth!
   - Direct entrance option for accessibility and reduced-motion preferences.

2. **🌐 Trilingual Language Switcher (English | தமிழ் | हिन्दी)**
   - Instant language switching across the entire invitation.
   - Authentic Tamil calligraphy & wording: *"ஓம் விநாயகனே போற்றி"*, *"சுப முகூர்த்தம்"*, *"மாங்கல்யதாரணம்"*, *"கெட்டி மேளம்"*.
   - Authentic Sanskrit/Hindi wedding shlokas: *"ॐ श्री गणेशाय नमः"*, *"मांगल्यं तन्तुनानेन मम जीवन हेतुना"*.

3. **✨ Interactive Gold Foil Scratch Card**
   - HTML5 Canvas interactive scratch card.
   - Guests can swipe/drag their finger or cursor to scratch away the shimmering gold foil to reveal the auspicious wedding date.
   - Triggers celebratory confetti bursts upon reveal.
   - Accessible instant-reveal fallback button.

4. **⏳ Live Subha Muhurtham Countdown**
   - Real-time countdown tracking Days, Hours, Minutes, and Seconds until the auspicious Muhurtham.
   - Accurate local timezone calculation (IST +05:30).
   - Graceful celebration state once the Muhurtham commences.

5. **📅 Calendar-Style Ceremony Cards**
   - Styled with metallic calendar rings inspired by royal wedding stationery.
   - Supports all key South Indian Hindu wedding ceremonies:
     - **Nichayathartham** (Betrothal / Engagement)
     - **Nalangu & Sangeet** (Turmeric ritual, music & joy)
     - **Subha Muhurtham** (Mangalyadharanam / Thali tying & Saptapadi)
     - **Kalyana Virundhu & Reception** (Traditional banana leaf feast & evening reception)
   - One-click **"Get Directions"** linking directly to Google Maps navigation.
   - One-click **"Add to Calendar"** downloading `.ics` calendar events.

6. **🎵 Background Wedding Music with Offline Fallback**
   - Traditional Indian wedding instrumental music (Mangala Vadyam / Shehnai / Carnatic Flute).
   - Starts upon opening the invitation to honor browser autoplay policies.
   - Floating audio widget with animated equalizer bars, pause/play, and tooltips.
   - Built-in **Web Audio API Carnatic Tanpura & Flute Drone synthesizer** fallback ensuring 100% reliable sound even if external audio files fail.

7. **📸 Editorial Photo Gallery with Lightbox**
   - Responsive masonry grid with category filters (Portraits, Traditional, Candids).
   - Fullscreen Lightbox supporting Next/Previous navigation, keyboard shortcuts (Escape, Left/Right arrows), and mobile swipe.

8. **💬 One-Click WhatsApp Sharing**
   - Pre-filled auspicious wedding invitation text customized for the selected language.
   - Includes couple's names, Muhurtham time, venue details, and the published website URL.
   - Fallback to native Web Share API and one-click link copying.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom royal color palette (Maroon, Antique Gold, Ivory, Saffron)
- **Icons**: Lucide React + Custom Royal South Indian SVGs (Kuthuvilakku, Kalash, Vinayagar, Thali)
- **Effects**: HTML5 Canvas, Canvas-Confetti, Web Audio API
- **Fonts**: Cinzel, Cormorant Garamond, Playfair Display, Great Vibes, Noto Serif Tamil, Noto Serif Devanagari

---

## ✏️ How to Customize Couple Details

All wedding details are centrally organized in one single file:
👉 **`src/data/weddingData.ts`**

You can easily edit:
- Bride & Groom names, parents' names, photos, and bios
- Auspicious Muhurtham date and time (ISO format)
- Ceremony event names, dates, times, venues, and dress codes
- Primary venue address and Google Maps links
- Photo gallery images
- Love story timeline milestones
- Translations for English, Tamil, and Hindi

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ☁️ Deployment on Vercel

1. Push this repository to your GitHub account.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework preset: **Vite** (auto-detected).
5. Click **"Deploy"**. Your royal wedding invitation is live in seconds!
