import { createArrowLink, createElement, createPageHeading } from '../dom.js';

const grafik = [
  {
    dzien: 'Poniedziałek',
    zajecia: [
      ['16:30–17:45', 'Sport 1'],
      ['18:00–19:15', 'Sport 2'],
      ['19:20–20:35', 'Sport 3'],
    ],
  },
  {
    dzien: 'Wtorek',
    zajecia: [
      ['16:15–16:45', 'Mini Judo', '4–5 lat'],
      ['17:00–17:45', 'Mini Judo', '6–7 lat'],
      ['18:00–19:00', 'Fun Judo', '8–10 lat'],
      ['19:15–20:15', 'Sport 2/3', 'Nage-Waza'],
      ['20:20–21:20', 'Trening obwodowy'],
    ],
  },
  {
    dzien: 'Środa',
    zajecia: [
      ['16:30–17:45', 'Sport 1'],
      ['18:00–19:15', 'Sport 2'],
      ['19:20–20:35', 'Sport 3'],
    ],
  },
  {
    dzien: 'Czwartek',
    zajecia: [
      ['16:15–16:45', 'Mini Judo', '4–5 lat'],
      ['17:00–17:45', 'Mini Judo', '6–7 lat'],
      ['18:00–19:00', 'Fun Judo', '8–10 lat'],
      ['19:15–20:15', 'Fitness dla kobiet'],
      ['20:20–21:20', 'Trening obwodowy'],
    ],
  },
  {
    dzien: 'Piątek',
    zajecia: [
      ['16:30–17:45', 'Sport 1'],
      ['18:00–19:15', 'Sport 2'],
      ['19:20–20:35', 'Sport 3'],
    ],
  },
];

function utworzKarteDnia(dzien, index) {
  const karta = createElement('article', 'karta-dnia szklany-panel');
  const naglowek = createElement('h2', `naglowek-dnia`, dzien.dzien);
  karta.appendChild(naglowek);

  const lista = createElement('ul', 'lista-zajec');
  for (const zajecie of dzien.zajecia) {
    const pozycja = createElement('li', 'pozycja-zajec');
    pozycja.appendChild(createElement('time', 'godzina-zajec', zajecie[0]));

    const nazwa = zajecie[2]
      ? `${zajecie[1]} ${zajecie[2]}`
      : zajecie[1];
    pozycja.appendChild(createElement('span', 'nazwa-zajec', nazwa));
    lista.appendChild(pozycja);
  }
  karta.appendChild(lista);
  return karta;
}

export function renderSchedule() {
  const section = createElement('section', 'kontener-strony');
  section.appendChild(createPageHeading('Znajdź swój odpowiedni trening', 'Grafik', 'zajęć.', 'Treningi od poniedziałku do piątku. Wybierz dzień i grupę dla siebie.'));

  const siatka = createElement('div', 'siatka-grafiku');
  for (let index = 0; index < grafik.length; index += 1) {
    siatka.appendChild(utworzKarteDnia(grafik[index], index));
  }

  const actions = createElement('div', 'rzad-przyciskow');
  actions.appendChild(createArrowLink('#contact', 'Zapytaj o trening', 'przycisk-akcji przycisk-zloty'));
  const locationsLink = createElement('a', 'przycisk-akcji przycisk-drugorzedny', 'Zobacz dojo');
  locationsLink.href = '#locations';
  actions.appendChild(locationsLink);

  section.appendChild(siatka);
  section.appendChild(actions);
  return section;
}