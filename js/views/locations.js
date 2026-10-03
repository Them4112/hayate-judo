import { createArrowLink, createElement, createPageHeading } from '../dom.js';

export const lokalizacje = [
  {
    nazwa: 'FIGHT ARENA — PODWISŁOCZE 6',
    adres: 'Podwisłocze 6, Rzeszów',
    godziny: [
      'MMA/Kick Boxing 14–17 lat — pon 17:30–18:30',
      'MMA/Kick Boxing 14–17 lat — śr 17:30–18:30',
      'Mini Judo 4–6 lat — śr 16:30–17:15',
      'Mini Judo 4–6 lat — pt 16:30–17:15',
      'Fun Judo 7–10 lat — śr 17:20–18:20',
      'Fun Judo 7–10 lat — pt 17:20–18:20',
      'Trening obwodowy — pon 19:40–20:40',
      'Trening obwodowy — śr 19:40–20:40',
      'Trening obwodowy — sob 08:30–09:30',
      'Ninja Skrzaty — pon 16:30–17:30',
      'MMA Kids — wt 16:45–17:30',
      'MMA Kids — czw 16:45–17:30',
    ],
    lat: 50.0215,
    lng: 22.0049,
  },
  {
    nazwa: 'HAYATE JUDO — PRZEDSZKOLE NIECHOBRZ',
    adres: 'Niechobrz',
    godziny: ['Judo przedszkole — pt 12:45–13:25'],
    lat: 49.997,
    lng: 21.935,
  },
  {
    nazwa: 'HAYATE JUDO — PRZEDSZKOLE CZUDEC',
    adres: 'Starowiejska 8, Czudec',
    godziny: ['Judo 4–6 lat — pon 15:30–16:10'],
    lat: 49.944393,
    lng: 21.835795,
  },
  {
    nazwa: 'HAYATE JUDO — LUTORYŻ',
    adres: 'Lutoryż 432',
    godziny: [
      'Judo przedszkole — pt 14:20–15:00',
      'Judo szkoła — pt 13:30–14:15',
    ],
    lat: 49.964902,
    lng: 21.919106,
  },
  {
    nazwa: 'HAYATE JUDO — NOSÓWKA',
    adres: 'Nosówka 186',
    godziny: [
      'Judo szkoła — śr 13:20–14:05',
      'Judo przedszkole — śr 14:10–14:50',
    ],
    lat: 49.992,
    lng: 21.894,
  },
  {
    nazwa: 'HAYATE JUDO — RACŁAWÓWKA',
    adres: 'Racławówka 215',
    godziny: ['Judo szkoła — pon 14:15–15:15'],
    lat: 50,
    lng: 21.899,
  },
  {
    nazwa: 'HAYATE JUDO — PRZEDSZKOLE RZESZÓW NR 34',
    adres: 'Rejtana 30, Rzeszów',
    godziny: ['Przedszkole nr 34 — pt 14:00–14:40'],
    lat: 50.025872,
    lng: 22.010223,
  },
  {
    nazwa: 'HAYATE JUDO — PRZEDSZKOLE RZESZÓW NR 38',
    adres: 'Rejtana 28, Rzeszów',
    godziny: ['Przedszkole nr 38 — śr 15:00–16:00'],
    lat: 50.026256,
    lng: 22.01393,
  },
  {
    nazwa: 'HAYATE JUDO — RZESZÓW SP 13 SKRAJNA',
    adres: 'Skrajna 1, Rzeszów',
    godziny: [
      'Fun Judo 7+ — czw 15:30–16:30',
      'Mini Judo 4–6 lat — czw 14:45–15:25',
    ],
    lat: 50.058,
    lng: 22.016,
  },
  {
    nazwa: 'HAYATE JUDO — PRZEDSZKOLE ZGŁOBIEŃ',
    adres: 'Zgłobień 71',
    godziny: ['Judo — pt 12:20–14:00'],
    lat: 50.013552,
    lng: 21.85947,
  },
  {
    nazwa: 'HAYATE JUDO — KLUB NIECHOBRZ',
    adres: 'Niechobrz',
    godziny: [
      'Mini Judo 6–7 lat — wt 17:00–17:45',
      'Mini Judo 6–7 lat — czw 17:00–17:45',
      'Mini Judo 4–5 lat — wt 16:15–16:45',
      'Mini Judo 4–5 lat — czw 16:15–16:45',
      'Fun Judo 8+ — wt 18:00–19:00',
      'Fun Judo 8+ — czw 18:00–19:00',
    ],
    lat: 49.978,
    lng: 21.929,
  },
  {
    nazwa: 'HAYATE JUDO — BOGUCHWAŁA, SP MACZKA',
    adres: 'Teodora Lubomirskiego 2, Boguchwała',
    godziny: ['Mini Judo 4–6 lat — śr 14:40–15:40'],
    lat: 49.9845,
    lng: 21.9415,
  },
  {
    nazwa: 'HAYATE JUDO — BOGUCHWAŁA, PRZEDSZKOLE GAJ',
    adres: 'Przedszkole Gaj, Boguchwała',
    godziny: [
      'Mini Judo 3–4 lat — wt 13:45–14:15',
      'Mini Judo 5–6 lat — wt 13:00–13:40',
    ],
    lat: 49.98497,
    lng: 21.942335,
  },
  {
    nazwa: 'HAYATE JUDO — BOGUCHWAŁA, PRZEDSZKOLE TECHNICZNA',
    adres: 'Techniczna 1, Boguchwała',
    godziny: ['Judo 4–6 lat — pon 14:45–15:20'],
    lat: 49.9882,
    lng: 21.9368,
  },
];

function utworzKarteLokalizacji(lokalizacja, numer) {
  const karta = createElement('article', 'karta-lokalizacji szklany-panel');

  karta.appendChild(createElement('div', 'separator-zloty'));
  karta.appendChild(createElement('h2', '', lokalizacja.nazwa));
  karta.appendChild(createElement('p', 'adres-lokalizacji', lokalizacja.adres));

  const naglowekGodzin = createElement('h3', '', 'Godziny treningów');
  karta.appendChild(naglowekGodzin);

  const listaGodzin = createElement('ul', 'lista-godzin');
  for (const godzina of lokalizacja.godziny) {
    listaGodzin.appendChild(createElement('li', '', godzina));
  }
  karta.appendChild(listaGodzin);
  karta.appendChild(createArrowLink('#schedule', 'Zobacz grafik zajęć'));

  return karta;
}

export function renderLocations() {
  const sekcja = createElement('section', 'kontener-strony');
  sekcja.appendChild(createPageHeading('Znajdź nas', 'Nasze', 'lokalizacje.', 'Odwiedź dojo Hayate Judo i dołącz do treningu.'));

  const uklad = createElement('div', 'widok-lokalizacji');
  const lista = createElement('div', 'lista-lokalizacji');

  for (let index = 0; index < lokalizacje.length; index += 1) {
    lista.appendChild(utworzKarteLokalizacji(lokalizacje[index], index + 1));
  }

  uklad.appendChild(lista);
  sekcja.appendChild(uklad);

  return sekcja;
}
