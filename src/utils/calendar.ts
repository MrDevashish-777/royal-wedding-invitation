import { CeremonyEvent, SupportedLanguage } from '../types/wedding';

export function downloadIcsFile(event: CeremonyEvent, lang: SupportedLanguage, coupleNames: string) {
  const title = `${event.name[lang]} - ${coupleNames}`;
  const location = `${event.venueName[lang]}, ${event.venueAddress[lang]}`;
  const description = `${event.description[lang]} Dress Code: ${event.dressCode?.[lang] || 'Traditional'}`;

  const escapeIcs = (str: string) => str.replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Royal Wedding Invitation//South Indian Vivaham//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${event.id}-${Date.now()}@royalwedding.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
    `DTSTART:${event.calendarStart}`,
    `DTEND:${event.calendarEnd}`,
    `SUMMARY:${escapeIcs(title)}`,
    `DESCRIPTION:${escapeIcs(description)}`,
    `LOCATION:${escapeIcs(location)}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${event.id}-wedding-invitation.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(event: CeremonyEvent, lang: SupportedLanguage, coupleNames: string): string {
  const title = encodeURIComponent(`${event.name[lang]} - ${coupleNames}`);
  const details = encodeURIComponent(`${event.description[lang]}\n\nDress Code: ${event.dressCode?.[lang] || 'Traditional'}`);
  const location = encodeURIComponent(`${event.venueName[lang]}, ${event.venueAddress[lang]}`);
  const dates = `${event.calendarStart}/${event.calendarEnd}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
